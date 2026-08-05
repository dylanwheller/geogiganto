import { vars } from 'nativewind';

export const lightTheme = vars({
  '--color-background':        '9 26 14',
  '--color-foreground':        '240 249 255',
  '--color-card':              '13 38 20',
  '--color-border':            '20 64 30',
  '--color-primary':           '74 222 128',
  '--color-primary-foreground':'255 255 255',
  '--color-muted':             '11 28 15',
  '--color-muted-foreground':  '148 163 184',
  '--color-destructive':       '239 68 68',
  '--color-destructive-foreground': '255 255 255',
});

// GeoGiganto is dark-only; darkTheme = same values
export const darkTheme = lightTheme;
