const container = document.getElementById('container');
const leftSide = document.getElementById('leftSide');
const botonCircular = document.getElementById('botonesSlide');
const rightSide = document.getElementById('rightSide');

const pLeftSideVideo = `    <div id="videoPatternV" class="videoPattern">
                                <img id="rightSideVideo" class="side left humoVapo" src="./gifs/humo.gif">
                            </div>`;

const pRightSideVideo = `   <div id="videoPatternE" class="videoPattern">
                                <img id="rightSideVideo" class="side right billetesEnElHall" src="./gifs/billetes.gif">
                            </div>`;

function innerDOM() {
    leftSide.innerHTML = pLeftSideVideo;
    rightSide.innerHTML = pRightSideVideo;
}

innerDOM();
