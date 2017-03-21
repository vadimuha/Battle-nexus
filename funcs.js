function collision(rect1,rect2) { //a touches b?
	if (rect1.x< rect2.x + rect2.width &&
   rect1.x + rect1.width > rect2.x  &&
   rect1.y  < rect2.y + rect2.height &&
   rect1.height + rect1.y > rect2.y ) {
		return true;
	}
	else {
		return false;
	}
}

function collisionRange(rect1,rect2) { //a touches b?
	if (rect1.x< rect2.x + rect2.width &&
   rect1.x + rect1.width > rect2.x  &&
   rect1.y < rect2.y + rect2.height &&
   rect1.height + rect1.y + rect1.range > rect2.y ) {
		return true;
	}
	else {
		return false;
	}
}
function collisionRangeD(rect1,rect2) { //a touches b?
	if (rect1.x< rect2.x + rect2.width &&
   rect1.x + rect1.width > rect2.x  &&
   rect1.y - rect1.range < rect2.y + rect2.height &&
   rect1.height + rect1.y + rect1.range > rect2.y ) {
		return true;
	}
	else {
		return false;
	}
}

