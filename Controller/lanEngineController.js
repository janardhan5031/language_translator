// importing translation table from db
const Dictionary = require('../Model/Translation');
const { Op } = require('sequelize')

const { Translate } = require('@google-cloud/translate').v2;

// instantiate client
const translate = new Translate()

exports.translateWord = async (req, res, next) => {
    const { text, source, target } = req.body;

    try {

        const result = await translate.translate(text, { from: source, to: target });
        // here we can avoid from language code, because google automaticaly detects it

        const traslatedText = result[0]

        res.json({fron:text,to:traslatedText})

        storeInDatabase(text, traslatedText)

    } catch (err) {
        console.log('==> from translation', err)
        res.send('oops! pls provide currect language codes')
    }
}

async function storeInDatabase(from, to) {
    try {
        const result = await Dictionary.create({ from, to })

        // console.log(result)
    } catch (err) {
        console.log('==> from database insertion', err)
    }
}


// search in db
exports.searchDb = async (req, res, next) => {
    const { text } = req.body;
    try {

        if (req.body.source === req.body.target) {
            res.json({from:text,to:text,msg:'pls change any one translate language'})
        }
        else {
            
            const database_result = await Dictionary.findOne({
                where: {
                    [Op.or]: [{ from: text }, { to: text }]
                }
            })
            if (database_result) {
                
                if (database_result.from === text) {
                    res.json({from:text, to:database_result.to})
                } else {
                    res.json({from:database_result.to,to:database_result.from})
                }
                
            } else {
                next();
            }
        }


    } catch (err) {
        res.send(err)
    }
}