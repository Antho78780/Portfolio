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
        insert_project.innerHTML += `<div class="col"><div class="card shadow-sm"><img src="${data["projects"][i]["image"]}" alt="" class="card-img-top bd-placeholder-img"
         width="100" height="225"><div class="card-body bg-light"><p class="card-text">${data["projects"][i]["text"]}</p><div class="d-flex justify-content-between
        align-items-center"><div class="btn-group"><a href="${data["projects"][i]["link"]}" target="_blank"><button type="button" class="btn btn-sm btn-primary">
        Github</button></a></div></div></div></div></div>`
        }
        for (let i=0; i < data["languages"].length;i++) {
            insert_language.innerHTML += `<div class="card" style="width: 13rem;"><img src="${data["languages"][i]["image"]}" class="card-img-top" alt="..."><h5 class="card-title text-center">${data["languages"][i]["text"]}</h5>
        </div>`
        }
    })

