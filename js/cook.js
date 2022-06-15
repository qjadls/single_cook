var index = 0;   //이미지에 접근하는 인덱스
window.onload = function(){
    slideShow();
}   
    
function slideShow() {
var i;
var x = document.getElementsByClassName("slide1");  //slide1에 대한 dom 참조
for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";   //처음에 전부 display를 none으로 한다.
}
index++;
if (index > x.length) {
    index = 1;  //인덱스가 초과되면 1로 변경
}   
x[index-1].style.display = "block";  //해당 인덱스는 block으로
setTimeout(slideShow, 4000);   //함수를 4초마다 호출
}

$(document).ready(function(){
    $('table tr').mouseover(function(){ //마우스 커서가 올려져있을 때 반응
        $(this).css("backgroundColor","#ccc"); //색이 회색으로 변함
    }); 
    
    $('table tr').mouseout(function(){ //마우스가 벗어났을 때 반응
        $(this).css("backgroundColor","#fff"); //색이 다시 하얀색으로 변함
    }); 
});

$(document).ready(function() {
  $("#keyword").keyup(function() {
      var k = $(this).val();
      $("#table > tbody > tr").hide();
      var temp = $("#table > tbody > tr > th:nth-child(5n+2):contains('" + k + "')");

      $(temp).parent().show();
  })
})
