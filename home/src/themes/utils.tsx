export function applyTheme(theme) {
  const root = document.documentElement;
  Object.keys(theme).forEach((cssVar) => {
    root.style.setProperty(cssVar, theme[cssVar]);
  });
}

export function createTheme({
  primary,
  primaryLight,
  primaryDark,
  secondary,
  secondaryLight,
  secondaryDark,
  textOnPrimary,
  textOnSecondary,
  accent,
  textBase,
}) {
  return {
    "--theme-primary": primary,
    "--theme-primary-light": primaryLight,
    "--theme-primary-dark": primaryDark,
    "--theme-secondary": secondary,
    "--theme-secondary-light": secondaryLight,
    "--theme-secondary-dark": secondaryDark,
    "--theme-text-on-primary": textOnPrimary,
    "--theme-text-on-secondary": textOnSecondary,
    "--theme-accent": accent,
    "--theme-text-base": textBase,
  };
}