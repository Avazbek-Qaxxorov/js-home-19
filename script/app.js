const addStudent = document.querySelector("#add-student");
const addStudentForm = document.querySelector("#add-student-form");
const idStudent = document.querySelector("#id-student");
const nameStudent = document.querySelector("#name-student");
const surnameStudent = document.querySelector("#surname-student");
const ageStudent = document.querySelector("#age-student");
const cancelBtn = document.querySelector("#cancel-btn");
const list = document.querySelector(".list")
const showNewStudent = (id, name, surname, age) => {
    addStudentForm.classList.add("show");
}

const cancelNewAddForm = () => {
    addStudentForm.classList.remove("show");
}

const createNewForm = (student) => {
    student.preventDefault();

    list.innerHTML += `Sizning Id raqaming: ${idStudent.value} Sizning ismingiz: ${nameStudent.value}\nSizning familiyangiz:${surnameStudent.value}\nSizning yoshingiz: ${ageStudent.value}`;
}

addStudent.addEventListener("click", () => {showNewStudent});

cancelBtn.addEventListener("click", () => {cancelNewAddForm});

addStudentForm.addEventListener("submit", (student) => {createNewForm(student)});