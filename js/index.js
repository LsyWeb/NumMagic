var boxBg = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548', '#564545', '#607d8b', '#405d6b', '#9e9e9e', '#70737d', '#389fa0', '#38a05e', '#b3c981', '#76a803', '#fecf43', '#e2785f'];	//box背景色
var bodyBg = ['#F7E8ED', '#F2D9E6', '#ECC6DE', '#E0ECF5', '#DDF4DE', '#F0F1D5', '#EEDECD', '#B8E6B3', '#ABE3D8', '#E0E1F5', '#F7E8ED', '#F2D9E6', '#E0ECF5', '#DDF4DE', '#F0F1D5', '#EEDECD', '#B8E6B3', '#ABE3D8', '#DFD1F0', '#616161'];	//body背景色

var style = document.createElement('style');
var str = '';
var rot = ['rotateX(-180deg)','rotate(-180deg)','rotate(180deg)','rotate(180deg)']

for(var i = 0; i < boxBg.length; i++){
    str += `.content .box:nth-child(${i+1}) div{
        background:${boxBg[i]} url(images/${i+1}.png) no-repeat center;
    }`
}
style.innerHTML = str;
document.head.appendChild(style);

var boxs = document.querySelectorAll('.box');
boxs.forEach(function(box) {
    box.onmouseenter = function (ev) {
        var dir = getDir(ev,this)
        this.style.transform = 'translateZ(150px)' + rot[dir];

        document.body.style.background = bodyBg[Math.round(Math.random()*bodyBg.length - 1)]
    }
    box.onmouseleave = function () {
        this.style.transform = '';
    }
    
})

function getDir(ev,box) {
    var l = box.getBoundingClientRect().left;
    var t = box.getBoundingClientRect().top;
    var w = box.offsetWidth;
    var h = box.offsetHeight;

    // ev.clientX 鼠标相对于浏览器窗口可视区域的X，Y坐标（窗口坐标）
    var x = ev.clientX - l - w / 2
    var y = ev.clientY - t - h / 2

    var deg = Math.atan2(y,x) / (Math.PI / 180);
    var d = (Math.round((deg + 180) / 90) + 3) % 4
    return d
}

//getBoundingClientRect


document.body.onmousemove = function (e) {
    var wrap = document.querySelector('.wrap')
    wrap.style.perspectiveOrigin = e.pageX+'px '+e.pageY+'px'
}