/*==================================================
            VARIÁVEIS GERAIS
==================================================*/

const body = document.body;

const btnTopo = document.getElementById("topo");

const btnDark = document.getElementById("modoEscuro");

const btnMais = document.getElementById("fonteMais");

const btnMenos = document.getElementById("fonteMenos");

let tamanhoFonte = 100;

/*==================================================
            MENU SUAVE
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        destino.scrollIntoView({

            behavior:"smooth"

        });

    });

});

/*==================================================
            BOTÃO VOLTAR AO TOPO
==================================================*/

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        btnTopo.style.opacity="1";

        btnTopo.style.pointerEvents="all";

    }

    else{

        btnTopo.style.opacity="0";

        btnTopo.style.pointerEvents="none";

    }

});

btnTopo.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/*==================================================
            MODO ESCURO
==================================================*/

btnDark.addEventListener("click",()=>{

    body.classList.toggle("dark");

    if(body.classList.contains("dark")){

        btnDark.innerHTML="☀️";

    }

    else{

        btnDark.innerHTML="🌙";

    }

});

/*==================================================
            TAMANHO DA FONTE
==================================================*/

btnMais.addEventListener("click",()=>{

    if(tamanhoFonte < 135){

        tamanhoFonte += 5;

        body.style.fontSize=tamanhoFonte+"%";

    }

});

btnMenos.addEventListener("click",()=>{

    if(tamanhoFonte > 80){

        tamanhoFonte -=5;

        body.style.fontSize=tamanhoFonte+"%";

    }

});

/*==================================================
            EFEITO HEADER
==================================================*/

const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 70){

        header.style.padding="12px 8%";

        header.style.boxShadow="0 10px 30px rgba(0,0,0,.12)";

    }

    else{

        header.style.padding="18px 8%";

        header.style.boxShadow="0 4px 15px rgba(0,0,0,.06)";

    }

});

/*==================================================
            ANIMAÇÃO AO SCROLL
==================================================*/

const elementos = document.querySelectorAll(

".card,.mini-card,.objetivo-card,.item-solucao,.optica-card,.bloco,.numero,.membro,.acess-card"

);

function revelar(){

    elementos.forEach(item=>{

        const pos=item.getBoundingClientRect().top;

        const tela=window.innerHeight-120;

        if(pos<tela){

            item.style.opacity="1";

            item.style.transform="translateY(0)";

        }

    });

}

elementos.forEach(item=>{

    item.style.opacity="0";

    item.style.transform="translateY(50px)";

    item.style.transition=".8s";

});

window.addEventListener("scroll",revelar);

revelar();

/*==================================================
            CURSOR NOS BOTÕES
==================================================*/

document.querySelectorAll("button,.btn,.btn-secundario").forEach(botao=>{

    botao.addEventListener("mouseenter",()=>{

        botao.style.transform="scale(1.05)";

    });

    botao.addEventListener("mouseleave",()=>{

        botao.style.transform="scale(1)";

    });

});

/*==================================================
            FIM PARTE 1
==================================================*/
/*==================================================
                QUIZ
==================================================*/

const botoesQuiz = document.querySelectorAll(".quiz-btn");

const resultadoQuiz = document.getElementById("resultadoQuiz");

botoesQuiz.forEach(botao => {

    botao.addEventListener("click", () => {

        botoesQuiz.forEach(btn => {

            btn.disabled = true;

        });

        if(botao.dataset.correta === "true"){

            botao.style.background = "#8BC34A";
            botao.style.color = "white";

            resultadoQuiz.innerHTML =
            "✅ Parabéns! A cor preta absorve mais calor e é ideal para placas solares.";

            resultadoQuiz.style.color = "#4CAF50";

        }

        else{

            botao.style.background = "#F44336";
            botao.style.color = "white";

            resultadoQuiz.innerHTML =
            "❌ Quase! A resposta correta é <strong>Preto</strong>, pois absorve mais radiação solar.";

            resultadoQuiz.style.color = "#F44336";

            botoesQuiz.forEach(btn=>{

                if(btn.dataset.correta==="true"){

                    btn.style.background="#8BC34A";
                    btn.style.color="white";

                }

            });

        }

    });

});

