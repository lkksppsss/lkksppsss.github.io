let data = {};
let lol;
let url ="https://ddragon.leagueoflegends.com/cdn/10.22.1/data/zh_TW/champion.json";
let xhr = new XMLHttpRequest();

window.onload = function(){
    requestJson();
}

function requestJson(){
    xhr.onload = function(){
        lol = JSON.parse(this.responseText);
        
        console.log(lol);
        console.log(lol.data);

        Object.keys(lol.data).forEach(name => {
            
            row.append(createCard(name));
        });
    }
    
    xhr.open('GET', url);
    xhr.send();
}

const row = document.querySelector(".row");
const card = document.querySelector("#league");

function createCard(name){
    let hero = lol.data[name];
    let cloneCard = card.content.cloneNode(true);
    
    cloneCard.querySelector("img").src = `https://cdngarenanow-a.akamaihd.net/games/lol/2020/LOLwebsite/champion/${hero.id}_0.jpg`;
    cloneCard.querySelector("h5").innerText = hero.name;

    hero.tags.forEach(tag => {
        let btn = document.createElement("button");
        btn.setAttribute("class","btn btn-outline-secondary me-3");
        btn.setAttribute("style","font-size: 10px;");
        btn.innerText = tag;
        cloneCard.querySelector(".card-text").append(btn);
    })
    cloneCard.querySelector("#detail").innerText = "詳細資訊";
    cloneCard.querySelector("#detail").setAttribute('onclick',`hero_info("${hero.id}")`)
    

    cloneCard.querySelector("#video").innerText = "觀看影片";
    cloneCard.querySelector("#video").setAttribute('onclick',`hero_video()`)

    return cloneCard;
}

function hero_info(nam){
    let hero = lol.data[nam];
    let model = document.querySelector("#exampleModal");
    model.querySelector("h5").innerText = hero.name;
    model.querySelector(".modal-body p").innerText = hero.blurb;
    model.querySelector("#lolImage").src = `https://cdngarenanow-a.akamaihd.net/games/lol/2020/LOLwebsite/champion/${hero.id}_0.jpg`;    
    Object.keys(hero.info).forEach((x,y) => {
        let li = model.querySelector(`.modal-body li:nth-child(${y+1})`);
        li.innerText = `${x}: ${hero.info[x]}`
        
    })
    model.querySelector(".none").setAttribute("style","display: block;")
    model.querySelector("iframe").setAttribute("style","display: none;")
}

function hero_video(){
    let model = document.querySelector("#exampleModal");
    model.querySelector("h5").innerText = "英雄聚光燈";
    model.querySelector(".none").setAttribute("style","display: none;")
    model.querySelector("iframe").setAttribute("style","display: block;")
}