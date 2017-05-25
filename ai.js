function zergling() { //p2 10 coin unit
	this.img = zerglingImg,
	this.height = 42.25,
	this.width=42.4,
	this.x = gameFill.width/2,
	this.y=height-60-35-50,
	this.row=0,
	this.col=0,
	this.heal=50,
	this.dmg=3+4,
	this.cost=10,
	this.type="zergling",
	this.style = "mele",
	this.range = 0,
	this.atack = false,
	this.target = 0,
	this.lastSprite = 10,
	this.deadRow = 13,
	this.firstMove = true,
	this.notPaid = true,
	this.attackSound = zerglingAttack,
	this.deathSound = zerglingDeadBetter
	}
	//ultralisk
	function ultralisk() {
		this.img = ultraliskImg,
		this.height = 108,
		this.width=110.125,
		this.x = gameFill.width/2,
		this.y = height-60-35-50,
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
		this.notPaid = true,
		this.attackSound = ultraliskAttack,
		this.deathSound = ultraliskDead
	}
	//hidralisk
		function hidralisk() {
		this.img = hidraliskImg,
		this.height = 58,
		this.width=43,
		this.x = gameFill.width/2,
		this.y=height-60-35-50,
		this.heal=100,
		this.dmg=19,
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
		this.notPaid = true,
		this.attackSound = hidraliskAttack,
		this.deathSound = hidraliskDead
	}

/*
* All code on top need just becouse js somewhy don't see it from engine
*/

console.log("at ai");
if(p2Nexus.coin >= 10) {
	console.log("check good");
	p2Units.push(new zergling);
	p2Nexus.coin-=10;
}