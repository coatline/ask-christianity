export interface ThemeColors {
  '--bg': string;
  '--text': string;
  '--accent': string;
  '--accent2': string;
  '--post-preview': string;
}

export const themes: Record<string, ThemeColors> = {
  light: {
    '--bg': '#ffffff',
    '--text': '#1a1a1a',
    '--accent': '#ff0000',
    '--accent2': '#c4c4c4',
    '--post-preview': '#d2d2d2',
  },
  dark: {
    '--bg': '#1a1a1a',
    '--text': '#ffffff',
    '--accent': '#ffbd64',
    '--accent2': '#0c0c0c',
    '--post-preview': '#151515',
  },
  forest: {
    '--bg': '#1b2e1b',
    '--text': '#ffffff',
    '--accent': '#8fe13e',
    '--accent2': '#121b09',
    '--post-preview': '#0d1d0d',
  }
};