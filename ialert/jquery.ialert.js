/*!
    jQuery ialert v2.0 - 2013-10-11
    (c) 2013 https://github.com/thomaslwq
    license: http://www.opensource.org/licenses/mit-license.php
*/
(function($) {
    $.ialert = function(options) {
        var config = {
            "speed" : 3000,
            'msg':'show alert info',
            'style':{
                top:0,
                left:'50%',
                height:'auto',
                position: 'relative',
                width:'200px',
                'text-align':'center'
            }
        };

        if (options) {
            $.extend(config, options);
        }

        var $alertDiv = $('<div class="ialert ialert-info"></div>');
        $alertDiv.css(config.style);
        $('body').append($alertDiv);
        $alertDiv.text(config.msg);
        $alertDiv.fadeOut(config.speed,function(){
             $alertDiv.remove();
        });
        // $alertDiv.hide(config.speed,function(){
        //      $alertDiv.remove();
        // });


    };
})(jQuery);
