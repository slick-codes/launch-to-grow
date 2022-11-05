<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
</script>

<main class="project">
	<div class="project__container">
		<section class="project__title">
			<h1>Portfolio</h1>
			<p>Services We've rendered to over the years.</p>
		</section>
		<section class="project__cards">
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
		</section>
	</div>
</main>

<style lang="scss">
	.project {
		padding: 5em 0;
		padding-top: 5em;
		display: flex;
		flex-flow: column;
		justify-content: center;
		align-items: center;
		background: #f0f9f0;
		// margin-top: 4em;

		&__container {
			// background: blue;
			max-width: 67em;
			width: 100%;
		}

		&__title {
			margin-left: 2.2em;

			h1 {
				font-size: 2.9rem;
				font-weight: 900;
			}
			p {
				font-size: 0.9rem;
				font-weight: 400;
			}
		}

		&__cards {
			display: flex;
			// grid-template-columns: 1fr 1fr 1fr;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;
			padding-top: 4em;
		}
	}
</style>
