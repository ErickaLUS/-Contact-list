//selecting all required elements
const dropArea = document.querySelector(".drag-area"),
    dragText = dropArea.querySelector("header"),
    button = dropArea.querySelector("button"),
    input = dropArea.querySelector("input");
let file; //this is a global variable and we'll use it inside multiple functions

button.onclick = () => {
    input.click(); //if user click on the button then the input also clicked
};

input.addEventListener("change", function() {
    //getting user select file and [0] this means if user select multiple files then we'll select only the first one
    file = this.files[0];
    dropArea.classList.add("active");
    showFile(); //calling function
});

//If user Drag File Over DropArea
dropArea.addEventListener("dragover", (event) => {
    event.preventDefault(); //preventing from default behaviour
    dropArea.classList.add("active");
    dragText.textContent = "Release to Upload File";
});

//If user leave dragged File from DropArea
dropArea.addEventListener("dragleave", () => {
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File";
});

//If user drop File on DropArea
dropArea.addEventListener("drop", (event) => {
    event.preventDefault(); //preventing from default behaviour
    //getting user select file and [0] this means if user select multiple files then we'll select only the first one
    file = event.dataTransfer.files[0];
    showFile(); //calling function
});

function showFile() {
    let fileType = file.type; //getting selected file type
    let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
    if (validExtensions.includes(fileType)) {
        //if user selected file is an image file
        let fileReader = new FileReader(); //creating new FileReader object
        fileReader.onload = () => {
            let fileURL = fileReader.result; //passing user file source in fileURL variable
            let imgTag = `<img src="${fileURL}" alt="" id="photo">`; //creating an img tag and passing user selected file source inside src attribute
            dropArea.innerHTML = imgTag; //adding that created img tag inside dropArea container
        };
        fileReader.readAsDataURL(file);
    } else {
        alert("This is not an Image File!");
        dropArea.classList.remove("active");
        dragText.textContent = "Drag & Drop to Upload File";
    }
}
let maVarId = "";
let maBoucle = false;
let formulaire = document.querySelector("form");
let photo = document.querySelector("#photo");
let creerBtn = document.querySelector("#creer-btn");
creerBtn.addEventListener("click", (e) => {
    let prenom = document.querySelector("#prenom").value;
    let nom = document.querySelector("#nom").value;
    let groupe = document.querySelector("#groupe").value;
    let email = document.querySelector("#e-mail").value;
    let contact = document.querySelector("#contact").value;
    let bio = document.querySelector("#bio").value;
    photo = document.querySelector("#photo").src;
    e.preventDefault();
    let maCreat = "i" + Date.now().toString();
    if (maBoucle) {
        document.querySelector(
            `#${maVarId} .collection .col #prenom-content`
        ).innerText = prenom;
        document.querySelector(
            `#${maVarId} .collection .col #name-content`
        ).innerText = nom;
        document.querySelector(
            `#${maVarId} .collection .col #groupe-content`
        ).innerText = groupe;
        document.querySelector(
            `#${maVarId} .collection contact-is-content`
        ).innerText = contact;
        document.querySelector(
            `#${maVarId} .collection  #e-mail-content`
        ).innerText = e - mail;
        document.querySelector(`#${maVarId} .collection  #bio-content`).innerText =
            bio;
    } else {
        let textTemplate = `<div class="contenu" id="${maCreat}"> 

                    <img src="${photo}" class='photo' />
                    <div class="collection">
                        <div class="col">
                          <span id="prenom-content">${prenom}</span>  
                            <span id="name-content">${nom}</span>
                            <span id="groupe-content">${groupe}</span>
                        </div>
                        <div>
                            <span id="contact-is-content">${contact}</span>
                            <span id="e-mail-content">${email}</span>
                        </div>
                       
                        <span id="bio-content">${bio}</span> 
                        </div>
                    <div class="collection-pre">
                        <i class="fa-solid fa-user" onclick='editer(this,"${maCreat}")'></i>
                        <i class="fa-solid fa-trash-can" id="cancel-btn" onclick='supprimer(this)'></i>
                    </div>
                </div>
            </div>
                      `;
        let liste = document.querySelector(".collection-parent");
        liste.innerHTML += textTemplate;
    }

    formulaire.reset();
    formulaire.querySelector("#creer-btn").textContent = "creer";
    maBoucle = false;
    maVarId = "";
});

function supprimer(sup) {
    cat = sup.parentElement.parentElement;
    cat.remove();
}

function editer(edit, id) {
    edt = edit.parentElement.parentElement.parentElement;
    formulaire.querySelector("#prenom").value =
        edt.querySelector("#prenom-content").innerHTML;
    formulaire.querySelector("#nom").value =
        edt.querySelector("#name-content").innerHTML;
    formulaire.querySelector("#groupe").value =
        edt.querySelector("#groupe-content").innerHTML;
    formulaire.querySelector("#e-mail").value =
        edt.querySelector("#e-mail-content").innerHTML;
    formulaire.querySelector("#contact").value = edt.querySelector(
        "#contact-is-content"
    ).innerHTML;
    formulaire.querySelector("#bio").value =
        edt.querySelector("#bio-content").innerHTML;
    formulaire.querySelector("#photo").src = edt.querySelector(".photo").src;

    formulaire.querySelector("#creer-btn").textContent = "modifier";
    maBoucle = true;
    maVarId = id;
}