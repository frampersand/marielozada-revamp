const t = (lang, word) => {
    const dictionary = require(`./locale/${lang}.json`);
    return dictionary[word];
}

export {t};