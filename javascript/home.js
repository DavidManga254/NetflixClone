function rendersearch(){
    var searchbar=document.getElementById('searcher');
    var clicker=document.getElementById('clicker');

    clicker.style.display='none'
    searchbar.style.display='block';

    searchbar.addEventListener(blur,tracker);
}

function tracker(){
    var searchbar=document.getElementById('searcher');
    var clicker=document.getElementById('clicker');

    clicker.style.display='block';
    searchbar.style.display='none';
}

function shrink(){
    var age=document.getElementById('tager');
    var details=document.getElementById('moviedetails');
    var movielogo=document.getElementById('movielogo');
    var theVideo=document.getElementById('thevideo')

    if(theVideo.currentTime>=2){
        details.style.visibility='hidden';
        details.style.opacity='0';
        details.style.transition='visibility 2.5s, opacity 2.5s';
        details.style.display='none';
        movielogo.style.width='17vw';
        movielogo.style.transition='width 2.5s';
        age.style.display='none';
    }else{
        details.style.display='block';
    }
}
setInterval(shrink,10000)

function unmute(){
    var video=document.getElementById('thevideo');
    video.muted=false;
    var unmuter=document.getElementById('unmute')
    unmuter.style.display='none'
    var muter=document.getElementById('muter')
    muter.style.display='block'
}
function mute(){
    var video=document.getElementById('thevideo');
    video.muted=true;
    var unmuter=document.getElementById('unmute')
    unmuter.style.display='block'
    var muter=document.getElementById('muter')
    muter.style.display='none'
}

function scrollright(id,arrow){
    var slide_container=document.getElementById(id)
    var otherslide=document.getElementById(arrow)
    slide_container.scrollLeft+=500;

}
function scrollleft(id){
    var slide_container=document.getElementById(id)

    slide_container.scrollLeft-=500
}

function maker(id){
    var c1=document.getElementById(id);
    c1.style.overflow='hidden'
}
function destroyer(id){
    var c1=document.getElementById(id);
    c1.style.overflow='visible'
}

function playPauseVideo() {
    let videos = document.querySelectorAll("video");
    videos.forEach((video) => {
        // We can only control playback without insteraction if video is mute
        video.muted = true;
        // Play is a promise so we need to check we have it
        let playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.then((_) => {
                let observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (
                                entry.intersectionRatio !== 1 &&
                                !video.paused
                            ) {
                                video.pause();
                            } else if (video.paused) {
                                video.play();
                            }
                        });
                    },
                    { threshold: 0.5 }
                );
                observer.observe(video);
            });
        }
    });
}

// And you would kick this off where appropriate with:
setTimeout(playPauseVideo,5000)

function clearbackground(){
    var head=document.getElementById('header')
    var video=document.getElementById('thevideo')

    if(!video.paused && !video.ended){
        head.style.backgroundColor='transparent'
    }
    else{
        head.style.backgroundColor='black'
    }
}
setInterval(clearbackground,500)