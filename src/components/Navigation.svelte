<script lang="ts">
	import Icon from '@iconify/svelte';

	let menuState: boolean = false;
	function toggleMenuState() {
		menuState = !menuState;
	}
</script>

<svelte:head>
	<script src="//embed.typeform.com/next/embed.js"></script>
</svelte:head>

<div class="nav">
	<div class="nav__container">
		<section class="nav__logo">
			<div class="logo__container">
				<a href="/#home">
					<img src="/LTG_logo.png" alt="Logo Container" />
				</a>
			</div>
		</section>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<section class="nav__link">
			<div class="link__container" class:active={menuState}>
				<li on:click={toggleMenuState}>
					<a href="/#About">WHO WE ARE</a>
				</li>
				<li on:click={toggleMenuState}>
					<a href="/#Project">WHAT WE DO</a>
				</li>
				<li on:click={toggleMenuState}>
					<a href="/#FAQs">FAQs</a>
				</li>
			</div>
			<div class="nav__join-button">
				<div class="button">
					<button
						data-tf-popup="UxdFQJjP"
						data-tf-iframe-props="title=Register Investors"
						data-tf-medium="snippet"
					>
						Invest With Us
					</button>
				</div>
				<div class="menu" on:click={toggleMenuState}>
					<Icon icon="fe:app-menu" />
				</div>
			</div>
		</section>
	</div>
</div>

<style lang="scss">
	.nav {
		padding: 0em 3em;
		background: white;
		box-shadow: 0px 12px 16px -2px rgba(73, 183, 73, 0.113);
		position: sticky;
		z-index: 4;
		top: 0;
		display: flex;
		justify-content: center;
		// align-items: center;

		* {
			list-style: none;
		}

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
					padding: 0em 1em;

					a {
						color: black;
						// text-transform: uppercase;
						font-size: 0.8rem;
						font-weight: 600;
					}
				}
			}
		}

		&__logo {
			> div {
				// aspect-ratio: 1/2;
				display: flex;
				justify-content: center;
				align-items: center;
				overflow: hidden;
				// height: ;
			}
		}
		img {
			width: 10em;
		}

		&__join-button {
			padding-left: 0.5em;
			display: flex;
			justify-content: center;
			align-items: center;

			.button {
				padding: 0px 1.5em;
				padding-right: 2em;
			}

			.menu {
				padding: 0.5px 0em;
				align-items: center;
				justify-content: center;
				display: none;
				font-size: 1.9rem;
			}

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
			padding: 0.5em 1em;

			&__container {
				background: inherit;
			}
			&__link {
				background: inherit;
				.link__container {
					position: absolute;
					width: 100%;
					padding: 1em 0;
					background: inherit;
					left: 0;
					top: 6.2em;
					text-align: center;
					display: none;
					justify-content: center;
					align-items: center;

					&.active {
						display: flex;
					}
				}
			}
			&__join-button {
				.menu {
					display: flex;
				}
			}
		}
	}
</style>
