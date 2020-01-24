function Clients(){
	this.cache = {};
}

Clients.prototype.lookup = function lookup(client) {
	if(this.cache.hasOwnProperty(client)) {
		console.log('Returning' + client + 'from cache');
    }
	else {
		this.cache[client] = client;
		console.log('Added' + client + 'to the in memory db');
    }
}


var hotel = new Clients();

//console.log(hotel);
hotel.lookup('Deepak');
hotel.lookup('Deepak');