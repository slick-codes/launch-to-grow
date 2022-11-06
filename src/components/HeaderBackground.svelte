<script lang="ts">
	export let invert: boolean = false;
</script>

<div class="bg" class:invert>
	<aside class="header__green-bg">
		<!-- svelte-ignore a11y-img-redundant-alt -->
		<img src="/5774968.jpg" alt="Background Image" />
	</aside>
	<aside class="header__white-bg" />
</div>

<style lang="scss">
	.bg {
		z-index: -1;
		display: flex;
		justify-content: stretch;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		background: purple;
		&.invert {
			transform: scaleX(-1);
		}
		& > aside {
			padding: 0px 1em;
			width: 100%;
		}
	}
	.header__green-bg {
		height: 100%;
		background: #49b749;
		overflow: hidden;
		position: relative;

		img {
			position: absolute;
			left: 0;
			top: 0;
			opacity: 0.1;
			background-blend-mode: multiply;
		}
	}
	.header__white-bg {
		background: white;
		height: 100%;
	}

	@media (max-width: 822px) {
		.bg {
			&:not(.invert) {
				display: none;
				flex-flow: column;

				.header__green-bg {
					height: 46em;
				}
			}
		}
	}
</style>
