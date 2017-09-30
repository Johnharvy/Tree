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

  //写入code
  $(".code-block .show").on("click",function(e){
    var _t = $(this),_s = _t.next().css("display");
    !(_s === "none")? _t.next().fadeOut("slow") :  _t.next().fadeIn("slow");
    _s === "none"? _t.html("合上") : _t.html("展开code")
});

   (function(){
       var codes =  $(".code-block .show");
       for(var i = 0; i < codes.length; i++){
            var _t = codes.eq(i).parent().prev().html();
            codes.eq(i).next().text(_t)
       }
   })()

//    $(".code-block .show").on("click",function(){
//           $(this).next().css({
//               height : "auto"
//           })

//           $(this).next().animate({height : "auto"},100,function(){
//               $(this).html("合上")
//           });
//    })