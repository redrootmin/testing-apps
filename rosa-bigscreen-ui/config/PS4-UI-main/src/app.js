const only = (ele)=> document.querySelector(ele);
const all = (ele)=> document.querySelectorAll(ele);
const create = (ele)=> document.createElement(ele);

//Array que armazena a nodeList
let gamesArr = [];

//Obtendo elementos
let container = only(".games-container");
let infos = only(".infos");
let bar = only("#start-bar");
let gameinfo = only("#games-infos");
let getgameimg = only("#info-game-img");
let gamen = only("#game-name");

//Inicialização
const UI = ()=>{

    for(let i in games){
        const {img} = games[i];
        setGames(img);
   }
   Initial();
   keyEvent();
   const updateHours = setInterval(setHours,500);
   const updateGameInfo = setInterval(setGameInfo,8000);o
}
//Cria elementos de acordo com o lenght do array
const setGames = (imagem)=>{

    let div = create("div");
    div.classList.add("game");
    let img = create("img");
    container.appendChild(div);
    div.appendChild(img);
    img.setAttribute("src",imagem);
    gamesArr.push(img);
    gamesArr[0].classList.add("active");
}
//Configurações iniciais
const Initial = ()=>{

    gameinfo.innerHTML = games[0].game;
    getgameimg.setAttribute("src",games[0].img)
    bar.style.left =  gamesArr[0].offsetLeft + "px";
    gamen.innerHTML = games[0].game; 
}
//Altera as horas
const setHours = (h,m)=>{

    let hrele = only("#hours");
    let hours = new Date();
    h = hours.getHours();
    m = hours.getMinutes();
    hrele.innerHTML = (m < 10)? `${h}:0${m}` : `${h}:${m}`;
}
//Alteras as innformações a respeito dos jogos
const setGameInfo = ()=>{

    let random = parseInt(Math.random() * games.length);
    gameinfo.innerHTML = `${games[random].game} Instalado`
    getgameimg.setAttribute("src",games[random].img);
}
//Altera o nome do jogo
const  setGameName = (name)=>{

    gamen.innerHTML = name;
}
//Evento de teclado
const keyEvent = ()=>{
    let index = 0;
    document.addEventListener("keyup",(e)=>{
        if(e.keyCode == "68"){
           index++;
           index >= gamesArr.length? index--  : null;
           barMove(index,280)
        }
        if(e.keyCode == "65"){
           index--;
           index < 0? index = 0 : null;
           barMove(index,-280)
        }
        if(e.keyCode == "38"){
          infosChange("50px","30%","250px");
        }
        if(e.keyCode == "40"){
          infosChange("0","100%","0px");
        }
    })
}
//Altera a posição da barra ''start''
const barMove = (index,value)=>{
    let position = gamesArr[index].offsetLeft;
    let scroll = container.scrollLeft + value;
    bar.style.left = position + "px";
    only("img.active").classList.remove("active");
    gamesArr[index].classList.add("active");
    setGameName(games[index].game)
    if(scroll < 1626){
        container.scrollTo(scroll,0);
    }

}
//Altera as configurações do layout das informações
const infosChange = (cont_top,opacity,info_top)=>{
    container.style.marginTop = cont_top;
    container.style.opacity = opacity;
    infos.style.marginTop = info_top;
}