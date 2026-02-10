/**
 * Create Seedance 2.0 User Manual blog post (MDX files + Database)
 *
 * Usage:
 *   pnpm tsx scripts/with-env.ts node scripts/add-seedance-manual-post.mjs
 *
 * Prerequisites:
 *   - Run upload-manual-r2.mjs first to upload assets and generate URL mapping
 *   - Or run with --skip-images to create posts with local image references
 *
 * This script:
 *   1. Reads the translated EN/ZH markdown files
 *   2. Replaces local image/video references with R2 CDN URLs (if mapping exists)
 *   3. Creates MDX files in content/posts/
 *   4. Inserts the English version into the database
 */

import postgres from 'postgres';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import path from 'path';
import { randomUUID } from 'crypto';

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  console.error('DATABASE_URL environment variable is required');
  process.exit(1);
}

const SLUG = 'seedance-2-user-manual';
const EN_SOURCE = path.resolve('..', 'seedance-2-manual-en.md');
const ZH_SOURCE = path.resolve('..', 'seedance-2-manual-zh.md');
const MAPPING_FILE = path.resolve('scripts/manual-url-mapping.json');
const MDX_EN_OUTPUT = path.resolve('content/posts/seedance-2-user-manual.mdx');
const MDX_ZH_OUTPUT = path.resolve('content/posts/seedance-2-user-manual.zh.mdx');

const SKIP_IMAGES = process.argv.includes('--skip-images');

// --- Frontmatter ---

const EN_FRONTMATTER = `---
title: "Seedance 2.0 User Manual: The Complete Multimodal Video Creation Guide"
description: "Official Seedance 2.0 user manual covering multimodal input (image, video, audio, text), @ reference system, camera movement replication, creative templates, video extension, beat-synced editing, and 50+ real-world examples."
created_at: 2026-02-09
author_name: Admin
author_image: /logo.png
image: /imgs/features/admin.png
---

`;

const ZH_FRONTMATTER = `---
title: "即梦 Seedance 2.0 使用手册：全新多模态创作完全指南"
description: "即梦 Seedance 2.0 官方使用手册，涵盖多模态输入（图片、视频、音频、文本）、@参考系统、运镜复刻、创意模版、视频延长、音乐卡点等功能，包含50+真实案例。"
created_at: 2026-02-09
author_name: Admin
author_image: /logo.png
image: /imgs/features/admin.png
---

`;

function replaceImageUrls(content, urlMapping) {
  if (!urlMapping || Object.keys(urlMapping).length === 0) {
    return content;
  }

  // Build a name-based lookup (without extension) for fallback matching
  const nameMap = {};
  for (const [key, url] of Object.entries(urlMapping)) {
    const name = key.replace(/^\.\//, '').replace(/\.\w+$/, '');
    if (!nameMap[name]) nameMap[name] = url;
  }

  let result = content;

  // Replace markdown image/video references: ![alt](./image_001.jpg) -> ![alt](CDN_URL)
  result = result.replace(/\(\.\/([^)]+)\)/g, (match, filename) => {
    const key = `./${filename}`;
    // 1. Exact match
    if (urlMapping[key]) {
      return `(${urlMapping[key]})`;
    }
    // 2. Fallback: match by name without extension (handles .jpg -> .png mismatch)
    const name = filename.replace(/\.\w+$/, '');
    if (nameMap[name]) {
      return `(${nameMap[name]})`;
    }
    return match;
  });

  return result;
}

function mdToMdx(content) {
  // Convert HTML video tags to MDX-compatible format
  // Convert markdown video links [▶ Video: file.mp4](./file.mp4) to <video> tags
  let result = content;

  result = result.replace(
    /\[▶[^\]]*\]\(([^)]+\.mp4)\)/g,
    (match, src) => {
      return `<video src="${src}" controls width="100%" style={{borderRadius: '12px', marginTop: '0.5rem', marginBottom: '0.5rem'}} />`;
    }
  );

  return result;
}

