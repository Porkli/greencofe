/* 
 Многострочный комментарий
 */
// однострочный комментрий
var var1 = 123.23;
var var2 = 'стока';
var var3 = false;
var var4 = var2/45;
var var6 = [23,45,'srger',true,{qwerty:'rgerg'}];
var var7 = new Number(23);
var var8 = new Array(23,56,'');
var var9 = function(){
  console.log('Test');
}
var var10 = var9;
var10();
function test2(){
  console.log('Test2');
}
(function(){
  console.log('Test3');
})();
test2();
//var var2 = (var1>130)?'Старик':'Молодой';

console.log(typeof var10);

//var form1 = document.getElementById('form');
//var divs = form1.getElementsByTagName('div');
//for (var div in divs){
//    if(divs[div].className=='title'){
//      divs[div].onclick = function(){
//        this.style.color = 'red';
//      };
//    };
//}
jQuery('#form .title').click(function(){
  jQuery(this).next('.form-body').slideToggle();
});