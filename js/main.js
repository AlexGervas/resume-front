import {getLanguagesInfo} from "./language.js";
import {getTools} from "./tools.js";
import {getInterestsData} from "./interests.js";

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
            <input class="boxTitile" value="Languages"/>
            <div class="listLanguagesRowContainer">
                <div id="languagesList" class="nameLanguage"> </div>
                <div id="languagesProgress" class="levelLanguage"></div>
            </div>
        </div>
    </div>
    
    <div class="mainContainer">
        <div class="experienceBoxContainer"></div>
        
        <div class="toolsBoxContainer">
            <input class="boxTitile" value="Tools"/>
            <div id="toolsList" class="toolsListColumn"></div>
        </div>
    </div>
    
    <div class="footerContainer">
        <div class="educationBoxContainer">
            <input class="boxTitile" value="Education"/>
            
            
        </div>
        
        <div class="extraBoxContainer">
            <div class="interestsBox">
                <input class="boxTitile" value="Interests"/>
                <div id="listInterestsContainer" class="listInterestsContainer"></div>
            </div>
            
            <div class="disclaimer">
                <div class="disclaimerTextArea" contenteditable="true">Let´s chat! I´m ready to work on excinting projects</div>
                <input class="disclaimerEmail" type="email" value="srkarthik.designscape@gmail.com" placeholder="Email"/>
            </div>
        </div>
        
    </div>
    
</div> 
`

getLanguagesInfo()
getTools()
getInterestsData()