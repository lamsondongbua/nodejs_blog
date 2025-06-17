const mongoose = require('mongoose');

async function connect () {
    try{
        await mongoose.connect('mongodb://localhost:27017/avici_education_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Connect successfully');
    }
    catch(error){
        console.log('Connect fail')
    }
}
 
//import 1 đối tượng
module.exports = {connect};