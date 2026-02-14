export interface ThemeColors {
  '--bg': string;
  '--text': string;
  '--accent': string;
  '--post-preview': string;
}

export const themes: Record<string, ThemeColors> = {
  light: {
    '--bg': '#ffffff',
    '--text': '#1a1a1a',
    '--accent': '#ff6464',
    '--post-preview': '#5e5e5e',
  },
  dark: {
    '--bg': '#1a1a1a',
    '--text': '#f5f5f5',
    '--accent': '#ffbd64',
    '--post-preview': '#979797',
  },
  forest: {
    '--bg': '#1b2e1b',
    '--text': '#dcf0dc',
    '--accent': '#7cfc00',
    '--post-preview': '#293529',
  }
};