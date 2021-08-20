<script>
    import { Row, Col, Spinner } from 'sveltestrap'
    import CustomContainer from '../components/CustomContainer.svelte';
    import { onMount } from 'svelte';
    import { getHomePageContent } from '../actions/homePageActions'
    import AppCard from '../components/AppCard.svelte';

    let homeContent = [];

    onMount(async() => {
          homeContent = await getHomePageContent();
    });

    const getHomeContents = (homeContents, name) => {
        return homeContents.filter(x => x.name === name)[0].value;
    }
</script>

<CustomContainer>
    <Row>
        <!-- main_title -->
        {#if homeContent.homeContents}
            <h1 class='my-5 text-center'>{getHomeContents(homeContent.homeContents, 'main_title')}</h1>
        {:else}
            <Spinner type='grow' color='secondary'/>
        {/if}

        <!-- title_2_the_first -->
        {#if homeContent.homeContents}
            <h2 class='mb-3 text-center'>{getHomeContents(homeContent.homeContents, 'title_2_1')}</h2>
        {:else}
            <Spinner type='grow' color='secondary'/>
        {/if}

        <!-- title_3_the_first -->
        {#if homeContent.homeContents}
            <h3 class='mb-3 text-center'>{getHomeContents(homeContent.homeContents, 'title_3_1')}</h3>
        {:else}
            <Spinner type='grow' color='secondary'/>
        {/if}

        <!-- Profil image -->
        <div class="image-container mb-5">
            <img src="images/profilimage.jpg" alt="illustration for application" class="image">
        </div>

        <!-- description -->
        {#if homeContent.homeContents}
            
            {#each  getHomeContents(homeContent.homeContents, 'description_1_test') as content}
                {#if content.type === 'p'}
                    <p>{content.value}</p>
                {:else if content.type === 'ul'}
                    <ul>
                    {#each content.value as item}
                        <li>{item}</li>
                    {/each}
                    </ul>
                {/if}
            {/each}
        {:else}
            <Spinner type='grow' color='secondary'/>
        {/if}

        <!-- <p>Diplomé en 2012 de Supélec puis en 2013 du mastère sépcialisé HEC Entrepreneur, je démarre une carrière dans le conseil en transformation digitale des grandes entreprises françaises. Après 8 années d'expérience et différentes casquettes à mon actif (consultant, commercial, manager de carrière) j'ai décidé de recentrer mes activités sur mon coeur de formation l'ingénierie, une activité porteuse de sens et source d'épanouissement personnel.</p>
        <p>Pour y parvenir, je me suis appuyé sur mon principal atout : ma capacité à explorer en autodidacte des technologies, méthodes et bonnes pratiques associées. Et pour ça mes 8 années de conseil ont été une expérience précieuse. Ces années m'ont également permis :</p>
        <ul>
            <li><strong>De prendre du recul face aux enjeux</strong> : Développer une application est une chose finalement assez simple, mais s'assurer que celle-ci réponde aux attentes des clients, propose les parcours adéquates, soit robuste, évolutive et maintenable dans le temps est une autre affaire. Prendre le bon recul sur ces éléments permet de faire les choix décisifs sur l'architecture, d'intégrer des tests dans le code là où ça a du sens et enfin d'embarquer au bon moment les utilisateurs finaux pour éprouver l'application.</li>
            <li><strong>D'être engagé vis à vis de mes clients</strong> : Un des facteurs clés d'une bonne relation client est d'aller en amont des demandes de ce dernier. Le travail d'un développeur peut s'apparenter à un travail entièrement fait en back-office. Cependant cette vision est vouée à l'échec pour votre produit, le développeur est le premier à tester votre produit, il doit se projeter sur ses usages et avoir l'occasion d'échanger régulièrement avec vous pour vous partager ses points d'attentions et idées d'améliorations.</li>
            <li><strong>D'être en recherche continue d'améliorations</strong> : Nous le savons tous, l'ADN même de la technologie est de sens cesse évoluer, je m'applique donc à réserver du temps chaque semaine pour faire de la veille et éprouver des nouveaux langages, frameworks, méthodes afin de m'améliorer continuellement (structure, méthodes, vitesse, etc.).</li>
        </ul>
        <p>Vous trouverez ainsi quelques projets que j'expose pour présenter au travers d'applications relativement simples les savoir-faire que j'ai pu développer. Je dispose en ce moment même de compétences sur :</p>
        <ul>
            <li><strong>Langages</strong> : javascript, python</li>
            <li><strong>Frameworks</strong> : ExpressJS, React, React native, Svelte, Sveltekit, Django</li>
            <li><strong>Systèmes</strong> : Docker, Kubernetes, Nginx</li>
            <li><strong>Hébergement</strong> : OVH, GCP, AWS, Azure</li>
        </ul> -->
    </Row>
    
    <Row class='my-5'>
        <!-- title_2_2 -->
        {#if homeContent.homeContents}
            <h2 class='my-5 text-center'>{getHomeContents(homeContent.homeContents, 'title_2_2')}</h2>
        {:else}
            <Spinner type='grow' color='secondary'/>
        {/if}

        {#if homeContent.projects}
            {#each homeContent.projects as project }
                <Col xs={12} md={4}>
                    <AppCard 
                        name={project.name}
                        img={project.img}
                        description={project.description}
                        url={project.url}
                        externe={project.externe}
                    />
                </Col>
            {/each}
        {:else}
            <Col class="text-center">
                <Spinner type='grow' color='secondary'/>
                <Spinner type='grow' color='secondary'/>
                <Spinner type='grow' color='secondary'/>
            </Col>
        {/if}
        
    </Row>

    
</CustomContainer>

<style>
    .image-container{
        position: relative;
        height: 250px;
        width: 250px;
        margin: auto;
    }
    .image {
        transition: .5s ease;
        opacity: 1;
        width: 100%;
        height: 100%;
        object-fit: cover;
        -webkit-border-radius: 100px / 100px;
        -moz-border-radius:    100px / 100px;
        border-radius: 100px / 100px;
    }
    p {
        text-align: justify;
    }
    ul {
        text-align: justify;
        margin-left: 20px;
    }
    li {
        margin-top: 10px;
    }
</style>