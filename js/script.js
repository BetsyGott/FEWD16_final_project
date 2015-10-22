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

// experimenting with .serialize:

// $( "form" ).on( "submit", function( event ) {
//   event.preventDefault();
//   console.log( $( this ).serialize() );
// });

$( "form" ).submit(function( event ) {

	var myReviewData = $(this).serializeArray();

	console.log(myReviewData);

	$("#usernameSpan").html(myReviewData[0].value);

	$("#placeNameSpan").html(myReviewData[1].value);

	$("#cityNameSpan").html(myReviewData[2].value);

  	$("#reviewAreaDiv").html("<p>" + myReviewData[3].value + "</p>");

  	// TODO: ratings will go here, using if/else//

  	var allTags = myReviewData[7].value;

  	var splitTags = allTags.split(",");

  	// TO DO: write a for loop to go over each item in the splitTags array and add them dynamically instead of static like below 

  	$("#hashtagDiv").html('<a href="#">'+ splitTags[0]+'</a>'+'<a href="#">'+ splitTags[1] + '</a>');

  	$("#testIcon").attr("class", "new_test_icon");  
  	
  	$("#img1").attr("src", "images/uploaded_images/new_image1.jpg");
  	
  	$("#img2").attr("src", "images/uploaded_images/new_image2.png");

  	$("#img3").attr("src", "images/uploaded_images/new_image3.jpg");

  	$("#default-review").slideDown();

	$("#writereviewbutton").show();

	$("#new-review").slideUp();

	$("#reviewsectiontitle").show();

	$("#newreviewsectiontitle").hide();

  	event.preventDefault();



	});

});
