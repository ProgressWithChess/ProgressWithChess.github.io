/* 
* @Author: Taylor Lovell Shockey
* @Date:   2016-01-30 23:38:47
* @Last Modified by:   Xen0phobe
* @Last Modified time: 2016-01-30 23:40:18
*/

(function ($) {
    $.fn.serializeFormJSON = function () {

        var o = {};
        var a = this.serializeArray();
        $.each(a, function () {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };
})(jQuery);

$('form').submit(function(e) {
    // prevent default submiting form
    e.preventDefault();

    // serialize data to JSON
    var data = $(this).serializeFormJSON();
    var sheetsu_api_url = $(this).data('sheetsu-api-url');

    $.ajax({
        url: sheetsu_api_url,
        data: data,
        dataType: 'json',
        type: 'POST',
        
        // place for handling successful response
        // showing (redirecting to) something like /thanks.html
        //page could be a good idea
        success: function(data) {
            console.log(data);
        },
        
        // handling error response
        error: function(data) {
            console.log(data);
        }
    });
    
    return false;
});