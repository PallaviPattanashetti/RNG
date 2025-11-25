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
let GenerateBtn = document.getElementById("GenerateBtn");
let StudentBtn = document.getElementById("StudentBtn");

function RandomNameGenerator(students) {
    let randomIndex = Math.floor(Math.random() * students.length);
    console.log([randomIndex]);
    return students[randomIndex]
}

GenerateBtn.addEventListener("click", () => {
    getData().then(students => {
        let student = RandomNameGenerator(students);
        //console.log(randomStudent);
        let randomStudent = RandomNameGenerator(students);
        firstName.innerText = "First Name: " + randomStudent.firstName;
        lastName.innerText = "Last Name: " + randomStudent.lastName;
        CodestackeEmail.innerText = "Codestack Email: " + randomStudent.CodeStackEmail;
        Email.innerText = "Email: " + randomStudent.Email;

    });
});

let currentIndex = 0;
function StudentNameGenerator(students) {
    const student = students[currentIndex];
    currentIndex = (currentIndex + 1) % students.length;
    return student;
}

StudentBtn.addEventListener("click", () => {
    getData().then(students => {
        let student = StudentNameGenerator(students);
        firstName.innerText = "First Name: " + student.firstName;
        lastName.innerText = "Last Name: " + student.lastName;
        CodestackeEmail.innerText = "Codestack Email: " + student.CodeStackEmail;
        Email.innerText = "Email: " + student.Email;
        
        firstName.style.color = "blue";
    lastName.style.color = "green";
    CodestackeEmail.style.color = "blue";
    Email.style.color = "green";
    });
});


