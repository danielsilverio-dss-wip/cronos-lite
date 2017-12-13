class ViewHelper{

	static criaLinhaDeTabela(itens){
		let linha = $('<tr>')

		Object.keys(itens).forEach( chave => {
			let td = $('<td>').html(itens[chave])
			linha.append(td)
		} )

		return linha
	}

	static criaLinhasDeTabela(objetos){
		let linhas = []
		objetos.forEach( item => {
			let row = this.criaLinhaDeTabela(item)
			linhas.push(row)
		} )
		return linhas
	}

	static populaTabela(tabela, objetos){
	
		let tbody = tabela.find('tbody')
		let linhas = this.criaLinhasDeTabela(objetos)

		linhas.forEach( linha => {
			tbody.append(linha)
		} )
	}

	static atualizaTabela(tabela, objetos){

		let tbody = tabela.find('tbody')
		tbody.empty()

		this.populaTabela(tabela, objetos)
	}

}