/*==================================================
            DISCO DE NEWTON
==================================================*/

const disco = document.getElementById("discoNewton");

const btnDisco = document.getElementById("girarNewton");

let girando = false;

btnDisco.addEventListener("click",()=>{

    if(!girando){

        disco.style.transition="3s linear";

        disco.style.transform="rotate(1440deg)";

        btnDisco.innerHTML="Parar";

        girando=true;

    }

    else{

        disco.style.transition=".5s";

        disco.style.transform="rotate(0deg)";

        btnDisco.innerHTML="Girar Disco";

        girando=false;

    }

});

/*==================================================
            SIMULADOR
==================================================*/

const temperatura = document.getElementById("temperatura");

const barra = document.getElementById("barraTemperatura");

const statusSistema = document.getElementById("statusSistema");

const aquecer = document.getElementById("aquecer");

const resfriar = document.getElementById("resfriar");

let temp = 18;

function atualizarTemperatura(){

    temperatura.innerHTML = temp + "°C";

    let porcentagem = temp * 2.5;

    if(porcentagem > 100){

        porcentagem = 100;

    }

    barra.style.height = porcentagem + "%";

    if(temp < 24){

        statusSistema.innerHTML =
        "❄️ Água fria. O sistema recomenda aquecimento.";

    }

    else if(temp >=24 && temp <28){

        statusSistema.innerHTML =
        "🔥 Aquecendo a piscina...";

    }

    else if(temp >=28 && temp <=31){

        statusSistema.innerHTML =
        "✅ Temperatura ideal para utilização.";

    }

    else{

        statusSistema.innerHTML =
        "⚠️ Água muito quente. Resfriando sistema.";

    }

}

aquecer.addEventListener("click",()=>{

    if(temp<40){

        temp++;

        atualizarTemperatura();

    }

});

resfriar.addEventListener("click",()=>{

    if(temp>10){

        temp--;

        atualizarTemperatura();

    }

});

atualizarTemperatura();

/*==================================================
            TERMÔMETRO ANIMADO
==================================================*/

setInterval(()=>{

    barra.style.boxShadow =
    "0 0 25px rgba(255,120,0,.5)";

    setTimeout(()=>{

        barra.style.boxShadow="none";

    },400);

},1200);

/*==================================================
            EFEITO DOS CARDS
==================================================*/

