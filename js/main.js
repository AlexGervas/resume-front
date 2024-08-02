import {getLanguagesInfo} from "./language.js";

const profileImg = "/profileImg.png";

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
            <input class="languagesBoxTitle" value="Languages"/>
            <div class="listLanguagesRowContainer">
                <div id="languagesList" class="nameLanguage"> </div>
                <div id="languagesProgress" class="levelLanguage"></div>
            </div>
        </div>
        
        
    </div>     
</div> 
`

getLanguagesInfo()
