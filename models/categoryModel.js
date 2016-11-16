/**
 * Created by mbara3 on 11/14/16.
 */
'use strict';

var mongoose=require('mongoose');

//New Schema for book Models
var categoryModel=function () {
    var categorySchema=mongoose.Schema({
        name: String

    });

    return mongoose.model('Category',categorySchema);
};

module.exports=new categoryModel;

//stop at video:48 2:24
