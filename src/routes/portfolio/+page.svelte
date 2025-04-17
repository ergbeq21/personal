<script>
	import '../../../src/app.css';
	let { children } = $props();

	import insta from '$lib/assets/insta.png';
	import api from '$lib/assets/api.png';
	import event from '$lib/assets/event.png';
	import botschaft from '$lib/assets/qr.png';

	let projects = [
		{
			title: "Instagram Clone",
			description: "A modern Instagram clone built with the latest web technologies, featuring real-time updates and responsive design.",
			image: insta,
			link: "https://insta-gules-delta.vercel.app/",
			tags: ["Node.js", "Svelte", "Tailwind CSS"]
		},
		{
			title: "Event Management App",
			description: "A comprehensive event management platform for organizing and tracking events, with QR code integration.",
			image: event,
			link: "https://event-app-seven-nu.vercel.app/",
			tags: ["Svelte", "TypeScript", "SvelteKit"]
		},
		{
			title: "Botschaft Platform",
			description: "An innovative communication platform designed for seamless interaction and message management.",
			image: botschaft,
			link: "https://botschaft.vercel.app/",
			tags: ["React", "Node.js", "WebSocket"]
		},
		{
			title: "Restaurants API",
			description: "A robust API service providing detailed information about restaurants in Shkodra, Albania.",
			image: api,
			link: "https://restaurants-api-rho.vercel.app/",
			tags: ["API", "Express", "MongoDB"]
		}
	];
</script>

<div class="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black py-12 px-4 sm:px-6 lg:px-8">
	<div class="max-w-7xl mx-auto">
		<!-- Header Section -->
		<div class="text-center mb-16 pt-16 sm:pt-20 lg:pt-0">
			<h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
				My <span class="text-orange-500">Projects</span>
			</h1>
			<p class="text-gray-400 text-lg max-w-2xl mx-auto">
				Here's a collection of my recent work, showcasing my skills in web development and design.
			</p>
		</div>

		<!-- Projects Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
			{#each projects as project}
				<div class="group relative overflow-hidden rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 backdrop-blur-sm">
					<div class="relative h-64 overflow-hidden">
						<div class="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900/90 z-10"></div>
						<img 
							src={project.image} 
							alt={project.title}
							class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
						/>
					</div>
					
					<div class="p-6 relative z-20 -mt-20">
						<h3 class="text-2xl font-semibold text-white mb-2 group-hover:text-orange-500 transition-colors">
							{project.title}
						</h3>
						<p class="text-gray-300 mb-4">
							{project.description}
						</p>
						<div class="flex flex-wrap gap-2 mb-4">
							{#each project.tags as tag}
								<span class="px-3 py-1 text-sm bg-orange-500/10 text-orange-500 rounded-full border border-orange-500/20">
									{tag}
								</span>
							{/each}
						</div>
						<a 
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center text-orange-500 hover:text-orange-400 transition-colors group"
						>
							View Project
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
								<path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
							</svg>
						</a>
					</div>
				</div>
			{/each}
		</div>

		<!-- Contact CTA -->
		<div class="text-center">
			<h2 class="text-3xl font-bold text-white mb-4">Interested in working together?</h2>
			<p class="text-gray-400 mb-8">Let's create something amazing together.</p>
			<a 
				href="/contact" 
				class="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-200 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25"
			>
				Get in Touch
			</a>
		</div>
	</div>
</div>
