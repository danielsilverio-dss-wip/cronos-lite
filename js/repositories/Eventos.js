class Eventos{

	constructor(){
		this._eventos = []
	}

	adiciona(evento){ this._eventos.push(evento) }

	get lista(){ return this._eventos }

}	
