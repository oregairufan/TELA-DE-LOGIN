let submit = document.querySelector('.btn');
let login = document.querySelector('#login')
let senha = document.querySelector('#senha')
let tentativas = 3;




submit.addEventListener('click', enviar)

function enviar() {

    if(login.value == 'Senac' && senha.value =='123A') {
        
            window.location.href='https://www.pr.senac.br';
            alert('Bem vindo ao Sistema')
        
    }else {
        tentativas --
        alert('Login ou Senha incorretos! '+tentativas+' Tentativa(s) Restantes.')

        if(tentativas == 0) {
            
            location.href="https://www.andrews.edu/~theron/red%20page.html"
            alert('Número de tentativas excedido! ACESSO NEGADO!');
        }
    }

}