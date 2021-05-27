<script>
    import { onMount } from 'svelte';
    import { Http } from '@Services';
    import {language} from '../../Store/language';
    import Skeleton from '@Components/Works/Skeleton'
    import {t} from '../../Services/Dictionary';
    import {link} from 'svelte-spa-router'

    let selectedLanguage;
    let data = [];
    let workList = [];
    let loading = true;

    onMount(async function() {
        const url = "https://wp.marielozada.com/wp-json/wp/v2/posts?categories=4,7&per_page=100";
        const response = await Http.Request('GET', url);
        data = response;
        loading = false;
        filterData();
    });

    const filterData = () => {
        workList = selectedLanguage == 'es' ? 
            data.filter(work => work.categories[0] == '4') :
            data.filter(work => work.categories[0] == '7');
    }

	language.subscribe(value => {
		selectedLanguage = value;
        filterData();
	});
    
</script>

<style src="./style.scss">
</style>

<div class="works" id="works">
        <div class="row">
            <div class="title-decorator"></div>
            <div class="works-decorator"></div>
            <h3>{t(selectedLanguage, 'works')}</h3>
        {#if loading}
            <Skeleton/>        
        {:else if !loading}

            {#each workList as piece}
            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">

                <a href="{`/piece/${piece.id}`}" use:link>
                <div class="card">
                    <div class="card-body">
                        <img alt="Reportaje" src="{piece.imagen ? piece.imagen : 'https://via.placeholder.com/350x350'}">
                        <h4 class="card-title text-center">{@html piece.title.rendered}</h4>
                    </div>
                </div>
                </a>
            </div>
            {/each}

        {/if}
    </div>
</div>