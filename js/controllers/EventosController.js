class EventosController{

	constructor(){
		this._capitulo = $('#capitulo')[0]
		this._importancia = $('#importancia')[0]
		this._personagens = $('#personagens')[0]
		this._descricao = $('#descricao')[0]
		debugger
	}

	get capitulo()   { return this._capitulo.val() }
	get importancia(){ return this._importancia.val() }
	get personagens(){ return this._personagens.val() }
	get descricao()  { return this._descricao.val() }

	adicionar(e){
		debugger
		e.preventDefault()
		const evento = new Evento(
			this._capitulo,
			this._importancia,
			this._personagens,
			this._descricao
		)
		console.log(evento)	
	}

}

const eventosController = new EventosController()
debugger
const botaoAdicionarEvento = $('#adicionar')

botaoAdicionarEvento.on( 'click', eventosController.adicionar.bind(this) )
