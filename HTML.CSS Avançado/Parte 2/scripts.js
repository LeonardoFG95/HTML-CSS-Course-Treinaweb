// Controle de Audio e Video

var myVideo = document.getElementById('myVideo'),
    logo = document.getElementsByClassName('logo')[0],
    adTimer = null;

myVideo.addEventListener('playing', function() {
    showAds();
})

myVideo.addEventListener('pause', function() {
    stopAds();
})

function showAds() {
    stopAds();
    adTimer = setInterval(() => {
        logo.style.display = 'block';
        setTimeout(() => {
            logo.style.display = 'none';
        }, 300)
    },5000);
}

function stopAds() {
    clearInterval(adTimer);
}

function setSpeed(direction) {
    if (direction === 'up') {
        myVideo.playbackRate += 0.5;
    } else if (direction === 'down') {
        myVideo.playbackRate -= 0.25;
    } else {
        myVideo.playbackRate = 1;
    }
}

function setVideoTime(position) {
    myVideo.currentTime = position;
    myVideo.play();
}

// Drag e Drop

function dragStart(event) {
    event.dataTransfer.setData('text', event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    var imageId = event.dataTransfer.getData('text'),
        image = document.getElementById(imageId);

    event.target.appendChild(image);
}

/* ---------- Armazenando Dados (Cookies) ----------

    //**Criando Cookies

    document.cookie = "nome=TreinaWeb";
    document.cookie = "sobre=Cursos Web";

    //Data de Expiração

    document.cookie = "nome=TreinaWeb; expires=Fri, 07 Jul 2017 12:00:00 UTC";

    //**Alterando Cookies

    document.cookie = "sobre=Vários Cursos Web";

    //**Lendo Cookies

    var cookies = document.cookies;

    //**Removendo Cookies

    document.cookie = "sobre=; expires= Thu, 01 Jan 1970 00:00:00 UTC";

    //**Facilitando o gerenciamento de cookies

    //Criar cookies:
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    //Retornar cookies:
    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
*/

/* ---------- Armazenando Dados (WebStorage) ----------
 
    //**Salvando Dados

    localStorage.setItem("nome", "treinaweb");

    //Podemos também atribuir valores como fazemos em variáveis comuns:

    localStorage.nome = "treinaweb";
    localStorage["nome"] = "treinaweb";

    //**Alterando Dados

    localStorage.nome = "TreinaWeb";

    //**Lendo Dados

    localStorage.getItem("nome");

    //Podemos também pegar os valores como fazemos em variáveis comuns:

    localStorage.nome;
    localStorage["nome"];

    //**Apagando Dados

    localStorage.removeItem("nome");

    //Caso queira limpar todos os dados, execute a seguinte função:

    localStorage.clear();
*/

/* ---------- Armazenando Dados (IndexDB) ----------

    //**Abrindo conexão com um Banco

    var request = window.indexedDB.open("TreinaWeb", 1);
    var db;
    request.onupgradeneeded = function(event){
    db = event.target.result;
    db.createObjectStore("Cursos", {keyPath: "id"});
    }
    request.onsuccess = function(event){
    db = event.target.result;
    }

    //**Adicionando Dados

    var transaction = db.transaction(["Cursos"], "readwrite");
    var store = transaction.objectStore("Cursos");
    store.add({"id": 1, "nome": "Angular"})

    //**Lendo Dados

    var transaction = db.transaction(["Cursos"], "readwrite");
    var store = transaction.objectStore("Cursos");
    var request = store.get(1);
    request.onsuccess = function(event){
    console.log(request.result)
    }

    //**Alterando Dados

    var transaction = db.transaction(["Cursos"], "readwrite");
    var store = transaction.objectStore("Cursos");
    var request = store.get(1);
    request.onsuccess = function(event){
    request.result.nome = "React";
    store.put(request.result);
    }

    **Removendo Dados

    var transaction = db.transaction(["Cursos"], "readwrite");
    var store = transaction.objectStore("Cursos");
    store.delete(1);
*/

// Leitura de Arquivos

function handleFileSelect() {
    var myFile = document.getElementById('myFile').files[0];
    var reader = new FileReader();

    reader.onload = function() {
        var content = reader. result;
        document.getElementById('fileContent').value = content;
    }

    reader.readAsText(myFile);
}


function saveFile() {
    var element = document.createElement('a'),
        content = document.getElementById('fileContent').value;

        element.setAttribute('href', 'data:plain/text;charset=utf8,' + encodeURIComponent(content)); 
        element.setAttribute('download', 'myNewFile.txt');

    element.click();
}

// Canvas

var meuCanvas = document.getElementById('meuCanvas'),
    ctx = meuCanvas.getContext('2d'),
    // gradient = ctx.createLinearGradient(0, 0, 300, 0),
    img = document.getElementById('minhaImagem'),
    posX = 0;

// ctx.moveTo(5, 5);
// ctx.lineTo(100, 300);
// ctx.stroke();

//**Circulo
// ctx.arc(200, 150, 60, 0, 2*Math.PI);
// ctx.fillStyle = "#FF0000"
// ctx.strokeStyle = "#000000"
// ctx.fill();
// ctx.stroke();

//**Texto
// ctx.font = '30px Arial';
// ctx.fillStyle = 'blue';
// ctx.fillText('TreinaWeb', 150, 150)

// ctx.font = '30px Arial';
// ctx.strokeStyle = 'blue';
// ctx.strokeText('TreinaWeb', 150, 150)

//Gradiente
// gradient.addColorStop(0, 'red');
// gradient.addColorStop(1, 'green');
// ctx.fillStyle = gradient;
// ctx.fillRect(50, 50, 250, 200);

//Imagem
function drawLogo() {
    window.requestAnimationFrame(drawLogo);
    ctx.clearRect(0, 0, meuCanvas.width, meuCanvas.height);

    ctx.drawImage(img, posX, 50);
    posX += 5;

    if (posX > meuCanvas.width) {
        posX = -200;        
    }
}

drawLogo();

//Web Components

var host = document.querySelection('.container2');
var shadowRoot = host.createShadowRoot();
var template = document.querySelector('#meuMenu');
var templateContent = document.importNode(template.content, true);

shadowRoot.appendChild(templateContent);


