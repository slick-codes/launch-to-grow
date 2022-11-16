<script lang="ts">
	import Icon from '@iconify/svelte';

	export let body =
		"You are here because you're interested in being a part of our investors community Launch to Grow is making it possible to.";
</script>

<div class="service__card">
	<div class="content">
		<div class="card__client-data">
			<div class="card__image">
				<img src="/Wavy_Bus-35_Single-01_prev_ui.png" alt="Venture Capital stuff" />
			</div>
			<h4>Venture Capital</h4>
		</div>
		<p>
			{@html body}
		</p>
	</div>
</div>

<style lang="scss">
	.service {
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
					flex-flow: column;
					border-bottom: solid 1px gray;
					justify-content: space-between;
					width: 100%;

					h4 {
						width: 100%;
						text-align: center;
					}
					.card__image {
						width: 5em;

						img {
							width: 100%;
						}
					}

					.card__logo {
						// background: blue;

						img {
							width: 42%;
						}
					}
					.card__links {
						display: flex;
						justify-content: center;
						align-items: center;

						li {
							font-size: 1.3rem;
							padding: 0px 5px;
						}
					}
				}
			}
			p {
				font-size: 0.9rem;
				letter-spacing: normal;
				font-weight: 500;
				padding: 1.6em 0;
				line-height: 1.4em;
			}
		}
	}
</style>
