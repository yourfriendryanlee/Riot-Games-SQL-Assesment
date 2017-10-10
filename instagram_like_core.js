
window.scrollTo(0,document.body.scrollHeight);
setTimeout(function() {window.scrollTo(0,0);}, 5000)

function getHeartElement() {
    var knownHeartElementNames = ["coreSpriteHeartOpen", "coreSpriteLikeHeartOpen"];
    var i = 0;
    // Loop through the known heart elements until one works
    for (i = 0; i < knownHeartElementNames.length; i++) {
        var heartElement = document.querySelector('.' + knownHeartElementNames[i]);
        if (heartElement != undefined) {
            break;
        }
    }
    return heartElement;
}

function doLike() {
    var likeElement = getHeartElement();
    likeCount++;
    console.log('Liked ' + likeCount);
    var nextTime = Math.random() * (14000 - 4000) + 4000;
    likeElement.click();
    if (likeCount < 150) {
        setTimeout(doLike, nextTime);
    } else {
        console.log('Nice! Time for a break.');
    }
}


var likeCount = 0;
doLike();
