<div class="bg">
	<aside class="header__green-bg">
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
		width: 100%;
		background: purple;

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
</style>
