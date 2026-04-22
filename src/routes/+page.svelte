<script>
	import About from '$lib/components/About.svelte';
	import Landing from '$lib/components/Landing.svelte';
	import Portfolio from '$lib/components/Portfolio.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<main
	class="min-h-screen scroll-smooth bg-base text-primary"
	aria-label="Ergit Beqiri portfolio website"
>
	<Navbar />
	<Landing />
	<About />
	<Portfolio />
	<Contact />
	<Footer />
</main>
