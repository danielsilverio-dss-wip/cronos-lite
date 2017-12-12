class Evento{
	constructor( capitulo, importancia, personagens, descricao ){
		this._capitulo = capitulo 
                this._importancia = importancia
                this._personagens = personagens
                this._descricao = descricao
	}

	get capitulo()   { return this._capitulo }
        get importancia(){ return this._importancia }
        get personagens(){ return this._personagens }
        get descricao()  { return this._descricao }

}
