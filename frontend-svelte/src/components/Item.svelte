<script>
    import { Col, Card, CardBody, CardHeader } from 'sveltestrap';
    export let date;
    export let desc;
    export let iconUrl;
    export let min;
    export let max;
    export let temp;
</script>

<Col>
    <Card class="mb-3">
        <CardHeader>
            <div class="inner-header">
                <span>{date}</span>
                <span>
                    <span>{temp} &#8451;</span>
                    <img src={iconUrl} width="50" height="50" alt={desc}>
                </span>
            </div>
        </CardHeader>
        <CardBody>
            <div class='inner-body'>
                <span>Low: {min} &#8451;</span>
                <span>High: {max} &#8451;</span>
            </div>
        </CardBody>
    </Card>
</Col>

<style>
	.inner-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.inner-body {
		min-height: 1px;
		display: flex;
		justify-content: space-between;
	}

	.inner-body span {
		display: block;
	}
</style>