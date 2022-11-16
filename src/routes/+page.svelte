<script lang="ts">
	import Footer from './../components/Footer.svelte';
	import Projects from './../components/Projects.svelte';
	import Navigation from './../components/Navigation.svelte';
	import Header from './../components/Header.svelte';
</script>

<svelte:head>
	<!-- <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" /> -->
	<link href="https://fonts.cdnfonts.com/css/raleway-5" rel="stylesheet" />
	<script src="//embed.typeform.com/next/embed.js"></script>
	<title>Launchtogrow | Home</title>
</svelte:head>

<main class="container">
	<Navigation />
	<Header />
	<Projects />
	<Footer />
</main>

<style lang="scss">
	/* your styles go here */
	:global(*) {
		font-family: 'raleway';
		margin: 0;
		padding: 0;
		text-decoration: none;
		// list-style: none;
		box-sizing: border-box;
		outline: none;
		/* letter-spacing: 0.1em; */
	}
	:global(.clickme) {
		color: rgb(0, 85, 255);
		text-decoration: underline;
		font-weight: bolder;
		font-style: italic;
	}
	:global(* button) {
		cursor: pointer;
	}
	:global(.innerbackground > *) {
		z-index: 3;
		position: relative;
	}
	:global(.innerbackground) {
		position: relative;

		&:before {
			content: '';
			display: block;
			background-image: url('/5774968.jpg');
			background-size: cover;
			height: 100%;
			position: absolute;
			width: 100%;
			left: 0;
			top: 0;
			// z-index: 0;
		}
		&:after {
			content: '';
			display: block;
			width: 100%;
			height: 100%;
			position: absolute;
			background: inherit;
			opacity: 0.95;
			left: 0;
			top: 0;
			// z-index: 0;
		}
	}
	:global(.faq__list-container) {
		margin-left: 1em;
		// list-style: auto;
	}
	:globa(li) {
		list-style: circle;
	}
</style>
