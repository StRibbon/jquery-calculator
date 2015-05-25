var firstNum;
var nextNum;
var total;
var screenNum = [];
var oper = "";
var add = "+";
var minus = "-";
var mult = "x";
var divide = "/";

function combineNums (arr){
	var tempArr = [];
	var num = "";
	for (var i in arr){
		tempArr.push(arr[i].toString());
        num += tempArr[i];
    }
    return (Number(num));
}


$(document).ready(function(){

	$('#cancel').click(function(e){
		$('#screen').html("");
	});

	$("span").not(".operator").click(function(){ 
    	screenNum.push(Number(this.innerHTML));
    	$("#screen").html(screenNum);
    	console.log(screenNum);
 	 });

	$(".operator").not("#cancel").not("#calc").click(function(){
        oper = this.innerHTML;    
        $("#screen").html(oper);
        
        if(firstNum){
            nextNum = combineNums(screenNum);
          }
          else { 
            firstNum = combineNums(screenNum);
          }

        oper = this.innerHTML;    
        $("#screen").html(oper);
        screenNum = [];
        console.log(oper);
        console.log(firstNum);
        console.log(nextNum);
  	});

	$("#calc").click(function(){
        nextNum = combineNums(screenNum);
        if (oper === add){
            total = firstNum += nextNum;
        }
        else if (oper === minus){
            total = firstNum -= nextNum;
        }
        else if (oper === mult){
            total = firstNum *= nextNum;
        }
        else {
            total = firstNum /= nextNum;
        }
        total = screenNum;
        screenNum = firstNum;
        $("#screen").html(screenNum);
  	});

  	$("#cancel").click(function(){
	    firstNum = 0; 
	    finalNum = 0;
	    screenNum = [];
	    oper = "";
	    $("#screen").html(screenNum); 
  	});  

});
