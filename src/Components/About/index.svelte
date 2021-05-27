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

<div class="about" id="about">
	<div class="row">
		<h3>{t(selectedLanguage, 'about')}</h3>
		<div class="col-12">
			{@html t(selectedLanguage, 'about_me')}
		</div>
	</div>
</div>
