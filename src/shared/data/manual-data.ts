export interface ManualCase {
  prompt: string;
  duration?: string;
  label?: string;
  inputImages?: string[];
  inputVideos?: string[];
  resultScreenshots?: string[];
  resultVideos?: string[];
}

export interface ManualSection {
  id: string;
  title: string;
  level: number;
  description?: string;
  images?: string[];
  cases?: ManualCase[];
  subsections?: ManualSection[];
}

export interface ManualData {
  hero: {
    title: string;
    intro: string[];
    highlights: string[];
  };
  params: { key: string; value: string }[];
  paramsNote: string;
  interaction: {
    notes: string[];
    steps: {
      title: string;
      description?: string;
      images: string[];
      captions?: string[];
    }[];
    previewNote: string;
    previewImages: string[];
  };
  transitionText: string;
  sections: ManualSection[];
  footer: {
    title: string;
    content: string[];
  };
}

export const manualData: ManualData = {
  hero: {
    title: 'Seedance 2.0',
    intro: [],
    highlights: [],
  },
  params: [],
  paramsNote: '',
  interaction: {
    notes: [],
    steps: [],
    previewNote: '',
    previewImages: [],
  },
  transitionText: '',
  sections: [],
  footer: {
    title: '',
    content: [],
  },
};
