<script lang="ts">
	import { faqState } from './../store/faqs';

	export let body: string;
	export let title: string;
	export let index: number;

	let state: number;
	faqState.subscribe((value: number) => (state = value));

	function updateState(): void {
		faqState.update((value: number) => (value = value == index ? -1 : index));
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="faq">
	<div class="faq__title" on:click={updateState}>
		<h1>{@html title}</h1>
		<div class="symble">{state === index ? '-' : '+'}</div>
	</div>
	<div class="paragraph innerbackground">
		<p class:show={state === index}>
			{@html body}
		</p>
	</div>
</div>

<style lang="scss">
	.faq {
		display: flex;
		width: 100%;
		flex-flow: column;
		align-items: center;
		justify-content: space-between;
		background: white;
		border: solid 1px #49b749;
		border-top: none;
		border-bottom: none;
		cursor: pointer;
		border-left: none;
		border-right: none;
		border-color: #49b749;

		&:first-child {
			border: solid 1px #49b749;
			border-right: inherit;
			border-left: inherit;
		}
		&:not(:first-child) {
			border-bottom: solid 1px #49b749;
		}
		// max-width: 50em;

		p:not(.show) {
			display: none;
		}
		.paragraph {
			width: 100%;
			background: white;

			&.innerbackground {
				&:after {
					opacity: 0.9;
				}
			}
		}
		p {
			line-height: 1.5em;
			padding: 1em;
			letter-spacing: normal;
			font-weight: 400;
			background: rgba(237, 237, 237, 0.549);
			width: 100%;
			border-top: solid 0.4em #49b749;
		}
		&__title {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 0.2em 1em;

			h1 {
				font-size: 1rem;
				font-weight: 400;
				letter-spacing: normal;
			}

			> div {
				margin-left: auto;
				font-size: 3rem;
			}
		}
	}
</style>
