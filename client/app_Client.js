$(function(){
    $.ajax({
        url:"/getColorData"
    }).done(function(response){
        var colorVal = response;
    console.log(response);
        for(var iterator = 0; iterator < colorVal.length; iterator++){
            console.log(colorVal[iterator]);

            var $content = ("<p style='color:" + colorVal[iterator].value + "'>" + colorVal[iterator].color + "<//p>");
            $(".content-placeholder").append($content);
        }
    })
});