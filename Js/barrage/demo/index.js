let data = [
    {value: '周杰伦的听妈妈的话我听了10年', time: 5, color: 'red', speed: 1, fontSize: 22 },
    {value: '快快长大，才能保护她', time: 10, color: '#00a1f5', speed: 1, fontSize: 30 },
    {value: '听妈妈的话晚点再恋爱吧', time: 6},
    {value: '别让她受伤', time: 20, color: '#fff', speed: 1, fontSize: 26 },
  ]
  
  let canvas = document.getElementById('canvas')
  let video = document.getElementById('video')
  let $text = document.getElementById('text')
  let $btn = document.getElementById('btn')
  let $color = document.getElementById('color')
  let $range = document.getElementById('range')
  
  // 弹幕绘制的准备工作
  class CanvasBarrage {
    constructor(canvas, video, opts={}) {
      if (!canvas || !video) return 
  
      this.video = video
      this.canvas = canvas
      this.canvas.width = video.width
      this.canvas.height = video.height
      // 创建画布
      this.ctx = canvas.getContext('2d')
      // 弹幕的默认值
      let defOpts = {
        color: '#e91e63',
        speed: 1,
        opacity: 0.5,
        fontSize: 20,
        data: []
      }
      Object.assign(this, defOpts, opts)
      // 默认暂停状态为true
      this.isPaused = true
  
      // 得到所有初始化后的弹幕
      this.barrages = this.data.map(item => new Barrage(item, this))
      this.render()
    }
    render() {
      this.clear()
      // 渲染
      this.renderBarrage()
      // 递归
      if (!this.isPaused) {
        requestAnimationFrame(this.render.bind(this))
      }
      
    }
    clear() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
    renderBarrage() {
      // 获取到视屏的播放时间
      let time = this.video.currentTime
      this.barrages.forEach(barrage => {
        if (time >= barrage.time && !barrage.flag) {
          if (!barrage.isInit) { // 没有初始化
            barrage.init()
            barrage.isInit = true
          }
          barrage.x -= barrage.speed
          barrage.render()
          // 边界
          if (barrage.x < -barrage.width) {
            barrage.flag = true // 已经出去了
          }
        }
      })
    }
    add(obj) {
      this.barrages.push(new Barrage(obj, this))
    }
  }
  // 初始化每一条弹幕
  class Barrage{
    constructor(obj, context) {
      this.value = obj.value
      this.time = obj.time
      this.obj = obj
      this.context = context
    }
    init() {
      this.color = this.obj.color || this.context.color
      this.speed = this.obj.speed || this.context.speed
      this.opacity = this.obj.opacity || this.context.opacity
      this.fontSize = this.obj.fontSize || this.context.fontSize
  
      // 计算每一条弹幕的宽度
      let p = document.createElement('p')
      p.style.fontSize = this.fontSize + 'px'
      p.innerHTML = this.value
      document.body.appendChild(p)
      this.width = p.clientWidth
      document.body.removeChild(p)
  
      // 弹幕出现的位置
      this.x = this.context.canvas.width
      this.y = this.context.canvas.height * Math.random()
      if (this.y < this.fontSize) {
        this.y = this.fontSize
      } else if (this.y > this.context.canvas.height - this.fontSize) {
        this.y = this.context.canvas.height - this.fontSize
      }
  
    }
    render() { // 每一条弹幕的渲染
      this.context.ctx.font = `${this.fontSize}px Arial`
      this.context.ctx.fillStyle = this.color
      this.context.ctx.fillText(this.value, this.x, this.y)
    }
  }
  
  
  
  let canvasBarrage = new CanvasBarrage(canvas, video, {data})
  video.addEventListener('play', () => {
    canvasBarrage.isPaused = false
    canvasBarrage.render()
  })
  
  
  
  $btn.addEventListener('click', () => {
    let value = $text.value
    let time = video.currentTime
    let color = $color.value
    let fontSize = $range.value
    let obj = {value, time, color, fontSize}
    canvasBarrage.add(obj)
  })