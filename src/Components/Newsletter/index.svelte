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

<div class="newsletter" id="newsletter">
    <div class="row">
        <h3>{t(selectedLanguage, 'newsletter')}</h3>
        <div class="col-md-6 col-xs-12">
            <form
                action="https://marielozada.us20.list-manage.com/subscribe/post?u=40e5c162c044a6ad5ff54a0d4&amp;id=c8224e5bf5"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                class="validate"
                target="_blank"
                novalidate>

                <div id="mc_embed_signup_scroll">
                    <p>
                        {t(selectedLanguage, 'newsletter_description')}
                    </p>
                    <!-- <div class="indicates-required">
                        <span class="asterisk">*</span>
                        Campo obligatorio
                    </div> -->
                    <div class="mc-field-group form-group">
                        <!-- <label for="mce-EMAIL">
                            Email
                            <span class="asterisk">*</span>
                        </label> -->
                        <input
                            type="email"
                            value=""
                            placeholder="{t(selectedLanguage, 'newsletter_email')}"
                            name="EMAIL"
                            class="required email form-control"
                            id="mce-EMAIL" />
                    </div>
                    <div class="mc-field-group form-group">
                        <!-- <label for="mce-FNAME">Nombre</label> -->
                        <input
                            type="text"
                            value=""
                            placeholder="{t(selectedLanguage, 'newsletter_name')}"
                            name="FNAME"
                            class="form-control"
                            id="mce-FNAME" />
                    </div>
                    <div class="mc-field-group form-group">
                        <!-- <label for="mce-LNAME">Apellido</label> -->
                        <input
                            type="text"
                            value=""
                            placeholder="{t(selectedLanguage, 'newsletter_lastname')}"
                            name="LNAME"
                            class="form-control"
                            id="mce-LNAME" />
                    </div>
                    <div id="mce-responses" class="clear">
                        <div
                            class="response"
                            id="mce-error-response"
                            style="display:none" />
                        <div
                            class="response"
                            id="mce-success-response"
                            style="display:none" />
                    </div>
                    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                    <div
                        style="position: absolute; left: -5000px;"
                        aria-hidden="true">
                        <input
                            type="text"
                            name="b_40e5c162c044a6ad5ff54a0d4_c8224e5bf5"
                            tabindex="-1"
                            value="" />
                    </div>
                    <div class="form-button">
                        <input
                            type="submit"
                            value="{t(selectedLanguage, 'newsletter_subscribe')}"
                            name="subscribe"
                            id="mc-embedded-subscribe"
                            class="button" />
                    </div>
                </div>
            </form>
        </div>
        <div class="col-md-6 col-xs-12">
            <div class="ml-newsletter-cover">
                <div class="ml-cover"></div>
                <div class="ml-decorator-double"></div>
                <div class="ml-decorator-single"></div>
            </div>
        </div>
    </div>
</div>
