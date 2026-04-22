<script>
	const techStack = [
		'Svelte / SvelteKit',
		'JavaScript / TypeScript',
		'Supabase',
		'Docker',
		'Drizzle ORM',
		'MySQL',
		'MongoDB',
		'Modern web technologies'
	];
</script>

<section
	id="about"
	class="mx-auto mt-16 max-w-8xl px-6 py-12 lg:px-10"
	aria-labelledby="about-title"
>
	<div class="relative rounded-3xl border border-stroke bg-elevated/55 p-8 shadow-soft lg:p-10">
		<div class="absolute -top-4 left-8 rounded-full border border-accent/30 bg-base px-3 py-1">
			<p class="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">Chapter 02 / About</p>
		</div>

		<div class="grid gap-10 lg:grid-cols-12">
			<div class="lg:col-span-7">
				<p class="editorial-label mb-4">Profile Notes</p>
				<h2
					id="about-title"
					class="font-display text-[1.9rem] font-semibold leading-tight text-primary sm:text-[2.25rem]"
				>
					Ergit Beqiri - Full-Stack Software Engineer
				</h2>
				<p class="mt-5 max-w-2xl text-[15px] leading-7 text-secondary">
					I build production-ready digital products with a full-stack approach focused on
					engineering quality, scalability, and business impact. From data modeling to frontend UX,
					I deliver systems that are fast, maintainable, and built for long-term product growth.
				</p>
				<p class="mt-3 max-w-2xl text-[15px] leading-7 text-secondary">
					My work combines clean architecture, consistent interfaces, and pragmatic technical
					decisions to ship reliable products that users trust and teams can evolve confidently.
				</p>

				<div class="mt-6 grid gap-2.5 text-sm text-muted sm:grid-cols-3">
					<div class="rounded-lg border border-stroke bg-surface/60 px-4 py-3">
						<p class="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">Engineering</p>
						<p class="mt-2">Robust architecture and maintainable implementation.</p>
					</div>
					<div class="rounded-lg border border-stroke bg-surface/60 px-4 py-3">
						<p class="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">Product</p>
						<p class="mt-2">Focused on user value, usability, and performance.</p>
					</div>
					<div class="rounded-lg border border-stroke bg-surface/60 px-4 py-3">
						<p class="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">Delivery</p>
						<p class="mt-2">From idea to production with clear execution.</p>
					</div>
				</div>
			</div>

			<div class="relative lg:col-span-5">
				<div class="absolute -left-4 top-0 hidden h-full items-center lg:flex">
					<div class="relative h-full w-px bg-stroke">
						<span
							class="absolute left-1/2 top-[15%] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-accent"
						></span>
						<span
							class="absolute left-1/2 top-[48%] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-accent/70"
						></span>
						<span
							class="absolute left-1/2 top-[82%] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-accent/50"
						></span>
					</div>
				</div>

				<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
					{#each [['Full-Stack', 'Software engineering across frontend, backend, and data layer'], ['Tech Stack', techStack.join(' • ')], ['Quality', 'Performance, clean code, and production reliability'], ['Focus', 'Building modern web products end-to-end']] as [value, label] (label)}
						<div
							class="rounded-xl border border-stroke bg-surface/70 px-4 py-3.5 transition duration-200 ease-premium hover:border-accent/35"
						>
							<h3 class="text-base font-semibold text-primary">{value}</h3>
							<p class="mt-1 text-xs leading-6 text-muted">{label}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
