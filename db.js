import mongoose from 'mongoose';

const ConnectionDB = (url) => mongoose.connect(
    url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

export default ConnectionDB;