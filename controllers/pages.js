/**
 * Created by mbara3 on 11/15/16.
 */

'use strict';
module.exports=function (router) {

    router.get('/about',function (req,res) {
        res.render('pages/about');

    });

};
