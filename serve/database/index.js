import mongoose from 'mongoose';
import config from '../config'
mongoose.set('useFindAndModify', false);
function conn() {
    mongoose.connect(config.db, {useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true});
}

module.exports = conn;
