<script>
    import {language} from '../../Store/language';
	import {t} from '../../Services/Dictionary';
    import { Http } from '@Services';
    import { Toast } from 'bootstrap'
	let selectedLanguage;
	language.subscribe(value => {
		selectedLanguage = value;
	});
	const languageChange = (l) => {
		language.set(l);
	}

    let name = '';
    let lastname = '';
    let email = '';
    let subject = '';
    let message = '';
    const handleSend = async () => {
        if(name == '' || lastname == '' || email == '' || subject == '' || message == ''){
            const toastElList = [].slice.call(document.querySelectorAll('.toast-fail'))
            toastElList.map(function (toastEl) {
                return new Toast(toastEl, {"autohide": true, delay: 2500}).show()
            })
        } else {
            const url = "https://marielozada.com/messager/message.php";
	        const response = await Http.Request('POST', url, {}, {name, lastname, email, subject, message});
            const toastElList = [].slice.call(document.querySelectorAll('.toast-success'))
            toastElList.map(function (toastEl) {
                return new Toast(toastEl, {"autohide": true}).show()
            })
            name = '';
            lastname = '';
            email = '';
            subject = '';
            message = '';
        }
    }
</script>

<style src="./style.scss">

</style>

<div class="contact" id="contact">
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
            <div class="form-container">
            <div class="row">
                <div class="mc-field-group form-group col-6">
                    <input
                        type="text"
                        bind:value={name}
                        placeholder="{t(selectedLanguage, 'contact_form_name')}"
                        name="NAME"
                        class="form-control" />
                </div>
                <div class="mc-field-group form-group col-6">
                    <input
                        type="text"
                        bind:value={lastname}
                        placeholder="{t(selectedLanguage, 'contact_form_lastname')}"
                        name="LASTNAME"
                        class="form-control" />
                </div>
                <div class="mc-field-group form-group col-6">
                    <input
                        type="text"
                        bind:value={subject}
                        placeholder="{t(selectedLanguage, 'contact_form_subject')}"
                        name="SUBJECT"
                        class="form-control" />
                </div>
                <div class="mc-field-group form-group col-6">
                    <input
                        type="text"
                        bind:value={email}
                        placeholder="{t(selectedLanguage, 'contact_form_email')}"
                        name="EMAIL"
                        class="form-control" />
                </div>
                <div class="mc-field-group form-group col-12">
                    <input
                        type="text"
                        bind:value={message}
                        placeholder="{t(selectedLanguage, 'contact_form_message')}"
                        name="MESSAGE"
                        class="form-control" />
                </div>
                <div class="form-button d-flex justify-content-end button-send">
                    <button
                        name="SEND"
                        class="send-button"
                        on:click={handleSend}>
                        {t(selectedLanguage, 'contact_form_send')}
                    </button>
                </div>
            </div>
            <div class="toast-container">
                <div class="toast toast-fail align-items-center text-white bg-danger border-0" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="d-flex">
                        <div class="toast-body">
                        {t(selectedLanguage, 'contact_form_missing_data')}
                        </div>
                        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                </div>
            </div>
            <div class="toast-container">
                <div class="toast toast-success align-items-center text-white bg-success border-0" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="d-flex">
                        <div class="toast-body">
                        {t(selectedLanguage, 'contact_form_success')}
                        </div>
                        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</div>