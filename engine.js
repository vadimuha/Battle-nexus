

$(function(){
//main inits
	curr = 0;
	current = 0; // current checked element need for ai work
	gameFill = document.getElementById('gameFill');
	ctx = gameFill.getContext("2d");
	gameFill.width = 800;
	gameFill.height = 600;
	width = gameFill.width;
	height = gameFill.height;
	terrain = new Image();
	terrain.src = "sprites/terrain.jpg";
	p1fUnit = new Image(); // first 1p unit
	p1fUnit.src = "sprites/Dark Templar.gif";
	p1sUnit = new Image(); // second 1p unit 
	p1sUnit.src = "sprites/Zealot.gif";
	p1tUnit = new Image(); // third 1p unit
	p1tUnit.src = "sprites/Ghost.gif";
	p2fUnit = new Image(); // first 2p unit
	p2fUnit.src = "sprites/Ultralisk.gif";
	p2sUnit = new Image(); // secont 2p unit
	p2sUnit.src = "sprites/Hydralisk.gif";
	p2tUnit = new Image(); // third 2p unit
	p2tUnit.src = "sprites/Zergling.gif";
	p1NexusImg = new Image();
	p1NexusImg.src = "sprites/Command_Center.gif";
	p2NexusImg = new Image();
	p2NexusImg.src = "sprites/Lair.gif";
	p1Nexus = {
		image:p1NexusImg,
		heal:1000,
		coin:30
	}
	p2Nexus = {
		image:p2NexusImg,
		heal:1000,
		coin:30
	}
	p2Units = []; // array of 2 player units
	p1Units = []; //array of 1 player units
	//units
	//sprites
	zerglingImg = new Image();
	zerglingImg.src = "sprites/zergling.png";
	ultraliskImg = new Image();
	ultraliskImg.src = "sprites/ultralisk.png";
	hidraliskImg = new Image();
	hidraliskImg.src = "sprites/hidralisk.png";
	ghostImg = new Image();
	ghostImg.src = "sprites/PC Computer - StarCraft - Terran Ghost.png"
	zealotImg = new Image();
	zealotImg.src = "sprites/zilone.png"
	templarImg = new Image();
	templarImg.src = "sprites/Templar.png"
	//objects of units
	function zergling() { //p2 10 coin unit
	this.img = zerglingImg,
	this.height = 42.25,
	this.width=42.4,
	this.x = gameFill.width/2,
	this.y=height-60-35-100,
	this.row=0,
	this.col=0,
	this.heal=100,
	this.dmg=5,
	this.cost=10,
	this.type="zergling",
	this.style = "mele",
	this.atack = false
	}
	//ultralisk
	function ultralisk() {
		this.img = ultraliskImg,
		this.height = 108,
		this.width=110.125,
		this.x = gameFill.width/2,
		this.y = height-60-35-100,
		this.heal=500,
		this.dmg=50,
		this.cost=100,
		this.type="ultralisk",
		this.col = 0, // 0 is first col
		this.row = 0, 
		this.style = "mele",
		this.atack = false
	}
	//hidralisk
		function hidralisk() {
		this.img = hidraliskImg,
		this.height = 58,
		this.width=43,
		this.x = gameFill.width/2,
		this.y=height-60-35-100,
		this.heal=200,
		this.dmg=30,
		this.cost=50,
		this.type="hidralisk",
		this.col = 0,
		this.atack = false, //atack or not
		this.row = 0,
		this.range = 50,
		this.style = "range"
	}
		function ghost() {
		this.img = ghostImg,
		this.height = 39.38,
		this.width=42.5,
		this.x = gameFill.width/2,
		this.y=30+100,
		this.heal=100,
		this.dmg=10,
		this.cost=10,
		this.type="ghost",
		this.col = 8,
		this.atack = false, //atack or not
		this.row = 0,
		this.range = 50,
		this.style = "range"
	}

		function zealot() {
		this.img = zealotImg,
		this.height = 44.2,
		this.width=41,
		this.x = gameFill.width/2,
		this.y=30+100,
		this.heal=100,
		this.dmg=10,
		this.cost=10,
		this.type="zealot",
		this.col = 8,
		this.atack = false, //atack or not
		this.row = 0,
		this.style = "mele"
	}
		function templar() {
		this.img = templarImg,
		this.height = 62.2,
		this.width=57.1,
		this.x = gameFill.width/2,
		this.y=30+100,
		this.heal=100,
		this.dmg=10,
		this.cost=10,
		this.type="templar",
		this.col = 8,
		this.atack = false, //atack or not
		this.row = 0,
		this.style = "mele"
	}
	

	unit1 = new zergling;

	//if unit is bought
	$(window).keydown(function (e) {
		switch (e.keyCode){
			case n3:
			p2Units.push(new zergling);
			console.log(p2Units);
			break;
			case n1:
			p2Units.push(new ultralisk);
			console.log(p2Units);
			break;
			case n2:
			p2Units.push(new hidralisk);
			console.log(p2Units);
			break;
			case ee:
			p1Units.push(new ghost);
			console.log(p1Units);
			break;
			case w:
			p1Units.push(new zealot);
			console.log(p1Units);
			break;
			case q:
			p1Units.push(new templar);
			console.log(p1Units);
			break;
		}
	});
	
	$(gameFill).mousemove(function (e) {
		var mouseX = e.pageX - gameFill.offsetLeft;
		var mouseY = e.pageY - gameFill.offsetTop;
		//console.log(mouseX,mouseY);
	})

//game loop
	setInterval(function () {
		update();
		render();
	},1000/15);

});

