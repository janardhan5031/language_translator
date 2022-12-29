
const { Translate } = require('@google-cloud/translate').v2;

// instantiate client
const translate = new Translate()

exports.translateWord = async (req, res, next) => {
    const {text,source,target} = req.body;

    try {
        
        const result = await translate.translate(text, { from: source, to: target });
        // here we can avoid from language code, because google automaticaly detects it
        
        console.log(result);
        res.send(result)
    } catch (err) {
        console.log(err)
        res.send('oops! pls provide currect language codes')
    }
}