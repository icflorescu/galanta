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
		fontFamily?: {
			default?: string;
			monospace?: string;
		};
		displayUnit?: number;
		borderRadius?: number;
	}[] = [];
	export let currentThemeName: string | undefined = undefined;

	$: currentTheme =
		themes.length === 1
			? themes[0]
			: themes.length > 1 && currentThemeName
			? themes.find((theme) => theme.name === currentThemeName)
			: undefined;

	$: styleVariables = {
		backgroundColor: currentTheme?.color?.background || '#fff',
		textColor: currentTheme?.color?.text || '#343a40',
		primaryColor: currentTheme?.color?.primary || '#228be6',
		successColor: currentTheme?.color?.success || '#40c057',
		warningColor: currentTheme?.color?.warning || '#fab005',
		dangerColor: currentTheme?.color?.danger || '#fa5252',
		displayUnit: currentTheme?.displayUnit || 8
	};
</script>

<div
	style:--gal-color-background={styleVariables.backgroundColor}
	style:--gal-color-text={styleVariables.textColor}
	style:--gal-color-primary={styleVariables.primaryColor}
	style:--gal-color-primary-darker={Color(styleVariables.primaryColor).darken(0.1).hex()}
	style:--gal-color-success={styleVariables.successColor}
	style:--gal-color-success-darker={Color(styleVariables.successColor).darken(0.1).hex()}
	style:--gal-color-warning={styleVariables.warningColor}
	style:--gal-color-warning-darker={Color(styleVariables.warningColor).darken(0.1).hex()}
	style:--gal-color-danger={styleVariables.dangerColor}
	style:--gal-color-danger-darker={Color(styleVariables.dangerColor).darken(0.1).hex()}
	style:--gal-font-family-monospace={currentTheme?.fontFamily?.monospace ||
		"ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace"}
	style:--gal-display-unit={`${styleVariables.displayUnit}px`}
	style:--gal-border-radius={`${currentTheme?.borderRadius || 4}px`}
	style:color={styleVariables.textColor}
	style:background={styleVariables.backgroundColor}
	style:font-family={currentTheme?.fontFamily?.default ||
		"system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'"}
	style:font-size={`${styleVariables.displayUnit * 2}px`}
>
	<slot />
</div>

<style lang="scss">
	div {
		min-height: 100vh;
		overflow: auto;
	}

	:global {
		*,
		::before,
		::after {
			box-sizing: border-box;
		}

		html {
			line-height: 1.15;
			-webkit-text-size-adjust: 100%;
			-moz-tab-size: 4;
			tab-size: 4;
		}

		body {
			margin: 0;
		}

		hr {
			height: 0;
			color: inherit;
		}

		abbr[title] {
			text-decoration: underline dotted;
		}

		b,
		strong {
			font-weight: bolder;
		}

		code,
		kbd,
		samp,
		pre {
			font-size: 1em;
		}

		small {
			font-size: 80%;
		}

		sub,
		sup {
			font-size: 75%;
			line-height: 0;
			position: relative;
			vertical-align: baseline;
		}

		sub {
			bottom: -0.25em;
		}

		sup {
			top: -0.5em;
		}

		table {
			text-indent: 0;
			border-color: inherit;
		}

		button,
		input,
		optgroup,
		select,
		textarea {
			font-family: inherit;
			font-size: 100%;
			line-height: 1.15;
			margin: 0;
		}

		button,
		select {
			text-transform: none;
		}

		button,
		[type='button'],
		[type='reset'],
		[type='submit'] {
			-webkit-appearance: button;
		}

		::-moz-focus-inner {
			border-style: none;
			padding: 0;
		}

		:-moz-focusring {
			outline: 1px dotted ButtonText;
		}

		:-moz-ui-invalid {
			box-shadow: none;
		}

		legend {
			padding: 0;
		}

		progress {
			vertical-align: baseline;
		}

		::-webkit-inner-spin-button,
		::-webkit-outer-spin-button {
			height: auto;
		}

		[type='search'] {
			-webkit-appearance: textfield;
			outline-offset: -2px;
		}

		::-webkit-search-decoration {
			-webkit-appearance: none;
		}

		::-webkit-file-upload-button {
			-webkit-appearance: button;
			font: inherit;
		}

		summary {
			display: list-item;
		}
	}
</style>
