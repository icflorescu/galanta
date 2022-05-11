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
  export let currentTheme = themes[0].name;
  export let fullHeight = false;

  $: theme = themes.find((theme) => theme.name === currentTheme) || themes[0];

  $: colorBackground = Color(theme.color?.background || '#fff');
  $: colorBackgroundHsl = colorBackground.hsl().object();
  $: colorText = Color(theme.color?.text || '#343a40');
  $: colorTextHsl = colorText.hsl().object();
  $: colorPrimary = Color(theme.color?.primary || '#228be6');
  $: colorPrimaryHsl = colorPrimary.hsl().object();
  $: colorSuccess = Color(theme.color?.success || '#40c057');
  $: colorSuccessHsl = colorSuccess.hsl().object();
  $: colorWarning = Color(theme.color?.warning || '#fab005');
  $: colorWarningHsl = colorWarning.hsl().object();
  $: colorDanger = Color(theme.color?.danger || '#fa5252');
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
    'spacing': `${theme.spacing || 8}px`,
    'border-radius': `${theme.borderRadius || 4}px`,
    'font-size': `${theme.fontSize || 16}px`,
    'font-family-default':
      theme.fontFamily?.default ||
      "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
    'font-family-monospace':
      theme.fontFamily?.monospace ||
      "ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace"
  };

  $: style = Object.entries(variables)
    .map(([key, value]) => `--gal-${key}:${value}`)
    .join(';');
</script>

<div {style} class:fullHeight>
  <slot />
</div>

<style lang="scss">
  div {
    font-family: var(--gal-font-family-default);
    font-size: var(--gal-font-size);
    color: var(--gal-color-text);
    background: var(--gal-color-background);

    :global(a) {
      color: var(--gal-color-primary);
    }
  }

  .fullHeight {
    min-height: 100vh;
    overflow: auto;
  }
</style>
