<script>
	export let data;

	$: page = data.page;
</script>

<svelte:head>
	<title>{page.title}</title>
	<meta name="description" content={''} />
</svelte:head>

<main class="max-w-6xl prose mx-auto mt-8 px-5">
	<h1>{page.title} {Date.now()}</h1>
</main>
