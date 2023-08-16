export function applyTheme(theme) {
  const root = document.documentElement;
  Object.keys(theme).forEach((cssVar) => {
    root.style.setProperty(cssVar, theme[cssVar]);
  });

  var sample = document.getElementById("mainContainer");
  if (sample) {
    if (theme.desc === "light") {
      sample.className = "custom-img-light";
    } else {
      sample.className = "custom-img-dark";
    }
  }
}

export function createTheme({
  desc,
  primary,
  primaryLight,
  primaryDark,
  secondary,
  secondaryLight,
  secondaryDark,
  tertiary,
  tertiaryLight,
  tertiaryDark,
  textOnPrimary,
  textOnSecondary,
  accentPrimary,
  accentSecondary,
  textBase,
}) {
  return {
    "desc": desc,
    "--theme-primary": primary,
    "--theme-primary-light": primaryLight,
    "--theme-primary-dark": primaryDark,
    "--theme-secondary": secondary,
    "--theme-secondary-light": secondaryLight,
    "--theme-secondary-dark": secondaryDark,
    "--theme-tertiary": tertiary,
    "--theme-tertiary-light": tertiaryLight,
    "--theme-tertiary-dark": tertiaryDark,
    "--theme-text-on-primary": textOnPrimary,
    "--theme-text-on-secondary": textOnSecondary,
    "--theme-accent-primary": accentPrimary,
    "--theme-accent-secondary": accentSecondary,
    "--theme-text-base": textBase,
  };
}
