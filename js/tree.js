/**
 *  name : treeUi
 *  version : 0.0.1
 */

 //点击单选按钮
 $(".Radiobutton").on("click",function(e){
        var mark = Math.random().toFixed(2) * Math.random().toFixed(14) //标记数
        $(this).css({
            background : "#3b99fc" 
        }).prev().attr("mark",mark).trigger("click")
        var radios = $(".Radiobutton");
        //这里我用遍历来做，感觉不是很好的处理方式，后面应该再想想
        for(var i = 0; i < radios.length; i++){
            if(!radios.eq(i).prev().attr("mark")  || radios.eq(i).prev().attr("mark") != mark ) 
               radios.eq(i).css({background:"#fff"})
        }
 });

 //点击复选框
 $("span.checkBtn").on("click",function(e){
    var _t = $(this), _cbg =  $(this).hasClass("Btn-bg");
     _t.prev().trigger("click");
    _cbg ? _t.removeClass("Btn-bg") : _t.addClass("Btn-bg")
  });