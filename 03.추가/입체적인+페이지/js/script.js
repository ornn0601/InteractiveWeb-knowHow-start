let scrollTop = 0;
let imageAll;
let totalNum = 0;

window.onload = function() {
    progressBar = document.getElementsByClassName("progressBar")[0];
    imageAll = document.querySelectorAll(".parallax_image");
    // alert(imageAll.length)
    totalNum = imageAll.length;

    // window.addEventListener('resize', stageResize, false);
    window.addEventListener('scroll', scrollFunc);

    // stageResize();
}

function scrollFunc(e) {
    scrollTop = this.scrollY;

    // let per = Math.ceil(scrollTop / (_documentHum - _windowHNum) * 100);
    // progressBar.style.width = per + "%";

    for(var i=0; i< totalNum ; i++){
        imageAll[i].style.transform = "perspective(400px) translateZ("+ scrollTop/(5*(totalNum-i)) +"px)";
        // imageAll[i].style.transform = "perspective(400px) translateZ("+ scrollTop/5 +"px)";
        console.log(scrollTop , scrollTop / (5*(totalNum-i)) );
    }

    /*
    imageAll[0].style.transform = "perspective (400px) translateZ("+ scrollTop/30 +"px)";

    imageAll[1].style.transform = "perspective (400px) translateZ("+ scrollTop/25 +"px)";

    imageAll[2].style.transform = "perspective(400px) translateZ("+ scrollTop/20 +"px)";

    imageAll[3].style.transform = "perspective(400px) translateZ("+ scrollTop/15 +"px)";

    imageAll[4].style.transform = "perspective(400px) translateZ("+ scrollTop/10 +"px)";
    */

}

// function stageResize() {
//     _documentHum = document.body.offsetHeight; 
//     _windowHNum = window.outerHeight; 
// }