function update() {
	//p2 units
	for(var i=0; i < p2Units.length; i++) {
		if(p2Units[i].type == "zergling"){ // if it's zergling

			if(p2Units[i].y<=30+100 && p2Units[i].x <= width/2+100) { // if comes to nexus
				p2Units[i].atack = true;
	
		}

			else if(p2Units[i].y <= 100 && p2Units[i].x >=width/2+100){
				p2Units[i].atack = true;
			}

			else {
			p2Units[i].y-=5; //improved speed for develop in release remove to -1
			p2Units[i].col = 0;
		} // don't touch above it's movement
		
	}
	//ultralisk logic
	if(p2Units[i].type == "ultralisk"){

			if(p2Units[i].y<=30+100 && p2Units[i].x <= width/2+100) { // if comes to nexus

				p2Units[i].atack = true;	
		}

		

			else {
			p2Units[i].y-=5; //improved speed for develop in release remove to -1
			p2Units[i].atack = false;
		} // don't touch above it's movement

	}

	//hidralisk logic (shooter)
	if(p2Units[i].type == "hidralisk"){

		if(p2Units[i].y <= 30+100+p2Units[i].range){

			p2Units[i].atack = true;

		}
		else{
			p2Units[i].y -= 5;
			p2Units[i].atack = false;
		}

	}

	//GLOBAL - for all units
	if(p2Units.length >= 2){


	if(i!=current){
		//check if touches
		if(p2Units[current].y+5 <= p2Units[i].y  && p2Units[current].x >= p2Units[i].x && p2Units[current].x <= p2Units[i].x + p2Units[i].width && p2Units[i].x < width - p2Units[i].width*2){
			p2Units[i].x+=10;
		}

	}

	if(i == p2Units.length-1) {
		current++;
	}

	if(current == p2Units.length){
		current = 0;
	}

	}
	

}	// end of 2p units

	
	for (var i = 0; i < p1Units.length; i++) {
		
		if(p1Units[i].style == "range"){
			
			if(p1Units[i].y <= height-130-p1Units[i].range-p1Units[i].height) {
				p1Units[i].y += 5;
			}
			else {
				p1Units[i].atack = true;
			}

		}

		if(p1Units[i].type == "zealot") {
				if(p1Units[i].y <= height-130-p1Units[i].height ) {
				p1Units[i].y += 5;
			}

			else {
				p1Units[i].atack = true;
			}
		}

		if(p1Units[i].type == "templar") {
				if(p1Units[i].y <= height-130-p1Units[i].height ) {
				p1Units[i].y += 5;
			}

			else {
				p1Units[i].atack = true;
			}
		}

			if(p1Units.length >= 2){


	if(i!=curr){
		//check if touches
		if(p1Units[curr].y+5 <= p1Units[i].y  && p1Units[curr].x >= p1Units[i].x && p1Units[curr].x <= p1Units[i].x + p1Units[i].width && p1Units[i].x < width - p1Units[i].width*2){
			p1Units[i].x+=10;
		}

	}

	if(i == p1Units.length-1) {
		curr++;
	}

	if(curr == p1Units.length){
		curr = 0;
	}

	}

	}
	

}

	/*  check each element check each element (made by my self)
	
		ctx.drawImage(p2Nexus.image,width/2,height-130,100,100)  p2 nexus

		var arr1 = [0,1,2,3];
		var current = 0;

		for(var i = 0; i < arr1.length; i++){

		if(i!=current){

			console.log(arr1[current], arr1[i]);

		}
		if(i==arr1.length-1){
			current++;
		}

	}
	if(current == arr1.length){
		current = 0;
	}
	
	 */



