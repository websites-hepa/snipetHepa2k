const leftSideVideo = document.getElementById('leftSideVideo');
const rightSideVideo = document.getElementById('rightSideVideo');
const botonIzq = document.getElementById('botonIzq');
const botonDer = document.getElementById('botonDer');
const smokeFilter = document.getElementById('smokeFilter');
const anillo1 = document.getElementById('anillo1');
const anillo2 = document.getElementById('anillo2');
const likesVapo = document.getElementById('likesVapo');
const likesEnElHall = document.getElementById('likesEnElHall');
const patternVapo = document.getElementById('patternVapo');
const patternEnElHall = document.getElementById('patternEnElHall');

const videoPantallaCompletaVapo = document.getElementById('videoPantallaCompletaVapo');
const videoPantallaCompletaEnElHall = document.getElementById('videoPantallaCompletaEnElHall');

const getMobileOS = () => {
    const ua = navigator.userAgent
    if (/android/i.test(ua)) {
      return "Android"
    }
    else if (/iPad|iPhone|iPod/.test(ua)){
      return "iOS"
    }
    return "Other"
}

const os = getMobileOS();

const URLapi = 'https://668c33570b61b8d23b0cc0e8.mockapi.io/metrica/likes';

let side = null;
let banderaV = false;
let banderaE = false;
let countV = 0;
let countE = 0;
let contadorVE = [];
let totalV = 0;
let totalE = 0;

const svgs = `  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="50px" width="50px" class="like">
                    <path d="M8 10V20M8 10L4 9.99998V20L8 20M8 10L13.1956 3.93847C13.6886 3.3633 14.4642 3.11604 15.1992 3.29977L15.2467 3.31166C16.5885 3.64711 17.1929 5.21057 16.4258 6.36135L14 9.99998H18.5604C19.8225 9.99998 20.7691 11.1546 20.5216 12.3922L19.3216 18.3922C19.1346 19.3271 18.3138 20 17.3604 20L8 20"></path>
                </svg>
                <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" class="celebrate">
                    <polygon points="0,0 10,10"></polygon>
                    <polygon points="0,25 10,25"></polygon>
                    <polygon points="0,50 10,40"></polygon>
                    <polygon points="50,0 40,10"></polygon>
                    <polygon points="50,25 40,25"></polygon>
                    <polygon points="50,50 40,40"></polygon>
                </svg>`;

const videoVapo = ` <video id="leftSideVideo" class="side left"> 
                        <source src="./videos/VAPO.mp4" type="video/mp4">
                    </video>`;
const pLikesV = `   <label id="labelSvg" class="containerLikeVapo">
                        <input type="checkbox" onclick="likeVapo()">
                    </label>`;

const videoEnElHall = ` <video id="rightSideVideo" class="side right"> 
                            <source src="./videos/EN-EL-HALL.mp4" type="video/mp4">
                        </video>`;
const pLikesE = `   <label id="labelSvg" class="containerLikeEnElHall">
                        <input type="checkbox" onclick="likeEnElHall()">
                    </label>`;

const pLogo1 = `<video autoplay muted id="logoCarga1" class="logoCarga right"> 
                    <source src="./logos/logo.mp4" type="video/mp4">
                </video>`;

const pLogo2 = `<video autoplay muted id="logoCarga2" class="logoCarga right"> 
                    <source src="./logos/logo.mp4" type="video/mp4">
                </video>`;

function accionIzquierda() {
    if(container.classList.contains('botonesMedio')){
        container.classList.add('botonesIzquierda');
        container.classList.remove('botonesMedio');
        document.getElementById('videoPatternV').innerHTML = '';
        document.getElementById('videoPatternE').innerHTML = '';
        videoPantallaCompletaVapo.innerHTML = pLogo1;
        setTimeout(() => {
            if (document.getElementById('logoCarga1')){
                document.getElementById('logoCarga1').classList.add('animate__animated','animate__fadeOut');
                setTimeout(() => {
                    videoPantallaCompletaVapo.innerHTML = videoVapo;
                    document.getElementById('leftSideVideo').volume = 0.3;
                    document.getElementById('leftSideVideo').play();
                    document.getElementById('likesVapo').innerHTML = pLikesV;
                    document.getElementById('labelSvg').innerHTML += svgs;
                }, 1000);
            }
        }, 3300);
        if (document.getElementById('leftSideVideo')) {
            document.getElementById('leftSideVideo').addEventListener('ended',accionIzquierda,false);
        }
        setTimeout(() => {
            document.getElementById('botonesSlide').style.right = '-100%';
            if(window.innerWidth < 1024){
                document.getElementById('botonesSlide').classList.add('rotarIzq');
                document.getElementById('anillo1').classList.add('rotarImg1Izq');
                document.getElementById('anillo2').classList.add('rotarImg2Izq');
            }
        }, 100);
    } else if (container.classList.contains('botonesIzquierda')){
        container.classList.add('botonesMedio');
        container.classList.remove('botonesIzquierda','botonesDerecha');
        if (document.getElementById('logoCarga1')){
            videoPantallaCompletaVapo.removeChild(document.getElementById('logoCarga1'));
        }
        if (document.getElementById('leftSideVideo')){
            videoPantallaCompletaVapo.removeChild(document.getElementById('leftSideVideo'));
        }
        document.getElementById('leftSide').innerHTML = pLeftSideVideo;
        document.getElementById('rightSide').innerHTML = pRightSideVideo;
        setTimeout(() => {
            document.getElementById('botonesSlide').style.right = '0';
            if(window.innerWidth < 1024){
                document.getElementById('botonesSlide').classList.add('rotarInvIzq');
                document.getElementById('anillo1').classList.add('rotarInvImg1Izq');
                document.getElementById('anillo2').classList.add('rotarInvImg2Izq');
                setTimeout(() => {
                    document.getElementById('botonesSlide').classList.remove('rotarIzq','rotarInvIzq');
                    document.getElementById('anillo1').classList.remove('rotarImg1Izq','rotarInvImg1Izq')
                    document.getElementById('anillo2').classList.remove('rotarImg2Izq','rotarInvImg2Izq')
                }, 1000);
            }
            document.getElementById('patternVapo').classList.add('patternVapo');
            document.getElementById('patternEnElHall').classList.add('patternEnElHall');
        }, 100);
    }
}

