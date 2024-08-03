import {getLanguagesInfo} from "./language.js";
import {getTools} from "./tools.js";
import {getInterestsData} from "./interests.js";
import {loadFromSessionStorage, saveToSessionStorage} from "./saveData.js";

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
        <div class="experienceBoxContainer"></div>
        
        <div class="toolsBoxContainer">
            <input class="boxTitile" id="toolsTitle" value="Tools"/>
            <div id="toolsList" class="toolsListColumn"></div>
        </div>
    </div>
    
    <div class="footerContainer">
        <div class="educationBoxContainer">
            <input class="boxTitile" id="educationTitle" value="Education"/>
            
            
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
    
</div> 
`

getLanguagesInfo()
getTools()
getInterestsData()


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

