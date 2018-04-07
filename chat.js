var bot ='Clebinho: ';
var user = 'Usuário: ';
// script para funcionar ao apertar o enter
var input = document.getElementById("pergunta");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("btn").click();
        erase_sent();
        }
});
//função pra limpar depois de enviar
function erase_sent()
{
  var limpo = null;
  document.getElementById('pergunta').value = limpo;
}
// Falas para o bot
var resp_oi = ['Olar','Como se chama ?'];
var resp_ale = ['Você gosta de gnomos ?','Que pena brother','É mesmo né ','alouuu','O loco bixo','AHAM SEI ','Não me venha com joguinhos','poxan',
'Aquele macaco que não pode se molhar o orango tang','ontem mesmo','carai c é loko bixo','ta ligado naquela banda q nunca dorme : sleepk aki not'];


  // temperatura por window prompt
  function temperatura()
    {
      document.getElementById('resposta').value = bot + 'Você quer saber a temperatura de onde ?';
      var winprom = window.prompt (bot + 'Qual cidade deseja a informação de temperatura ?');
      window.open('https://www.google.com.br/search?q=temperatura+' + winprom );
  }

  // Falas Geradas por um loop
  function fala_sozinho()
  {
    for(i = 0 ; i < 10; i++)
    {
      var falas = resp_ale[Math.floor(Math.random() * resp_ale.length)];
      document.getElementById('resposta').value += falas;

    }
  }

  // Gera data e hora atual
  function data_atual()
  {
    var today = new Date();
    var data_final = today.getDate() + '/' + today.getMonth()+1 + '/' + today.getFullYear(); // data
    var hour_final = today.getHours() + ":" + today.getMinutes() ; // hora
    document.getElementById('resposta').value += bot + 'São ' +  hour_final + ' do dia ' + data_final + '. de nada lek' ;
  }

  // func principal
  function enviar()
  {
    var input = document.getElementById("pergunta").value;
    var rand = resp_oi[Math.floor(Math.random() * resp_oi.length)];
    var rand2 = resp_ale[Math.floor(Math.random() * resp_ale.length)];

    if (input.indexOf('oi') != -1)
      {
        document.getElementById('resposta').value = user + document.getElementById('pergunta').value +'\n'+ bot + rand;
      }
    else if (input.indexOf('/cmd') != -1)
      {
        document.getElementById('resposta').value = 'Comandos :  \n /temp pega uma cidade e mostrar sua temperatura  \n /falas fica falando sozinho por um tempo \n /date mostra a data e a hora atual \n /encomenda redireciona para o meu site de pesquisa de encomenda \n /calc redireciona para a calculadora *Alguns estão em teste e outros ainda estão sendo desenvolvidos*';
      }
    else if (input.indexOf('julia') != -1)
      {
        document.getElementById('resposta').value +='\n'+ user + document.getElementById('pergunta').value +'\n'+ bot + 'te amo mais q tudo bebê';
      }
    else if (input.indexOf('eu também') != -1 || input.indexOf('tudo certo') != -1|| input.indexOf('to ok') != -1)
      {
        document.getElementById('resposta').value +='\n'+ user + document.getElementById('pergunta').value +'\n'+ bot + 'que bom ! , testa meus comandos com /cmd';
      }
      else if (input.indexOf('tudo bem') != -1 || input.indexOf('tudo certo') != -1|| input.indexOf('eai') != -1|| input.indexOf('eai') != -1)
        {
          document.getElementById('resposta').value +='\n'+ user + document.getElementById('pergunta').value +'\n'+ bot + 'eu to bem e você locão ? ';
        }
        else if (input.indexOf('te fez') != -1 || input.indexOf('te criou') != -1|| input.indexOf('te programou') != -1|| input.indexOf('eai') != -1)
          {
            document.getElementById('resposta').value +='\n'+ user + document.getElementById('pergunta').value +'\n'+ bot + 'Foi o hasquer anemonas @mendesguii';
          }

    else if (input.indexOf('cleb') != -1 || input.indexOf('se chama') != -1 )
      {
        document.getElementById('resposta').value +='\n'+ user + document.getElementById('pergunta').value +'\n'+ bot +'meu nome é cleber rsrs';
      }
    else if (input.indexOf('/temp') != -1)
      {
        temperatura();
      }
    else if (input.indexOf('/falas') != -1)
      {
        fala_sozinho();
      }

    else if (input.indexOf('/date') != -1)
      {
        data_atual();
      }
    else if (input.indexOf('/encomenda') != -1) //redireciona
        {
          window.open('https://hix3nn.000webhostapp.com/correios.html')
        }
    else if (input.indexOf('/calc') != -1) //redireciona
          {
            window.open('https://hix3nn.000webhostapp.com/calculadora.html')
          }
    else if (input.indexOf('/clear') !=-1)// apagar
    {
      document.getElementById('resposta').value = null;
    }
    else
      {
        document.getElementById('resposta').value += '\n' + user + document.getElementById('pergunta').value +'\n'+bot+rand2;
      }

  }
