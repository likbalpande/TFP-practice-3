const cardElem = document.querySelector(".card");
const formElem = document.querySelector("form");

const handleUsername = (e) => {
    const username = e.target.value;

    cardElem.querySelector("h3").innerText = `
        Employee Name: ${username}
    `;
};

const handleDOB = (e) => {
    const dob = e.target.value;

    cardElem.querySelector("h4").innerText = `
        Date of birth : ${dob}
    `;
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(cardElem.style.display);
    console.log(getComputedStyle(cardElem).display);
    if (cardElem.style.display == "block") {
        formElem.style.display = "block";
        cardElem.style.display = "none";
    } else {
        formElem.style.display = "none";
        cardElem.style.display = "block";
    }
};

// const handleEdit = () => {
//     cardElem.style.display = "none";
//     formElem.style.display = "block";
// };
