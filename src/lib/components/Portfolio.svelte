<script>
	import securepass from '$lib/assets/securepass.png';
	import furniture from '$lib/assets/furniture.png';
	import kanban from '$lib/assets/kanban.png';
	import instaClone from '$lib/assets/instaClone.png';
	import TicTakToe from '$lib/assets/TicTakToe.png';

	import {
		Building2,
		Sofa,
		X,
		Camera,
		Grid2x2,
		ArrowUpRight,
		ExternalLink,
		Star
	} from 'lucide-svelte';

	const projects = [
		{
			title: 'SecurePass Embassy',
			desc: 'A full-featured event management platform built for the Austrian Embassy. Import and manage guest lists, create events, send emails with one click, monitor attendance via a real-time dashboard, and automate reminder emails.',
			image: securepass,
			category: 'Web Platform',
			icon: Building2,
			year: '2026',
			index: '01',
			stack: ['SvelteKit', 'Supabase', 'PostgreSQL', 'Resend', 'TailwindCSS'],
			link: 'https://www.securepass.at/',
			featured: true
		},
		{
			title: 'Furniture Configurator',
			desc: 'Interactive 3D tool to customize furniture with real-time materials and finishes.',
			image: furniture,
			category: '3D / E-Commerce',
			icon: Sofa,
			year: '2026',
			index: '02',
			stack: ['Three.js', 'React', 'TypeScript', 'TailwindCSS'],
			link: 'https://furniture-configurator-nine.vercel.app/'
		},
		{
			title: 'Kanban Board',
			desc: 'Task manager with drag-and-drop lanes and CSV export.',
			image: kanban,
			category: 'Productivity',
			icon: X,
			year: '2025',
			index: '03',
			stack: ['React', 'TypeScript', 'Zustand', 'TailwindCSS'],
			link: 'https://kanban-plum.vercel.app/'
		},
		{
			title: 'Instagram Clone',
			desc: 'Photo-sharing app with feed, likes, and comments.',
			image: instaClone,
			category: 'Social App',
			icon: Camera,
			year: '2025',
			index: '04',
			stack: ['Next.js', 'Supabase', 'Prisma', 'TailwindCSS'],
			link: 'https://insta-gules-delta.vercel.app/'
		},
		{
			title: 'Tic-Tac-Toe',
			desc: 'Clean two-player browser game with animations.',
			image: TicTakToe,
			category: 'Game',
			icon: Grid2x2,
			year: '2024',
			index: '05',
			stack: ['React', 'CSS Modules'],
			link: 'https://react-tic-tac-toe-phi-wheat.vercel.app/'
		}
	];

	const featured = projects[0];
	const rest = projects.slice(1);
</script>

<section
	id="portfolio"
	class="relative overflow-hidden px-6 py-24 lg:px-14"
	aria-labelledby="portfolio-title"
