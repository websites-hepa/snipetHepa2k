const container = document.getElementById('container');
const leftSide = document.getElementById('leftSide');
const botonCircular = document.getElementById('botonesSlide');
const rightSide = document.getElementById('rightSide');

const pLeftSideVideo = `    <div id="videoPatternV" class="videoPattern">
                                <img id="rightSideVideo" class="side left" src="./gifs/humo.gif" class="humoVapo">
                            </div>`;

const pRightSideVideo = `   <div id="videoPatternE" class="videoPattern">
                                <div id="patternEnElHall"></div>
                                <video autoplay muted loop id="rightSideVideo" class="side right"> 
                                    <source src="./videos/EN-EL-HALL.mp4" type="video/mp4">
                                </video>
                            </div>`;

function innerDOM() {
    leftSide.innerHTML = pLeftSideVideo;
    rightSide.innerHTML = pRightSideVideo;
}

innerDOM();
