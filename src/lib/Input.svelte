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
    class="input"
    class:rounded
    class:squaredLeft={squared === 'left' || squared === true}
    class:squaredRight={squared === 'right' || squared === true}
    type="text"
    {placeholder}
    {autocapitalize}
    {autocomplete}
    autocorrect={autocorrect ? 'on' : undefined}
    spellcheck={spellcheck ? 'true' : 'false'}
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

  .input {
    color: var(--gal-color-text);
    background: transparent;
    padding: 0 calc(var(--gal-spacing) * 1.5);
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

    &.rounded {
      padding: 0 calc(var(--gal-spacing) * 2);
      border-radius: calc(var(--gal-spacing) * 2.5);
    }

    &.squaredLeft {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    &.squaredRight {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
</style>
