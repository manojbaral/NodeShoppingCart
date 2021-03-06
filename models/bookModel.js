/**
 * Created by mbara3 on 11/14/16.
 */
'use strict';

var mongoose=require('mongoose');

//New Schema for book Models
var bookModel=function () {
    var bookSchema=mongoose.Schema({
        title: String,
        category: String,
        description: String,
        author:String,
        publisher:String,
        price:Number,
        cover:String

    });

    //function to shorten text
    bookSchema.methods.truncText=function (length) {
        return this.description.substring(0,length);

    };


    return mongoose.model('Book',bookSchema);
};

module.exports=new bookModel();
