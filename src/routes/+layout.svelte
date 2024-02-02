<script>
	import "../app.sass";

	/** @type {import('./$types').LayoutData} */
	export let data;
</script>



{#if data.includeAllTailwind}
	<script src="https://cdn.tailwindcss.com"></script>
{/if}

<header class="mx-auto max-w-6xl text-center mt-6">
	<nav>
		<a class="btn mx-2" href="/">Home</a>
		<a class="btn mx-2" href="/about-us">About Us</a>
		<a class="btn mx-2" href="/products">Products</a>
	</nav>
</header>

<slot />