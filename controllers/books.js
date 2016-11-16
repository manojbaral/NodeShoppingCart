/**
 * Created by mbara3 on 11/10/16.
 */

'use strict';
//required library
var Book=require('../models/bookModel');
var Category=require('../models/categoryModel');

module.exports = function (router) {

    router.get('/', function (req, res) {
        res.render('index');
    });

    //route for book details
    router.get('/details/:id', function (req, res) {
        Book.findOne({_id:req.params.id},function (err,book) {
            if (err){
                console.log(err);
            }

            var model={
                book:book
            };

            res.render('books/details',model);

        })

    });
};
