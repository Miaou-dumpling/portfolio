/*
	Custom JS
*/

// Loads functions as soon as the page displays in web browser
$(function() {
    initAllModals();
    initAllAnimatedThumbnails();
})

// Initialize all modal's behaviour
// Shows a modal when user clicks on a portfolio item
function initAllModals()
{
    initModal("dungeonUnlimited");
    initModal("edenProject");
    initModal("smallUtbmWorld");
}

// Initialize all thumbnail's animations
function initAllAnimatedThumbnails()
{
    initAnimatedThumbnail("edenProject");
    initAnimatedThumbnail("dungeonUnlimited");
    initAnimatedThumbnail("smallUtbmWorld");
}

// Initialize a Thumbnail by it's id
function initAnimatedThumbnail(thumbnailId){
 $("#"+thumbnailId+" > img").hover(
         function() {
             $(this).attr("src", "assets/images/"+thumbnailId+"_animated.gif");
         },
         function() {
             $(this).attr("src", "assets/images/"+thumbnailId+"_static.jpg");
         }
     );
}

// Initialize a Modal by it's id
// Note : modal ids must have the prefix 'Modal'
function initModal(modalId){
    $("#"+modalId).click(function(){
        $("#"+modalId+"Modal").modal('show');
    });
    $("#"+modalId+"Modal").modal({
        closable: true
    });
}

