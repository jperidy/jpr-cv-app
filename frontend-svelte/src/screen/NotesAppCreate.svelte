<script>
    import { onMount } from 'svelte';
    import { FormGroup, Input, Button, Label, Icon } from 'sveltestrap';
    import { push } from 'svelte-spa-router';
    import List from '../components/List.svelte';
    import CustomContainer from '../components/CustomContainer.svelte';
    import { createOneNote, getOneNote, updateOneNote } from '../actions/notesAppActions';

    let title = '';
    let body = '';
    let date = '';
    let category = {value: 'cat1', color: 'primary'};
    let categories = [
        {value: 'cat1', color: 'primary'}, 
        {value: 'cat2', color: 'secondary'},
        {value: 'cat3', color: 'warning'}
    ];

    export let params = {};

    let errorAction = '';

    onMount( async () => {

        let noteValue = {};

        if (params.id) {
            noteValue = await getOneNote(params.id);
            title = noteValue.note.title;
            body = noteValue.note.body;
            date = noteValue.note.date;
            category = noteValue.note.category;
        }

    });

    const handleSubmit = async () => {
        errorAction = '';

        if (params.id) {
        
            const note = {
                id: params.id,
                title: title,
                body: body,
                date: date,
                category: category
            }
            
            const res = await updateOneNote(note);

            if (res.ok) {
                push('/notes-app');
            } else {
                const data = await res.json();
                errorAction = data.message;
                console.log(errorAction);
            }

        } else {

            const note = {
                        title: title,
                        body: body,
                        date: date,
                        category: category
                    };

            const res = await createOneNote(note);

            if (res.ok) {
                push('/notes-app');
            } else {
                errorAction = res.message;
                console.log(errorAction);
            }
        }
    };

    const handleCancel = () => {
        title = "";
        body = "";
        date = "";
        category = {};

        push('/notes-app');
    };

</script>

{#if errorAction}
    <Icon name="exclamation-triangle-fill" class="text-danger"/>  <span class="text-danger">{errorAction}</span>
{/if}

<CustomContainer>
    <form on:submit|preventDefault={handleSubmit}>
        <FormGroup>
            <Label class="h4">Title</Label>
            <Input type="text" bind:value={title} />
        </FormGroup>

        <FormGroup>
            <Label class="h4">Date</Label>
            <Input type="date" bind:value={date} />
        </FormGroup>

        <List 
            labelName = "Category"
            labelType = "h4"
            bind:category = {category}
            categories = {categories}
        />
                
        <FormGroup>        
            <Label class="h4">Body</Label>
            <Input type="textarea" bind:value={body} />       
        </FormGroup>

        <FormGroup>
            <Button type="button" color="light" on:click={handleCancel}>Cancel</Button>
            {#if params.id}
                <Button type="submit" color="primary">Update</Button>
            {:else}
                <Button type="submit" color="primary">Create</Button>
            {/if}
                
        </FormGroup>        
    </form>
</CustomContainer>