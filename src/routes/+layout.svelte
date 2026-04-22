<script>
	import '../../src/app.css';
	import { page } from '$app/stores';
	let { children } = $props();

	const seoTitle = 'Ergit Beqiri | Full-Stack Software Engineer';
	const seoDescription =
		'Ergit Beqiri is a full-stack software engineer specializing in Svelte, SvelteKit, TypeScript, Supabase, Docker, Drizzle ORM, MySQL, MongoDB, and modern web product development.';
	const seoKeywords =
		'Ergit Beqiri, full-stack software engineer, Svelte developer, SvelteKit developer, TypeScript engineer, JavaScript developer, Supabase, Docker, Drizzle ORM, MySQL, MongoDB, web portfolio';
	const baseUrl = 'https://ergitbeqiri.com';
</script>

<svelte:head>
	<title>{seoTitle}</title>
	<meta name="description" content={seoDescription} />
	<meta name="keywords" content={seoKeywords} />
	<meta name="author" content="Ergit Beqiri" />
	<meta name="robots" content="index, follow, max-image-preview:large" />
	<link rel="canonical" href={`${baseUrl}${$page.url.pathname}`} />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Ergit Beqiri Portfolio" />
	<meta property="og:title" content={seoTitle} />
	<meta property="og:description" content={seoDescription} />
	<meta property="og:url" content={`${baseUrl}${$page.url.pathname}`} />
	<meta property="og:image" content={`${baseUrl}/og-cover.svg`} />
	<meta property="og:image:alt" content="Ergit Beqiri - Full-Stack Software Engineer Portfolio" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={seoTitle} />
	<meta name="twitter:description" content={seoDescription} />
	<meta name="twitter:image" content={`${baseUrl}/og-cover.svg`} />
</svelte:head>

{@render children()}
