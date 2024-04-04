require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb')

const MONGO_URL = process.env.MONGDODB_URL || 'mongodb+srv://ecommerceDB:KB8z8yi8ugxyIbdG@ecommercedb.riz6fhz.mongodb.net/';
const DATABASE_NAME = process.env.DATABASE_NAME || 'WEBBAOBI'

let dbInstance = null 

const mongoClientInstance = new MongoClient( MONGO_URL , {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }


})

 const CONNECT_DB = async() =>{
    await mongoClientInstance.connect()

    dbInstance = mongoClientInstance.db(DATABASE_NAME)
}


 const GET_DB = () =>{
   if(!dbInstance) throw new Error('Must connect Database')
   return dbInstance
}

module.exports = {
    CONNECT_DB,
    GET_DB,
}