<script lang="ts">
	// import ProjectCard from './ProjectCard.svelte';
	import Project from './ProjectCard.svelte';
</script>

<main class="project innerbackground" id="Projects">
	<div class="project__container ">
		<section class="project__title">
			<h1>PROJECTS</h1>
			<p>The following are some companies we have worked with:</p>
		</section>
		<section class="project__cards">
			<Project 
				body="The first indigenous road transport company to be listed on a stock exchange in Africa" 
				title="ABC Transport PLC"
			/>
			<Project 
				body="A luxury hospitality and shopping center in Nigeria's Federal Capital Territory, Abuja." 
				title="Dunes Center"
			/>
			<Project 
				body="A logistics company and customs licensed freighter operating in Nigeria." 
				title="COC Global"
			/>
			<Project 
				body="An edtech startup that prepares primary and secondary school students for qualifying exams." 
				title="Edsofta"
			/>
			<Project 
				body="A proptech startup that connects people who have spare spaces with renters looking for affordable and flexible self-storage, parking or event venue." 
				title="Parkwella"
			/>
				<Project 
				body="A fintech startup that offers collateral-based loans to individuals and MSMEs." 
				title="Atom Loans"
			/>
		<Project 
				body="An Autodesk authorized training and academic partner that also offers engineering and computer aided design services." 
				title="Generative CAD"
			/>
<Project 
				body="Nigeria’s foremost indigenous supermarket with one-stop neighbourhood stores catering to the daily need of a wide range of clientele." 
				title="Prince Ebeano Supermarket"
			/>
<Project 
				body="A leading insurance company that went public on July 18, 1989 and was duly listed on the Nigerian Stock Exchange on December 3, 1990." 
				title="Royal Exchange General Insurance"
			/>

		</section>
	</div>
</main>

<style lang="scss">
	.project {
		list-style: none;
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
			padding-top: 2em;
		}
	}
</style>
