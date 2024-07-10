const container = document.getElementById('container');
const leftSide = document.getElementById('leftSide');
const botonCircular = document.getElementById('botonesSlide');
const rightSide = document.getElementById('rightSide');

const pLeftSideVideo = `    <div id="videoPatternV" class="videoPattern">
                            <div id="patternVapo"></div>
                                <video autoplay muted loop id="leftSideVideo" class="side left">
                                    <source src="./videos/VAPO.mp4" type="video/mp4">
                                </video>
                            </div>
                            <div id="likesVapo" class="likesVapo"></div>`;

const pRightSideVideo = `   <div id="videoPatternE" class="videoPattern">
                                <div id="patternEnElHall"></div>
                                <video autoplay muted loop id="rightSideVideo" class="side right"> 
                                    <source src="./videos/EN-EL-HALL.mp4" type="video/mp4">
                                </video>
                                </div>
                            <div id="likesEnElHall" class="likesEnElHall"></div>`;

const pBotones = `  <img class="imgLogo" src="./logos/logo.jpg">
                    <button id="botonIzq" class="mitad izquierda" onclick="accionIzquierda()">
                        <img id="anillo1" class="imgAnillo1" src="./logos/PNG-OBJ-SEPARADOS/PNG-ANILLO1.png">
                    </button>
                    <button id="botonDer" class="mitad derecha" onclick="accionDerecha()">
                        <img id="anillo2" class="imgAnillo2" src="./logos/PNG-OBJ-SEPARADOS/PNG-ANILLO2.png">
                    </button>`;

function innerDOM() {
    leftSide.innerHTML = pLeftSideVideo;
    botonCircular.innerHTML = pBotones;
    rightSide.innerHTML = pRightSideVideo;

    setTimeout(() => {
        document.getElementById("patternVapo").classList.add('patternVapo');
        document.getElementById("patternEnElHall").classList.add('patternEnElHall');
    }, 100);
}
innerDOM();
