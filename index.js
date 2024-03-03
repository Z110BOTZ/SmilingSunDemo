// index.js

// 创建一个太阳的函数
function drawSun() {
    // 获取 canvas 元素
    const canvas = document.getElementById('sunCanvas');
    if (!canvas) {
        console.error("无法找到 ID 为 'sunCanvas' 的 canvas 元素。");
        return;
    }
    
    // 获取 2D 上下文
    const ctx = canvas.getContext('2d');
    
    // 设置太阳的颜色
    ctx.fillStyle = 'yellow';
    
    // 绘制太阳
    ctx.beginPath();
    ctx.arc(100, 100, 50, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    
    // 绘制太阳的眼睛
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(80, 80, 5, 0, Math.PI * 2);
    ctx.arc(120, 80, 5, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    
    // 绘制太阳的嘴巴
    ctx.beginPath();
    ctx.arc(100, 120, 30, 0.2 * Math.PI, 0.8 * Math.PI);
    ctx.closePath();
    ctx.stroke();
}

// 当页面加载完成后调用 drawSun 函数
window.onload = function() {
    drawSun();
};
