<script >
    import { onMount } from 'svelte';
    import { Row, Col, Button, Icon, Spinner } from 'sveltestrap';
    import { fade, fly } from 'svelte/transition';
    import Note from '../components/Note.svelte';
    import CustomContainer from '../components/CustomContainer.svelte';
    import { push } from 'svelte-spa-router';
    import { getNotes } from '../actions/notesAppActions'

    let notes = [];

    onMount( async() => {
        notes = await getNotes();
    });

    const onDeleteNote = async() => {
        notes = await getNotes();
    }

</script>

<style>

</style>

<div in:fade>

    <CustomContainer>

        {#if notes.body}
            <h2>Notes: {notes.body.length}</h2>
        
            <Row>
                <Col class="col text-end">
                    <Button color='primary' on:click={() => push('/notes-app/create')}><Icon name="bookmark-plus" />  Add a note</Button>
                </Col>
            </Row>
        
            <div in:fly="{{ y: 200, duration: 2000 }}" out:fade>
                <Row>
                    {#each notes.body as note }
                        <Note 
                            note={note} 
                            onDeleteNote={onDeleteNote}
                        />
                    {/each}
                </Row>
            </div>
        {:else}
            <Spinner type='grow' color='secondary'/>
            <Spinner type='grow' color='secondary'/>
            <Spinner type='grow' color='secondary'/>
        {/if}
    </CustomContainer>

</div>