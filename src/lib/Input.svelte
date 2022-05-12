<script lang="ts">
  export let label: string | undefined = undefined;
  export let placeholder: string | undefined = undefined;
  export let autocapitalize: 'off' | 'sentences' | 'words' = 'off';
  export let autocomplete:
    | 'nope'
    | 'on'
    | 'name'
    | 'honorific-prefix'
    | 'given-name'
    | 'additional-name'
    | 'family-name'
    | 'honorific-suffix'
    | 'nickname'
    | 'email'
    | 'username'
    | 'new-password'
    | 'current-password'
    | 'one-time-code'
    | 'organization-title'
    | 'organization'
    | 'street-address'
    | 'address-line1'
    | 'address-line2'
    | 'address-line3'
    | 'address-level1'
    | 'address-level2'
    | 'address-level3'
    | 'address-level4'
    | 'country'
    | 'country-name'
    | 'postal-code'
    | 'cc-name'
    | 'cc-given-name'
    | 'cc-additional-name'
    | 'cc-family-name'
    | 'cc-number'
    | 'cc-exp'
    | 'cc-exp-month'
    | 'cc-exp-year'
    | 'cc-csc'
    | 'cc-type'
    | 'transaction-currency'
    | 'transaction-amount'
    | 'language'
    | 'bday'
    | 'bday-day'
    | 'bday-month'
    | 'bday-year'
    | 'sex'
    | 'tel'
    | 'tel-country-code'
    | 'tel-national'
    | 'tel-area-code'
    | 'tel-local'
    | 'tel-extension'
    | 'impp'
    | 'url'
    | 'photo' = 'nope';
  export let autocorrect = false;
  export let spellcheck = false;
  export let title: string | undefined = undefined;
  export let warning: string | undefined = undefined;
  export let error: string | undefined = undefined;
  export let squared: true | 'left' | 'right' | undefined = undefined;
  export let rounded = false;
  export let required = false;
  export let disabled = false;
  export let mt: number | 'label-height' | undefined = undefined;
  export let mb: number | undefined = undefined;
  export let ml: number | undefined = undefined;
  export let mr: number | undefined = undefined;
  export let prefixWidth = 36;
  export let suffixWidth = 36;
  export let type: 'text' | 'email' | 'tel' = 'text';
  export let value = '';

  $: props = {
    'class': 'input',
    'class:warning': !!warning,
    'class:danger': !!error,
    placeholder,
    autocapitalize,
    autocomplete,
    'autocorrect': autocorrect ? 'on' : undefined,
    'spellcheck': (spellcheck ? 'true' : 'false') as boolean | 'true' | 'false' | null | undefined,
    required,
    disabled
  };
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label
  {title}
  class:rounded
  class:squaredLeft={squared === 'left' || squared === true}
  class:squaredRight={squared === 'right' || squared === true}
  class:labelHeightTopMargin={mt === 'label-height'}
  style:margin-top={typeof mt === 'number' ? `calc(var(--gal-spacing) * ${mt})` : undefined}
  style:margin-bottom={mb && `calc(var(--gal-spacing) * ${mb})`}
  style:margin-left={ml && `calc(var(--gal-spacing) * ${ml})`}
  style:margin-right={ml && `calc(var(--gal-spacing) * ${mr})`}
