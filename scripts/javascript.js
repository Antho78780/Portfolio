const container_header = document.getElementById("container_header");
const btns = container_header.getElementsByClassName("nav-link");
let insert_project = document.getElementById("insert_project")
let insert_language = document.getElementById("insert_language")


for(let i=0;i<btns.length;i++){
    btns[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += " active";
    })
}
fetch("file.json")
    .then(res => res.json())
    .then(data => {
        for (let i=0; i < data["projects"].length;i++) {
            insert_project.innerHTML += `<div class="col"><div class="card" style="width: 20rem;"><img class="card-img-top img-thumbnail" src="${data["projects"][i]["image"]}" 
            alt="Card image cap"><div class="card-body"><p class="card-text">${data["projects"][i]["text"]}</p><a href="${data["projects"][i]["link"]}" 
            class="btn btn-primary">Github</a></div></div></div>`
        }
        for (let i=0; i < data["languages"].length;i++) {
            insert_language.innerHTML += `<div class="card" style="width: 13rem;"><img src="${data["languages"][i]["image"]}" class="card-img-top" alt="...">
            <h5 class="card-title text-center">${data["languages"][i]["text"]}</h5>
            </div>`
        }
    })

