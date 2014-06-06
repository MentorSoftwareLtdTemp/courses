(function($) {
    $.validator.defaults.highlight = function(element, errorClass, validClass )
    {
        /*if ( element.type === "radio" ) {
            this.findByName(element.name).addClass(errorClass).removeClass(validClass);
        } else {
            $(element).addClass(errorClass).removeClass(validClass);
        }*/

    }
    $.validator.defaults.unhighlight = function(element, errorClass, validClass)
    {
        /*(if ( element.type === "radio" ) {
            this.findByName(element.name).removeClass(errorClass).addClass(validClass);
        } else {
            $(element).removeClass(errorClass).addClass(validClass);
        }*/
    }

}(jQuery));

