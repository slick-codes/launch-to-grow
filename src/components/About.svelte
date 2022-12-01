<div class="container" id="About">
	<div class="inner__container content">
		<div>
			<section class="image">
				<img src="/business_startup.png" alt="No" />
			</section>
			<section class="about innerbackground">
				<div class="about__us">
					<h1>ABOUT US</h1>
					<div class="txt">
						Launch to Grow is a venture capital and consulting firm set up to support early-stage
						ventures and founders across Africa with the relevant resources, tools and funding they
						need to launch and scale.
						<br />
						<br />
						Beyond venture capital, we offer services in finance consulting, SPV management, market research and analytics, and management consulting.
					</div>
				</div>
			</section>
</div>
		<div>
			<section class="image">
				<img src="/vud7_ybe1_220517-removebg-preview.png" alt="No" />
			</section>
			<section class="about innerbackground">
				<div class="about__us">
					<h1>Our investment thesis:</h1>
					<div class="txt">
						We typically invest in preseed and seed stages. However, we would love to come in as
						early as your family and friends especially for underprivileged or underrepresented
						founders with fascinating yet promising ideas. Our ticket sizes range from $5,000 to
						$50,000.
						<br /><br />
						Although we are sector agnostic, we have particular interest in a few sectors as follows:
						<ul>
							<li>FinTech</li>
							<li>EdTech</li>
							<li>HealthTech</li>
							<li>Governance</li>
							<li>PropTech</li>
							<li>Future of Work</li>
						</ul>
					</div>
				</div>
			</section>
		</div>
	</div>
</div>

<style lang="scss">
	ul {
		margin-left: 1em;
	}
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
