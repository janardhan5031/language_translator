// Imports the Google Cloud client library
const google_translate = require('google-translate')(process.env.API_KEY);


exports.translateWord = async (req, res, next) => {
    const text = req.body.text;
    const language = req.body.language;

    try {
        
        google_translate.translate(text, language, (err, converted_Text) => {
            
            if (err) {
                console.log(err)
                res.send('please enter correct language code')
                return;
            }
            console.log(converted_Text);
        
            res.send(converted_Text);
        })
    } catch (err) {
        console.log(err)
    }
}