>
	<div class="section-anchor left-auto right-0 hidden lg:block"></div>
	<div class="pointer-events-none absolute inset-0 -z-10">
		<div class="absolute -left-28 top-12 h-96 w-96 rounded-full bg-accent-soft blur-[120px]"></div>
		<div
			class="absolute bottom-12 right-0 h-80 w-80 rounded-full bg-accent-soft blur-[110px]"
		></div>
		<div class="absolute right-24 top-44 h-32 w-32 border border-accent/20"></div>
	</div>

	<div class="mx-auto max-w-8xl">
		<div class="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
			<div>
				<p class="editorial-label mb-4">Chapter 03 / Selected Work</p>
				<Star size={14} class="text-accent" />
				<h2
					id="portfolio-title"
					class="mt-3 font-display text-4xl font-semibold text-primary lg:text-5xl"
				>
					Featured
					<span
						class="bg-gradient-to-r from-accent via-blue-300 to-accent-strong bg-clip-text text-transparent"
					>
						Projects
					</span>
				</h2>
			</div>
			<p class="max-w-sm text-sm leading-6 text-secondary lg:text-right">
				Real products shipped with performance, conversion, and long-term maintainability in mind.
			</p>
		</div>

		<a
			href={featured.link}
			class="group relative mb-7 grid overflow-hidden rounded-3xl border border-stroke bg-elevated/70 shadow-card transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:border-accent/35 lg:grid-cols-12"
			target="_blank"
			rel="noopener noreferrer"
		>
			<div
				class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
			></div>
			<div class="absolute left-8 top-6 z-20 hidden lg:block">
				<p class="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">Start here -&gt;</p>
			</div>

			<div class="relative min-h-[250px] overflow-hidden lg:col-span-7 lg:-mr-6">
				<img
					src={featured.image}
					class="h-full w-full object-cover opacity-75 transition duration-300 ease-premium group-hover:scale-[1.03] group-hover:opacity-85"
					alt={featured.title}
				/>
				<div class="absolute inset-0 bg-gradient-to-br from-base/40 to-transparent"></div>
			</div>

			<div class="flex flex-1 flex-col justify-between p-6 lg:col-span-5 lg:pl-10">
				<div>
					<div class="mb-5 flex items-center justify-between">
						<div class="flex items-center gap-2.5">
							<div
								class="flex h-9 w-9 items-center justify-center rounded-lg border border-accent/25 bg-accent/10"
							>
								<svelte:component this={featured.icon} size={16} class="text-accent" />
							</div>
							<span
								class="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-[11px] text-accent"
							>
								{featured.category}
							</span>
							<span
								class="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-[11px] text-emerald-300"
							>
								Live
							</span>
						</div>
						<span class="text-xs text-muted">{featured.index}</span>
					</div>

					<h3 class="font-display text-[1.65rem] font-semibold text-primary">{featured.title}</h3>
					<p class="mt-2.5 text-sm leading-6 text-secondary">{featured.desc}</p>
				</div>

				<div>
					<div class="mt-5 flex flex-wrap gap-2">
						{#each featured.stack as tech (tech)}
							<span
								class="rounded-md border border-stroke bg-surface/80 px-2.5 py-1 text-xs text-muted"
							>
								{tech}
							</span>
						{/each}
					</div>

					<div class="mt-5 flex items-center justify-between border-t border-stroke pt-3.5">
						<span class="text-xs text-muted">{featured.year}</span>
						<div
							class="flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/10 px-4 py-2 text-sm text-accent transition duration-200 ease-premium group-hover:bg-accent/20"
						>
							Visit site <ArrowUpRight size={14} />
						</div>
					</div>
				</div>
			</div>
		</a>

		<div class="mb-5 flex items-center justify-between border-b border-stroke pb-3">
			<p class="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">Curated archive</p>
			<p class="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">04 projects</p>
		</div>

		<div class="grid grid-cols-1 gap-4 md:grid-cols-6">
			{#each rest as project, idx (project.title)}
				<a
					href={project.link}
					target="_blank"
					rel="noopener noreferrer"
					class={`group relative flex flex-col overflow-hidden rounded-2xl border border-stroke bg-elevated/60 shadow-card transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:border-accent/30 ${
						idx === 0
							? 'md:col-span-4'
							: idx === 1
								? 'md:col-span-2 md:mt-10'
								: idx === 2
									? 'md:col-span-2 md:-mt-8'
									: 'md:col-span-4'
					}`}
				>
					<div
						class="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
						style="background: radial-gradient(ellipse at 50% 0%, rgba(95,168,255,0.16), transparent 72%);"
					></div>
					<div
						class="absolute right-3 top-3 z-20 rounded-full border border-accent/30 bg-base/70 px-2 py-1"
					>
						<span class="font-mono text-[10px] tracking-[0.14em] text-accent">{project.index}</span>
					</div>

					<div class={`relative overflow-hidden ${idx === 0 || idx === 3 ? 'h-52' : 'h-40'}`}>
						<img
							src={project.image}
							class="h-full w-full object-cover opacity-70 transition duration-300 ease-premium group-hover:scale-[1.03] group-hover:opacity-85"
							alt={project.title}
						/>
					</div>

					<div class="flex flex-1 flex-col p-4">
						<div class="mb-3 flex items-center gap-2">
							<div
								class="flex h-7 w-7 items-center justify-center rounded-lg border border-accent/20 bg-accent/10"
							>
								<svelte:component this={project.icon} size={13} class="text-accent" />
							</div>
							<span class="text-xs text-muted">{project.category}</span>
							<span class="font-mono text-[10px] uppercase tracking-[0.15em] text-accent/80"
								>Case study</span
							>
						</div>

						<h3 class="font-display text-[15px] font-semibold text-primary">{project.title}</h3>
						<p class="mt-1.5 flex-1 text-xs leading-6 text-secondary">{project.desc}</p>

						<div class="mt-3.5 flex items-center justify-between border-t border-stroke pt-2.5">
							<span class="text-xs text-muted">{project.year}</span>
							<div
								class="flex items-center gap-1 text-xs text-accent transition-all duration-200 ease-premium group-hover:gap-2"
							>
								View <ExternalLink size={11} />
							</div>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>
