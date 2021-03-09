var h = window.innerHeight,
    w = window.innerWidth,
    nBubble = [];
var canvas = document.getElementsByClassName('bubble')[0],
    conT = canvas.getContext('2d');
(function () {
    canvas.width = w;
    canvas.height = h;
    window.onresize = function () {
        h = window.innerHeight;
        w = window.innerWidth;
        canvas.width = w;
        canvas.height = h;
    }
})();

function Bubble(x, y) {
    this.colorData = ["rgb(94,213,209)", "rgb(255,110,151)", "rgb(199,255,236)", "rgb(0,255,128)", "rgb(208,233,255)"];
    if (arguments.length == 0) {
        this.init();
    } else {
        this.init(x, y);
    }

    this.draw();
    this.vX = random(-1, 1);
    this.vY = random(-1, 1);
}
Bubble.prototype = {
    init: function (x, y) { //实现 函数的 overload
        if (arguments.length == 0) {
            this.x = random(0, w);
            this.y = random(0, h);
        } else {
            this.x = x;
            this.y = y;
        }
        this.r = random(3, 8);
        this.color = this.colorData[Math.floor(random(0, 5))];
    },
    draw: function () {
        conT.beginPath();
        conT.fillStyle = this.color;
    	conT.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        conT.fill();
    },
    move: function () {
        this.x += this.vX;
        this.y += this.vY;
    },
    conllisionDect: function () {
        if (this.x - this.r < 0 || this.x + this.r > w) {
            this.vX = -this.vX;
        };
        if (this.y - this.r < 0 || this.y + this.r > h) {
            this.vY = -this.vY;
        }
    }
}
creat(200);
window.setInterval(function () {
    conT.clearRect(0, 0, w, h);
    for (var key of nBubble) {
        key.move();
        key.draw();
        key.conllisionDect();
    }
}, 1000 / 60)
canvas.addEventListener('mousemove', function (e) {
    var x = e.pageX,
        y = e.pageY,
        len = nBubble.length;
    nBubble[len] = new Bubble(x, y);
    console.log(x, y);
})

function random(min, max) {
    return Math.random() * (max - min) + min;
}

function creat(num) {
    for (var i = 0; i < num; i++) {
        nBubble[i] = new Bubble();
    }
}