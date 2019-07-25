
var topics = [ "cars", "sports", "boxing", "MMA", "music", "animals"];


//===============================================================

renderButtons();

$(document).on("click", "#addBtn", addNewButton);

$(document).on("click", ".topics", handleButtonClick);

// $(document).on("click", handleImageClick);

//===============================================================

function renderButtons() {
    for (let i = 0; i < topics.length; i++) {
        const btn = $("<button>");
        btn.addClass("btn btn-info m-2 topics");
        btn.text(topics[i]);

        $("#buttonsDiv").append(btn);
    }
}

function addNewButton() {
    topics.push($("#addInput").val());
    $("#buttonsDiv").empty();
    renderButtons();
}

function handleButtonClick() {
    const topic = $(this).text().trim();
    const queryURL="https://api.giphy.com/v1/gifs/search?q="+ topic + "&api_key=ZLz0XEAbyX9bOaUsmnE9tiKSpA5WlDju&limit=10";

    $.ajax({
        url: queryURL, 
        method: "GET" 
    }).then(function (response) {
        var data = response.data;
       
    //put this inside of a for loop where you are looping over the data
    for (var i = 0; i < data.length; i++) {

        var image = $("<img>")
        image.attr("src", data[i].images.fixed_height.url)
        image.appendTo("#imagesDiv") 
    }
            
    })
}




// ZLz0XEAbyX9bOaUsmnE9tiKSpA5WlDju