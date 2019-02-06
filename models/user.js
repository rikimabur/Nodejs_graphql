const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserDemoGraphql = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String
    },
    items: [{
        ref: 'item',
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }]
});
export default mongoose.model('UserDemoGraphql', UserDemoGraphql);