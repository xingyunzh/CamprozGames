/**
 * Created by admin on 30/03/17.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sceneSchema = Schema({
    content:String,
    createDate:Date,
    roles:[String]
});

var Scene = mongoose.model("Scene", sceneSchema);

module.exports = Scene;