var valor1 = 0;
var valor2 = 0;
var func= 0;
function digitar(num)
{
  var num;
  document.getElementById("boxdecalc").value += num;
  var final = document.getElementById("boxdecalc").value;
}
function clean()
{
    document.getElementById("boxdecalc").value = null;
	var valor1 = 0;
	var valor2 = 0;
}

function conta(tipo)
{
  valor1 = document.getElementById("boxdecalc").value;
  document.getElementById("boxdecalc").value = null;
	func = tipo;
}
// 1 - Soma //2 - Subtração //3 - divisão //4 - multiplicação// 5 - Porcentagem // 6 - Raiz quadrada
function result()
{
	valor2 = document.getElementById("boxdecalc").value;
	if (func == 1)
	{
		var resultado = parseInt(valor1)+parseInt(valor2);
	}
	if (func == 2)
	{
		var resultado = parseInt(valor1) - parseInt(valor2);
	}
	if (func == 3)
	{
		var resultado = parseInt(valor1) / parseInt(valor2);
	}
	if (func == 4)
	{
		var resultado = parseInt(valor1) * parseInt(valor2);
	}
	if (func == 5)
	{
		var resultado = (parseInt(valor1)/100) * parseInt(valor2);
	}
	if (func == 6)
	{
		var resultado = Math.sqrt(parseInt(valor1));
	}

	document.getElementById("boxdecalc").value = resultado;	
}