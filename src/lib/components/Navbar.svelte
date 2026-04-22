<script>
	import { onMount } from 'svelte';

	let activeSection = 'home';
	let menuOpen = false;
	let isScrolled = false;

	const navItems = [
		['home', 'Home'],
		['portfolio', 'Projects']
	];

	const chapterMap = {
		home: '#',
		portfolio: '#',
		contact: '#'
	};

	function scrollToSection(id) {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
		activeSection = id;
		menuOpen = false;
	}

	onMount(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 10;
		};

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						activeSection = entry.target.id;
					}
				});
			},
			{ threshold: 0.45 }
		);

		['home', 'portfolio', 'contact'].forEach((id) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});

		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			observer.disconnect();
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<nav class="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6" aria-label="Primary navigation">
	<div
		class={`mx-auto max-w-8xl rounded-2xl border transition-all duration-300 ease-premium ${
			isScrolled
				? 'border-accent/20 bg-elevated/90 shadow-soft backdrop-blur-xl'
				: 'border-transparent bg-transparent'
		}`}
	>
		<div class="flex h-14 items-center justify-between px-4 sm:px-6 lg:px-7">
			<button onclick={() => scrollToSection('home')} class="group flex items-center gap-3">
				<div
					class="flex h-8 w-8 items-center justify-center rounded-xl border border-accent/35 bg-accent/10 font-mono text-xs font-semibold text-accent transition duration-300 ease-premium group-hover:bg-accent/20"
				>
					EB
				</div>
				<div class="leading-tight">
					<p class="font-display text-[13px] font-semibold text-primary">Ergit Beqiri</p>
					<p class="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
						Creative Frontend
					</p>
				</div>
			</button>

			<div class="hidden items-center gap-1 md:flex">
				{#each navItems as [id, label] (id)}
					<button
						onclick={() => scrollToSection(id)}
						class={`rounded-lg px-3.5 py-1.5 text-xs transition-all duration-200 ease-premium ${
							activeSection === id
								? 'bg-accent/15 text-primary'
								: 'text-secondary hover:bg-white/[0.03] hover:text-primary'
						}`}
					>
						<span class="font-mono text-[15px] tracking-[0.18em] text-muted">{chapterMap[id]}</span>
						<span class="ml-2 font-medium">{label}</span>
					</button>
				{/each}

				<button
					onclick={() => scrollToSection('contact')}
					class="ml-2.5 rounded-lg border border-accent/35 bg-accent/15 px-3.5 py-1.5 text-xs font-semibold text-accent transition-all duration-200 ease-premium hover:-translate-y-0.5 hover:bg-accent/25"
				>
					Let's Talk
				</button>
			</div>

			<button
				class="flex flex-col gap-1.5 rounded-lg p-1.5 text-primary transition hover:bg-white/[0.04] md:hidden"
				onclick={() => (menuOpen = !menuOpen)}
				aria-label="Toggle navigation menu"
			>
				<span class="h-0.5 w-5 rounded bg-current"></span>
				<span class="h-0.5 w-5 rounded bg-current"></span>
				<span class="h-0.5 w-5 rounded bg-current"></span>
			</button>
		</div>

		{#if menuOpen}
			<div class="border-t border-accent/15 px-4 pb-4 pt-3 md:hidden">
				<div class="flex flex-col gap-1.5">
					{#each navItems as [id, label] (id)}
						<button
							onclick={() => scrollToSection(id)}
							class={`rounded-lg px-4 py-3 text-left text-sm transition-all duration-200 ease-premium ${
								activeSection === id
									? 'bg-accent/15 text-primary'
									: 'text-secondary hover:bg-white/[0.03] hover:text-primary'
							}`}
						>
							<span class="font-mono text-[10px] tracking-[0.18em] text-muted"
								>{chapterMap[id]}</span
							>
							<span class="ml-2">{label}</span>
						</button>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</nav>
