$(document).ready(function() {

    // $('#save').on('click', () => {
    //      saveTitle = $(this).attr("data-title")
    //      saveLink = $(this).attr("data-link")
    //      saveSnip = $(this).attr("data-snip")
          
    //         $.ajax({
    //           method: "GET",
    //           url: "/saved",
    //           data: {
    //             title: saveTitle,
    //             link: saveLink,
    //             snip: saveSnip
    //           }
    //         })
    //         .then(data => console.log("Saved: ", data));
    //         location.reload()
          
    //   });

    $(".container").on('click', "#save", function(){
      console.log("trying to save")
      saveId = $(this).attr("data-id")

      $.ajax({
        method: "POST",
        url: "/save",
        data: {
          id: saveId
        }
      }).then(data => console.log("Saved: "));
      location.reload()
    })

    $(".container").on('click', "#remove", function(){
      console.log("trying to remove")
      saveId = $(this).attr("data-id")

      $.ajax({
        method: "POST",
        url: "/remove",
        data: {
          id: saveId
        }
      }).then(data => console.log("Removed: "));
      location.reload()
    })
});