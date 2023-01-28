document.querySelector(".lookupbtn").addEventListener("click",fun);
function fun(){
fetch(` https://ipapi.co/json/`)
.then(response => response.json())
.then(data => {
document.querySelector(".ip-display").textContent=`IP : ${data.ip}`
document.querySelector(".location-display").textContent=`location:${data.city}`
document.querySelector(".network").textContent=`Network:${data.network}`
document.querySelector(".region").textContent=`Region:${data.region}`
document.querySelector(".country").textContent=`Country:${data.country}`

})
}


