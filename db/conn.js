const {MongoClient} = require('mongodb'); //! modern syntax
// const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database = 'e-comm';

async function getData(){
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('products');

    let response = await collection.find({}).toArray();
    console.log(response);
    
}
 getData();
 