function accionDerecha() {
    if(container.classList.contains('botonesMedio')){
        container.classList.add('botonesDerecha');
        container.classList.remove('botonesMedio');
        document.getElementById('videoPatternV').innerHTML = '';
        document.getElementById('videoPatternE').innerHTML = '';
        videoPantallaCompletaEnElHall.innerHTML = pLogo2;
        setTimeout(() => {
            if (document.getElementById('logoCarga2')){
                document.getElementById('logoCarga2').classList.add('animate__animated','animate__fadeOut');
                setTimeout(() => {
                    videoPantallaCompletaEnElHall.innerHTML = videoEnElHall;
                    document.getElementById('rightSideVideo').volume = 0.3;
                    document.getElementById('rightSideVideo').play();
                    document.getElementById('likesEnElHall').innerHTML = pLikesE;
                    document.getElementById('labelSvg').innerHTML += svgs;
                }, 1000);
            }
        }, 3300);

        if (document.getElementById('rightSideVideo')) {
            document.getElementById('rightSideVideo').addEventListener('ended',accionDerecha,false);
        }

        setTimeout(() => {
            document.getElementById('botonesSlide').style.left = '-100%';
            if(window.innerWidth < 1024){
                document.getElementById('botonesSlide').classList.add('rotarDer');
                document.getElementById('anillo1').classList.add('rotarImg1Der');
                document.getElementById('anillo2').classList.add('rotarImg2Der');
            }
        }, 100);

    } else if (container.classList.contains('botonesDerecha')){
        container.classList.add('botonesMedio');
        container.classList.remove('botonesIzquierda','botonesDerecha');
        if (document.getElementById('logoCarga2')){
            videoPantallaCompletaEnElHall.removeChild(document.getElementById('logoCarga2'));
        }
        if (document.getElementById('rightSideVideo')){
            videoPantallaCompletaEnElHall.removeChild(document.getElementById('rightSideVideo'));
        }
        document.getElementById('leftSide').innerHTML = pLeftSideVideo;
        document.getElementById('rightSide').innerHTML = pRightSideVideo;
        setTimeout(() => {
            document.getElementById('botonesSlide').style.left = '0';
            if(window.innerWidth < 1024){
                document.getElementById('botonesSlide').classList.add('rotarInvDer');
                document.getElementById('anillo1').classList.add('rotarInvImg1Der');
                document.getElementById('anillo2').classList.add('rotarInvImg2Der');
                setTimeout(() => {
                    document.getElementById('botonesSlide').classList.remove('rotarDer','rotarInvDer');
                    document.getElementById('anillo1').classList.remove('rotarImg1Der','rotarInvImg1Der')
                    document.getElementById('anillo2').classList.remove('rotarImg2Der','rotarInvImg2Der')
                }, 1000);
            }
            document.getElementById('patternVapo').classList.add('patternVapo');
            document.getElementById('patternEnElHall').classList.add('patternEnElHall');
        }, 100);
    }
}

function resetSides() {
    if (window.innerWidth > 1024){
        leftSide.style.flex = 1;
        rightSide.style.flex = 1;
        rightSide.style.visibility = 'visible';
        leftSide.style.visibility = 'visible';

    } else {
        if (os == 'Android' || os == 'Other') {
            container.style.transform = 'rotate(0deg)';
        } 
        leftSide.style.removeProperty('display');
        rightSide.style.removeProperty('display');
        container.style.transform = 'rotate(0deg)';
        container.style.width = '100vw';
        container.style.height = 'auto';
    }
    patternVapo.style.display = 'block';
    patternEnElHall.style.display = 'block';
    botonCircular.style.left = '0';
    botonCircular.style.right = '0';
    side = null;
    likesEnElHall.style.display = 'none';
    likesVapo.style.display = 'none';
}

function videosVistos() {
    botonDer.style.backgroundColor = 'transparent';
    botonIzq.style.backgroundColor = 'transparent';
    leftSideVideo.muted = true;
    rightSideVideo.muted = true;
    botonIzq.innerHTML = '';
    botonDer.innerHTML = '';
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
        id: '',
        name: '',
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