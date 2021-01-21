Page({
  data:{
    num:'',
    fun:''
  },
  result:null,
  isClear:true,

  numButton:function(event){
    var num=event.target.dataset.value 
    if(this.isClear||this.data.num=="0"){
      this.setData({    //把输入的数赋值给num
        num:num
      });   
      this.isClear = false;
    }else{
      this.setData({
        num:this.data.num+num
      });
    }
  },
  funButton:function(event){
    var fun=this.data.fun
    var num=Number(this.data.num) //获取前面输入的数
      this.setData({
        fun:event.target.dataset.value  //获取操作符赋值给fun
      })
    this.isClear=true;
    if(this.result==null){   //装载运算结果
      this.result=num;
      return;
    }
    if(fun=="+"){
      this.result=this.result+num
    }else if(fun=="-"){
      this.result=this.result-num
    }else if(fun=="*"){
      this.result=this.result*num
    }else if(fun=="/"){
      this.result=this.result/num
    }else if(fun=="%"){
      this.result=this.result%num
    }
    this.setData({
      num:this.result
    });
},

potButton:function(event){
  if(this.isClear){
    this.setData({num:'0.'});
    this.isClear=false;
  }
  if(this.data.num.indexOf('.')>=0){  //查找小数点
    return;
  }
  this.setData({num:this.data.num+'.'});
},
DELButton:function(event){
  var num=this.data.num.substr(0,this.data.num.length-1);
  this.setData({
    num: num ==''?'0':num
  });
},

resetButton:function(event){
  this.result=null,
  this.isClear=false,
  this.setData({num:"0",fun:''});
},
})