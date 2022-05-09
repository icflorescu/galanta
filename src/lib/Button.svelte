<button>
	<slot />
</button>

<style lang="scss">
	button {
		font-weight: 500;
		background: var(--gal-color-warning);
		color: white;
		border: 0;
		border-radius: var(--gal-border-radius);
		line-height: 1;
		height: calc(var(--gal-display-unit) * 4.5);
		padding: 0 calc(var(--gal-display-unit) * 2);

		&:hover {
			background: var(--gal-color-warning-darker);
		}

		&:active {
			transform: translate3d(0, 1px, 0);
		}
	}
</style>
