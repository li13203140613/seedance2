import type { ManualData } from './manual-data';

export async function getManualData(locale: string): Promise<ManualData> {
  switch (locale) {
    case 'zh':
      return (await import('./manual-data')).manualData;
    case 'ja':
      return (await import('./manual-data-ja')).manualData;
    case 'es':
      return (await import('./manual-data-es')).manualData;
    case 'ru':
      return (await import('./manual-data-ru')).manualData;
    case 'pt':
      return (await import('./manual-data-pt')).manualData;
    case 'ko':
      return (await import('./manual-data-ko')).manualData;
    case 'de':
      return (await import('./manual-data-de')).manualData;
    case 'fr':
      return (await import('./manual-data-fr')).manualData;
    case 'tr':
      return (await import('./manual-data-tr')).manualData;
    case 'id':
      return (await import('./manual-data-id')).manualData;
    default:
      return (await import('./manual-data-en')).manualData;
  }
}
