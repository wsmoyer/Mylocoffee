
var imgArray = ["img/covfefe.jpg",
"img/covfefe2.jpg",
"img/covfefe3.jpg",
  ],
    curIndex = 0;
    imgDuration = 3000;

function slideShow() {
    document.getElementById('slider').className += 'fadeOut';
    
    setTimeout(function() {
        document.getElementById('slider').src = imgArray[curIndex];
        document.getElementById('slider').className = '';
    },1000);
    curIndex++;
    if (curIndex == imgArray.length) { curIndex = 0; }
    setTimeout(slideShow, imgDuration);
}
slideShow();

// Run function when page loads
// declare function for mobile menu
function navigation() {
    // get the nav's id and declare it
    var x = document.getElementById("topNav");
    // if icon display is none/ larger  screen
    if (x.style.display !== 'none')
    {
        x.style.display = 'none';
    }
    else {
        x.style.display = 'block';
    }
    };

	 
// Image List