>
  {#if label}
    <span class="labelText">
      {label}
      {#if required}<span class="requiredMark" aria-hidden="true">*</span>{/if}
    </span>
  {/if}
  {#if $$slots.prefix}
    <span class="prefix" class:noLabel={!label} style:width={`${prefixWidth}px`}>
      <slot name="prefix" />
    </span>
  {/if}
  {#if $$slots.suffix}
    <span class="suffix" class:noLabel={!label} style:width={`${suffixWidth}px`}>
      <slot name="suffix" />
    </span>
  {/if}
  {#if type === 'email'}
    <input
      {...props}
      style:padding-left={$$slots.prefix ? `${prefixWidth}px` : undefined}
      style:padding-right={$$slots.suffix ? `${suffixWidth}px` : undefined}
      type="email"
      on:input
      bind:value
    />
  {:else if type === 'tel'}
    <input
      {...props}
      style:padding-left={$$slots.prefix ? `${prefixWidth}px` : undefined}
      style:padding-right={$$slots.suffix ? `${suffixWidth}px` : undefined}
      type="tel"
      on:input
      bind:value
    />
  {:else}
    <input
      {...props}
      style:padding-left={$$slots.prefix ? `${prefixWidth}px` : undefined}
      style:padding-right={$$slots.suffix ? `${suffixWidth}px` : undefined}
      type="text"
      on:input
      bind:value
    />
  {/if}
  {#if warning}
    <span class="warning message">{warning}</span>
  {:else if error}
    <span class="error message">{error}</span>
  {/if}
</label>

<style lang="scss">
  label {
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .labelText {
    font-weight: 500;
    font-size: 87.5%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: hsla(var(--gal-color-text-h), var(--gal-color-text-s), var(--gal-color-text-l), 0.85);
    margin: 0 calc(var(--gal-spacing) * 0.5) calc(var(--gal-spacing) * 0.25)
      calc(var(--gal-spacing) * 0.5);
    .rounded:not(.squaredLeft) & {
      margin-left: calc(var(--gal-spacing) * 1.75);
    }
    .rounded:not(.squaredRight) & {
      margin-right: calc(var(--gal-spacing) * 1.75);
    }
  }

  .requiredMark {
    color: var(--gal-color-danger);
  }

  .input {
    color: var(--gal-color-text);
    background: transparent;
    padding: 0 calc(var(--gal-spacing) * 1.75);
    height: calc(var(--gal-spacing) * 4.5);
    border-radius: var(--gal-border-radius);
    border: 1px solid
      hsl(
        var(--gal-color-background-h),
        var(--gal-color-background-s),
        calc(var(--gal-color-background-l) + var(--gal-lightness-multiplier) * 15%)
      );

    &:focus-visible {
      outline-offset: -1px;
      outline: 1px solid var(--gal-color-primary);
    }

    &::placeholder {
      color: hsla(var(--gal-color-text-h), var(--gal-color-text-s), var(--gal-color-text-l), 0.3);
    }

    &:disabled {
      cursor: not-allowed;
      border-color: hsl(
        var(--gal-color-background-h),
        var(--gal-color-background-s),
        calc(var(--gal-color-background-l) + var(--gal-lightness-multiplier) * 10%)
      );
      background: hsla(
        var(--gal-color-text-h),
        var(--gal-color-text-s),
        var(--gal-color-text-l),
        0.05
      );
    }

    .rounded & {
      border-radius: calc(var(--gal-spacing) * 2.5);
    }

    .squaredLeft & {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    .squaredRight & {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    &.warning {
      color: var(--gal-color-warning);
      border-color: var(--gal-color-warning);
    }

    &.danger {
      color: var(--gal-color-danger);
      border-color: var(--gal-color-danger);
    }
  }

  .message {
    font-size: 87.5%;
    line-height: 1.15;
    margin: calc(var(--gal-spacing) * 0.5) calc(var(--gal-spacing) * 0.5) 0;
    .rounded:not(.squaredLeft) & {
      margin-left: calc(var(--gal-spacing) * 1.75);
    }
    .rounded:not(.squaredRight) & {
      margin-right: calc(var(--gal-spacing) * 1.75);
    }
    &.warning {
      color: var(--gal-color-warning);
    }
    &.error {
      color: var(--gal-color-danger);
    }
  }

  .labelHeightTopMargin {
    /* line height * 87.5% = 1.3125 */
    margin-top: calc(var(--gal-spacing) * 0.25 + var(--gal-font-size) * 1.3125);
  }

  .prefix,
  .suffix {
    position: absolute;
    /* line height * 87.5% = 1.3125 */
    top: calc(var(--gal-spacing) * 0.25 + var(--gal-font-size) * 1.3125);
    color: hsla(var(--gal-color-text-h), var(--gal-color-text-s), var(--gal-color-text-l), 0.5);
    height: calc(var(--gal-spacing) * 4.5);
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    &.noLabel {
      top: 0;
    }
  }

  .prefix {
    left: 0;
  }

  .suffix {
    right: 0;
  }
</style>
