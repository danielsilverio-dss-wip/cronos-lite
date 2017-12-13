class EventosController{

	constructor(){

		this._eventos = new Eventos()
		this._capitulo = $('#capitulo')
		this._importancia = $('#importancia')
		this._personagens = $('#personagens')
		this._descricao = $('#descricao')

		this._table = $('.table')
	}

	get capitulo()   { return this._capitulo }
	get importancia(){ return this._importancia }
	get personagens(){ return this._personagens }
	get descricao()  { return this._descricao }

	adicionar(e){
		e.preventDefault()
		
		const evento = new Evento(
			this._capitulo.val(),
			this._importancia.val(),
			this._personagens.val(),
			this._descricao.val()
		)

		this._eventos.adiciona(evento)

		ViewHelper.populaTabela(this._table, this._eventos.lista)
	}


}

const eventosController = new EventosController()
const botaoAdicionarEvento = $('#adicionar')

botaoAdicionarEvento.on( 'click', eventosController.adicionar.bind( eventosController ) )
