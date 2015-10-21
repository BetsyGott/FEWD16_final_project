$(document).ready(function(){




$( "a" ).click(function( event ) {
  event.preventDefault();
});

$('#tags').tagsInput();

 
  $("#review-image-carousel").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });

// VV clicking write review hides the original review, the write review button, and the most recent review header, and shows the new review form, the submit review button, and the write new review header. VV

$("#writereviewbutton").click(function(){

	

	$("#default-review").slideUp();

	$("#writereviewbutton").hide();

	$("#new-review").slideDown();

	$("#reviewsectiontitle").hide();

	$("#newreviewsectiontitle").show();

});

//  Checking Radio box changes the styling so it appears golden up to that point by adding class "checked" to the selected radio button and all the ones before it (somehow by magic yay)
    
    $("#clean-rating input:radio").attr("checked", false);
    $('#clean-rating input').click(function () {
        $("#clean-rating span").removeClass('checked');
        $(this).parent().addClass('checked');
    });

    $("#deco-rating input:radio").attr("checked", false);
    $('#deco-rating input').click(function () {
        $("#deco-rating span").removeClass('checked');
        $(this).parent().addClass('checked');
    });

    $("#feat-rating input:radio").attr("checked", false);
    $('#feat-rating input').click(function () {
        $("#feat-rating span").removeClass('checked');
        $(this).parent().addClass('checked');
    });

    var cleanRating = 0;

    var decoRating = 0;

    var featRating = 0;

//I will need to make these unique to each id to capture the value of each rating, so there will need to be three of these ultimately

//this may not be necessary because of serialize function in jquery I need to research

    $("#clean-rating input:radio").change(
    function(){
        cleanRating = this.value;
        // console.log(cleanRating);
    }); 

    $("#deco-rating input:radio").change(
    function(){
        decoRating = this.value;
        console.log(decoRating);
 		// console.log(cleanRating);
    }); 

    $("#feat-rating input:radio").change(
    function(){
        featRating = this.value;
        // console.log(featRating);
    }); 

    //^^everything above this will change

// *** below here is for image previews on upload **

    (function (global) {
    var imagesPerRow = 3,
        chooseFiles,
        columns,
        previews;

    function PreviewImages() {
        var row;

        Array.prototype.forEach.call(chooseFiles.files, function (file, index) {
            var cindex = index % imagesPerRow,
                oFReader = new FileReader(),
                cell,
                image;

            if (cindex === 0) {
                row = previews.insertRow(Math.ceil(index / imagesPerRow));
            }

            image = document.createElement("img");
            image.id = "img_" + index;
            image.style.width = "100%";
            image.style.height = "auto";
            cell = row.insertCell(cindex);
            cell.appendChild(image);

            oFReader.addEventListener("load", function assignImageSrc(evt) {
                image.src = evt.target.result;
                this.removeEventListener("load", assignImageSrc);
            }, false);

            oFReader.readAsDataURL(file);
        });
    }

    global.addEventListener("load", function windowLoadHandler() {
        global.removeEventListener("load", windowLoadHandler);
        chooseFiles = document.getElementById("chooseFiles");
        columns = document.getElementById("columns");
        previews = document.getElementById("previews");

        var row = columns.insertRow(-1),
            header,
            i;

        for (i = 0; i < imagesPerRow; i += 1) {
            header = row.insertCell(-1);
            header.style.width = (100 / imagesPerRow) + "%";
        }

        chooseFiles.addEventListener("change", PreviewImages, false);
    }, false);
}(window));

// *** above here is for image previews on upload **

});
