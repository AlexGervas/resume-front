import {getLanguagesInfo} from "./language.js";
import {getTools} from "./tools.js";
import {getInterestsData} from "./interests.js";
import {loadFromSessionStorage, saveToSessionStorage} from "./saveData.js";
import {getEducationsData} from "./education.js";
import {submitForm} from "./saveToPDF.js";
import {getExperienceData} from "./experience.js";

const profileImg = "public/profileImg.png";

document.querySelector('#app').innerHTML = `
<div class="pageLayout">
    <div class="headerContainer">
        <img src="${profileImg}" class="logo" alt="Vite logo" />
        <div class="nameBox">
            <input type="text" id="showGreeting" value="Hello 👋🏻 I’m" placeholder="Greeting"/>
            
            <div class="yourInfoContainer">
              <input class="yourInfoName" id="yourInfoName" type="text" value="Karthik SR" placeholder="Name"/>
              <input class="yourInfoRole" id="yourInfoRole" type="text" value="UX/UI Designer" placeholder="Position"/>
            </div>
        </div>
        
        <div id="languagesBox" class="languagesBox">
            <input class="boxTitile" id="languagesTitle" value="Languages"/>
            <div class="listLanguagesRowContainer">
                <div id="languagesList" class="nameLanguage"> </div>
                <div id="languagesProgress" class="levelLanguage"></div>
            </div>
        </div>
    </div>
    
    <div class="mainContainer">
        <div class="experienceBoxContainer">
            <input class="boxTitile" id="experienceTitle" value="Experience"/>
            <div id="jobListContainer" class="jobListContainer"></div>
        </div>
        
        <div class="toolsBoxContainer">
            <input class="boxTitile" id="toolsTitle" value="Tools"/>
            <div id="toolsList" class="toolsListColumn"></div>
        </div>
    </div>
    
    <div class="footerContainer">
        <div class="educationBoxContainer">
            <input class="boxTitile" id="educationTitle" value="Education"/>
            <div id="listEducationContainer" class="listEducationContainer"></div>
        </div>
        
        <div class="extraBoxContainer">
            <div class="interestsBox">
                <input class="boxTitile" id="interestsTitle" value="Interests"/>
                <div id="listInterestsContainer" class="listInterestsContainer"></div>
            </div>
            
            <div class="disclaimer">
                <div class="disclaimerTextArea" id="disclaimerText" contenteditable="true">Let´s chat! I´m ready to work on excinting projects</div>
                <input class="disclaimerEmail" id="email" type="email" value="srkarthik.designscape@gmail.com" placeholder="Email"/>
            </div>
        </div>
        
    </div>
    <div class="button-container">
        <button id="download-pdf" class="ripple-button">Download PDF</button>
    </div>
    
</div> 
`

getLanguagesInfo()
getExperienceData()
getTools()
getEducationsData()
getInterestsData()

submitForm()

// Work with sessionStorage:
saveToSessionStorage()
loadFromSessionStorage()


// Loading values when the page loads:
window.onload = loadFromSessionStorage;

// Adding event handlers to automatically save values when changing:
const elements = document.querySelectorAll('input, div[contenteditable], textarea');
elements.forEach(element => {
    element.addEventListener('input', saveToSessionStorage);
});

document.querySelector('.ripple-button').addEventListener('click', function (e) {
    const button = e.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();

    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.add('ripple');

    button.appendChild(ripple);

    // Удаляем элемент после завершения анимации
    ripple.addEventListener('animationend', () => {
        ripple.remove();
    });
});
