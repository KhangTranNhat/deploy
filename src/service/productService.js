const productModel = require('../models/productModel')

const getCategories = async () =>{
    try{
        const categories = await productModel.getCategories()
        return categories
    } catch(error) {throw error}
}

module.exports ={
    getCategories
}