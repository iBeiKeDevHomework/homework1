// pages/jisuan/jisuan.js
Page({
  data: {
  id0:0,
  id1:1,
  id2:2,
  id3:3,
  id4:4,
  id5:5,
  id6:6,
  id7:7,
  id8:8,
  id9:9,
  ida:'+',
  idb:'-',
  idc:'*',
  idd:'/',
  gl:'gl',
  ch:'ch',
  zf:'zf',
  xsd:'.',
  ls:'ls',
  dy:'=',
  screenData:0,
  isFuHao:false,
  sz:[]
  /**
   * 页面的初始数据
   */
  

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },
  lishi:function() {
    wx.navigateTo({
      url: '../lishi/lishi' 
    })
  },
  clickBtn:function(e) {
  var code=e.currentTarget.id;
  if(code==this.data.ch){
    data=this.data.screenData;
    var lastWord=data[data.length-1];
    if(lastWord==this.data.ida||lastWord==this.data.idb||lastWord==this.data.idc||lastWord==this.data.idd){
       this.setData({isFuHao:false})
    }
      str=data.substring(0,data.length-1);
      this.setData({screenData:str})
      this.data.sz.pop;
  }else if(code==this.data.gl){
    this.setData({screenData:0})
    this.setData({isFuHao:false})
    this.data.sz=[];
  }else if(code==this.data.zf){
    data =this.data.screenData;
    var firstWord=data[0];
    if(isNaN(firstWord)){
      var str=data.substring(1,data.length)
    }else{
      var str='-'+data;
    }
    this.setData({screenData:str});
  }else if(code==this.data.dy){
    var newSz=[];
    var num='';
    var sz=this.data.sz;
    for(var i in sz){
      if(isNaN(sz[i])==false||sz[i]==this.data.xsd){
        num+=sz[i];
      }else{
        newSz.push(num);
        newSz.push(sz[i]);
        num="";
      }
    }
    newSz.push(num);
    var result=Number(newSz[0]);
    for(var i=1;i<=newSz.length;i++){
      if(newSz[i]==this.data.ida){
        result+=Number(newSz[i+1]);
      }else if(newSz[i]==this.data.idb){
        result-=Number(newSz[i+1]);
      }else if(newSz[i]==this.data.idc){
        result*=Number(newSz[i+1]);
      }else if(newSz[i]==this.data.idd){
        result/=Number(newSz[i+1]);
      }
    }
    
    this.setData({screenData:result});
    console.log(newSz);
    console.log(result);
  }else{
    var code=e.currentTarget.id;
    var data=this.data.screenData;
    if(code == this.data.ida || code==this.data.idb || code==this.data.idc ||code==this.data.idd){
      if(this.data.isFuHao==true){
      return'';
      }
    }
    var str=null;
    if(data==0){
    str=code;
    }else{
      str=data+code;
    }
    this.setData({'isFuHao':false});
    if(code== this.data.ida|| code==this.data.idb|| code==this.data.idc||code==this.data.idd){
      this.setData({'isFuHao':true});
    }
    this.data.sz.push(code);
    this.setData({screenData:str})
  }
     
      console.log(this.data.screenData);
      console.log(this.data.sz);
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
