<script>
	import {language} from '../../Store/language';
	import {t} from '../../Services/Dictionary';
	let selectedLanguage;
	language.subscribe(value => {
		selectedLanguage = value;
	});
	const languageChange = (l) => {
		language.set(l);
	}
</script>

<style src="./style.scss">
</style>

<div class="main" id="main">
	<div class="content row">
		<div class="col-md-6 ml-details">
			<p class="ml-greeting">{t(selectedLanguage, 'main_greetings')}</p>
			<h1>{t(selectedLanguage, 'main_name')}</h1>
			<p>{t(selectedLanguage, 'main_description')}</p>
			<p class="ml-social"> {t(selectedLanguage, 'main_social_media')}</p>
			<ul> 
				<li> <a href="https://twitter.com/marielozadab">Twitter</a> </li>
				<li> <a href="https://www.linkedin.com/in/marielozada/">LinkedIn</a> </li>
				<li> <a href="https://www.facebook.com/marielozadab">Facebook</a> </li>
			</ul>
		</div>
		<div class="col-md-6 cover-box">
			<div class="ml-undercover"></div>
			<div class="ml-cover"></div>
		</div>
	</div>
</div>
