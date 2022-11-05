<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<main class="project">
	<div class="project__container">
		<section class="project__title">
			<h1>Portfolio</h1>
			<p>Services We've rendered to over the years.</p>
		</section>
		<section class="project__cards">
			<div class="project__card">
				<div class="content">
					<div class="card__client-data">
						<div class="card__logo">Logo</div>
						<div class="card__links" />
					</div>
					<p>
						You are here because you're interested in being a part of our investors community Launch
						to Grow is making it possible to micro-invest in the best early-stage tech startups in
						Africa.You are. Here because you're interested in being a part of our investors
						community. Launch to Grow is making it possible to micro-invest in the best early-stage
						tech startups in Africa.
					</p>
				</div>
			</div>
			<div class="project__card">
				<div class="content">
					<div class="card__client-data">
						<div class="card__logo">Logo</div>
						<div class="card__links" />
					</div>
					<p>
						You are here because you're interested in being a part of our investors community Launch
						to Grow is making it possible to micro-invest in the best early-stage tech startups in
						Africa.You are. Here because you're interested in being a part of our investors
						community. Launch to Grow is making it possible to micro-invest in the best early-stage
						tech startups in Africa.
					</p>
				</div>
			</div>
			<div class="project__card">
				<div class="content">
					<div class="card__client-data">
						<div class="card__logo">Logo</div>
						<div class="card__links" />
					</div>
					<p>
						You are here because you're interested in being a part of our investors community Launch
						to Grow is making it possible to micro-invest in the best early-stage tech startups in
						Africa.You are. Here because you're interested in being a part of our investors
						community. Launch to Grow is making it possible to micro-invest in the best early-stage
						tech startups in Africa.
					</p>
				</div>
			</div>
			<div class="project__card">
				<div class="content">
					<div class="card__client-data">
						<div class="card__logo">Logo</div>
						<div class="card__links" />
					</div>
					<p>
						You are here because you're interested in being a part of our investors community Launch
						to Grow is making it possible to micro-invest in the best early-stage tech startups in
						Africa.You are. Here because you're interested in being a part of our investors
						community. Launch to Grow is making it possible to micro-invest in the best early-stage
						tech startups in Africa.
					</p>
				</div>
			</div>
			<div class="project__card">
				<div class="content">
					<div class="card__client-data">
						<div class="card__logo">Logo</div>
						<div class="card__links" />
					</div>
					<p>
						You are here because you're interested in being a part of our investors community Launch
						to Grow is making it possible to micro-invest in the best early-stage tech startups in
						Africa.You are. Here because you're interested in being a part of our investors
						community. Launch to Grow is making it possible to micro-invest in the best early-stage
						tech startups in Africa.
					</p>
				</div>
			</div>
			<div class="project__card">
				<div class="content">
					<div class="card__client-data">
						<div class="card__logo">Logo</div>
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
						You are here because you're interested in being a part of our investors community Launch
						to Grow is making it possible to micro-invest in the best early-stage tech startups in
						Africa.You are. Here because you're interested in being a part of our investors
						community. Launch to Grow is making it possible to micro-invest in the best early-stage
						tech startups in Africa.
					</p>
				</div>
			</div>
		</section>
	</div>
</main>

<style lang="scss">
	.project {
		padding: 5em 0;
		padding-top: 5em;
		display: flex;
		flex-flow: column;
		justify-content: center;
		align-items: center;
		background: #f6f6f67d;
		margin-top: 4em;

		&__container {
			// background: blue;
			max-width: 67em;
			width: 100%;
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

		&__cards {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;
			padding-top: 4em;
		}
		&__card {
			margin-top: 0em;
			padding: 0.6em;

			.content {
				// padding: 8em 0em;
				// padding-top: 0;
				padding: 0.6em;
				max-width: 21em;
				width: 100%;
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
						background: blue;
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
		}
		p {
			font-size: 0.9rem;
			font-weight: 400;
			padding: 0.8em 0;
			line-height: 1.4em;
		}
	}
</style>
