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
<div class="faq" on:click={updateState}>
	<div class="faq__title">
		<h1>{@html title}</h1>
		<div class="symble">+</div>
	</div>
	<p class:show={state === index}>
		{@html body}
	</p>
</div>

<style lang="scss">
	.faq {
		border: solid 1px rgb(200, 200, 200);
		display: flex;
		width: 100%;
		flex-flow: column;
		align-items: center;
		justify-content: space-between;
		background: white;
		cursor: pointer;
		// max-width: 50em;

		p:not(.show) {
			display: none;
		}
		p {
			line-height: 1.5em;
			padding: 1em;
			letter-spacing: normal;
			font-weight: 400;
			background: rgba(237, 237, 237, 0.549);
			width: 100%;
		}
		&__title {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 0.8em 1em;

			h1 {
				font-size: 1rem;
				font-weight: 400;
				letter-spacing: normal;
			}

			> div {
				margin-left: auto;
				font-size: 2rem;
			}
		}
	}
</style>
