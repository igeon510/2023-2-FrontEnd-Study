document.addEventListener("DOMContentLoaded", function() {

var Result = document.querySelector('.result');
var numButtons = document.querySelectorAll('.num');
var cButton = document.querySelector('.C');
var opdivButton=document.querySelector('.opdiv');
var opmulButton=document.querySelector('.opmul');
var opminButton=document.querySelector('.opmin');
var oppluButton=document.querySelector('.opplu');
var opequButton=document.querySelector('.opequ');


for(var i=0;i<numButtons.length;i++)
{
    numButtons[i].onclick=function(){
        Result.value=Result.value+this.innerText;
    }
}
var mid=[];

cButton.onclick=function(){
    Result.value='';
    mid=[];
}


opdivButton.onclick=function(){
    mid.push(Number(Result.value)); // 값을 숫자로 변환해서 저장
   mid.push('/'); // mid[0]=11 mid[1]='+'
   Result.value='';
}
opmulButton.onclick=function(){
    mid.push(Number(Result.value)); // 값을 숫자로 변환해서 저장
    mid.push('*'); // mid[0]=11 mid[1]='+'
    Result.value='';
}
opminButton.onclick=function(){
    mid.push(Number(Result.value)); // 값을 숫자로 변환해서 저장
   mid.push('-'); // mid[0]=11 mid[1]='+'
   Result.value='';

}
oppluButton.onclick=function(){ //11  +  11  =
   mid.push(Number(Result.value)); // 값을 숫자로 변환해서 저장
   mid.push('+'); // mid[0]=11 mid[1]='+'
   Result.value='';
}
// mid[0]=11 mid[1]='+' mid[2]=3 mid[3]='/' ...
opequButton.onclick=function(){
    mid.push(Number(Result.value));
    for(var i=0; i<(mid.length-1)/2;i++) //길이 3일떄 한번 길이 5일때 2번
    {
        if(mid[2*i+1]=='+')
        mid[2*i+2]=mid[2*i]+mid[2*i+2];
        else if(mid[2*i+1]=='-')
        mid[2*i+2]=mid[2*i]-mid[2*i+2];
        else if(mid[2*i+1]=='*')
        mid[2*i+2]=mid[2*i]*mid[2*i+2];
        else if(mid[2*i+1]=='/')
        mid[2*i+2]=mid[2*i]/mid[2*i+2];
    }
    Result.value=mid[mid.length-1];
    mid=[];
    
}

});



