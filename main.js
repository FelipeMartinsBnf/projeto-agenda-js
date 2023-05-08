const form = document.getElementById('form-contact');

let linhas = '';
const nomesAdds = [];
const numerosAdds = [];

form.addEventListener('submit', function(e){
    e.preventDefault();
    addContact();
    attTable();
})


function addContact(){
    const nome = document.getElementById('nome');
    const telefone = document.getElementById('telefone');

    //Verificar se o nome ou o número já foi cadastrado
    if(nomesAdds.includes(nome.value)){
        alert('O contato ' + nome.value + ' Já foi cadastrado!');
    }else if(numerosAdds.includes(telefone.value)){
        alert('O número '+ telefone.value +' Já foi cadastrado!')
    }else{
        //Add os nomes e telefones cadastrado no array
        nomesAdds.push(nome.value);
        numerosAdds.push(telefone.value);
    
        
        //Criar o html da linha
        //o tr da linha recebe como id o nome do contato, trocando os espaços por - para a função de deletar
        const linha = "<tr id='"+nome.value.replaceAll(' ', '-')+"'>\
        <td><img src='./img/user.png'></td>\
        <td>"+ nome.value +"</td>\
        <td>"+ telefone.value +"</td>\
        <td><div class='delete-img' title='Deletar o contato "+nome.value+"' onclick=deletar('"+nome.value.replaceAll(' ', '-')+"')></div></td>\
        </tr>";
    
        linhas += linha;
        
    }
    
    nome.value='';
    telefone.value='';

}

function attTable(){
    document.querySelector('tbody').innerHTML=linhas;
}

function deletar(id){

    //Deleta o elemento com o id passado
    document.getElementById(id).remove();

    //Retirar nome e telefone do array
    for(let i = 0; i < nomesAdds.length; i++){
        if(nomesAdds[i].replaceAll(' ', '-') == id){
            nomesAdds.splice(i,1);
            numerosAdds.splice(i,1);
            i--
        }
    }

    const NovaTabela = document.querySelector('table tbody').cloneNode(true);
    
    linhas = (NovaTabela.outerHTML);

    attTable();

}