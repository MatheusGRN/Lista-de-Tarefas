var botao = document.getElementById('botaoExcluir');
		var concluir = document.getElementById('botaoConcluir');
		var lista = document.getElementById('lista');

		function adicionar(){

			var nomeAtividade = document.getElementById("nome").value;
			var grupoAtividade = document.getElementById("grupo").value;
			var statusAtividade = document.getElementById("status").value;
			var prioridadeAtividade = document.getElementById("prioridade").value;
			var conclusaoAtividade = document.getElementById("conclusao").value;

			var atividade = {
				nome : nomeAtividade,
				grupo : grupoAtividade,
				status : statusAtividade,
				prioridade : prioridadeAtividade,
				conclusao : conclusaoAtividade
			}

			var string = "Nome: "+ atividade.nome +". Grupo: "+ atividade.grupo +". status: "+ atividade.status +". Prioridade: "+ atividade.prioridade +". Data de conclusão: "+ atividade.conclusao;
				var texto = document.createElement('p');
				texto.classList.add('paragraph-styling');
				texto.setAttribute("id", "texto");
				texto.innerText = atividade.nome;
				// texto.innerText ="Nome: "+ atividade.nome +". Grupo: "+ atividade.grupo +". status: "+ atividade.status +". Prioridade: "+ atividade.prioridade +". Data de conclusão: "+ atividade.conclusao;
				lista.appendChild(texto);
				texto.addEventListener('click', function(){
				var opcao = prompt("1-Editar\n 2-Marcar ou desmarcar como concluída\n3-Excluir\n4-Mostar detalhes");
				if(opcao === '1'){

					var alterar = prompt("O que você deseja alterar?");
					if (alterar === "nome") {
						atividade.nome = prompt("Digite o novo nome");

						texto.innerText = atividade.nome ;
					} else if (alterar === "grupo"){
						atividade.grupo = prompt("Digite o novo grupo");
						texto.innerText =atividade.nome ;
					}else if (alterar === "status"){
						atividade.status = prompt("Digite o novo status");
						texto.innerText =atividade.nome ;
					}else if (alterar === "prioridade"){
						atividade.prioridade = prompt("Digite a nova data de conclusão");
				texto.innerText =atividade.nome ;					
					}else if (alterar === "conclusao"){
						atividade.conclusao = prompt("Digite a nova data de conclusão");
				texto.innerText =atividade.nome ;					
					}else{
						alert("Você deseja alterar um dado que não existe");
					}
				} else if(opcao === '2'){
					var resposta = prompt("1-Marcar como concluída.\n2-Desmarcar atividade.");
					if(resposta === '1'){
						texto.style.textDecoration = "line-through";	
					}else if(resposta === '2'){
						texto.style.textDecoration = "none";
					} else {
						alert("Essa opção não existe.");
					}
					
				} else if(opcao === '3'){
					lista.removeChild(texto);
					lista.removeChild(btn);
				} else if (opcao === '4') { 
						var string = "Nome: "+ atividade.nome +". Grupo: "+ atividade.grupo +". status: "+ atividade.status +". Prioridade: "+atividade.prioridade +". Data de conclusão: "+ atividade.conclusao;
						alert(string);
					}
				});
		}

