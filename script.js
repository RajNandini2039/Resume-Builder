const button = document.querySelector("#button");
const signin = document.querySelector(".authenticate");
const close = document.querySelector(".container");
const image = document.querySelector(".image-container");
const submit = document.querySelector(".submit");
const resume = document.querySelector(".resume");
const body = document.querySelector("body");
const firstn = document.querySelector(".firstname");
const lastn = document.querySelector(".lastname");
const email1= document.querySelector(".email1");
const password = document.querySelector(".password");
const confirm = document.querySelector(".confirm");
const create = document.querySelector(".create");
const cv = document.querySelector(".cv");

// signin.style.display = "none";
// resume.style.display = "flex";
// // document.querySelector(".main").style.display = "none";
// // document.querySelector(".reumeswap").style.display = "none";
// // document.querySelector(".section-two").style.display = "none";


button.addEventListener('click', () => {
    signin.style.display = "flex";
    close.style.display = "none";
    image.style.display = "none";
});

submit.addEventListener('click', (e) => {
    e.preventDefault();

    if (firstn.value=="" || lastn.value=="" || email1.value=="" || password.value=="" || confirm.value=="") {
        alert("Please fill all the fields");
        return;
    }

    if (password.value !== confirm.value) {
        alert("Passwords do not match");
        return;
    }

    signin.style.display = "none";
    resume.style.display = "flex";
    body.style.backgroundColor = "white";
    body.style.color = "black";
    localStorage.setItem('firstName', firstn.value);
    localStorage.setItem('lastName', lastn.value);

    // Display welcome message
    const welcomeMessage = document.createElement('h2');
    welcomeMessage.classList.add('welcome-message');

    welcomeMessage.style.marginTop = "20px";
    welcomeMessage.style.fontSize = "2rem";
    welcomeMessage.style.fontFamily = "Arial, sans-serif";
    welcomeMessage.style.fontWeight = "bold";
 

    welcomeMessage.textContent = `Welcome ${localStorage.getItem('firstName')} ${localStorage.getItem('lastName')}!`;
    resume.insertBefore(welcomeMessage, resume.firstChild);

});

create.addEventListener('click', (e) => {

    cv.style.display = "flex";
    generateCV();
    e.preventDefault();
    });

function generateCV() {
    const leftDiv = document.querySelector('.left');
    const rightDiv = document.querySelector('.right');
    leftDiv.innerHTML = ''; 
    rightDiv.innerHTML = '';
    console.log("Resume Data:", resume.innerText); // Console me current resume ka data print karo


    let fn = document.querySelector("#fn").value.trim();
    let mn = document.querySelector("#mn").value.trim();
    let ln = document.querySelector("#ln").value.trim();
    let email = document.querySelector("#email").value.trim();
    let phone = document.querySelector("#phone").value.trim();
    let address = document.querySelector("#address").value.trim();
    let summary = document.querySelector("#summary").value.trim();
    let photoInput = document.querySelector(".profile");
    let designation = document.querySelector("#designation").value.trim();
    let skills = document.querySelector("#skill1").value.trim();
    let skill2 = document.querySelector("#skill2").value.trim();

    const fragment = document.createDocumentFragment();
    const img = document.createElement('img');
    img.alt = "Profile Picture";
    fragment.appendChild(img);

    const file = photoInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    } else {
        img.src = 'placeholder.jpg';
    }

    const name1 = document.createElement('h1');
    name1.textContent = `${fn} ${mn} ${ln}`;
    const designation2 = document.createElement('h2');
    designation2.textContent = designation;
    const About = document.createElement('h1');
    About.textContent = "About ";
    const mail = document.createElement('p');
    mail.textContent = email;
    const no = document.createElement('p');
    no.textContent = phone;
    const address2 = document.createElement('p');
    address2.textContent = address;
    const sum = document.createElement('p');
    sum.textContent = summary;
    const sky1 = document.createElement('p');
    sky1.textContent = skills;
    const sky2 = document.createElement('p');
    sky2.textContent = skill2;

    fragment.appendChild(name1);
    fragment.appendChild(designation2);
    fragment.appendChild(About);
    fragment.appendChild(mail);
    fragment.appendChild(no);
    fragment.appendChild(address2);
    fragment.appendChild(sum);
    fragment.appendChild(sky1);
    fragment.appendChild(sky2);
    leftDiv.append(fragment);

    let ach1 = document.querySelector("#ach1").value.trim();
    let ach2 = document.querySelector("#ach2").value.trim();
    let desc = document.querySelector("#desc").value.trim();
    let desc2 = document.querySelector("#desc2").value.trim();
    let school = document.querySelector("#school").value.trim();
    let degree = document.querySelector("#degree").value.trim();
    let gradyear = document.querySelector("#gradyear").value.trim();
    let company = document.querySelector("#company").value.trim();
    let position = document.querySelector("#jobtitle").value.trim();
    let jobdesc = document.querySelector("#jobdesc").value.trim();
    let start1 = document.querySelector("#startdate").value.trim();
    let end1 = document.querySelector("#enddate").value.trim();
    let project1 = document.querySelector("#project1").value.trim();
    let project2 = document.querySelector("#project2").value.trim();
    let projectdesc1 = document.querySelector("#projectdesc").value.trim();
    let projectdesc2 = document.querySelector("#projectdesc2").value.trim();

    const fragment1 = document.createDocumentFragment();
    function createSection(title, elements) {
        const sectionTitle = document.createElement('h1');
        sectionTitle.textContent = title;
        sectionTitle.style.color = "#2c3e50";
        sectionTitle.style.marginBottom = "15px";
        fragment1.appendChild(sectionTitle);
        elements.forEach(el => fragment1.appendChild(el));
    }

    createSection("Achievements", [
        createTextElement('h2', ach1),
        createTextElement('p', desc),
        createTextElement('h2', ach2),
        createTextElement('p', desc2)
    ]);

    createSection("Education", [
        createTextElement('h2', school),
        createTextElement('h2', degree),
        createTextElement('h2', gradyear)
    ]);

    createSection("Work Experience", [
        createTextElement('h2', company),
        createTextElement('h2', position),
        createTextElement('p', jobdesc),
        createTextElement('h2', start1),
        createTextElement('h2', end1)
    ]);

    createSection("Projects", [
        createTextElement('h2', project1),
        createTextElement('p', projectdesc1),
        createTextElement('h2', project2),
        createTextElement('p', projectdesc2)
    ]);

    rightDiv.append(fragment1);

    function createTextElement(tag, text) {
        const el = document.createElement(tag);
        el.textContent = text;
        return el;
    }

    document.querySelector('form').reset();
}

