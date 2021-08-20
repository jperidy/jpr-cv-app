<script>
    import { FormGroup, Label, Input } from 'sveltestrap';
    
    export let labelName = ""
    export let labelType = "h4";
    export let category = {};
    export let categories = [];

    const handleChange = (e) => {
        category = categories.filter(x => x.value === e.target.value)[0];
    };

</script>

<FormGroup>
    <Label class={labelType}>{labelName}</Label>
    <Input type="select" bind:value={category.value} on:change={handleChange}>
        {#each categories as item}
            <option value={item.value}>
                {item.value}
            </option>
        {/each}
    </Input>
</FormGroup>