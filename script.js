const doc = document;

//song detail
const songList = [
    {
        id : '1',
        title : 'Luv(sic.) Part 2',
        author : 'Nujabes',
        path :'./music/Luv(sic.) Part 2 - Nujabes.mp3',
        bgimg : './image/img1.jpg',
        time : '4:30'

    },
    {
        id : '2',
        title : 'Flower',
        author : 'Shing02/Cradle Orchestra',
        path : './music/Flōwers - Shing02、Cradle Orchestra.mp3',
        bgimg : './image/img2.jpg',
        time : '5:27'
    },
    {
        id : '3',
        title : 'OUTTA MY MIND',
        author : 'Monsune',
        path : './music/OUTTA MY MIND - Monsune.mp3',
        bgimg : './image/img3.jpg',
        time : '3:46'
    }
];

//get document tags

const audio = doc.querySelector('#audio');//audio
const bgimg = doc.querySelector('#bgimg');//img
const controls = doc.querySelector('#controls');//control buttons
const title = doc.querySelector('#title');//title
const author = doc.querySelector('#author');//author
const play = doc.querySelector('#play');//play
const voice = doc.querySelector('#voice');//voice on off
const end = doc.querySelector('#end');//end time

//current music index
let currentSongIndex = 0;
//current playing or not
let isPlay = false;

//initialization
function init(){
    render(songList[currentSongIndex])
}

//render implementation
function render(song)
{
    title.innerHTML = song.title;
    author.innerHTML = song.author;
    bgimg.src = song.bgimg;
    audio.volume = 1; //0 to 1
    audio.src = song.path;
    end.innerHTML = song.time;
}

//button pressed
controls.addEventListener('click', e=>{
    switch(e.target?.id){
        case 'list':
            break;
        case 'voice':
            voiceControl();
            break;
        case 'pre':
            preSong();
            break;
        case 'play':
            togglePlay();
            break;
        case 'next':
            nextSong();
            break;
        case 'mode':
            break;
    }
})

function togglePlay(){
    if(isPlay)
    {
        songPause();
    }
    else{
        songPlay();
    }
}
function songPlay()
{
    isPlay = true;
    play.classList.remove('icon-24gf-play'); //remove class for displays icon for playbutton
    play.classList.add('icon-iconstop');
    audio.play();
}
function songPause()
{
    isPlay = false;
    play.classList.remove('icon-iconstop');
    play.classList.add('icon-24gf-play');
    audio.pause();
}

function preSong(){
    if(currentSongIndex != 0)
    {
        currentSongIndex--;
        render(songList[currentSongIndex]);
        songPlay();
    }
}

function nextSong(){
    if(currentSongIndex != songList.length - 1)
    {
        currentSongIndex++;
        render(songList[currentSongIndex])
        songPlay();
    }

}

function voiceControl()
{
    //playing
    if(audio.volume > 0)
    {
        audio.volume = 0;
        voice.classList.remove('icon-shengyin_shiti');
        voice.classList.add('icon-volume-mute-fill');
    }
    //not playing
    else{
        audio.volume = 1;
        voice.classList.remove('icon-volume-mute-fill');
        voice.classList.add('icon-shengyin_shiti');
    }
}


init();