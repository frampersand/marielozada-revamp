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
    import { Router, Route, Link } from "svelte-routing";

</script>

<style src="./style.scss">

</style>

<nav id="nav">
  <div class="ml-nav">
    <div class="ml-logo"></div>
    <div class="ml-sections">
      <ul>
        <li><a href="#section1" >{t(selectedLanguage, 'about')}</a></li>
        <li><a href="#section2" >{t(selectedLanguage, 'works')}</a></li>
        <li><a href="#section3" >{t(selectedLanguage, 'newsletter')}</a></li>
        <li><a href="#section4" >{t(selectedLanguage, 'contact')}</a></li>
      </ul>
    </div>
    <div class="ml-language">
      <ul>
        <li><span class:selected="{selectedLanguage === 'es'}" on:click={()=>{languageChange('es')}}>esp</span> </li> /
        <li><span class:selected="{selectedLanguage === 'en'}" on:click={()=>{languageChange('en')}}>eng</span> </li>
      </ul>
    </div>
  </div>
</nav>