const cards=document.querySelectorAll(".card,.mini-card,.objetivo-card,.optica-card,.numero,.membro");

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const x=e.offsetX/8;

        const y=e.offsetY/8;

        card.style.transform=
        `rotateX(${y-15}deg) rotateY(${15-x}deg)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="rotateX(0deg) rotateY(0deg)";

    });

});

/*==================================================
            FIM PARTE 2
==================================================*/
/*==================================================
            CALCULADORA DE ENERGIA SOLAR
==================================================*/

const horasSol = document.getElementById("horasSol");

const valorHoras = document.getElementById("valorHoras");

const energia = document.getElementById("energiaGerada");

const co2 = document.getElementById("co2");

const calcular = document.getElementById("calcularEnergia");

horasSol.addEventListener("input",()=>{

    valorHoras.innerHTML=horasSol.value;

});

calcular.addEventListener("click",()=>{

    const horas=parseInt(horasSol.value);

    const energiaProduzida=(horas*5.8).toFixed(1);

    const carbono=(horas*1.25).toFixed(1);

    energia.innerHTML=energiaProduzida+" kWh";

    co2.innerHTML=carbono+" kg";

});

/*==================================================
                GALERIA COM ZOOM
==================================================*/

const imagens=document.querySelectorAll(".galeria-grid img");

const fundo=document.createElement("div");

const imagem=document.createElement("img");

fundo.style.position="fixed";

fundo.style.top="0";

fundo.style.left="0";

fundo.style.width="100%";

fundo.style.height="100%";

fundo.style.background="rgba(0,0,0,.85)";

fundo.style.display="none";

fundo.style.justifyContent="center";

fundo.style.alignItems="center";

fundo.style.zIndex="9999";

imagem.style.maxWidth="85%";

imagem.style.maxHeight="85%";

imagem.style.borderRadius="20px";

imagem.style.boxShadow="0 0 40px rgba(255,255,255,.2)";

fundo.appendChild(imagem);

document.body.appendChild(fundo);

imagens.forEach(img=>{

    img.addEventListener("click",()=>{

        imagem.src=img.src;

        fundo.style.display="flex";

    });

});

fundo.addEventListener("click",()=>{

    fundo.style.display="none";

});

/*==================================================
            CONTADORES ANIMADOS
==================================================*/

const numeros=document.querySelectorAll(".numero h1");

function iniciarContadores(){

    numeros.forEach(numero=>{

        const texto=numero.innerText;

        const valor=parseInt(texto);

        if(isNaN(valor)) return;

        let contador=0;

        const intervalo=setInterval(()=>{

            contador++;

            numero.innerHTML=contador+"%";

            if(contador>=valor){

                numero.innerHTML=valor+"%";

                clearInterval(intervalo);

            }

        },20);

    });

}

let contadoresAtivos=false;

window.addEventListener("scroll",()=>{

    const dados=document.querySelector(".dados");

    if(!dados) return;

    const pos=dados.getBoundingClientRect().top;

    if(pos<window.innerHeight-100 && !contadoresAtivos){

        iniciarContadores();

        contadoresAtivos=true;

    }

});

/*==================================================
                BOLHAS
==================================================*/

function criarBolha(){

    const bolha=document.createElement("span");

    bolha.classList.add("bolha");

    bolha.style.left=Math.random()*100+"vw";

    bolha.style.width=(10+Math.random()*35)+"px";

    bolha.style.height=bolha.style.width;

    bolha.style.animationDuration=(6+Math.random()*8)+"s";

    document.body.appendChild(bolha);

    setTimeout(()=>{

        bolha.remove();

    },15000);

}

setInterval(criarBolha,700);

/*==================================================
            CARDS COLORIDOS
==================================================*/

const todosCards=document.querySelectorAll(

".card,.mini-card,.objetivo-card,.item-solucao,.optica-card,.bloco,.numero,.acess-card,.membro"

);

todosCards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.boxShadow="0 20px 45px rgba(255,105,180,.25)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.boxShadow="0 15px 35px rgba(0,0,0,.08)";

    });

});

/*==================================================
            TÍTULOS APARECENDO
==================================================*/

const titulos=document.querySelectorAll(".titulo");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{

opacity:0,

transform:"translateY(40px)"

},

{

opacity:1,

transform:"translateY(0)"

}

],{

duration:800,

fill:"forwards"

});

}

});

});

titulos.forEach(titulo=>{

observer.observe(titulo);

});

/*==================================================
            EFEITO NAS IMAGENS
==================================================*/

const fotos=document.querySelectorAll("img");

fotos.forEach(foto=>{

foto.addEventListener("mouseenter",()=>{

foto.style.filter="brightness(1.08) saturate(1.15)";

});

foto.addEventListener("mouseleave",()=>{

foto.style.filter="none";

});

});

/*==================================================
            FIM PARTE 3
==================================================*/
/*==================================================
            BARRA DE PROGRESSO DA PÁGINA
==================================================*/

const barraProgresso = document.createElement("div");

barraProgresso.style.position = "fixed";
barraProgresso.style.top = "0";
barraProgresso.style.left = "0";
barraProgresso.style.height = "6px";
barraProgresso.style.width = "0%";
barraProgresso.style.background = "linear-gradient(90deg,#ff6db7,#63b6ff,#b9ea52,#ffd84d)";
barraProgresso.style.zIndex = "99999";
barraProgresso.style.transition = ".15s";

document.body.appendChild(barraProgresso);

window.addEventListener("scroll",()=>{

    const altura =
    document.documentElement.scrollHeight-window.innerHeight;

    const progresso =
    (window.scrollY/altura)*100;

    barraProgresso.style.width =
    progresso+"%";

});

/*==================================================
            MENU ATIVO
==================================================*/

const secoes=document.querySelectorAll("section");

const links=document.querySelectorAll(".menu a");

window.addEventListener("scroll",()=>{

    let atual="";

    secoes.forEach(sec=>{

        const topo=sec.offsetTop-180;

        if(window.scrollY>=topo){

            atual=sec.id;

        }

    });

    links.forEach(link=>{

        link.classList.remove("ativo");

        if(link.getAttribute("href")==="#"+atual){

            link.classList.add("ativo");

        }

    });

});

/*==================================================
            SALVAR MODO ESCURO
==================================================*/

if(localStorage.getItem("tema")=="escuro"){

    body.classList.add("dark");

    btnDark.innerHTML="☀️";

}

btnDark.addEventListener("click",()=>{

    if(body.classList.contains("dark")){

        localStorage.setItem("tema","escuro");

    }

    else{

        localStorage.setItem("tema","claro");

    }

});

/*==================================================
            SALVAR TAMANHO DA FONTE
==================================================*/

if(localStorage.getItem("fonte")){

    tamanhoFonte=parseInt(localStorage.getItem("fonte"));

    body.style.fontSize=tamanhoFonte+"%";

}

btnMais.addEventListener("click",()=>{

    localStorage.setItem("fonte",tamanhoFonte);

});

btnMenos.addEventListener("click",()=>{

    localStorage.setItem("fonte",tamanhoFonte);

});

/*==================================================
            SAUDAÇÃO
==================================================*/

window.addEventListener("load",()=>{

    console.log(

`🌊 Projeto Integrador
Sistema Inteligente para Piscinas
Desenvolvido em HTML, CSS e JavaScript.`

);

});

/*==================================================
            ANIMAÇÃO DOS BOTÕES
==================================================*/

const botoes=document.querySelectorAll("button,.btn,.btn-secundario");

botoes.forEach(botao=>{

botao.addEventListener("click",()=>{

botao.animate([

{

transform:"scale(.92)"

},

{

transform:"scale(1)"

}

],{

duration:200

});

});

});

/*==================================================
            EFEITO PARALLAX
==================================================*/

window.addEventListener("scroll",()=>{

const y=window.scrollY;

const hero=document.querySelector(".hero");

if(hero){

hero.style.backgroundPositionY=(y*0.3)+"px";

}

});

/*==================================================
            BRILHO NAS IMAGENS
==================================================*/

document.querySelectorAll("img").forEach(img=>{

img.addEventListener("mousemove",(e)=>{

const x=e.offsetX/img.offsetWidth*100;

const y=e.offsetY/img.offsetHeight*100;

img.style.background=
`radial-gradient(circle at ${x}% ${y}%,
rgba(255,255,255,.18),
transparent 70%)`;

});

img.addEventListener("mouseleave",()=>{

img.style.background="transparent";

});

});

/*==================================================
            DATA AUTOMÁTICA
==================================================*/

const ano=new Date().getFullYear();

const footer=document.querySelector("footer");

if(footer){

const texto=document.createElement("p");

texto.style.marginTop="25px";

texto.innerHTML="© "+ano+" • Projeto Integrador • Todos os direitos reservados.";

footer.appendChild(texto);

}

/*==================================================
            FINALIZAÇÃO
==================================================*/

console.log("✅ JavaScript carregado com sucesso!");

console.log("🚀 Site pronto para apresentação!");

/*==================================================
                    FIM
==================================================*/
