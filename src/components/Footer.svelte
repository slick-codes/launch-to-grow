<script lang="ts">
	import Icon from '@iconify/svelte';
	import FAQs from './FAQs.svelte';
	import HeaderBackground from './HeaderBackground.svelte';
</script>

<footer class="footer" id="FAQs">
	<HeaderBackground invert={true} />
	<div class="footer__container">
		<FAQs />

		<div class="last__section">
			<div class="last__section-container">
				<h1>Let's keep you updated!</h1>
				<button
					data-tf-popup="V1KAm8lN"
					data-tf-iframe-props="title=email list"
					data-tf-medium="snippet"
				>
					JOIN OUR MAILING LIST
				</button>
			</div>
		</div>
		<div class="copyright">
			<h1>Contact Us</h1>
			<br />
			<span><Icon icon="mdi:address-marker-outline" /> 7a Milverton Road, Ikoyi, Lagos.</span>
			<span><Icon icon="material-symbols:call-outline-rounded" /> (+234) 1 453 8872</span>
			<span
				><Icon icon="material-symbols:attach-email" />
				<a href="mailto:hello@launchtogrow.co"> hello@launchtogrow.co</a></span
			>
			<br /><br />
			<section>&copy; LaunchToGrow</section>
			<section class="footer__copyright-icon">
				<Icon icon="ri:linkedin-box-fill" />
				<Icon icon="fa-brands:instagram-square" />
				<Icon icon="fa6-brands:square-twitter" />
			</section>
		</div>
	</div>
</footer>

<style lang="scss">
	.footer {
		position: relative;
		padding: 3em 0;
		padding-bottom: 0;

		&__copyright-icon {
			font-size: 1.6rem;
			padding: 0.4em 0;
		}
	}
	.copyright {
		display: flex;
		flex-flow: column;
		align-items: center;
		font-size: 1rem;
		font-weight: 500;
		padding-bottom: 1em;

		h1 {
			font-weight: 900;
			font-size: 2.3rem;
		}

		span {
			padding: 0.2em 0.8em;
			font-size: 0.9rem;
			font-weight: 600;
			background: white;
			border-radius: 0.3em;
		}
	}
	.last__section {
		display: flex;
		flex-flow: column;
		justify-content: center;
		align-items: center;
		padding: 2.5em 0;
		padding-bottom: 4em;

		&-container {
			display: flex;
			justify-content: inherit;
			align-items: inherit;
			flex-flow: inherit;

			h1 {
				width: 13em;
				// font-size: 2.4rem;
				text-align: center;
				letter-spacing: normal;
				padding: 0.5em 0;
			}

			button {
				background: #1c4ca1;
				padding: 1em 1.3em;
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
					transform: translate(-2em, -0.4em);
					height: 100%;
					width: 100%;
					position: absolute;
				}
			}
		}
	}

	@media (max-width: 400px) {
		.last__section {
			&-container {
				h1 {
					font-size: 1.4em;
				}
			}
		}
	}
</style>
