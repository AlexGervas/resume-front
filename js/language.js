export function getLanguagesInfo() {
    const languageList = [
        {name: "English", progress: "100%"},
        {name: "Malayalam", progress: "100%"},
        {name: "Hindi", progress: "70%"}
    ]

    let languagesList = languageList.map((item) =>
        `${item.name}`).join('<br>');
    document.querySelector('#languagesList').innerHTML = languagesList;
    console.log(5555, typeof languagesList)

    let languagesProgress = languageList.map(item =>
        `<div class="progress-bar"><div style="width: ${item.progress};"></div></div>`).toString().replaceAll(',', '');
    console.log(5555, languagesProgress)

    document.querySelector('#languagesProgress').innerHTML = languagesProgress

}