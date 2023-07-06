let songIndex = 0;
let masterPlay = document.getElementById("masterPlay")
let progress = document.getElementById("progress")
let gif = document.getElementById("gif")
let name = document.getElementsByClassName("name")
let songitem = Array.from(document.getElementsByClassName("songitem"))
let songItemPlay = Array.from(document.getElementsByClassName("songItemPlay"))
let playMaster = Array.from(document.getElementsByClassName("playMaster"))
let previous = document.getElementById("previous")
let next = document.getElementById("next")
let masterSongName = document.getElementById("masterSongName")
let masterid = document.getElementById("masterid")
let audioElement = new Audio("songs/1.mp3")
audioElement.play()

let songs = [
    {songsName:"Raflaan-8", filePath:"songs/1.mp3", coverPath:"cover/1.jpg"},
    {songsName:"Aadat_Ve-Ninja", filePath:"songs/2.mp3", coverPath:"cover/2.jpg"},
    {songsName:"Barsaat Ki Dhun", filePath:"songs/3.mp3", coverPath:"cover/3.jpg"},
    {songsName:"Beautiful", filePath:"songs/4.mp3", coverPath:"cover/4.jpg"},
    {songsName:"Chor lge", filePath:"songs/5.mp3", coverPath:"cover/5.jpg"},
    {songsName:"Chota_Number", filePath:"songs/6.mp3", coverPath:"cover/6.jpg"},
    {songsName:"Do_Vaari_Jatt", filePath:"songs/7.mp3", coverPath:"cover/7.jpg"},
    {songsName:"    Filhall   ", filePath:"songs/8.mp3", coverPath:"cover/8.jpg"},
    {songsName:"Ikko Mikke", filePath:"songs/9.mp3", coverPath:"cover/9.jpg"},
    {songsName:"Main Jis Din", filePath:"songs/10.mp3", coverPath:"cover/10.jpg"},
]

songitem.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath
    element.getElementsByClassName("name")[0].innerHTML = songs[i].songsName
});
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused  || audioElement.currentTime<=0){
        audioElement.play()
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        gif.style.opacity=(1)
    }
    else{
        audioElement.pause()
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
        gif.style.opacity=(0)
        songItemPlay.forEach((element)=>{
            element.classList.remove("fa-circle-pause")
            element.classList.add("fa-circle-play")
    })

    }
})

audioElement.addEventListener('timeupdate', ()=>{
    myprogressbar = parseInt((audioElement.currentTime / audioElement.duration)*100)
    progress.value = myprogressbar
    
})

progress.addEventListener('change', ()=>{
    audioElement.currentTime =audioElement.duration*progress.value/100
})

const makeAllPlay = ()=>{
    songItemPlay.forEach((element)=>{
            element.classList.remove("fa-circle-pause")
            element.classList.add("fa-circle-play")
    })
}
songItemPlay.forEach((element)=>{
    element.addEventListener('click', (e)=>{
        // console.log(e.target)
        makeAllPlay()
        songIndex = parseInt(e.target.id)
        e.target.classList.remove("fa-circle-play")
        e.target.classList.add("fa-circle-pause")
        audioElement.src = `songs/${songIndex+1}.mp3`
        audioElement.currentTime = 0
        audioElement.play()
        masterSongName.innerText = songs[songIndex].songsName
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        gif.style.opacity=(1)
    })
})

next.addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 1
    }
    else{
        songIndex +=1
    }
        audioElement.src = `songs/${songIndex}.mp3`
        audioElement.currentTime = 0
        audioElement.play()
        masterSongName.innerText = songs[songIndex]. songsName
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        gif.style.opacity=(1)

})

previous.addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 1
    }
    else{
        songIndex -= 1
    }
        audioElement.src = `songs/${songIndex}.mp3`
        audioElement.currentTime = 0
        audioElement.play()
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        gif.style.opacity=(1)
        masterSongName.innerText = songs[songIndex].songsName

})