$(document).ready(function() {

    $('#save').on('click', () => {
         saveTitle = $(this).attr("data-title")
         saveLink = $(this).attr("data-link")
         saveSnip = $(this).attr("data-snip")
          
            $.ajax({
              method: "POST",
              url: "/saved",
              data: {
                title: saveTitle,
                link: saveLink,
                snip: saveSnip
              }
            })
            .then(data => console.log("Saved: ", data));
            location.reload()
          
      });
});