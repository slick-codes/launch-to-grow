<div class="container">
	<div class="content">
		<section class="image">
			<img src="/Group 6.png" alt="No" />
		</section>
		<section class="about">
			<div class="about__us">
				<h1>About Us</h1>
				<p>
					You are here because you're interested in being a part of our investors community Launch
					to Grow is making it possible to micro-invest in the best early-stage tech startups in
					Africa.You are. Here because you're interested in being a part of our investors community.
					Launch to Grow is making <br /><br /> it possible to micro-invest in the best early-stage tech
					startups in Africa.Grow is making it possible to micro-invest in the best early-stage tech
					startups in Africa.Grow is making it possible to micro-invest in the best early-stage tech
					startups in Africa.
				</p>
			</div>
		</section>
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
			max-width: 68em;
			border: solid 9px white;
			position: relative;
			border-bottom-left-radius: 0;

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
			}
			& > section {
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

			p {
				font-size: 0.85rem;
				font-weight: 500;
				color: white;
			}
		}

		img {
			width: 19em;
		}
	}
</style>
