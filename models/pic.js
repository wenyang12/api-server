const mongoose = require('mongoose');
const picSchema = mongoose.Schema({
    title:{type: String, required: true},
    url: {type: String, required: true},
    create_at: {type:Date, default: Date.now},
    update_at: {type:Date, default: Date.now}
});
const Pic = module.exports = mongoose.model("Pic",picSchema);