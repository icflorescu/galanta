<script lang="ts">
  export let squared: true | 'left' | 'right' | undefined = undefined;
  export let variant: 'primary' | 'outline' | 'success' | 'warning' | 'danger' | undefined =
    undefined;
  export let disabled = false;
  export let href: string | undefined = undefined;
  export let target: string | undefined = undefined;
  export let uppercase = false;
  export let fullWidth = false;
</script>

<svelte:element
  this={href && !disabled ? 'a' : 'button'}
  class="root"
  class:squaredLeft={squared === 'left' || squared === true}
  class:squaredRight={squared === 'right' || squared === true}
  class:primary={variant === 'primary'}
  class:outline={variant === 'outline'}
  class:success={variant === 'success'}
  class:warning={variant === 'warning'}
  class:danger={variant === 'danger'}
  class:uppercase
  class:fullWidth
  {disabled}
  on:click
  {href}
  {target}
>
  <slot name="prefix" />
  <span class="text">
    <slot />
  </span>
  <slot name="suffix" />
</svelte:element>

<style lang="scss">
  .root {
    display: inline-flex;
    gap: var(--gal-spacing);
    align-items: center;
    justify-content: center;
    font-weight: 500;
    text-decoration: none;
    color: var(--gal-color-text);
    background: hsl(
      var(--gal-color-background-h),
      var(--gal-color-background-s),
      calc(var(--gal-color-background-l) + var(--gal-lightness-multiplier) * 10%)
    );
    border: 0;
    border-radius: var(--gal-border-radius);
    padding: 0 calc(var(--gal-spacing) * 2);
    height: calc(var(--gal-spacing) * 4.5);
    cursor: pointer;

    &:hover {
      background: hsl(
        var(--gal-color-background-h),
        var(--gal-color-background-s),
        calc(var(--gal-color-background-l) + var(--gal-lightness-multiplier) * 15%)
      );
    }

    &:active {
      transform: translate3d(0, 1px, 0);
    }
  }

  .text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .squaredLeft {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .squaredRight {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .success {
    background: var(--gal-color-success);
    color: white;
    &:hover {
      background: hsl(
        var(--gal-color-success-h),
        var(--gal-color-success-s),
        calc(var(--gal-color-success-l) - 5%)
      );
    }
  }

  .warning {
    background: var(--gal-color-warning);
    color: white;
    &:hover {
      background: hsl(
        var(--gal-color-warning-h),
        var(--gal-color-warning-s),
        calc(var(--gal-color-warning-l) - 5%)
      );
    }
  }

  .danger {
    background: var(--gal-color-danger);
    color: white;
    &:hover {
      background: hsl(
        var(--gal-color-danger-h),
        var(--gal-color-danger-s),
        calc(var(--gal-color-danger-l) - 5%)
      );
    }
  }

  .primary {
    background: var(--gal-color-primary);
    color: white;
    &:hover {
      background: hsl(
        var(--gal-color-primary-h),
        var(--gal-color-primary-s),
        calc(var(--gal-color-primary-l) - 5%)
      );
    }
  }

  .outline {
    background: transparent;
    color: var(--gal-color-primary);
    border: 1px solid var(--gal-color-primary);
    &:hover {
      background: hsl(
        var(--gal-color-primary-h),
        var(--gal-color-primary-s),
        var(--gal-color-primary-l),
        0.1
      );
    }
  }

  :disabled {
    cursor: not-allowed;
    border: 0;
    color: hsl(var(--gal-color-text-h), var(--gal-color-text-s), var(--gal-color-text-l), 0.3);
    &,
    &:hover {
      background: hsl(
        var(--gal-color-background-h),
        var(--gal-color-background-s),
        calc(var(--gal-color-background-l) + var(--gal-lightness-multiplier) * 5%)
      );
    }
    &:active {
      transform: none;
    }
  }

  .uppercase {
    text-transform: uppercase;
  }

  .fullWidth {
    width: 100%;
  }
</style>
