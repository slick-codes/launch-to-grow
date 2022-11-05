<script lang="ts">
	import Projects from './../components/Projects.svelte';
	import Navigation from './../components/Navigation.svelte';
	import Header from './../components/Header.svelte';
</script>

<svelte:head>
	<!-- <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" /> -->
	<link href="https://fonts.cdnfonts.com/css/raleway-5" rel="stylesheet" />
</svelte:head>

<main class="container">
	<Navigation />
	<Header />
	<Projects />
</main>

<style>
	/* your styles go here */
	:global(*) {
		font-family: 'raleway';
		letter-spacing: 0.1em;
	}
</style>
