// // fill in javascript code here

// let form = document.getElementsByTagName("form")[0]
// let name = document.getElementById("name")
// let employeeID = document.getElementById("employeeID")
// let department = document.getElementById("department")
// let exp = document.getElementById("exp")
// let email = document.getElementById("email")
// let mbl = document.getElementById("mbl")

// let tbody = document.querySelector("tbody")
// let data = []

// let parseData;
// const getData = () => {

//     let getData = localStorage.getItem("records")
//     parseData = JSON.parse(getData)
//     console.log(parseData)
// }

// form.addEventListener("submit", (e) => {
//     e.preventDefault()

//     let obj = {
//         name: name.value,
//         employeeID: employeeID.value,
//         department: department.value,
//         exp: exp.value,
//         email: email.value,
//         mbl: mbl.value
//     }
//     // data.push(obj)
//     localStorage.setItem("records", JSON.stringify(obj))
//     renderData(parseData)

// })

// getData()




// const renderData = (data) => {
//     if (data) {
//         data.forEach((el) => {
//             let tr = document.createElement("tr")
//             let username = document.createElement("td")
//             username.innerText = el.name

//             let employeeID = document.createElement("td")
//             employeeID.innerText = el.employeeID
//             let department = document.createElement("td")
//             department.innerText = el.department
//             let exp = document.createElement("td")
//             exp.innerText = el.exp

//             let email = document.createElement("td")
//             email.innerText = el.email
//             let mobile = document.createElement("td")
//             mobile.innerText = el.mbl
//             let role = document.createElement("td")
//             role.innerText = "sinior"
//             let deleteBtn = document.createElement("button")
//             deleteBtn.innerText = "Delete"
//             tr.append(username, employeeID, department, exp, email, mobile, role, deleteBtn)
//             tbody.append(tr)

//         })
//     }
// }
// renderData(parseData)


let form = document.getElementsByTagName("form")[0];
let name = document.getElementById("name");
let employeeID = document.getElementById("employeeID");
let department = document.getElementById("department");
let exp = document.getElementById("exp");
let email = document.getElementById("email");
let mbl = document.getElementById("mbl");

let tbody = document.querySelector("tbody");
let parseData = [];

const getData = () => {
    let storedData = localStorage.getItem("records");
    if (storedData) {
        parseData = JSON.parse(storedData);
    }
    if (!Array.isArray(parseData)) {
        parseData = []; // Ensure parseData is an array
    }
}

const setData = () => {
    localStorage.setItem("records", JSON.stringify(parseData));
}

const renderData = () => {
    tbody.innerHTML = ""; // Clear previous data
    parseData.forEach((el, i) => {
        let tr = document.createElement("tr");
        let username = document.createElement("td");
        username.innerText = el.name;

        let employeeID = document.createElement("td");
        employeeID.innerText = el.employeeID;
        let department = document.createElement("td");
        department.innerText = el.department;
        let exp = document.createElement("td");
        exp.innerText = el.exp;

        let email = document.createElement("td");
        email.innerText = el.email;
        let mobile = document.createElement("td");
        mobile.innerText = el.mbl;
        let role = document.createElement("td");
        if (el.exp <= 1) {
            role.innerText = "Fresher";
        }
        if (el.exp > 1 && el.exp <= 5) {
            role.innerText = "junior";
        }
        if (el.exp > 5) {
            role.innerText = "senior";
        }
        let deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("id", "delete")
        deleteBtn.innerText = "Delete";
        tr.append(username, employeeID, department, exp, email, mobile, role, deleteBtn);
        tbody.append(tr);
        // deleteTask(i)
    });
}

// function deleteTask() {
//     tbody.addEventListener("click", (e) => {
//         console.log(e.target)
//         // console.log(i)
//         e.target.style.color = "red"
// localStorage.removeItem("records",parseData[e.target])
//     })
// }

function deleteTask() {
    tbody.addEventListener("click", (e) => {
        if (e.target.tagName.toLowerCase() === "button" && e.target.id === "delete") {
            const row = e.target.closest("tr");
            const index = Array.from(tbody.children).indexOf(row);
            parseData.splice(index, 1);
            setData();
            row.remove();
        }
    });
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let obj = {
        name: name.value,
        employeeID: employeeID.value,
        department: department.value,
        exp: exp.value,
        email: email.value,
        mbl: mbl.value
    }
    parseData.push(obj);
    setData();
    renderData();
});

getData();
renderData();
deleteTask()
