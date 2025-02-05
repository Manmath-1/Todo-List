const mongoose = require('mongoose');

const connect = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/todo')
        .then(() => {
            console.log('Database connected');
        })
        .catch((err)=>{
            console.log('Error:', err);
        })
}


module.exports = connect;