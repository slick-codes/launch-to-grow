<script lang="ts">
	import FAQs from './FAQs.svelte';
	import HeaderBackground from './HeaderBackground.svelte';
</script>

<footer class="footer">
	<HeaderBackground invert={true} />
	<div class="footer__container">
		<FAQs />
	</div>
</footer>

<style lang="scss">
	.footer {
		position: relative;
		padding: 3em 0;
	}
</style>
