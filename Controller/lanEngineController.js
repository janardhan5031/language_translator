// Imports the Google Cloud client library
const translate = require('translate');
translate.engine = 'google';
translate.key = '';


exports.translateWord = async (req, res, next) => {
    const text = req.body.text;
    const language = req.body.language;

    try {
        
        const converted = await(translate(text, language));
        console.log(converted);
    
        res.send(converted);
    } catch (err) {
        console.log(err)
    }
}