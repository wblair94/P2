//p2 Req-4 A

var isArmstrong = function(inputnum){
        "use strict";
    var checker = String(inputnum);

if (checker.length != null){
  if (checker.length < 6){
       var orig = parseFloat(inputnum);
        var sum = 0;
    while (inputnum != 0){
        var remainder = inputnum % 10;
        sum = sum + Math.pow(remainder, checker.length);
        inputnum = Math.floor(inputnum/10);
            
        if (orig == sum){
            return true;
        }      } }
  }
           return false; 
   
}


//p2 Req-4 B

var allArmstrongs = function(){
  "use-strict";
  var answer = '';
    for (var i=1 ; i <= 99999; i++){
        var inputnum = i;
        var sum =0;
        var checker = String(i);
        
    while (inputnum != 0){
        var remainder = inputnum%10;
        sum = sum + Math.pow(remainder, checker.length);
        inputnum = Math.floor(inputnum/10);
            }
    if (i == sum){
        
    answer += i;
    answer += ", "
       
       }
     }
     return answer;
}




//p2 Req-4 C
var allSubstrings1 = function(s){
  "use-strict";
s = String(s);
var str = '';
var sub = '';
var length = s.length;
for (c=0; c <length; c++){
    for (i=1; i<= length - c; i++){
     sub = s.substring(c, (c+i));
    str += sub;
    str += ",";
    }
}
 return str;
}




//p2 Req-4 D

var allSubstrings2 = function(s){
  "use-strict";
s = String(s);
var sub = '';
var str = '';
var arr = new Array();
var length = s.length;
for (c=0; c <length; c++){
    for (i=1; i<= length - c; i++){
     sub = s.substring(c, (c+i));
     str += sub;
     str += ",";
     var strong = str.substring(0, str.length - 1);
      arr.push(strong.split(','));

    }
}
 return arr.pop();
}




//p2 Req-4 E

var maxWords = function(s){
  var result = '';
  var arr = s.split(" ");

for(i=0; i<arr.length; i++){
  var checker = arr[i];
  if(checker.length>result.length){
    result = checker;
  }
}

return result;
}