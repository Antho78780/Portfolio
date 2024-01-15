let container_header = document.getElementById("container_header");
let btns = container_header.getElementsByClassName("nav-link");
let test = document.getElementById("test")


for(let i=0;i<btns.length;i++){
    btns[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += " active";
    })
}
async function displayProjects() {
    const response = await fetch("http://127.0.0.1:5500/file.json");
    const article = await response.json();
    for (let i=0; i < article["projects"].length;i++) {
        console.log(article["projects"][i])
        if (test){
            test.innerHTML += `<div class="col"><div class="card shadow-sm"><img src="${article["projects"][i]["image"]}" alt="" class="card-img-top bd-placeholder-img" width="100" height="225"><div class="card-body bg-light"><p class="card-text">${article["projects"][i]["text"]}</p><div class="d-flex justify-content-between align-items-center"><div class="btn-group"><a href="${article["projects"][i]["link"]}" target="_blank"><button type="button" class="btn btn-sm btn-outline-secondary">Github</button></a></div></div></div></div></div>`
        } 
    }
  }
displayProjects()