/**
 * Credits system constants
 *
 * Internal value = display value (1:1 mapping).
 *
 * Example: 480p no-audio 5s = 5 credits.
 *          Basic monthly = 100 credits.
 */

export const CREDITS_DISPLAY_DIVISOR = 1;

/**
 * Video generation credit costs (internal ×10 values)
 *
 * Structure: CREDIT_MAP[quality][duration][audioKey]
 * audioKey: 'audio' | 'noAudio'
 *
 * Derived from API cost × 10 markup, rounded:
 *   480p noAudio 5s: cost $0.058 → price $0.58 → 5 credits
 *   1080p audio 12s: cost $1.36  → price $13.6 → 140 credits
 */
export const VIDEO_CREDIT_MAP: Record<
  string,
  Record<number, { audio: number; noAudio: number }>
> = {
  '480p': {
    5: { audio: 10, noAudio: 5 },
    12: { audio: 30, noAudio: 15 },
  },
  '720p': {
    5: { audio: 25, noAudio: 15 },
    12: { audio: 60, noAudio: 30 },
  },
  '1080p': {
    5: { audio: 55, noAudio: 30 },
    12: { audio: 140, noAudio: 70 },
  },
};

/** Default fallback cost if quality/duration combo not found */
export const VIDEO_CREDIT_DEFAULT = 30;

/**
 * Get video generation credit cost (internal ×10 value)
 */
export function getVideoCreditCost(
  quality: string,
  duration: number,
  generateAudio: boolean
): number {
  const durationMap = VIDEO_CREDIT_MAP[quality];
  if (!durationMap) return VIDEO_CREDIT_DEFAULT;

  const costPair = durationMap[duration];
  if (!costPair) return VIDEO_CREDIT_DEFAULT;

  return generateAudio ? costPair.audio : costPair.noAudio;
}

/**
 * Format credit value for display
 * 5 → "5", 10 → "10", 140 → "140"
 */
export function displayCredits(internalCredits: number): string {
  const value = internalCredits / CREDITS_DISPLAY_DIVISOR;
  return value % 1 === 0 ? value.toFixed(0) : value.toFixed(1);
}
