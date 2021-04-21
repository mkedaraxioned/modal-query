/* Author: 

*/

$(document).ready(function() {
    var modal_content = $(".modal-content");
    var modal_btn = $(".modal-btn");
    var wrapper= $(".wrapper");
    var close_btn =$(".close-btn");
    var window_obj=$(window);
    window_obj.on("click",function(e) {
    var target_classes = $(e.target).attr('class').split(/\s+/);
        $.each(target_classes, function(index, item) {
        if (item == 'wrapper') {
            closeModal();
        }
        });
    });
    modal_btn.on("click",function () {
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
    });

    close_btn.on("click",closeModal);


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





















