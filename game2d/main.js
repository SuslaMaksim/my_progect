let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");


let x = canvas.width / 2;
let y = canvas.height - 50;
let dx = 2;
let dy = -2;
let ballRadius = 10;


let paddleHeigt = 10;
let paddleWidth = 75;
let paddlexX = (canvas.width - paddleWidth)/2;


let rightBottom = false;
let leftBottom = false;


let brickRow = 3;
let brickColomn = 5;
let brickPadding = 10;
let brickWidth = 75;
let brickhHeight = 20;
let offSetTop = 30;
let offSetLeft = 30;

let score = 0;

let bricks = [];
for(let c = 0; c < brickColomn; c++){
	bricks[c] = [];
	for(let r = 0; r < brickRow; r++){
		bricks[c][r] = {x: 0, y: 0, status: 1};
	}
};


document.addEventListener("keydown" , moveBotton,false);
document.addEventListener("keyup" , moveBottonEnd,false);

function drawBall(){
ctx.beginPath();
ctx.arc(x,y,ballRadius,0,Math.PI*2,false);
if( dx == 2 && dy == -2 ){
	ctx.fillStyle = "red";
} else if(dx == -2 && dy == 2){
	ctx.fillStyle = "green";
}
 else if(dy == -2 && dy == -2){
	ctx.fillStyle = "blue";
}
 else{
	ctx.fillStyle = "orange";
};

ctx.fill();
ctx.closePath();

};


function drawPaddle(){
	ctx.beginPath();
	ctx.rect(paddlexX, canvas.height-paddleHeigt, paddleWidth, paddleHeigt);
	ctx.fillStyle = "grey";
	ctx.fill();
	ctx.closePath();
};

function moveBotton(e){
	if(e.keyCode == 39){
		rightBottom = true;
	}else if (e.keyCode == 37){
		leftBottom = true;
	}
};


function moveBottonEnd(e){
	if(e.keyCode == 39){
		rightBottom = false;
	}else if (e.keyCode == 37){
		leftBottom = false;
	}
};

function drawBricks(){
	for(let c = 0; c < brickColomn; c++){
		for(let r = 0; r < brickRow; r++){
			if(bricks[c][r].status == 1){
				let bricksX = (c * (brickWidth + brickPadding) + offSetLeft);
				let bricksY = (r * (brickhHeight + brickPadding) + offSetTop);
				bricks[c][r].x = bricksX;
				bricks[c][r].y = bricksY;
				ctx.beginPath();
				ctx.rect(bricksX,bricksY,brickWidth,brickhHeight);
				ctx.fillStyle = "green";
				ctx.fill();
				ctx.closePath();
			}
		}
	}
};

function collisionDetection() {
    for(var c=0; c<brickColomn; c++) {
        for(let r=0; r<brickRow; r++) {
            let b = bricks[c][r];
            if(b.status	== 1){
            	if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickhHeight) {
                dy = -dy;
                b.status = 0;
                score ++;
                if(score == brickRow * brickColomn){
					alert(`Поздравляем вы победили`);
					document.location.reload();
                }
            	}
            }
        }
    }
}

function drawScore(){
	ctx.font = "16px Arial0";
	ctx.fillStyle = "#0095DD";
	ctx.fillText("Ваш счет : " + score , 8 , 20);

}

function draw(){
ctx.clearRect(0,0,canvas.width,canvas.height);
drawBall();
drawPaddle();
drawBricks();
collisionDetection();
drawScore();

if(x + dx < ballRadius || x + dx > canvas.width - ballRadius){
	dx = -dx;

}else if(y + dy < ballRadius){
	dy = -dy; 
}else if(y + dy + 5 > canvas.height-ballRadius){

	if(x > paddlexX && x < paddlexX + paddleWidth){
		dy = -dy;
	}
else if(y + dy - 5> canvas.height-ballRadius){
	alert("вы проиграли!!!");
	document.location.reload();
}		
}

if(rightBottom && paddlexX <  canvas.width - paddleWidth){
	paddlexX += 7
}else if(leftBottom && paddlexX > 0){
	paddlexX -= 7
};
x += dx;
y += dy;

};

setInterval(draw,10);
