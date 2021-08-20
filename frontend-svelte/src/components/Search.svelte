<script>
    import { Input, Button, InputGroup } from 'sveltestrap';
    import { createEventDispatcher } from 'svelte';

    export let city = 'paris';
    let timer;

    const dispatch = createEventDispatcher();

    const handleSubmit = () => {
        dispatch('message', { city: city });
    };

    const debounce = (param) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            city = param;

            dispatch('message', { city: city });
        }, 400);
    };
</script>

<form on:submit|preventDefault={handleSubmit}>
    <InputGroup>
        <Input 
            type="text"
            placeholder="Enter city"
            on:keyup={({ target: { value }}) => debounce(value)}
        />
        <Button type="submit">Submit</Button>
        <!-- <InputGroupAddon type="submit">Submit</InputGroupAddon> -->
    </InputGroup>
</form>