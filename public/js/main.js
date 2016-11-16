/**
 * Created by mbara3 on 11/9/16.
 */

//This is the ajax and jquery code

$(document).ready(function(){
    $('.removeBook').click(function(e){
        deleteId = $(this).data('id');
        $.ajax({
            url:'/manage/books/delete/'+deleteId,
            type: 'DELETE',
            success: function(){

            }
        });
        window.location = '/manage/books';
    });


    $('.removeCategory').click(function(e){
        deleteId = $(this).data('id');
        $.ajax({
            url:'/manage/categories/delete/'+deleteId,
            type: 'DELETE',
            success: function(){

            }
        });
        window.location = '/manage/categories';
    });
});
