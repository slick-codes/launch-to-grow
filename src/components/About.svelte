<div class="container" id="About">
	<div class="inner__container content">
		<div>
			<section class="image">
				<img src="/business_startup.png" alt="No" />
			</section>
			<section class="about innerbackground">
				<div class="about__us">
					<h1>Who We Are</h1>
					<div class="txt">
						Launch to Grow is a venture capital and consulting firm set up to support early-stage
						ventures and founders across Africa with the relevant resources, tools and funding they
						need to launch and scale.
						<br />
						<br />
						The company was founded in 2018 as Strategic Sync Consulting and in 2021, was restructured
						and rebranded as Launch to Grow Capital to align more with its strategic vision of supporting
						and founding innovative ideas and founders solving African and Global problems at scale.
					</div>
				</div>
			</section>
		</div>
		<div>
			<section class="image">
				<img src="/Wavy_Bus-35_Single-01_prev_ui.png" alt="No" />
			</section>
			<section class="about innerbackground">
				<div class="about__us">
					<h1>The L2G Syndicate</h1>
					<div class="txt">
						The L2G Syndicate is an exclusive investment vehicle that is making it possible for
						individuals, groups, and institutions to micro-invest along with Launch to Grow in the
						best early-stage startups across Africa. Our investor community has an inclusive and
						diverse membership of people who are interested in innovation and are ready to invest
						and support founders who are building the Africa of our dream.
					</div>
				</div>
			</section>
		</div>
	</div>
</div>

<style lang="scss">
	.container {
		display: flex;
		justify-content: center;
		width: 100%;

		.content {
			display: flex;
			background: #49b749;
			padding: 3em 4em;
			border-radius: 0.7em;
			justify-content: center;
			align-items: center;
			border: solid 9px white;
			position: relative;
			flex-flow: column;
			max-width: 68em;
			border-bottom-left-radius: 0;

			> div {
				display: flex;
				justify-content: center;
				align-items: center;
			}

			> div:last-child {
				padding-top: 1em;
				flex-flow: row-reverse;
			}

			* {
				z-index: 1;
			}

			&:after {
				content: '';
				position: absolute;
				height: 100%;
				width: 100%;
				background: black;
				z-index: 0;
				opacity: 0.04;
				background-image: url(/5774968.jpg);
			}

			&:before {
				content: '';
				display: block;
				// background: red;
				border-radius: 0.7em;
				border: solid 2px #bde5bd;
				// z-index: -1;
				transform: translate(-1.5em, 1.9em);
				height: 100%;
				width: 100%;
				position: absolute;
				// background: red;
			}
			.about {
				padding-left: 2em;
				&.innerbackground {
					&:before {
						display: none;
					}
					&:after {
						display: none;
					}
				}
			}
			& > div section {
				width: 100%;
				display: flex;
				flex-flow: column;
				justify-content: center;
				align-items: center;
			}
			h1 {
				color: white;
				font-size: 2.4rem;
				font-weight: 900;
				padding: 0.2em 0;
				padding-top: 0;
			}

			.txt {
				font-size: 0.85rem;
				font-weight: 600;
				line-height: 1.6em;
				max-width: 35em;
				letter-spacing: normal;
				color: white;
				list-style: initial;
			}
		}

		img {
			width: 28em;
		}
	}

	@media (max-width: 822px) {
		.container {
			.content {
				flex-direction: column-reverse;
				padding: 0;
				border: none;
				border-radius: 0;
				background: transparent;
				flex-flow: column;
				// padding: 3em 0;

				> div {
					flex-flow: column-reverse !important;
				}

				&:before {
					display: none;
				}
				.about {
					background: #49b749;
					width: 100%;
					padding: 3em 0.5em;

					&.innerbackground {
						&:before {
							display: block;
						}
						&:after {
							display: block;
						}
					}
				}
			}
			.image {
				padding: 0px 1.5em;
				padding-top: 3em;

				img {
					width: 100%;
					max-width: 35em;
				}
			}
		}
	}
</style>
