$(document).ready(function() {

    function saveArticle () {

        var saveArticle = $(this).attr("data-_id");
        
        $(this)
            .parents(".card")
            .remove();

        $.ajax({
            method: "PUT",
            url: `/api/save/${saveArticle}`,
        }).then(function(data) {
            if(data.saved) {
                loadPage();
            }
        });
    }
  $(document).on("click", "#save", saveArticle());
});