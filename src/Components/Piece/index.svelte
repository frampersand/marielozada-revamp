<script>
import { onMount } from 'svelte';
import { Http } from '@Services';
import {link} from 'svelte-spa-router'
import ImageSkeleton from '@Components/Piece/ImageSkeleton';
import Skeleton from '@Components/Piece/Skeleton';
import {language} from '../../Store/language';
import {t} from '../../Services/Dictionary';
let selectedLanguage;
language.subscribe(value => {
	selectedLanguage = value;
});
export let params;
const {wild: id} = params;
let piece;
let date;
let loading = true;
onMount(async function() {
	const url = "https://wp.marielozada.com/wp-json/wp/v2/posts/"+id;
	const response = await Http.Request('GET', url);
	piece = response;
	const {date_gmt} = piece;
	date = new Date(date_gmt).toLocaleString();
	loading = false;
});
</script>

<style src="./style.scss">

</style>

<div class="piece">
	<nav id="nav">
		<div class="ml-nav">
			<div class="button-back">
				<a href="/" use:link><i class="fas fa-chevron-left"></i></a>
			</div>
			<a href="/" use:link><div class="ml-logo"></div></a>
			<div></div>
		</div>
	</nav>

	{#if loading}
		<ImageSkeleton></ImageSkeleton>
	{:else if !loading}
		<header class="container-fluid" style="background-image: url({piece.imagen});">
			<div class="inside-box">
				<h1 class="text-center reportaje-title m-auto">{ @html piece.title.rendered }</h1>
			</div>
		</header>
	{/if}

	<div class="container ml-reportaje">
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
				<div class="ml-reportaje-body">
					{#if loading}
						<Skeleton></Skeleton>      
					{:else if !loading}
						<p class="ml-date"> 
							{t(selectedLanguage, 'piece_publish_date')} { date } 
						</p>
						<div class="ml-post-content">
							{ @html piece.content.rendered}
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>