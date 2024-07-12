const container = document.getElementById('container');
const leftSide = document.getElementById('leftSide');
const rightSide = document.getElementById('rightSide');

const pLeftSideVideo = `    <div id="videoPatternV" class="videoPattern">
                                <img id="rightSideVideo" class="side left humoVapo" src="./gifs/humo.gif">
                            </div>`;

const pRightSideVideo = `   <div id="videoPatternE" class="videoPattern">
                                <img id="rightSideVideo" class="side right billetesEnElHall" height="451.5px" src="./gifs/billetes.gif">
                            </div>`;

function innerDOM() {
    leftSide.innerHTML = pLeftSideVideo;
    rightSide.innerHTML = pRightSideVideo;
}

innerDOM();
