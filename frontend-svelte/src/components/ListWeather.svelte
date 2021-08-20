<script>
    import { Container, Row } from 'sveltestrap';
    import Item from './Item.svelte';
	import dateformat from 'dateformat';

    export let items;
	export let day = 0;

	const day0 = Date.now();

	let dayTest = new Date(Date.now());
	dayTest = dayTest.setDate(dayTest.getDate() + day);
	dayTest = dateformat(dayTest, "mmm dS, yyyy, h TT").substring(0,14);

</script>


<Container>
	<Row cols={{lg: 1, md:1, sm:1, xs:1}}>
		{#each items as item (item.id) }
			{#if item.date.substring(0,14) === dayTest }
				<Item {...item} />
			{/if}
		{/each}
	</Row>
</Container>


<!-- <script>
    import { Container, Row } from 'sveltestrap';
    import Item from './Item.svelte';

    export let items;
</script> -->

<!-- <Container>
	<Row cols={{lg: 3, md:2, sm:1, xs:1}}>
		{#each items as item (item.id) }
			<Item {...item} />
		{/each}
	</Row>
</Container> -->

