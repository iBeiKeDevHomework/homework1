// index.js
// 获取应用实例
const app = getApp()
Page({
  data:{
   result:"0",
   id10:"0",
   id1:"1",
   id2:"2",
   id3:"3",
   id4:"4",
   id5:"5",
   id6:"6",
   id7:"7",
   id8:"8",
   id9:"9",
   id11:"clear",
   id12:"back",
   id13:"ans",
   id14:"div",
   id15:"mul",
   id16:"minus",
   id17:"add",
   id18:"equ",
   id19:"dot",
   id20:"2.718281828",
   ans:"0",
  },
  clickButton:function(e){
   console.log(e);
   var buttonVal = e.target.id;
   var res = this.data.result;
   var ans = this.data.ans;
   var operator;

   //ans键
   if(buttonVal=="ans"){
     if((res.charAt(res.length-1)=="/"||res.charAt(res.length-1)=="×"||res.charAt(res.length-1)=="-"||res.charAt(res.length-1)=="+"))
     {
      res=res+ans;
     }
      else res=ans;
   }

   //输入数字
   if (buttonVal>="0"&&buttonVal<="9"||buttonVal=="2.718281828"){
    var num=buttonVal;
    //如果显示0或error等，则直接显示后续输入的数字
    if (res=="0" || (isNaN(res.charAt(0))&&res.charAt(0)!="-")){
     res=num;
    }
    else{
     res=res+num;
    }
   }
   else{
     //小数点（希望能判断数字里是不是已经有小数点，有的话就无法加小数点（没实现））
    if(buttonVal=="dot"){
      res=res+'.';
    }
    //清零（ans保留）
    else if(buttonVal=="clear"){
     res='0';
    }
    //退格（如果退完就显示0）
    else if(buttonVal=="back"){
     var length=res.length;
     if(length>1){
      res=res.substr(0,length-1);
     }
     else{
      res='0';
     }
    }
    //运算符
    else if (buttonVal=="div"||buttonVal=="mul"||buttonVal=="minus"||buttonVal=="add"){
     switch(buttonVal){
      case "div":
      operator='÷';
       break;
      case "mul":
      operator='×';
       break;
      case "minus":
      operator='-';
       break;
      case "add":
       operator='+';
       break;
     }
     //如果前面是数字则加上运算符，如果已经前面是运算符则不加(没实现)
    //  if((res.charAt(res.length-1)!="/"&&res.charAt(res.length-1)!="×"&&res.charAt(res.length-1)!="-"&&res.charAt(res.length-1)!="+")){
      res=res+operator;
    //}
    }
   }
   this.setData({
    result:res,
   });
  },

   //等号
   equal: function(e){
   var str=this.data.result;
   var item='';
   var arr=[];
   var temp=0;
   for(var i=0;i<=str.length;i++){
    var Char=str.charAt(i);
   //将数与运算符分离
    if((Char!=''&&Char>='0'&&Char<='9')||Char=='.'){
     item=item+Char;
    }
    else{
     arr[temp]=item;
     temp++;
     arr[temp]=Char;
     temp++;
     item='';
    }
   }
   while(isNaN(arr[arr.length-1])){
     arr.pop();
   }
  //  if(isNaN(arr[arr.length-1])){
  //   arr.pop();
  //  }
   var Char;
   var res=Number(arr[0]);

   for(var i=1;i<=arr.length;i=i+2){
    Char=arr[i+1];
    switch(arr[i]){
     case "-":
      res = res-Number(Char);
      break;
     case "+":
      res = res+Number(Char);
      break;
     case "×":
      res = res*Number(Char);
      break;
     case "÷":
     if(Char!='0'){
      res = res/Char;
     }
     else{
      res ='∞';
      break;
     } 
      break;
    }

    if(isNaN(res)){
        this.setData({
            result:"ERROR!!!"
          })
    }
    else{
      this.setData({
        ans:res,
        result:res,
       })
    }

  }
  }
})
