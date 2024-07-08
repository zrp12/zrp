(function (doc, win) {
    let docEl = doc.documentElement // 拿到html根节点
    let recalc = function () {
        let clientWidth = docEl.clientWidth // 拿到屏幕宽度
        if (!clientWidth) return
        let fontSize = 20 * (clientWidth / 320)
        docEl.style.fontSize = fontSize + 'px' // 设置html根节点的字体大小
    }

    doc.addEventListener('DOMContentLoaded', recalc)
})(document, window)