<script>
	let formData = {
		name: '',
		email: '',
		message: ''
	};
	let formError = '';

	function handleSubmit() {
		if (!formData.name || !formData.email || !formData.message) {
			formError = 'Please fill out all fields before sending your message.';
			return;
		}

		formError = '';
		const subject = encodeURIComponent(`New message from ${formData.name}`);
		const body = encodeURIComponent(
			`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
		);

		window.location.href = `mailto:ergitbeqiri07@gmail.com?subject=${subject}&body=${body}`;
	}
</script>

<section
	id="contact"
	class="relative overflow-hidden px-6 py-24 lg:px-10"
	aria-labelledby="contact-title"
>
	<div class="section-anchor hidden lg:block"></div>
	<div class="pointer-events-none absolute inset-0 -z-10">
		<div
			class="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-accent-soft blur-[120px]"
		></div>
		<div class="absolute right-16 top-16 h-32 w-32 border border-accent/20"></div>
	</div>

	<div class="mx-auto max-w-8xl">
		<div class="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
			<div>
				<p class="editorial-label mb-3">Chapter 04 / Contact</p>
				<h2
					id="contact-title"
					class="font-display text-[2rem] font-semibold text-primary sm:text-[2.75rem]"
				>
					Let's Build Something Great
				</h2>
			</div>
			<p class="max-w-md text-sm leading-6 text-secondary lg:text-right">
				Have a project, idea, or opportunity? Send a message and expect a response within 24 hours.
			</p>
		</div>

		<div class="grid gap-10 lg:grid-cols-12">
			<div class="space-y-8 lg:col-span-4">
				<div>
					<p class="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Email</p>
					<a
						href="mailto:ergitbeqiri07@gmail.com"
						class="text-primary transition hover:text-accent"
					>
						ergitbeqiri07@gmail.com
					</a>
				</div>

				<div>
					<p class="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Social</p>

					<div class="flex gap-3">
						<a
							href="https://github.com/ergbeq21"
							target="_blank"
							rel="noopener noreferrer"
							class="rounded-lg border border-stroke bg-surface/50 px-4 py-2 text-secondary transition-all duration-200 ease-premium hover:-translate-y-0.5 hover:border-accent/35 hover:text-accent"
						>
							GitHub
						</a>

						<a
							href="https://www.linkedin.com/in/ergit-beqiri/"
							target="_blank"
							rel="noopener noreferrer"
							class="rounded-lg border border-stroke bg-surface/50 px-4 py-2 text-secondary transition-all duration-200 ease-premium hover:-translate-y-0.5 hover:border-accent/35 hover:text-accent"
						>
							LinkedIn
						</a>
					</div>
				</div>

				<div>
					<p class="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Location</p>
					<p class="text-secondary">Shkoder, Albania</p>
				</div>

				<div class="rounded-xl border border-stroke bg-surface/50 px-4 py-4">
					<p class="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
						Response window
					</p>
					<p class="mt-2 text-sm text-secondary">Within one business day.</p>
				</div>
			</div>

			<div
				class="relative rounded-3xl border border-stroke bg-elevated/70 p-6 shadow-card lg:col-span-8 lg:ml-6"
			>
				<div class="absolute -top-8 right-8 hidden items-center gap-2 lg:flex">
					<p class="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Send details</p>
					<span class="text-accent">↓</span>
				</div>
				<div class="space-y-4">
					<div class="space-y-2">
						<label for="name" class="text-sm text-secondary">Name</label>
						<input
							id="name"
							bind:value={formData.name}
							type="text"
							placeholder="Your name"
							class="w-full rounded-xl border border-stroke bg-surface/60 px-3.5 py-2.5 text-sm text-primary outline-none transition-all duration-200 ease-premium placeholder:text-muted focus:border-accent/55"
						/>
					</div>

					<div class="space-y-2">
						<label for="email" class="text-sm text-secondary">Email</label>
						<input
							id="email"
							bind:value={formData.email}
							type="email"
							placeholder="Email address"
							class="w-full rounded-xl border border-stroke bg-surface/60 px-3.5 py-2.5 text-sm text-primary outline-none transition-all duration-200 ease-premium placeholder:text-muted focus:border-accent/55"
						/>
					</div>

					<div class="space-y-2">
						<label for="message" class="text-sm text-secondary">Message</label>
						<textarea
							id="message"
							bind:value={formData.message}
							rows="4"
							placeholder="Tell me about your project..."
							class="w-full rounded-xl border border-stroke bg-surface/60 px-3.5 py-2.5 text-sm text-primary outline-none transition-all duration-200 ease-premium placeholder:text-muted focus:border-accent/55"
						></textarea>
					</div>

					{#if formError}
						<p class="text-sm text-rose-300">{formError}</p>
					{/if}

					<button
						onclick={handleSubmit}
						class="w-full rounded-xl border border-accent/35 bg-accent/20 px-5 py-2.5 text-sm font-semibold text-primary transition-all duration-200 ease-premium hover:-translate-y-0.5 hover:bg-accent/30"
					>
						Send Message
					</button>
					<p class="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
						I usually respond within one business day.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
