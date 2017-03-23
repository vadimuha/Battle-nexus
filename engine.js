

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
	mvSpeed = 3;
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
		coin:30,
		width:130,
		height:107,
		y:30,
		x:width/2,
		type:"nexus"
	}
	p2Nexus = {
		image:p2NexusImg,
		heal:1000,
		coin:30,
		y:height-60-35-100,
		x:width/2,
		width:130,
		height:107,
		type:"nexus"
	}
	setInterval(function () {
			p1Nexus.coin++;
			p2Nexus.coin++;
		},2000);
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
	this.heal=50,
	this.dmg=5,
	this.cost=10,
	this.type="zergling",
	this.style = "mele",
	this.range = 0,
	this.atack = false,
	this.target = 0,
	this.lastSprite = 10,
	this.deadRow = 13,
	this.firstMove = true,
	this.notPaid = true
	}
	//ultralisk
	function ultralisk() {
		this.img = ultraliskImg,
		this.height = 108,
		this.width=110.125,
		this.x = gameFill.width/2,
		this.y = height-60-35-100,
		this.heal=200,
		this.dmg=30,
		this.cost=100,
		this.type="ultralisk",
		this.col = 0, // 0 is first col
		this.row = 0, 
		this.range = 0,
		this.style = "mele",
		this.atack = false,
		this.target = 0,
		this.lastSprite = 13,
		this.deadRow = 15,
		this.firstMove = true,
		this.notPaid = true
	}
	//hidralisk
		function hidralisk() {
		this.img = hidraliskImg,
		this.height = 58,
		this.width=43,
		this.x = gameFill.width/2,
		this.y=height-60-35-100,
		this.heal=50,
		this.dmg=20,
		this.cost=50,
		this.type="hidralisk",
		this.col = 0,
		this.atack = false, //atack or not
		this.row = 0,
		this.range = 50,
		this.style = "range",
		this.target = 0,
		this.lastSprite = 11,
		this.deadRow = 12,
		this.firstMove = true,
		this.notPaid = true
	}
		function ghost() {
		this.img = ghostImg,
		this.height = 39.38,
		this.width=42.5,
		this.x = gameFill.width/2,
		this.y=30+100,
		this.heal=30,
		this.dmg=5,
		this.cost=10,
		this.type="ghost",
		this.col = 8,
		this.atack = false, //atack or not
		this.row = 0,
		this.range = 50,
		this.style = "range",
		this.target = 0,
		this.lastSprite = 12,
		this.deadRow = 13,
		this.firstMove = true,
		this.notPaid = true
	}

		function zealot() {
		this.img = zealotImg,
		this.height = 44.2,
		this.width=41,
		this.x = gameFill.width/2,
		this.y=30+100,
		this.heal=150,
		this.dmg=15,
		this.range = 0,
		this.cost=50,
		this.type="zealot",
		this.col = 8,
		this.atack = false, //atack or not
		this.row = 0,
		this.style = "mele",
		this.target = 0,
		this.lastSprite = 11,
		this.deadRow = 13,
		this.firstMove = true,
		this.notPaid = true

	}
		function templar() {
		this.img = templarImg,
		this.height = 62.2,
		this.width=57.1,
		this.x = gameFill.width/2,
		this.y=30+100,
		this.heal=100,
		this.dmg=100,
		this.cost=50,
		this.type="templar",
		this.col = 8,
		this.atack = false, //atack or not
		this.row = 0,
		this.range = 0,
		this.style = "mele",
		this.target = 0, // 0 is not have target
		this.lastSprite = 16,
		this.deadRow = 18,
		this.firstMove = true,
		this.notPaid = true
	}
	
	//examples
	unit1 = new zergling;
	ultrlsk = new ultralisk;
	hidrlsk = new hidralisk;
	gst = new ghost;
	zilon = new zealot;
	tmplr = new templar;
	//if unit is bought
	$(window).keydown(function (e) {
		switch (e.keyCode){
			case m:
			if(p2Nexus.coin >= unit1.cost){
			p2Units.push(new zergling);
			p2Nexus.coin -= unit1.cost;
			}
			break;
			case n:
			if(p2Nexus.coin >= ultrlsk.cost){
			p2Units.push(new ultralisk);
			p2Nexus.coin -= ultrlsk.cost;
			}
			break;
			case b:
			if(p2Nexus.coin >= hidrlsk.cost){
			p2Units.push(new hidralisk);
			p2Nexus.coin -= hidrlsk.cost;
			}
			break;
			case ee:
			if(p1Nexus.coin >= gst.cost){
			p1Units.push(new ghost);
			p1Nexus.coin -= gst.cost;
			}
			break;
			case w:
			if(p1Nexus.coin >= zilon.cost){
			p1Units.push(new zealot);
			p1Nexus.coin -= zilon.cost;
			}
			break;
			case q:
		if(p1Nexus.coin >= tmplr.cost){
			p1Units.push(new templar);
			p1Nexus.coin -= tmplr.cost;
		}
			break;
		}
	});
	
	$(gameFill).mousemove(function (e) {
		var mouseX = e.pageX - gameFill.offsetLeft;
		var mouseY = e.pageY - gameFill.offsetTop;
		//console.log(mouseY);
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
				p2Units[i].target = p1Nexus;
				if(p2Units[i].target.type == "nexus"){		
				if(p2Units[i].height*p2Units[i].row == p2Units[i].height*p2Units[i].lastSprite){
					p1Nexus.heal -= p2Units[i].dmg;
				}
			}
		}


			else if(p1Units.length == 0){
			p2Units[i].y-=mvSpeed; //improved speed for develop in release remove to -1
			p2Units[i].col = 0;
		} // don't touch above it's movement
		
	}
	//ultralisk logic
	if(p2Units[i].type == "ultralisk"){
		if(p1Units.length == 0){
			if(p2Units[i].y<=30+100) { // if comes to nexus
				p2Units[i].atack = true;
				p2Units[i].target = p1Nexus;
				console.log(p2Units[i].target)
			if(p2Units[i].target.type == "nexus"){		
				if(p2Units[i].height*p2Units[i].row == p2Units[i].height*p2Units[i].lastSprite){
					p1Nexus.heal -= p2Units[i].dmg;
				}
			}
		}
			else{
			p2Units[i].y-=mvSpeed; //improved speed for develop in release remove to -1
			p2Units[i].atack = false;
		} // don't touch above it's movement
		}

	}

	//hidralisk logic (shooter)
	if(p2Units[i].type == "hidralisk"){

			if(p1Units.length == 0){
			if(p2Units[i].y - p2Units[i].range >= 30+100 ) {
				p2Units[i].y -= mvSpeed;
			}

			else {
				p2Units[i].atack = true;
				p2Units[i].target = p2Nexus;
				if(p2Units[i].target.type == "nexus"){		
					if(p2Units[i].height*p2Units[i].row == p2Units[i].height*p2Units[i].lastSprite){
						p1Nexus.heal -= p2Units[i].dmg;
					}
				}				

			}
		}

	

	}

	
	

}	// end of 2p units

	
	for (var i = 0; i < p1Units.length; i++) {
		
		if(p1Units[i].type == "ghost"){
			if(p2Units.length == 0){
			if(p1Units[i].y <= height-130-p1Units[i].range-p1Units[i].height ) {
				p1Units[i].y += mvSpeed;				
			}

			else {
				p1Units[i].atack = true;
				p1Units[i].target = p2Nexus;
				if(p1Units[i].target.type == "nexus"){		
				if(p1Units[i].height*p1Units[i].row == p1Units[i].height*p1Units[i].lastSprite){
					p2Nexus.heal -= p1Units[i].dmg;
				}
			}

			}
		}

		}

		if(p1Units[i].type == "zealot") {
				if(p1Units[i].y <= height-130-p1Units[i].height ) {

				if(p2Units.length == 0){ // if no units attack nexus
				p1Units[i].y += mvSpeed;
			}

			}

			else {
				p1Units[i].atack = true;
				p1Units[i].target = p2Nexus;
				if(p1Units[i].target.type == "nexus"){		
				if(p1Units[i].height*p1Units[i].row == p1Units[i].height*p1Units[i].lastSprite){
					p2Nexus.heal -= p1Units[i].dmg;
				}
			}
			}
		}

		if(p1Units[i].type == "templar") {
				if(p1Units[i].y <= height-130-p1Units[i].height ) {
					if(p2Units.length == 0){
					p1Units[i].y += mvSpeed;
				}

			}

			else {
				p1Units[i].atack = true;
				p1Units[i].target = p2Nexus;
				if(p1Units[i].target.type == "nexus"){		
				if(p1Units[i].height*p1Units[i].row == p1Units[i].height*p1Units[i].lastSprite){
					p2Nexus.heal -= p1Units[i].dmg;
				}
			}

			}
		}



	}

	//MAIN FIGHT AI
	if(p1Units.length >= p2Units.length){
		for(i=0;i<p1Units.length;i++){ //main loop

			if(p2Units.length != 0){

				for(j=0;j<p2Units.length;j++){ //if is some p2 units
						
						if(p1Units[i].style != "range"){ // if his non range
							if(!collision(p1Units[i],p1Units[i].target) || p1Units[i].target == 0 ) {//if p1 doesn't touches his target or don't have target
								if(p1Units[i].firstMove){
									p1Units[i].y+=mvSpeed;
									p1Units[i].firstMove = false;
								}
							}
						}
						else if(p1Units[i].style == "range"){ // and if he range
							if(!collisionRange(p1Units[i],p1Units[i].target) || p1Units[i].target == 0 ) {//if p1 doesn't touches his target or don't have target
								if(p1Units[i].firstMove){
								p1Units[i].y+=mvSpeed;
								p1Units[i].firstMove = false;
							}
							}
						}

						if(p2Units[j].style!="range"){ // if p2 is non range do next
							if(!collision(p2Units[j],p2Units[j].target) || p2Units[j].target == 0) { // if they don't touches do next
								if(p2Units[j].firstMove){
								p2Units[j].y-=mvSpeed;
								p2Units[j].firstMove = false;
							}
							}
						}
						else if(p2Units[j].style=="range"){ // if p2 is range to next
							if(!collisionRangeD(p2Units[j],p2Units[j].target) || p2Units[j].target == 0){ // if thet don't touches move
								if(p2Units[j].firstMove){
								p2Units[j].y-=mvSpeed;
								p2Units[j].firstMove = false;
							 }
							}
						}
						//target selection
					if(p1Units[i].style != "range"){
						if(collision(p1Units[i],p2Units[j])){
							if(p1Units[i].target == 0 || p1Units[i].target.type == "nexus"){
								p1Units[i].target = p2Units[j];
								console.log(p1Units[i].target);
							}
						}
					}
						else if(p1Units[i].style == "range"){
								if(collisionRange(p1Units[i],p2Units[j]) ) {
								if(p1Units[i].target == 0 || p1Units[i].target.type == "nexus"){
									p1Units[i].target = p2Units[j];
									console.log(p1Units[i].target);
								}
							}

						}

					if(p2Units[j].style != "range") {
						if(collision(p2Units[j],p1Units[i]) ){
							if(p2Units[j].target == 0 || p2Units[j].target.type == "nexus"){ // if don't have target
								p2Units[j].target = p1Units[i];	
								console.log(p2Units[j].target);
							}
						}
					}
					else if(p2Units[j].style == "range"){
						 if(collisionRangeD(p2Units[j],p1Units[i]) ){
							if(p2Units[j].target == 0 || p2Units[j].target.type == "nexus"){ // if don't have target
								p2Units[j].target = p1Units[i];	
								console.log(p2Units[j].target);

							}
						}
					}

					if(collision(p1Units[i],p1Units[i].target) && p1Units[i].style != "range"){ // if p1 touches target
						p1Units[i].atack = true;
					}
					else if(p1Units[i].style == "range"){
						if(collisionRange(p1Units[i],p1Units[i].target) ){
							p1Units[i].atack = true;
						}
					}
					//####################template of attack####################### 
				if(p2Units[j].style != "range"){
					if(collision(p2Units[j],p2Units[j].target)){ //if p2 touches target
						if(p2Units[j].target.notPaid){
						p2Units[j].atack = true;
						p2Units[j].target.notPaid = false;
						}
						if(p2Units[j].height*p2Units[j].row == p2Units[j].height*p2Units[j].lastSprite){ //if is last aatck sprite
							p2Units[j].target.heal-=p2Units[j].dmg; //do damage
							console.log(p2Units[j].target.heal);
						}
						if(p2Units[j].target.heal <= 0){
							p2Nexus.coin += p2Units[j].target.cost/2;
							if(p2Units[j].target.row == p2Units[j].target.deadRow){
								p2Units[j].target = p1Nexus;
								p2Units[j].atack = false;
							}
							
						}

					}
				}
				if(p2Units[j].style == "range"){
						if(collisionRangeD(p2Units[j],p2Units[j].target)){ //if p2 touches target
						p2Units[j].atack = true;
						if(p2Units[j].height*p2Units[j].row == p2Units[j].height*p2Units[j].lastSprite){ //if is last aatck sprite
							p2Units[j].target.heal-=p2Units[j].dmg; //do damage
							console.log(p2Units[j].target.heal);
						}
						if(p2Units[j].target.heal <= 0){
							if(p2Units[j].target.notPaid){
							p2Nexus.coin += p2Units[j].target.cost/2;
							p2Units[j].target.notPaid = false;
							}
							if(p2Units[j].target.row == p2Units[j].target.deadRow){
								p2Units[j].target = p1Nexus;
								p2Units[j].atack = false;
							}
							
						}

					}
				}
				if(p1Units[i].style != "range"){
					if(collision(p1Units[i],p1Units[i].target)){ //if p2Units touches target
						p1Units[i].atack = true;
						if(p1Units[i].height*p1Units[i].row == p1Units[i].height*p1Units[i].lastSprite){ //if is last aatck sprite
							p1Units[i].target.heal-=p1Units[i].dmg; //do damage
							console.log(p1Units[i].target.heal);
						}
						if(p1Units[i].target.heal <= 0){
							if(p1Units[i].target.notPaid){
							p1Nexus.coin += p1Units[i].target.cost/2;
							p1Units[i].target.notPaid = false;
							}
							if(p1Units[i].target.row == p1Units[i].target.deadRow){
								p1Units[i].target = p2Nexus;
								p1Units[i].atack = false;
							}
							
						}

					}
				}
				if(p1Units[i].style == "range"){
						if(collisionRange(p1Units[i],p1Units[i].target)){ //if p2Units touches target
						p1Units[i].atack = true;
						if(p1Units[i].height*p1Units[i].row == p1Units[i].height*p1Units[i].lastSprite){ //if is last aatck sprite
							p1Units[i].target.heal-=p1Units[i].dmg; //do damage
							console.log(p1Units[i].target.heal);
						}
						if(p1Units[i].target.heal <= 0){
							if(p1Units[i].target.notPaid){
							p1Nexus.coin += p1Units[i].target.cost;
							p1Units[i].target.notPaid = false;
							}
							if(p1Units[i].target.row == p1Units[i].target.deadRow){
								p1Units[i].target = p2Nexus;//Not shure about that
								p1Units[i].atack = false;
							}
							
						}

					}
				} 	
			
				}
			}

		}


	}
	else{
		for(i=0;i<p2Units.length;i++){ //main loop if p2 have more units
			if(p1Units.length != 0){
				for(var j = 0; j<p1Units.length;j++){
						if(p2Units[i].style != "range"){ // if his non range
							if(!collision(p2Units[i],p2Units[i].target) || p2Units[i].target == 0 ) {//if p1 doesn't touches his target or don't have target
								if(p2Units[i].firstMove){
								p2Units[i].y-=mvSpeed;
								p2Units[i].firstMove=false;
								}
							}
						}
						else if(p2Units[i].style == "range"){ // and if he range
							if(!collisionRange(p2Units[i],p2Units[i].target) || p2Units[i].target == 0 ) {//if p1 doesn't touches his target or don't have target
								if(p2Units[i].firstMove){
								p2Units[i].y-=mvSpeed;
								p2Units[i].firstMove=false;
								}
							}
						}

						if(p1Units[j].style!="range"){ // if p2Units is non range do next
							if(!collision(p1Units[j],p1Units[j].target) || p1Units[j].target == 0) { // if they don't touches do next
								if(p1Units[j].firstMove){
								p1Units[j].y+=mvSpeed;
								p1Units[j].firstMove = false;
							}
							}
						}
						else if(p1Units[j].style=="range"){ // if p2Units is range to next
							if(!collisionRangeD(p1Units[j],p1Units[j].target) || p1Units[j].target == 0){ // if thet don't touches move
								if(p1Units[j].firstMove){
								p1Units[j].y+=mvSpeed;
								p1Units[j].firstMove = false;
							}
							}
						}
						//target selection
					if(p2Units[i].style != "range"){
						if(collision(p2Units[i],p1Units[j])){
							if(p2Units[i].target == 0 || p2Units[i].target.type == "nexus"){
								p2Units[i].target = p1Units[j];
								console.log(p2Units[i].target);
							}
						}
					}
						else if(p2Units[i].style == "range"){
								if(collisionRange(p2Units[i],p1Units[j]) ) {
								if(p2Units[i].target == 0 || p2Units[i].target.type == "nexus"){
									p2Units[i].target = p1Units[j];
									console.log(p2Units[i].target);
								}
							}

						}

					if(p1Units[j].style != "range") {
						if(collision(p1Units[j],p2Units[i]) ){
							if(p1Units[j].target == 0 || p1Units[j].target.type == "nexus"){ // if don't have target
								p1Units[j].target = p2Units[i];	
								console.log(p1Units[j].target);
							}
						}
					}
					else if(p1Units[j].style == "range"){
						 if(collisionRangeD(p1Units[j],p2Units[i]) ){
							if(p1Units[j].target == 0 || p1Units[j].target.type == "nexus"){ // if don't have target
								p1Units[j].target = p2Units[i];	
								console.log(p1Units[j].target);

							}
						}
					}

					if(collision(p2Units[i],p2Units[i].target) && p2Units[i].style != "range"){ // if p1 touches target
						p2Units[i].atack = true;
					}
					else if(p2Units[i].style == "range"){
						if(collisionRange(p2Units[i],p2Units[i].target) ){
							p2Units[i].atack = true;
						}
					}
					//####################template of attack####################### 
				if(p1Units[j].style != "range"){
					if(collision(p1Units[j],p1Units[j].target)){ //if p2Units touches target
						p1Units[j].atack = true;
						if(p1Units[j].height*p1Units[j].row == p1Units[j].height*p1Units[j].lastSprite){ //if is last aatck sprite
							p1Units[j].target.heal-=p1Units[j].dmg; //do damage
							console.log(p1Units[j].target.heal);
						}
						if(p1Units[j].target.heal <= 0){
							if(p1Units[j].target.notPaid){
							p1Nexus.coin += p1Units[j].target.cost/2;
							p1Units[j].target.notPaid = false;
							}
							if(p1Units[j].target.row == p1Units[j].target.deadRow){
								p1Units[j].target = p2Nexus;
								p1Units[j].atack = false;
							}
							
						}

					}
				}
				if(p1Units[j].style == "range"){
						if(collisionRange(p1Units[j],p1Units[j].target)){ //if p2Units touches target
						p1Units[j].atack = true;
						if(p1Units[j].height*p1Units[j].row == p1Units[j].height*p1Units[j].lastSprite){ //if is last aatck sprite
							p1Units[j].target.heal-=p1Units[j].dmg; //do damage
							console.log(p1Units[j].target.heal);
						}
						if(p1Units[j].target.heal <= 0){
							if(p1Units[j].target.notPaid){
							p1Nexus.coin += p1Units[j].target.cost/2;
							p1Units[j].target.notPaid = false;
							}
							if(p1Units[j].target.row == p1Units[j].target.deadRow){
								p1Units[j].target = p2Nexus;//Not shure about that
								p1Units[j].atack = false;
							}
							
						}

					}
				} 	

				if(p2Units[i].style != "range"){
					if(collision(p2Units[i],p2Units[i].target)){ //if p2 touches target
						p2Units[i].atack = true;
						if(p2Units[i].height*p2Units[i].row == p2Units[i].height*p2Units[i].lastSprite){ //if is last aatck sprite
							p2Units[i].target.heal-=p2Units[i].dmg; //do damage
							console.log(p2Units[i].target.heal);
						}
						if(p2Units[i].target.heal <= 0){
							if(p2Units[i].target.notPaid){
							p2Nexus.coin += p2Units[i].target.cost/2;
							p2Units[i].target.notPaid = false;
							}
							if(p2Units[i].target.row == p2Units[i].target.deadRow){
								p2Units[i].target = p1Nexus;
								p2Units[i].atack = false;
							}
							
						}

					}
				}
				if(p2Units[i].style == "range"){
						if(collisionRangeD(p2Units[i],p2Units[i].target)){ //if p2 touches target
						p2Units[i].atack = true;
						if(p2Units[i].height*p2Units[i].row == p2Units[i].height*p2Units[i].lastSprite){ //if is last aatck sprite
							p2Units[i].target.heal-=p2Units[i].dmg; //do damage
							console.log(p2Units[i].target.heal);
						}
						if(p2Units[i].target.heal <= 0){
							if(p2Units[i].target.notPaid){
							p2Nexus.coin += p2Units[i].target.cost/2;
							p2Units[i].target.notPaid = false;
							}
							if(p2Units[i].target.row == p2Units[i].target.deadRow){
								p2Units[i].target = p1Nexus;
								p2Units[i].atack = false;
							}
							
						}

					}
				}

				}
			}
		}

	}
	for(i=0;i<p1Units.length;i++){
		for(j=0;j<p2Units.length;j++){
			p1Units[i].firstMove = true;
			p2Units[j].firstMove = true;
		}
	}


}




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
	ctx.fillText("b",10,height-58);
	ctx.fillText("n",58,height-58);
	ctx.fillText("m",52*2,height-58);
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
		ctx.drawImage(val.img,val.width*val.col,val.height*val.row,val.width,val.height,val.x,val.y,val.width,val.height);
	if(val.heal > 0){
			if(val.atack){
				val.row = val.height*val.row <= val.height*10 ? val.row + 1 : val.row = 7;
			}
			else{
				val.row = val.height*val.row <= val.height*6 ? val.row + 1 : val.row = 0;
			}
		}
		else{
			val.row = 13;
			val.col = val.col < 5 ? val.col + 1 : val.col = 0;
			if(val.col == 4){
				p2Units.splice(val,1);
			}
		}

		}
		if(val.type == "ultralisk"){
			//108 height sprite 125.125 width
			// 15 at all
			//8 first move
			//7 last attack
			ctx.drawImage(val.img,val.width*val.col,val.height*val.row,val.width,val.height,val.x,val.y,val.width,val.height);
		if(val.heal > 0){
			if(val.atack){
				val.row = val.height*val.row <= val.height*val.lastSprite+1 ? val.row+1 : val.row = 8;
			}
			else{
				val.row = val.height*val.row <= val.height*8 ? val.row+1 : val.row = 0;
			}
		}
		else{
			val.row = val.lastSprite+2;
			val.col = val.col < 4 ? val.col + 1 : val.col = 0;
			if(val.col == 3){
				p2Units.splice(val,1);
			}
		}

		}
		if(val.type == "hidralisk"){ //hidralisk
			//7 first move
			//5 last atack
			//12 sprites at all
			//654 last sprite

			ctx.drawImage(val.img,val.width*val.col+4,val.height*val.row,40,58,val.x,val.y,val.width,val.height);
		if(val.heal > 0){
			if(val.atack){
				val.row = val.row*val.height < val.height*11 ? val.row+1 : val.row = 7;
			}
			else {
				val.row = val.row*val.height < val.height*6 ? val.row+1 : val.row = 0;
			}
		}
		else {
			val.row = 12;
			val.col = val.col < 4 ? val.col + 1 : val.col = 0;
			if(val.col == 3){
				p2Units.splice(val,1);
			}
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
		if(val.heal > 0) {
			if(val.atack) {
				val.row = val.width*val.row < val.width*12 ? val.row +1 : val.row = 9;
			}
			else{
				val.row = val.width*val.row < val.width*8 ? val.row+1 : val.row = 0;
			}
		}

		else { // if is dead
			val.row = val.deadRow; // dead row
			val.col = val.col < 5 ? val.col+1 : val.col = 0; // dead somewhy in col
			if(val.col == 5){
				p1Units.splice(val,1);
			}
		}

		}

		if(val.type == "zealot"){
			/*
			41 width
			42 height
			12 at all
			7 first move
			*/

			ctx.drawImage(val.img,val.width*val.col,val.height*val.row,val.width,val.height,val.x,val.y,val.width,val.height);
			if(val.heal > 0){
				if(val.atack){
					val.row = val.height*val.row <= val.height*11 ? val.row + 1 : val.row = 7;
				}
				else{
					val.row = val.height*val.row <= val.height*6 ? val.row + 1 : val.row = 0;
				}
			}
			else{
				val.row = val.deadRow;
				val.col = val.col <= 5 ? val.col + 1 : val.col = 0;
				if(val.col == 6){
					p1Units.splice(val,1);
				}
			}

		}

		if(val.type == "templar"){
			/*
			57.1 width
			62.2 height
			10 attack
			*/
			ctx.drawImage(val.img,val.width*val.col,val.height*val.row,val.width,val.height,val.x,val.y,val.width,val.height);
			if(val.heal > 0){
				if(val.atack){
					val.row = val.row*val.height <= val.height*16 ? val.row + 1 : val.row = 9;
				}
				else{
					val.row = val.row*val.height <= val.height*8 ? val.row + 1 : val.row = 1;
				}
			}
			else{
				val.row = 18;
				val.col = val.col <= 7 ? val.col + 1 : val.col = 0;
				if(val.col == 7){
					p1Units.splice(val,1);
				}
			}

		}

		
	});


}