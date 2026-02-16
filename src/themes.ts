export interface ThemeColors {
  '--bg': string;
  '--bg2': string;
  '--text': string;
  '--accent': string;
  '--accent2': string;
}

export const themes: Record<string, ThemeColors> = {
  light: {
    '--bg': '#ffffff',
    '--bg2': '#dddddd',
    '--text': '#1a1a1a',
    '--accent': '#ff0000',
    '--accent2': '#6c0e0e'
  },
  dark: {
    '--bg': '#1a1a1a',
    '--bg2': '#2c2c2c',
    '--text': '#ffffff',
    '--accent': '#ffbd64',
    '--accent2': '#3a3a3a'
  },
  forest: {
    '--bg': '#1b2e1b',
    '--bg2': '#2c4530',
    '--text': '#ffffff',
    '--accent': '#8fe13e',
    '--accent2': '#121b09'
  },
  ocean: {
    '--bg': '#0f1e2e',
    '--bg2': '#1c334a',
    '--text': '#e6f1ff',
    '--accent': '#3aa6ff',
    '--accent2': '#0a1621'
  },
  sunset: {
    '--bg': '#2b1e1e',
    '--bg2': '#3a2525',
    '--text': '#ffe9d6',
    '--accent': '#ff784f',
    '--accent2': '#1a1111'
  },
  lavender: {
    '--bg': '#1f1b2e',
    '--bg2': '#2a2440',
    '--text': '#f4f1ff',
    '--accent': '#b38bff',
    '--accent2': '#151225'
  }
};
