class Eventos{

	constructor(){
		this._eventos = []
	}

	adiciona(evento){ this._eventos.push(evento) }
	
	remove(evento){
		let index = this.buscaIndex(evento)
		let a = this._eventos.splice(index, 1)
	}

	buscaIndex(evento){
		let encontrou = false
		let i = 0
		while(i < this._eventos.length && !encontrou){
			let isCapituloProcurado = this._eventos[i].capitulo == 
						  evento.capitulo

			isCapituloProcurado ? encontrou = true
					    : i++

		}
		return i

	}

	get lista(){ return this._eventos }


}	
