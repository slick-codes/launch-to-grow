<script lang="ts">
	import About from './About.svelte';
	import HeaderBackground from './../components/HeaderBackground.svelte';
</script>

<main class="container" id="home">
	<header class="header">
		<HeaderBackground />

		<div class="header__intro">
			<div class="header__intro-content ">
				<section class="header__text innerbackground ">
					<h1>Join the L2G Syndicate and <span>invest with us</span> in the best early-stage startups across Africa.</h1>
					<p>
						Have a great idea?
						<span
							data-tf-popup="mveqQENw"
							data-tf-iframe-props="title=Register Startup"
							data-tf-medium="snippet"
						>
							Pitch us
						</span>
					</p>
				</section>
				<section class="header__image">
					<div class="header__image-container">
						<img src="/2010.i039.003_business_startup_isometric-removebg-preview.png" alt="" />
					</div>
				</section>
			</div>
		</div>

		<About />
	</header>
</main>

<style lang="scss">
	.header {
		min-height: 30em;
		position: relative;
		padding-bottom: 5em;

		&__intro {
			display: flex;
			flex-flow: column;
			justify-content: center;
			align-items: center;
			padding: 8em 0;
			padding-top: 3em;

			&-content {
				display: flex;
				justify-content: center;
				align-items: center;

				& > section {
					width: 100%;
					// padding-left: 3em;
					justify-content: center;
					display: flex;
					flex-flow: column;
					// align-items: center;
				}
			}
		}
		&__text {
			&.innerbackground {
				&:before {
					display: none;
				}
				&:after {
					display: none;
				}
			}
			h1 {
				width: 9em;
				font-size: 3.5rem;
				letter-spacing: 0;
				color: white;
				font-weight: 700;

				span {
					background: #1bc3f9;
					transform: skewX(353deg);
					display: inline-flex;
					padding: 0px 0.1em;
					color: black;
					font-weight: 900;
					border-radius: 0.1em;
					// position: relative;

					&:after {
						content: '';
						display: block;
						position: absolute;
						height: 100%;
						width: 100%;
						border: solid 1px #1bc3f9;
						transform: translate(-0.3em, 0.1em);
						border-radius: inherit;
						z-index: -5;
					}
				}
			}
			p {
				padding-top: 1em;
				color: white;
				font-weight: 600;

				span {
					font-weight: 900;
					font-size: 1.2rem;
					font-style: italic;
					cursor: pointer;
					color: yellow;

					&:hover {
						text-decoration: underline;
					}
				}
			}
		}
		&__image {
			img {
				width: 30em;
			}
		}
	}
	@media (max-width: 1076px) {
		.header {
			// padding: 0px 1em;

			&__intro {
				padding: 0px 1em;
			}
			&__text {
				h1 {
					width: auto;
				}
			}
			&__image {
				img {
					width: 25em;
				}
			}
		}
	}
	@media (max-width: 822px) {
		.header {
			// padding-left: 1em;
			padding-bottom: 0;
			&__intro {
				padding: 0;

				&-content {
					// width: 100%;
					flex-flow: column;
				}
			}

			&__text {
				padding: 3.6em 1em;
				padding-top: 3em;
				background: #49b749;
				&.innerbackground {
					&:before {
						display: block;
					}
					&:after {
						display: block;
					}
				}

				h1 {
					// max-width: 15em;
					padding: 0.2em;
					width: 100%;
					font-size: 2.9rem;
				}
			}
			&__image {
				padding: 0px 1em;
				padding-top: 2em;
				width: 100%;

				&-container {
					width: 100%;
				}

				img {
					width: 100%;
					max-width: 50em;
				}
			}
		}
	}
</style>
