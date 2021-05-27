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

<div class="contact">
    <div class="row">
        <h3>{t(selectedLanguage, 'contact')}</h3>
        <div class="col-md-6 col-sm-12">
            <p class="ml-work-along">{t(selectedLanguage, 'contact_work_together')}</p>
            <p class="ml-mariel">{t(selectedLanguage, 'contact_mariel')}</p>
            <p>{t(selectedLanguage, 'contact_mariel_email')}</p>
            <p>{t(selectedLanguage, 'contact_social_media')}</p>
            <ul> 
				<li> <a href="https://twitter.com/marielozadab">Twitter</a> </li>
				<li> <a href="https://www.linkedin.com/in/marielozada/">LinkedIn</a> </li>
				<li> <a href="https://www.facebook.com/marielozadab">Facebook</a> </li>
			</ul>
        </div>

        <div class="col-md-6 col-sm-12">
            <div class="row">
                <div class="mc-field-group form-group col-6">
                    <input
                        type="text"
                        value=""
                        placeholder="{t(selectedLanguage, 'contact_form_name')}"
                        name="NAME"
                        class="form-control" />
                </div>
                <div class="mc-field-group form-group col-6">
                    <input
                        type="text"
                        value=""
                        placeholder="{t(selectedLanguage, 'contact_form_lastname')}"
                        name="LASTNAME"
                        class="form-control" />
                </div>
                <div class="mc-field-group form-group col-6">
                    <input
                        type="text"
                        value=""
                        placeholder="{t(selectedLanguage, 'contact_form_subject')}"
                        name="SUBJECT"
                        class="form-control" />
                </div>
                <div class="mc-field-group form-group col-6">
                    <input
                        type="text"
                        value=""
                        placeholder="{t(selectedLanguage, 'contact_form_email')}"
                        name="EMAIL"
                        class="form-control" />
                </div>
                <div class="mc-field-group form-group col-12">
                    <input
                        type="text"
                        value=""
                        placeholder="{t(selectedLanguage, 'contact_form_message')}"
                        name="MESSAGE"
                        class="form-control" />
                </div>
                <div class="form-button d-flex justify-content-end">
                    <input
                        type="submit"
                        value="{t(selectedLanguage, 'contact_form_send')}"
                        name="SEND"
                        id="mc-embedded-subscribe"
                        class="button" />
                </div>
            </div>
        </div>
    </div>
</div>
