const leftSide = document.getElementById('leftSide');
const leftSideVideo = document.getElementById('leftSideVideo');
const rightSide = document.getElementById('rightSide');
const rightSideVideo = document.getElementById('rightSideVideo');
const botonIzq = document.getElementById('botonIzq');
const botonDer = document.getElementById('botonDer');
const botonCircular = document.getElementById('botonesSlide');
const smokeFilter = document.getElementById('smokeFilter');
const anillo1 = document.getElementById('anillo1');
const anillo2 = document.getElementById('anillo2');
const likesVapo = document.getElementById('likesVapo');
const likesEnElHall = document.getElementById('likesEnElHall');
const container = document.getElementById('container');

const URLapi = 'https://668c33570b61b8d23b0cc0e8.mockapi.io/metrica/likes';

let side = null;
let banderaV = false;
let banderaE = false;
let countV = 0;
let countE = 0;
let contadorVE = [];
let totalV = 0;
let totalE = 0;

function accionIzquierda() {
    if (leftSide.classList.contains("vistoLeft") && rightSide.classList.contains("vistoRight")){
        resetSides();
        videosVistos();
    } else {
        toggleOrientation();
        if (side !== 'left'){
            if (window.innerWidth > 1024){
                leftSide.style.visibility = "visible";
                leftSide.style.flex = 1;
                rightSide.style.flex = 0;
                rightSide.style.visibility = "hidden";
                botonCircular.style.right = "0";
                botonCircular.style.left = "90%";
            } else {
                rightSide.style.display = "none";
            }
            leftSideVideo.muted = false;
            leftSideVideo.volume = 0.3;
            leftSideVideo.load();
            rightSideVideo.muted = true;
            side = 'left';
            leftSide.classList.add("vistoLeft");
            smokeFilter.style.visibility = "hidden";
            likesVapo.style.display = "block";
            likesEnElHall.style.display = "none";
        } else {
            resetSides(); 
            smokeFilter.style.visibility = "visible";
            leftSideVideo.muted = true;
            rightSideVideo.muted = true;
            leftSide.style.display = "block";
            rightSide.style.display = "block";
        }
    }
}
    

function accionDerecha() {
    
    if (leftSide.classList.contains("vistoLeft") && rightSide.classList.contains("vistoRight")){
        resetSides();
        videosVistos();
    } else {
        toggleOrientation();
        if (side !== 'right'){
            if (window.innerWidth > 1024){
                rightSide.style.visibility = "visible";
                leftSide.style.flex = 0;
                rightSide.style.flex = 1;
                leftSide.style.visibility = "hidden";
                botonCircular.style.left = "0";
                botonCircular.style.right = "90%";
            } else {

            }
            rightSideVideo.muted = false;
            rightSideVideo.volume = 0.3;
            rightSideVideo.load();
            leftSideVideo.muted = true;
            side = 'right';
            rightSide.classList.add("vistoRight");
            smokeFilter.style.visibility = "hidden";
            likesEnElHall.style.display = "block";
            likesVapo.style.display = "none";
        } else {
            resetSides(); 
            smokeFilter.style.visibility = "visible";
            leftSideVideo.muted = true;
            rightSideVideo.muted = true;
        }
    }
}

function resetSides() {
    if (window.innerWidth > 1024){
        leftSide.style.flex = 1;
        rightSide.style.flex = 1;
        botonCircular.style.left = "0";
        botonCircular.style.right = "0";
        rightSide.style.visibility = "visible";
        leftSide.style.visibility = "visible";
    }
    side = null;
    likesEnElHall.style.display = "none";
    likesVapo.style.display = "none";
}

function videosVistos() {
    botonDer.style.backgroundColor = "transparent";
    botonIzq.style.backgroundColor = "transparent";
    leftSideVideo.muted = true;
    rightSideVideo.muted = true;
    smokeFilter.style.visibility = "visible";
    botonIzq.innerHTML = "";
    botonDer.innerHTML = "";
}

function toggleOrientation() {
    if (window.orientation === 0 || window.orientation === 180) {
        debugger;
        container.style.transform = "rotate(90deg)";
        container.style.width = "100vh";
        container.style.height = "100vw";
    } else {
        container.style.transform = "rotate(0deg)";
        container.style.width = "100vw";
        container.style.height = "100vh";
    }
}

function likeVapo() {
    if(banderaV == false) {
        countV = 1;
        banderaV = true;
        CrearObjeto(countV, 0);
    }
}

function likeEnElHall() {
    if(banderaE == false) {
        countE = 1;
        banderaE = true;
        CrearObjeto(0, countE);
    }
}

function EnviarDatos(objeto, totalV) {
    const opciones = {
        method: 'POST',
        headers: { "content-type": "application/json" },
        body: JSON.stringify(objeto)
    }
    fetch(URLapi, opciones)
        .then((response) => {
            if(response.status == 201){
                console.log(totalV);
                return response.json();
            }
        })
}

function CrearObjeto(countV, countE) {
    let objeto = {
        id: "",
        name: "",
        likeCountV: countV,
        likeCountE: countE,
        viewDate: new Date().toLocaleString()
    }
    EnviarDatos(objeto);
}


function conexionAPI() {
    fetch(URLapi)
        .then((response) => response.json())
        .then((data) => contadorVE.push(...data))
        .then(() => {
            if (contadorVE.length > 0) {
                contadorVE.forEach(registro => {
                    totalV += registro.likeCountV;
                    totalE += registro.likeCountE;
                    
                });
                console.log('Video Vapo: ' + totalV);
                console.log('Video En el Hall: ' + totalE);
            }
        });
}

conexionAPI();