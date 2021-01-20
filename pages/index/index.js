//index.js
//获取应用实例
const rpn = require("../../utils/rpn.js");
const app = getApp()

Page({
  data: {
   ztNum:[
     'C','⇦','%','÷',
     '7','8','9','×',
     '4','5','6','-',
     '1','2','3','+',
     ' ','0','.','='
   ],
   screenData:0
  },
  click:function(e){
    var index = e.currentTarget.dataset.index;
    
      var screenData = this.data.screenData;
    if(index == 0){
      this.setData({
        screenData:'0'
      })
    }

    if(index == 1){
      var screenData = screenData + '';
      var screenData = screenData.substr(0,screenData.length -1);
      var screenData = screenData?screenData:'0';
      this.setData({
        screenData:screenData
      })
    }
    
    if(index == 2){
      var screenData = screenData / 100;
      this.setData({
        screenData:screenData
        })
    }

    if((index % 4 == 3 && index != 19) || index == 18){
      var arr = ['.','+','-','×','÷'];
      var screenData = screenData + '';
      if(arr.indexOf(screenData.substr(-1,1)) == '-1' && screenData!= '0'){
       var screenData = screenData + e.currentTarget.dataset.text;
       this.setData({
        screenData:screenData
       })
      }
    }
    if(index >= 4 && index <18 && index %4 !=3 && index !=16){
      if(screenData == 0){
        var screenData =  e.currentTarget.dataset.text;
      }
      else{
        var screenData = screenData + e.currentTarget.dataset.text;
      }
      this.setData({
        screenData:screenData
      })
    }
   if(index == 19){
     var result = rpn.calCommonExp(screenData);
     this.setData({
       screenData:result
     })
   }
    
  }
})
/*写个小作文：
整个小程序就是各种杂七杂八到处偷师学艺搞出来的，其实还有很多不行的地方。
比如说：数字太多它不会自动跳行，我也找不到解决方法了。
看了一下其他朋友的小程序 我沉默了。“我怎么不一开始就这样写！！我现在只能跪着走完这条路了 TAT ”
*/ 
