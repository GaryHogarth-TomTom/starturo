export const ALLOWED_THEME_MODES = <const> ['light', 'dark'];
export type ThemeMode = typeof ALLOWED_THEME_MODES[number];

export const ALLOWED_THEME_MODE_OPTIONS = <const> ['system', ...ALLOWED_THEME_MODES];
export type ThemeModeOption = typeof ALLOWED_THEME_MODE_OPTIONS[number];

export const ALLOWED_THEME_PACKS = <const> ['default', 'nature'];
export type ThemePack = typeof ALLOWED_THEME_PACKS[number];
