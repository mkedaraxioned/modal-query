/* Author: 

*/

$(document).ready(function() {
    var modal_content = $(".modal-content");
    var modal_btn = $(".modal-btn");
    var wrapper= $(".wrapper");
    var close_btn =$(".close-btn");
    modal_btn.on("click",openModal);

    close_btn.on("click",closeModal);

    function openModal() {
        if(modal_content.hasClass("hide-element"))
        {
            modal_content.removeClass("hide-element");

            modal_content.addClass("show-element");
        }
        if(wrapper.hasClass("opacity-full"))
        {
            wrapper.removeClass("opacity-full");
            wrapper.addClass("opacity-half");       
        }
    }

    function closeModal() {
        if(modal_content.hasClass("show-element"))
        {
            modal_content.removeClass("show-element");

            modal_content.addClass("hide-element");
        }
        if(wrapper.hasClass("opacity-half"))
        {
            wrapper.removeClass("opacity-half");
            wrapper.addClass("opacity-full");       
        }

    }
});





















