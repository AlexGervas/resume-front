export function getLanguagesInfo() {
    const languageList = [
        {name: "English", progress: "100%"},
        {name: "Malayalam", progress: "100%"},
        {name: "Hindi", progress: "70%"}
    ]

    document.querySelector('#languagesList').innerHTML = languageList.map((item) =>
        `${item.name}`).join('<br>');

    document.querySelector('#languagesProgress').innerHTML = languageList.map(item =>
        `<div class="progress-bar"><div style="width: ${item.progress};"></div></div>`).toString().replaceAll(',', '')

}