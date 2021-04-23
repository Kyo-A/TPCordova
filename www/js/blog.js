var blogManager = {

    showBlogList: function () {
        $.ajax({
            url: 'http://10.0.2.2:5556/articles/',
            cache: false,
            dataType: 'json',
            success: function (data) {
                console.log(data);
                $.each(data, function (index, article) {
                    $('<div class="col-md-6">')
                        .append("<div class='top_article_img'><a onclick=blogManager.showBlogDetails(" + article.id + ") target='_self'><img class='img-responsive' src=\'" + article.urlPhotoPr + "\' alt='feature-top'></a></div>")                     
                        .append("</div>")
                        .append("<div class='col-md-6'>")
                        .append("<span class='tag purple'>Mobile</span>")
                        .append("<div class='category_article_title'><h2><a onclick=blogManager.showBlogDetails(" + article.id + ") target='_self'>" + article.libelle + "</a></h2></div>")
                        .append("<div class='category_article_date'><a href='#'>10Aug- 2015</a>, by: <a href='#'>Eric joan</a></div>")
                        .append("<div class='category_article_content'>" + article.description1 + "</div>")
                        .append("</div>")
                        .appendTo($('#articles'));
                    ;
                });
            }
        });
    },
    // Shows a form with product details,
    showBlogDetails: function (id) {
        if (id == null) return;
        $('#articleSearchPanel').hide();
        $.ajax({
            url: 'http://10.0.2.2:5556/articles/' + id,
            cache: false,
            dataType: 'json',
            success: function (article) {
                $('#entity_section').show();
                $('#nom').text(article.libelle);
                $('#description2').text(article.description2);
                $('#img2').attr('src', article.urlPhotoDetail1);
                $('#img3').attr('src', article.urlPhotoDetail2);
                $('#img4').attr('src', article.urlPhotoDetail3);
            }
        });
    },

    backtoSearch: function () {
        $('#entity_section').hide();
        $('#articleSearchPanel').show();
    },


};


$(document).ready(function () {

    blogManager.showBlogList();

    $('#entity_section').hide();

    $('#backtoSearchButton').click(function (e) {
        e.preventDefault();
        blogManager.backtoSearch();
    })


    
});