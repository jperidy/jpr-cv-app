<script>
	import Router from 'svelte-spa-router';
	import { wrap } from 'svelte-spa-router/wrap';
	//import { push } from 'svelte-spa-router';

	import Nav from "./components/Nav.svelte";

	import Home from "./screen/Home.svelte";
	import Others from "./screen/Others.svelte";
	import Footer from "./components/Footer.svelte";
	import NotesApp from './screen/NotesApp.svelte';
	import NotesAppCreate from './screen/NotesAppCreate.svelte';
	import WeatherApp from './screen/WeatherApp.svelte';

	const routes = {
		'/': wrap({ component: Home}),
		'/others': wrap({ component: Others }),
		'/notes-app': wrap({ component: NotesApp }),
		'/notes-app/create': wrap({ component: NotesAppCreate }),
		'/notes-app/create/:id': wrap({ component: NotesAppCreate }),
		'/weather-app': wrap({ component: WeatherApp }),
	}

</script>

<header>
	<Nav />
</header>

<main>
	<Router { routes }/>
</main>

<footer>
	<Footer />
</footer>


<style>
	:global(body) {
		/* this will apply to <body> */
		padding: 0;
	}
	main {
		margin-top: 15vh;
		min-height: 80vh;
	}
</style>