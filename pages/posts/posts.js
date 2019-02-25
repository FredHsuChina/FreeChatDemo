// pages/post's.js
var postData = require("../../datas/post-data.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // var post_contents = [
    //   {
    //     userPic: "../../images/avatar/300.jpg",
    //     date: "2019-02-14",
    //     title: "2018年工作总结以及2019年工作计划",
    //     content: "2018年存在的问题就是做的东西繁多而且杂，没有及时做好总结，导致很大一部分时间都浪费在做一些重复且没有意义的事情上面；针对2018年存在的不足，在2019年要做到以下几点\n1.善于总结自己的技术弱点，向其他同事虚心求教，学习他人优秀的技术和经验，养成写技术博客的好习惯;\n2.多花时间在其他技术；比如2019年，技术层面往前端方面靠拢，主要是往微信小程序方面发展，通过工作之余的时候，自学微信小程序的基础知识，争取在2-3月份的时间里面能独立开发出一款自己的小程序;\n3.技多不压身，多学习一些其他技术，比如前端H5等\n4.先完成一个小目标，考取考取PMP证书，对于自己年龄大的程序员来说至少也有点帮助吧。\n总之2019年，认真积累自己的实力，如何积累是2019年整个一年需要探索和实践的一个问题，对于过去做过的每个项目，每个功能都做总结，举一反三的思考这样做是否是最优的方法，积累请假其他同事，学习参考他人的想法，不断充实自己。",
    //     collectNum: "95",
    //     likeNum: "65",
    //     postImage: "../../images/post/crab.png"
    //   },
    //   {
    //     userPic: "../../images/avatar/300.jpg",
    //     date: "2019-02-15",
    //     title: "家庭工作和生活",
    //     content: "2019年想回归平静的生活",
    //     collectNum: "95",
    //     likeNum: "65",
    //     postImage: "../../images/post/sls.jpg"
    //   }
    // ]
    this.setData({post_key:postData.postList})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  onCellClick:function(event){
    console.log("onCellClick");
    wx.navigateTo({
      url:"post-detail/post-detail"
    }
    )
  }
})