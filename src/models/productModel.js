const Joi = require('joi');

const { GET_DB } = require('../configs/init.mongodb')
const PRODUCT_COLLECTION_NAME = 'products'



const productSchema = Joi.object({
    product_name: Joi.string()
        .alphanum()
        .min(10)
        .max(1000)
        .required(),

    product_slug: Joi.string().required(),

    product_thumbnail: Joi.string().required(),

    product_price: Joi.string().required(),
    
    birth_year: Joi.number()
        .integer()
        .min(1900)
        .max(2013),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
})

const getCategories = async () =>{
    try{
        
        // const result = await GET_DB().collection(PRODUCT_COLLECTION_NAME).find().toArray();
        return result
    } catch(error) {throw new Error(error)}
}

module.exports ={
    getCategories
}