<script>
	export let data;

	$: page = data.page;

	console.log('page', data);
</script>

<svelte:head>
	<title>{page?.title}</title>
	<meta name="description" content={''} />
</svelte:head>

<main class="max-w-6xl prose mx-auto mt-8 px-5">
	<h1>{page?.title} {page?.time}</h1>
</main>