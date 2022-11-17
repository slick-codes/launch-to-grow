<script lang="ts">
	import { faqs } from '../store/faqs';
	import Faq from './FAQ.svelte';
</script>

<div class="faqs">
	<div class="faqs__container">
		<section class="faqs__title">
			<h1>FAQs</h1>
			<p>Frequently Asked Questions.</p>
		</section>
		<section class="faqs__content">
			{#each faqs as faq, index}
				<Faq {index} {...faq} />
			{/each}
		</section>
	</div>
</div>

<style lang="scss">
	.faqs {
		display: flex;
		justify-content: center;
		align-items: center;

		&__container {
			width: 100%;
			max-width: 67em;
		}
		&__title {
			margin-left: 2.2em;

			h1 {
				font-size: 2.9rem;
				font-weight: 900;
			}

			p {
				font-size: 0.9rem;
				font-weight: 400;
			}
		}

		&__content {
			padding: 2em 2.2em;
		}
	}
</style>
