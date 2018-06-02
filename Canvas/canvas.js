var canvas	= document.querySelector('canvas'); //Procura o primeiro item que possua a class que está entre ('')
// Seta a altura e largurar do canvas 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var drw = canvas.getContext('2d'); //Cria uma variável que contém todos os parâmetros de um item 2d

/* // Tipos de Desenhos 
//Retângulo
drw.fillStyle = "#aab3c1"; //Muda a Cor
drw.fillRect(100,200,30,40); 

//Linhas
drw.beginPath(); // Inicia a o "caminho"
drw.moveTo(50,800); // Movimenta a posição, no caso para iniciar 
drw.lineTo(300,100); // traça uma linha baseado no última posição 
drw.strokeStyle = "#aab3c1"; //Muda a Cor
drw.stroke(); // função para executar o desenho no canvas

// Arc / Circle
drw.beginPath();
drw.arc(300,300,30,0,Math.PI * 2,false);
drw.stroke();
*/

var mouse = {
	x: undefined,
	y: undefined
}

// Event Listener para o mouse
window.addEventListener('mousemove',
	function(event)
	{
		mouse.x = event.x;
		mouse.y = event.y;
	})
// Event para resize da tela
window.addEventListener ('resize',function()
{
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight	
	init();
})

var maxdiam = 150;
var CoresArray=[
'#4286f4',
'#282c33',
'#cc4141',
'#ccbbbb']

function Circle(x,y,vx,vy,diam) //objeto pois é uma letra maiúscula
{
	this.x = x;
	this.y = y;
	this.vx = vx;
	this.vy = vy;
	this.diam = diam;
	this.inisize = diam;
	this.color = CoresArray[Math.floor(Math.random() * CoresArray.length)];
	this.draw = function ()
	{
		drw.beginPath();
		drw.arc(this.x ,this.y ,this.diam ,0,Math.PI * 2,false);
		drw.stroke();
		drw.fillStyle = this.color;
		drw.fill();
	}
	
	this.update =function ()
	{
		if ((this.x + this.diam > innerWidth)||(this.x < this.diam))
		{
		this.vx = -this.vx;
		}
		if ((this.y+this.diam > innerHeight)||(this.y<this.diam))
		{
		this.vy = -this.vy;
		}  

		this.x += this.vx; 
		this.y += this.vy;
		
		// Mouse 
		if (mouse.x - this.x < 50 &&
		    mouse.x - this.x > -50 && 
		    mouse.y - this.y > -50 &&
		    mouse.y - this.y < 50 &&
		    this.diam < maxdiam)
		{
			this.diam += 2;
		} 
		else if (this.diam > this.inisize) 
		{
			this.diam -= 2;
		}
		
		this.draw();

	}
}
//Gerando os círculos
var circleArray = [];
var qtyitens =200;

function init()
{	circleArray = []; // Para começar do zero e assim manter o total máximo de itens;
	for (var i = 0 ; i < qtyitens ; i++)
	{
	var diam = (Math.random() * 40) + 1 ;
	var x = Math.random() * (innerWidth - diam * 2) + diam; // para criar dentro do tamanhao da tela
	var y =  Math.random() * (innerHeight - diam * 2) + diam; // == o de cima 
	var vx = Math.random() - 0.5;
	var vy = Math.random() - 0.5;
	circleArray.push(new Circle(x,y,vx,vy,diam));
	}
}

// Animando os círculos
function animar() 
{
	requestAnimationFrame(animar);
	drw.clearRect(0,0,innerWidth ,innerHeight); // limpa o canvas inteiro
	for (var i = 0 ; i < circleArray.length; i++)
	{
		circleArray[i].update();
	}

}
init();
animar();