function render() {
	//Fill Background
	pattern = ctx.createPattern(terrain,'repeat');
	ctx.fillStyle = pattern;
	ctx.fillRect(0,0,width,height);
	///////////////////////////////////
	ctx.drawImage(p1fUnit,(width-42),15,40,40);  //first unit
	ctx.drawImage(p1sUnit,(width-42*2-2),15,40,40); // second unit
	ctx.drawImage(p1tUnit,(width-42*3-3),15,40,40); //third unit
	ctx.font = "16px serif";
	ctx.fillStyle = "#000"
	//1p control panel

	ctx.fillText("100",(width-42/2-16),(15+40+16));//y1: padding by y + height + font size, x: width of game field - width of image/2-font size
	ctx.fillText("50",(width-(42*2)/2-42),(15+40+16));//y1: padding by y + height + font size, x: width of game field - width of image/2-font size
	ctx.fillText("10",(width-(42*3)/2-30*2),(15+40+16));//y1: padding by y + height + font size, x: width of game field - width of image/2-font size
	ctx.fillText("q",(width-42/2),12);
	ctx.fillText("w",( width-(42*2)+35/2 ),12);
	ctx.fillText("e",( width-(42*3)+30/2 ),12);
	//2p control panel
	ctx.drawImage(p2fUnit,10,height-40-15,40,40);  //first unit
	ctx.drawImage(p2sUnit,58,height-40-15,40,40); // second unit
	ctx.drawImage(p2tUnit,52*2,height-40-15,40,40); //third unit
	ctx.fillText("100",10,height-2);//y1: padding by y + height + font size, x: width of game field - width of image/2-font size
	ctx.fillText("50",58,height-2);//y1: padding by y + height + font size, x: width of game field - width of image/2-font size
	ctx.fillText(unit1.cost,52*2,height-2);//y1: padding by y + height + font size, x: width of game field - width of image/2-font size
	ctx.fillText("num1",10,height-58);
	ctx.fillText("num2",58,height-58);
	ctx.fillText("num3",52*2,height-58);
	//nexus draw
	ctx.drawImage(p1Nexus.image,width/2,30,100,100); // draw p1 nexus
	ctx.fillText(p1Nexus.heal+"/1000",width/2+30,20);
	ctx.drawImage(p2Nexus.image,width/2,height-130,100,100); // draw p2 nexus
	ctx.fillText(p2Nexus.heal+"/1000",width/2+30,height-10);
	ctx.fillStyle = "#ff0";
	ctx.fillText("coins: "+p1Nexus.coin,100,30);
	ctx.fillText("coins: "+p2Nexus.coin,width-150,height-60);

	$.each(p2Units,function (index,val) { // 2 player units check
		if(val.type == "zergling"){
		//6 first move
		//6 last attack
		ctx.drawImage(val.img,val.width*val.col,val.height*val.row,val.width,val.height,val.x,val.y,50,50);
		if(val.atack){
			val.row = val.height*val.row <= val.height*10 ? val.row + 1 : val.row = 7;
		}
		else{
			val.row = val.height*val.row <= val.height*6 ? val.row + 1 : val.row = 0;
		}

		}
		if(val.type == "ultralisk"){
			//108 height sprite 125.125 width
			// 15 at all
			//8 first move
			//7 last attack
			ctx.drawImage(val.img,val.width*val.col,val.height*val.row,val.width,val.height,val.x,val.y,70,70);
			if(val.atack){
				val.row = val.height*val.row <= val.height*13 ? val.row+1 : val.row = 8;
			}
			else{
				val.row = val.height*val.row <= val.height*8 ? val.row+1 : val.row = 0;
			}


		}
		if(val.type == "hidralisk"){ //hidralisk
			//7 first move
			//5 last atack
			//12 sprites at all
			//654 last sprite

			ctx.drawImage(val.img,val.width*val.col+4,val.height*val.row,40,58,val.x,val.y,50,50);

			if(val.atack){
				val.row = val.row*val.height < val.height*11 ? val.row+1 : val.row = 7;
			}
			else {
				val.row = val.row*val.height < val.height*6 ? val.row+1 : val.row = 0;
			}

		}
	});

	$.each(p1Units,function (index,val) { //1 player units check

			if(val.type == "ghost"){ //ghost			
			//39.38 one  height
			//12 at all
			//9 last attack
			//42.5 width 8 at all
			ctx.drawImage(val.img,(val.width*val.col),(val.height*val.row),val.width,val.height,val.x,val.y,50,50);
			if(val.atack){
				val.row = val.width*val.row < val.width*12 ? val.row +1 : val.row = 9;
			}
			else{
				val.row = val.width*val.row < val.width*8 ? val.row+1 : val.row = 0;
			}
		}

		if(val.type == "zealot"){
			/*
			41 width
			42 height
			12 at all
			7 first move
			*/

			ctx.drawImage(val.img,val.width*val.col,val.height*val.row,val.width,val.height,val.x,val.y,50,50);
			if(val.atack){
				val.row = val.height*val.row <= val.height*11 ? val.row + 1 : val.row = 7;
			}
			else{
				val.row = val.height*val.row <= val.height*6 ? val.row + 1 : val.row = 0;
			}
		}

		if(val.type == "templar"){
			/*
			57.1 width
			62.2 height
			10 attack
			*/
			ctx.drawImage(val.img,val.width*val.col,val.height*val.row,val.width,val.height,val.x,val.y,50,50);
			
			if(val.atack){
				val.row = val.row*val.height <= val.height*16 ? val.row + 1 : val.row = 9;
			}
			else{
				val.row = val.row*val.height <= val.height*8 ? val.row + 1 : val.row = 1;
			}

		}


	});


}