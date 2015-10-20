$(document).ready(function(){




$( "a" ).click(function( event ) {
  event.preventDefault();
});

 
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


$("#writereviewbutton").click(function(){

	

	$("#default-review").slideUp();

	$("#writereviewbutton").hide();

	$("#new-review").slideDown();

	$("#submitreviewbutton").show();

	$("#reviewsectiontitle").hide();

	$("#newreviewsectiontitle").show();

});

//  Check Radio-box
    //  Check Radio-box
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


//I will need to make these unique to each id to capture the value of each rating, so there will need to be three of these ultimately
    $("#clean-rating input:radio").change(
    function(){
        var cleanRating = this.value;
        console.log(cleanRating);
    }); 

    $("#deco-rating input:radio").change(
    function(){
        var decoRating = this.value;
        console.log(decoRating);
    }); 

    $("#feat-rating input:radio").change(
    function(){
        var featRating = this.value;
        console.log(featRating);
    }); 


});
