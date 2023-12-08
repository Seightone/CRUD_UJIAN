var selectedRow = null;

//Alert
function showAlert(message, className){
    const div = document.createElement("div");
    div.className = 'alert alert-${className}';
    
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert").remove(), 3000);
}

// Clear All Fields

function clearFields(){
    document.querySelector("#NamaDepan").value = "";
    document.querySelector("#NamaBelakang").value ="";
    document.querySelector("NPM").value ="";
}

// Add Data

document.querySelector("#student-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const NamaDepan = document.querySelector("#NamaDepan").value;
    const NamaBelakang = document.querySelector("#NamaBelakang").value;
    const NPM = document.querySelector("#NPM").value;

    //Validasi

    if(NamaDepan == "" || NamaBelakang == "" || NPM == "" ){
        showAlert("Tolong Masukkan Semua Data", "danger");
    }
    else{
        if(selectedRow == null){
            const list = document.querySelector("#student-list");
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${NamaDepan}</td>
                <td>${NamaBelakang}</td>
                <td>${NPM}</td>
                <td>
                    <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
                    <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
                </td>
            `;
            list.appendChild(row);
            selectedRow = null;
            showAlert("Berhasil Ditambahkan", "success")
        }
        else{
            selectedRow.children[0].textContent = NamaDepan;
            selectedRow.children[1].textContent = NamaBelakang;
            selectedRow.children[2].textContent = NPM;
            selectedRow = null;
            showAlert("Data Mahasiswa Berhasil di Edit", "info");
        }
    }
});

// Edit Data

document.querySelector("#student-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("edit")){
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#NamaDepan").value = selectedRow.children[0].textContent;
        document.querySelector("#NamaBelakang").value = selectedRow.children[1].textContent;
        document.querySelector("#NPM").value = selectedRow.children[2].textContent;
    }
});

// Delete data

document.querySelector("#student-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("Data Mahasiswa Terhapus", "danger");
    }
});

