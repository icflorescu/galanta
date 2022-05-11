<script lang="ts">
  export let label: string | undefined = undefined;
  export let placeholder: string | undefined = undefined;
  export let squared: true | 'left' | 'right' | undefined = undefined;
  export let rounded = false;
  export let required = false;
  export let disabled = false;
</script>

<label>
  {#if label}
    <span class="labelText" class:rounded>
      {label}
      {#if required}<span class="requiredMark" aria-hidden="true">*</span>{/if}
    </span>{/if}
  <input
    class:rounded
    class:squaredLeft={squared === 'left' || squared === true}
    class:squaredRight={squared === 'right' || squared === true}
    type="text"
    {placeholder}
    {required}
    {disabled}
  />
</label>

<style lang="scss">
  label {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .labelText {
    color: hsla(var(--gal-color-text-h), var(--gal-color-text-s), var(--gal-color-text-l), 0.85);
    font-weight: 500;
    font-size: 87.5%;
    margin: 0 0 calc(var(--gal-spacing) * 0.25) calc(var(--gal-spacing) * 0.5);
    &.rounded {
      margin-left: calc(var(--gal-spacing) * 2);
    }
  }

  .requiredMark {
    color: var(--gal-color-danger);
  }

  input {
    color: var(--gal-color-text);
    background: transparent;
    padding: 0 calc(var(--gal-spacing) * 1.5);
    height: calc(var(--gal-spacing) * 4.5);
    border-radius: var(--gal-border-radius);
    border: 1px solid
      hsla(var(--gal-color-text-h), var(--gal-color-text-s), var(--gal-color-text-l), 0.3);

    &:focus-visible {
      outline-color: var(--gal-color-primary);
    }

    &::placeholder {
      color: hsla(var(--gal-color-text-h), var(--gal-color-text-s), var(--gal-color-text-l), 0.3);
    }

    &.rounded {
      padding: 0 calc(var(--gal-spacing) * 2);
      border-radius: calc(var(--gal-spacing) * 2.5);
    }

    &:disabled {
      cursor: not-allowed;
      border-color: hsla(
        var(--gal-color-text-h),
        var(--gal-color-text-s),
        var(--gal-color-text-l),
        0.15
      );
      background: hsla(
        var(--gal-color-text-h),
        var(--gal-color-text-s),
        var(--gal-color-text-l),
        0.05
      );
    }
  }

  .squaredLeft {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .squaredRight {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
</style>
