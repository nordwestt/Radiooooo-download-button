
function downloadSong(){
    var element = document.createElement('a');
    element.href = document.getElementsByClassName("audio")[0].currentSrc;
    element.download = document.getElementsByClassName("title")[0].textContent+ " - " + document.getElementsByClassName("artist")[0].textContent+".mp3";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

async function setupDownloadButton(){
    while(document.getElementsByClassName("group command").length==0){
        await new Promise(r=>setTimeout(r, 200));
    }
    
   downloadBtn.onclick = downloadSong;
    downloadBtn.setAttribute("type", "button");
    downloadBtn.className = "button style-action";
    downloadBtn.style = "padding: 0;";
	downloadBtn.innerHTML = '<img src= "https://svgshare.com/i/suz.svg" />';
	panel.appendChild(downloadBtn);

}

setupDownloadButton();
