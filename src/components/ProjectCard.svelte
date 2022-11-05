<script lang="ts">
	import Icon from '@iconify/svelte';

	export let body =
		"You are here because you're interested in being a part of our investors community Launch to Grow is making it possible to. <br /> <br /> micro-invest in the best early-stage tech startups in Africa.You are.";
</script>

<div class="project__card">
	<div class="content">
		<div class="card__client-data">
			<div class="card__logo">
				<img src="/Valley_Logo.png" alt="" />
			</div>
			<div class="card__links">
				<li>
					<Icon icon="dashicons:facebook" />
				</li>
				<li>
					<Icon icon="dashicons:twitter" />
				</li>
				<li>
					<Icon icon="dashicons:linkedin" />
				</li>
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
