<script>
    import { Container, Row, Col } from 'sveltestrap';
    export let size = { xs: 12, sm:10, md:10, lg:10 }
</script>

<Container>
    <Row>
        <Col 
            xs={{size:size.xs, offset:(12-size.xs)/2}}
            sm={{size:size.sm, offset:(12-size.sm)/2}}
            md={{size:size.md, offset:(12-size.md)/2}}
            lg={{size:size.lg, offset:(12-size.lg)/2}}
        >
            <slot></slot>
        </Col>
    </Row>
</Container>