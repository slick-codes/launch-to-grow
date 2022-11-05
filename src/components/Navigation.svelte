<script lang="ts"></script>

<div class="nav">
	<div class="nav__container">
		<section class="nav__logo">
			<div class="logo__container">
				<img src="/LTG2 1.png" alt="Logo Container" />
			</div>
		</section>
		<section class="nav__link">
			<div class="link__container">
				<li>
					<a href="/">About</a>
				</li>
				<li>
					<a href="/">Projects</a>
				</li>
				<li>
					<a href="/">FAQs</a>
				</li>
			</div>
			<div class="nav__join-button">
				<button>JOIN US</button>
			</div>
		</section>
	</div>
</div>

<style lang="scss">
	:global(*) {
		margin: 0;
		padding: 0;
		text-decoration: none;
		list-style: none;
		box-sizing: border-box;
	}

	.nav {
		padding: 0.5em 3em;
		background: white;
		box-shadow: 0px 12px 16px -2px rgba(73, 183, 73, 0.113);
		position: sticky;
		z-index: 3;
		top: 0;
		display: flex;
		justify-content: center;
		// align-items: center;

		&__container {
			display: flex;
			justify-content: space-between;
			align-items: center;
			max-width: 70em;
			width: 100%;
		}

		&__link {
			display: flex;

			> div {
				display: flex;

				li {
					padding: 0.5em 1em;

					a {
						color: black;
						text-transform: uppercase;
						font-size: 0.8rem;
						font-weight: 600;
					}
				}
			}
		}

		&__logo {
			> div {
				aspect-ratio: 1/1;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
		img {
			width: 5em;
		}

		&__join-button {
			padding-left: 0.5em;

			button {
				background: #1c4ca1;
				padding: 0.3em 0.4em;
				color: white;
				border-radius: 0.4em;
				font-weight: 700;
				border: none;
				z-index: 1;
				position: relative;
				border: 1px solid #1c4ca1;

				&:before {
					content: '';
					display: block;
					// background: red;
					border-radius: inherit;
					border: inherit;
					z-index: -1;
					transform: translate(-0.9em, -0.2em);
					height: 100%;
					width: 100%;
					position: absolute;
				}
			}
		}
	}
	@media (max-width: 764px) {
		.nav {
			&__container {
			}
			&__link {
				display: none;
			}
		}
	}
</style>