async function main() {
  // 1. Read source markdown files
  if (!existsSync(EN_SOURCE)) {
    console.error(`English source not found: ${EN_SOURCE}`);
    process.exit(1);
  }
  if (!existsSync(ZH_SOURCE)) {
    console.error(`Chinese source not found: ${ZH_SOURCE}`);
    process.exit(1);
  }

  let enContent = readFileSync(EN_SOURCE, 'utf-8');
  let zhContent = readFileSync(ZH_SOURCE, 'utf-8');

  // 2. Load URL mapping (if available)
  let urlMapping = {};
  if (!SKIP_IMAGES && existsSync(MAPPING_FILE)) {
    urlMapping = JSON.parse(readFileSync(MAPPING_FILE, 'utf-8'));
    console.log(`Loaded URL mapping with ${Object.keys(urlMapping).length} entries`);
  } else if (!SKIP_IMAGES) {
    console.warn('⚠️  URL mapping not found. Run upload-manual-r2.mjs first, or use --skip-images');
    console.warn('   Proceeding with local image references...\n');
  }

  // 3. Replace image/video URLs
  enContent = replaceImageUrls(enContent, urlMapping);
  zhContent = replaceImageUrls(zhContent, urlMapping);

  // 4. Convert to MDX format
  enContent = mdToMdx(enContent);
  zhContent = mdToMdx(zhContent);

  // 5. Strip the first H1 title line (it's in frontmatter now)
  enContent = enContent.replace(/^# 🎬.*\n+/, '');
  zhContent = zhContent.replace(/^请在即梦官方网站.*\n+/, '');
  zhContent = zhContent.replace(/^# 🎬.*\n+/, '');

  // 6. Write MDX files
  writeFileSync(MDX_EN_OUTPUT, EN_FRONTMATTER + enContent, 'utf-8');
  console.log(`✅ English MDX written: ${MDX_EN_OUTPUT}`);

  writeFileSync(MDX_ZH_OUTPUT, ZH_FRONTMATTER + zhContent, 'utf-8');
  console.log(`✅ Chinese MDX written: ${MDX_ZH_OUTPUT}`);

  // 7. Insert/update in database
  console.log('\nInserting into database...');

  const sql = postgres(DATABASE_URL, { ssl: 'require' });

  // Check if post already exists
  const existing = await sql`SELECT id FROM post WHERE slug = ${SLUG} LIMIT 1`;

  // Prepare DB content (use HTML style for <video> tags instead of JSX)
  const dbContent = enContent
    .replace(/style=\{\{([^}]+)\}\}/g, (match, styles) => {
      // Convert JSX style to HTML style
      const htmlStyle = styles
        .replace(/(\w+):\s*'([^']+)'/g, '$1: $2')
        .replace(/,\s*/g, '; ');
      return `style="${htmlStyle}"`;
    })
    .replace(/ \/>/g, '></video>');

  if (existing.length > 0) {
    console.log(`Post "${SLUG}" exists (id: ${existing[0].id}). Updating...`);
    await sql`
      UPDATE post SET
        title = ${"Seedance 2.0 User Manual: The Complete Multimodal Video Creation Guide"},
        description = ${"Official Seedance 2.0 user manual covering multimodal input, @ reference system, camera movement replication, creative templates, video extension, beat-synced editing, and 50+ real-world examples."},
        content = ${dbContent},
        image = ${'/imgs/features/admin.png'},
        status = ${'published'},
        updated_at = NOW()
      WHERE slug = ${SLUG}
    `;
    console.log('✅ Database post updated');
  } else {
    // Get first user
    const users = await sql`SELECT id FROM "user" LIMIT 1`;
    if (users.length === 0) {
      console.error('No users in database. Create a user first.');
      await sql.end();
      process.exit(1);
    }

    const userId = users[0].id;
    const postId = randomUUID();

    await sql`
      INSERT INTO post (id, user_id, parent_id, slug, type, title, description, image, content, categories, tags, author_name, author_image, status, sort, created_at, updated_at)
      VALUES (
        ${postId},
        ${userId},
        ${''},
        ${SLUG},
        ${'article'},
        ${"Seedance 2.0 User Manual: The Complete Multimodal Video Creation Guide"},
        ${"Official Seedance 2.0 user manual covering multimodal input, @ reference system, camera movement replication, creative templates, video extension, beat-synced editing, and 50+ real-world examples."},
        ${'/imgs/features/admin.png'},
        ${dbContent},
        ${''},
        ${'seedance,ai-video,user-manual,multimodal,tutorial'},
        ${'Admin'},
        ${'/logo.png'},
        ${'published'},
        ${0},
        NOW(),
        NOW()
      )
    `;
    console.log(`✅ Database post created (id: ${postId})`);
  }

  console.log(`\n🎉 Done! Post available at: /blog/${SLUG}`);

  await sql.end();
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
