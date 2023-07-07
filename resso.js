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
let audioElement = new Audio("")
audioElement.play()

let songs = [
    {songsName:"Raflaan-8", filePath:"songs/1.mp3", coverPath:"cover/1.jpg"},
    {songsName:"Aadat_Ve", filePath:"songs/2.mp3", coverPath:"cover/2.jpg"},
    {songsName:"Barsaat Ki", filePath:"songs/3.mp3", coverPath:"cover/3.jpg"},
    {songsName:"Beautiful", filePath:"songs/4.mp3", coverPath:"cover/4.jpg"},
    {songsName:"Chor lge", filePath:"songs/5.mp3", coverPath:"cover/5.jpg"},
    {songsName:"Chota_Number", filePath:"songs/6.mp3", coverPath:"cover/6.jpg"},
    {songsName:"Do_Vaari", filePath:"songs/7.mp3", coverPath:"cover/7.jpg"},
    {songsName:"Filhall", filePath:"songs/8.mp3", coverPath:"cover/8.jpg"},
    {songsName:"Ikko Mikke", filePath:"songs/9.mp3", coverPath:"cover/9.jpg"},
    {songsName:"Main Jis Din", filePath:"songs/10.mp3", coverPath:"cover/10.jpg"},
    {songsName:"Butterfly", filePath:"songs/11.mp3", coverPath:"cover/11.jpg"},
    {songsName:"Dholna", filePath:"songs/12.mp3", coverPath:"cover/12.jpg"},
    {songsName:"Goli", filePath:"songs/13.mp3", coverPath:"cover/13.jpg"},
    {songsName:"Guitar_Sikhda", filePath:"songs/14.mp3", coverPath:"cover/14.jpg"},
    {songsName:"Gulabi Pagg", filePath:"songs/15.mp3", coverPath:"cover/15.jpg"},
    {songsName:"Kabhi_Tumhe", filePath:"songs/16.mp3", coverPath:"cover/16.jpg"},
    {songsName:"Kaun Hoyega", filePath:"songs/17.mp3", coverPath:"cover/17.jpg"},
    {songsName:"Kde_Kde_1", filePath:"songs/18.mp3", coverPath:"cover/18.jpg"},
    {songsName:"Khali_Khali", filePath:"songs/19.mp3", coverPath:"cover/19.jpg"},
    {songsName:"Kuch_To_Hai", filePath:"songs/20.mp3", coverPath:"cover/20.jpg"},
    {songsName:"Main Agar", filePath:"songs/21.mp3", coverPath:"cover/21.jpg"},
    {songsName:"Main Agar", filePath:"songs/22.mp3", coverPath:"cover/22.jpg"},
    {songsName:"Main Jis Din", filePath:"songs/23.mp3", coverPath:"cover/23.jpg"},
    {songsName:"Main_Teri", filePath:"songs/24.mp3", coverPath:"cover/24.jpg"},
    {songsName:"Mehendi_Wale", filePath:"songs/25.mp3", coverPath:"cover/25.jpg"},
    {songsName:"Mera_Haal", filePath:"songs/26.mp3", coverPath:"cover/26.jpg"},
    {songsName:"Mujhe Peene Do", filePath:"songs/27.mp3", coverPath:"cover/27.jpg"},
    {songsName:"Naa_Chalda", filePath:"songs/28.mp3", coverPath:"cover/28.jpg"},
    {songsName:"Nain_Bengali", filePath:"songs/29.mp3", coverPath:"cover/29.jpg"},
    {songsName:"Naina", filePath:"songs/30.mp3", coverPath:"cover/30.jpg"},
    {songsName:"Nehu Da Vyah", filePath:"songs/31.mp3", coverPath:"cover/31.jpg"},
    {songsName:"Oye Hoye Hoye", filePath:"songs/32.mp3", coverPath:"cover/32.jpg"},
    {songsName:"Paniyon_Sa", filePath:"songs/33.mp3", coverPath:"cover/33.jpg"},
    {songsName:"Parshawan", filePath:"songs/34.mp3", coverPath:"cover/34.jpg"},
    {songsName:"Pasand_Bangi", filePath:"songs/35.mp3", coverPath:"cover/35.jpg"},
    {songsName:"Paune2", filePath:"songs/36.mp3", coverPath:"cover/36.jpg"},
    {songsName:"Pehle_Pyaar_Ka", filePath:"songs/37.mp3", coverPath:"cover/37.jpg"},
    {songsName:"Qismat", filePath:"songs/38.mp3", coverPath:"cover/38.jpg"},
    {songsName:"Raata Lambiya", filePath:"songs/39.mp3", coverPath:"cover/39.jpg"},
    {songsName:"Sohne pasand", filePath:"songs/40.mp3", coverPath:"cover/40.jpg"},
    {songsName:"Suit", filePath:"songs/41.mp3", coverPath:"cover/41.jpg"},
    {songsName:"Thoda_Thoda", filePath:"songs/42.mp3", coverPath:"cover/42.jpg"},
    {songsName:"Tich_Button", filePath:"songs/43.mp3", coverPath:"cover/43.jpg"},
    {songsName:"Tose Naina", filePath:"songs/44.mp3", coverPath:"cover/44.jpg"},
    {songsName:"Sayar Banagi", filePath:"songs/45.mp3", coverPath:"cover/45.jpg"},
    {songsName:"Veham", filePath:"songs/46.mp3", coverPath:"cover/46.jpg"},
    {songsName:"Velly Jatt", filePath:"songs/47.mp3", coverPath:"cover/47.jpg"},
    {songsName:"Waalian", filePath:"songs/48.mp3", coverPath:"cover/48.jpg"},
    {songsName:"Yaariyan", filePath:"songs/49.mp3", coverPath:"cover/49.jpg"},
    {songsName:"Auduri kahani", filePath:"songs/50.mp3", coverPath:"cover/50.jpg"},
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
        // gif.style.opacity=(1)
    }
    else{
        audioElement.pause()
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
        // gif.style.opacity=(0)
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
    if(songIndex>=49){
        songIndex = 1
    }
    else{
        songIndex +=1
    }
        audioElement.src = `songs/${songIndex}.mp3`
        audioElement.currentTime = 0
        audioElement.play()
        masterSongName.innerText = songs[songIndex-1].songsName
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
        masterSongName.innerText = songs[songIndex-1].songsName
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        gif.style.opacity=(1)

})