const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemDemoGraphql = new Schema({
    text: {
        type: String,
        default: ""
    },
    timeISO: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    deleted: { type: Boolean }
});
export default mongoose.model('ItemDemoGraphql', ItemDemoGraphql);