// pages/movielist/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: ['热映', '影院', '待映'],
    titleIndex: 0,
  },
  changeTab(e){
    console.log(e.target.dataset.index);
    // 修改数据源titleIndex 为 e.target.dataset.index
    this.setData({
      titleIndex: e.target.dataset.index,
    })
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})