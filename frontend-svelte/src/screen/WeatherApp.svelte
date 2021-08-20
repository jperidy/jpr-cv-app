<script>

	import { onMount } from 'svelte';
	import { Container, Row, Col } from 'sveltestrap';
    import ListWeather from '../components/ListWeather.svelte';
    import Search from '../components/Search.svelte';
    import { getWeather } from '../actions/weatherAppActions'

	let city = 'paris';
	let cityFound = 'paris'
	let items = [];

	onMount(async() => {
		const result = await getWeather(city);
        if (result.ok) {
            cityFound = result.cityFound;
            items = result.items;
        }
	});


	const handleCall = async(event) => {
		
		if (event.detail.city) {
			const result = await getWeather(event.detail.city);
			if (result.ok) {
				cityFound = result.cityFound;
				items = result.items;
			}
		}
	};

</script>

<Container>
	<Row class="mt-3">
		<Search bind:city on:message={handleCall}/>
	</Row>
	<Row class="mt-3">
		<h1>{cityFound}</h1>
	</Row>


	<Row class="mt-3">

		{#if items.length > 0}
			<Col md={4} sm={12} class='text-center'>
				<h3>Today</h3>
				<ListWeather {items} day={0} />
			</Col>
			<Col md={4} sm={12} class='text-center'>
				<h3>Day +1</h3>
				<ListWeather {items} day={1} />
			</Col>
			<Col md={4} sm={12} class='text-center'>
				<h3>Day + 2</h3>
				<ListWeather {items} day={2} />
			</Col>
		{/if}

		<!-- <ListWeather {items} /> -->
	</Row>

</Container>
