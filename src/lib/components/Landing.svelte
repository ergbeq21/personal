<script>
	function scrollToSection(id) {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<section
	id="home"
	class="relative mx-auto min-h-screen max-w-8xl overflow-hidden px-6 pb-12 pt-32 sm:pt-36 lg:px-10"
	aria-labelledby="hero-title"
>
	<div class="section-anchor hidden lg:block"></div>

	<div class="pointer-events-none absolute inset-0 -z-10">
		<div
			class="absolute -top-28 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/20 blur-[130px]"
		></div>
		<div
			class="absolute bottom-12 left-1/4 h-72 w-72 rounded-full bg-accent-soft blur-[115px]"
		></div>
		<div class="absolute right-20 top-32 h-36 w-36 border border-accent/25"></div>
	</div>

	<div class="grid min-h-[68vh] items-center gap-10 lg:grid-cols-12">
		<div class="lg:col-span-7">
			<div class="mb-6 flex items-center gap-4">
				<p class="editorial-label">Chapter 01 / Intro</p>
				<span class="h-px w-20 bg-accent/40"></span>
			</div>

			<h1
				id="hero-title"
				class="font-display text-[2.65rem] font-semibold leading-[1.04] tracking-tight text-primary sm:text-[4.2rem]"
			>
				Building digital experiences that feel crafted, clear, and memorable.
			</h1>

			<p class="mt-6 max-w-2xl text-base leading-7 text-secondary">
				I'm Ergit Beqiri, a full-stack software engineer building modern products with clean
				architecture, high performance, and user-centered execution from backend to interface.
			</p>

			<div class="mt-8 flex flex-wrap items-center gap-3">
				<button
					onclick={() => scrollToSection('portfolio')}
					class="rounded-lg border border-accent/35 bg-accent/20 px-5 py-2.5 text-sm font-semibold text-primary shadow-card transition-all duration-200 ease-premium hover:-translate-y-0.5 hover:bg-accent/30"
				>
					View Projects
				</button>

				<button
					onclick={() => scrollToSection('contact')}
					class="group inline-flex items-center gap-2 rounded-lg border border-stroke bg-white/[0.02] px-5 py-2.5 text-sm font-medium text-secondary transition-all duration-200 ease-premium hover:-translate-y-0.5 hover:border-accent/35 hover:text-primary"
				>
					Start a Conversation
			
				</button>
			</div>

			<div
				class="mt-8 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent-soft px-3.5 py-1.5"
			>
				<span class="h-2 w-2 animate-pulse rounded-full bg-accent"></span>
				<span class="font-mono text-[11px] uppercase tracking-[0.16em] text-secondary">
					Available for internships & collaborations
				</span>
			</div>
		</div>

		<div class="relative lg:col-span-5 lg:col-start-8 lg:-mt-8">
			<div class="rounded-2xl border border-stroke bg-elevated/70 p-5 shadow-soft">
				<p class="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
					Now / Based in Albania
				</p>
				<p class="mt-3 text-sm leading-6 text-secondary">
					Designing and shipping full-stack products with SvelteKit, TypeScript, Supabase, Docker,
					and database-first engineering.
				</p>
				<div class="mt-5 space-y-2.5 border-t border-stroke pt-4">
					<div class="flex items-center justify-between text-sm">
						<span class="text-muted">Primary stack</span>
						<span class="font-medium text-primary">SvelteKit + TypeScript</span>
					</div>
					<div class="flex items-center justify-between text-sm">
						<span class="text-muted">Role</span>
						<span class="font-medium text-primary">Full-Stack Engineer</span>
					</div>
				</div>
			</div>

		</div>
	</div>

	<div class="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
		{#each [['SvelteKit', 'Frontend architecture'], ['TypeScript', 'Type-safe interfaces'], ['Tailwind', 'Consistent UI system'], ['Supabase', 'Fast backend workflows']] as [tech, desc] (tech)}
			<div
				class="relative rounded-xl border border-stroke bg-surface/40 p-3.5 transition-all duration-200 ease-premium hover:-translate-y-0.5 hover:border-accent/35"
			>
				<span class="absolute right-3 top-3 h-2 w-2 rounded-full bg-accent/60"></span>
				<div class="text-[13px] font-semibold text-primary">{tech}</div>
				<div class="mt-1 text-xs text-muted">{desc}</div>
			</div>
		{/each}
	</div>
</section>
