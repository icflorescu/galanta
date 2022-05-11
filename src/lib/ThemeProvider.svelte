<script lang="ts">
  import Color from 'color';

  export let themes: {
    name: string;
    color?: {
      background?: string;
      text?: string;
      primary?: string;
      success?: string;
      warning?: string;
      danger?: string;
    };
    fontSize?: number;
    fontFamily?: {
      default?: string;
      monospace?: string;
    };
    spacing?: number;
    borderRadius?: number;
  }[] = [{ name: 'default' }];
  export let currentThemeName = themes[0].name;

  $: currentTheme = themes.find((theme) => theme.name === currentThemeName) || themes[0];

  $: colorBackground = Color(currentTheme.color?.background || '#fff');
  $: colorBackgroundHsl = colorBackground.hsl().object();
  $: colorText = Color(currentTheme.color?.text || '#343a40');
  $: colorTextHsl = colorText.hsl().object();
  $: colorPrimary = Color(currentTheme.color?.primary || '#228be6');
  $: colorPrimaryHsl = colorPrimary.hsl().object();
  $: colorSuccess = Color(currentTheme.color?.success || '#40c057');
  $: colorSuccessHsl = colorSuccess.hsl().object();
  $: colorWarning = Color(currentTheme.color?.warning || '#fab005');
  $: colorWarningHsl = colorWarning.hsl().object();
  $: colorDanger = Color(currentTheme.color?.danger || '#fa5252');
  $: colorDangerHsl = colorDanger.hsl().object();

  $: variables = {
    'lightness-multiplier': colorBackground.isDark() ? 1 : -1,
    'color-background': colorBackground.hex(),
    'color-background-h': Math.round(colorBackgroundHsl.h),
    'color-background-s': `${Math.round(colorBackgroundHsl.s)}%`,
    'color-background-l': `${Math.round(colorBackgroundHsl.l)}%`,
    'color-text': colorText.hex(),
    'color-text-h': Math.round(colorTextHsl.h),
    'color-text-s': `${Math.round(colorTextHsl.s)}%`,
    'color-text-l': `${Math.round(colorTextHsl.l)}%`,
    'color-primary': colorPrimary.hex(),
    'color-primary-h': Math.round(colorPrimaryHsl.h),
    'color-primary-s': `${Math.round(colorPrimaryHsl.s)}%`,
    'color-primary-l': `${Math.round(colorPrimaryHsl.l)}%`,
    'color-success': colorSuccess.hex(),
    'color-success-h': Math.round(colorSuccessHsl.h),
    'color-success-s': `${Math.round(colorSuccessHsl.s)}%`,
    'color-success-l': `${Math.round(colorSuccessHsl.l)}%`,
    'color-warning': colorWarning.hex(),
    'color-warning-h': Math.round(colorWarningHsl.h),
    'color-warning-s': `${Math.round(colorWarningHsl.s)}%`,
    'color-warning-l': `${Math.round(colorWarningHsl.l)}%`,
    'color-danger': colorDanger.hex(),
    'color-danger-h': Math.round(colorDangerHsl.h),
    'color-danger-s': `${Math.round(colorDangerHsl.s)}%`,
    'color-danger-l': `${Math.round(colorDangerHsl.l)}%`,
    'spacing': `${currentTheme.spacing || 8}px`,
    'border-radius': `${currentTheme.borderRadius || 4}px`,
    'font-size': `${currentTheme.fontSize || 16}px`,
    'font-family-default':
      currentTheme.fontFamily?.default ||
      "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
    'font-family-monospace':
      currentTheme.fontFamily?.monospace ||
      "ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace"
  };

  $: style = Object.entries(variables)
    .map(([key, value]) => `--gal-${key}:${value}`)
    .join(';');
</script>

<div {style}>
  <slot />
</div>
