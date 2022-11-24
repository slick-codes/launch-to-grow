<script lang="ts">
	import Icon from '@iconify/svelte';

	export let body: string;
	export let title: string;
</script>

<div class="project__card">
	<div class="content">
		<div class="card__client-data">
			<div class="card__logo">
				<h3>{@html title}</h3>
			</div>
		</div>
		<p>
			{@html body}
		</p>
	</div>
</div>

<style lang="scss">
	.project {
		&__card {
			margin-top: 0em;
			padding: 0.6em;
			height: 100%;

			.content {
				// padding: 8em 0em;
				// padding-top: 0;
				padding: 0.6em;
				max-width: 21em;
				width: 100%;
				height: 100%;
				// border: solid 1px gray;
				background: white;
				border-radius: 0.4em;
				box-shadow: 0px 0px 12px 1px #49b74929;

				.card__client-data {
					display: flex;
					padding: 1em 0;
					padding-top: 0.5em;
					align-items: center;
					border-bottom: solid 1px gray;
					justify-content: space-between;
				}
			}
			p {
				font-size: 0.9rem;
				letter-spacing: normal;
				font-weight: 500;
				padding: 1.6em 0;
				line-height: 1.4em;
				height: 9em;
			}
		}
	}
</style>
