<script>
	import '../../src/app.css';
	import { page } from '$app/stores';
	let { children } = $props();
</script>

<nav class="fixed w-full bg-transparent py-6 z-50">
	<div class="max-w-7xl mx-auto px-4">
		<div class="flex justify-center space-x-12">
			<a 
				href="/" 
				class="relative group {$page.url.pathname === '/' ? 'text-orange-500' : 'text-white hover:text-orange-500'}"
			>
				Home
				<span class="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform {$page.url.pathname === '/' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'} transition-transform duration-300"></span>
			</a>
			<a 
				href="/portfolio" 
				class="relative group {$page.url.pathname === '/portfolio' ? 'text-orange-500' : 'text-white hover:text-orange-500'}"
			>
				Portfolio
				<span class="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform {$page.url.pathname === '/portfolio' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'} transition-transform duration-300"></span>
			</a>
			<a 
				href="/contact" 
				class="relative group {$page.url.pathname === '/contact' ? 'text-orange-500' : 'text-white hover:text-orange-500'}"
			>
				Contact
				<span class="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform {$page.url.pathname === '/contact' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'} transition-transform duration-300"></span>
			</a>
		</div>
	</div>
</nav>


	{@render children()}


<style>
	/* Add smooth scrolling to the whole page */
	:global(html) {
		scroll-behavior: smooth;
	}
</style>



