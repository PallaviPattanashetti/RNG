function getData() {
    return fetch("../data/data.json")
        .then((Response) => Response.json())
        .then((data) => {
            console.log(data);
            return data.students;
        });
}
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let CodestackeEmail = document.getElementById("CodestackeEmail");
let Email = document.getElementById("Email");
let RandomBtn = document.getElementById("RandomBtn");
let previousNames = [];
function UpdatePreviousNamesList() {
    let previousList = document.getElementById("previousNames");

    let listItems = "";
    for (let s of previousNames) {
        listItems += `<li>${s.firstName} ${s.lastName}</li>`;

    }
    previousList.innerHTML = listItems;
}
RandomBtn.addEventListener("click", () => {
    getData().then(students => {
        let randomStudent = RandomNameGenerator(students);

        previousNames.unshift(randomStudent);
        if (previousNames.length > 5) previousNames.pop();

        firstName.innerText = "First Name: " + randomStudent.firstName;
        lastName.innerText = "Last Name: " + randomStudent.lastName;
        CodestackeEmail.innerText = "Codestack Email: " + randomStudent.CodeStackEmail;
        Email.innerText = "Email: " + randomStudent.Email;
        UpdatePreviousNamesList();
    });
});
function RandomNameGenerator(students) {
    let randomIndex = Math.floor(Math.random() * students.length);
    console.log([randomIndex]);
    return students[randomIndex]
}
GenerateBtn.addEventListener("click", () => {
    getData().then(students => {
        let student = RandomNameGenerator(students);
        let randomStudent = RandomNameGenerator(students);
        firstName.innerText = "First Name: " + randomStudent.firstName;
        lastName.innerText = "Last Name: " + randomStudent.lastName;
        CodestackeEmail.innerText = "Codestack Email: " + randomStudent.CodeStackEmail;
        Email.innerText = "Email: " + randomStudent.Email;

    });
});


