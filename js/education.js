export function getEducationsData() {
    const data = [
        {
            year: "2023",
            title: "UI/UX",
            hashtags: ["#UX", "#UI", "#research", "#DesignSystem", "#Ui", "#wireframing", "#figma", "#Ux"],
            place: "Coursera",
            like: true
        },
        {
            year: "2017-2022",
            title: "Law",
            hashtags: ["#law", "#legalStudies", "#contracts", "#internationalLaws"],
            place: "University of Kerala",
            like: false
        },
        {
            year: "2017",
            title: "Graphic design",
            hashtags: ["#branding", "#web", "#illustration", "#adobe"],
            place: "Coursrea",
            like: false
        }
    ];

    document.querySelector('#listEducationContainer').innerHTML = data.map((item, index) =>
        `<div class="educationList">
            <input id="educationYear${index}" class="educationTitle" type="text" value="${item.year}" placeholder="Year" />
            <div class="educationListDescription">
                <input id="educationTitle${index}" class="educationTitle" type="text" value="${item.title}" placeholder="Title" />
                <div id="educationHashtagsList${index}" class="educationHashtagsList" contenteditable="true">${item.hashtags.map((hash) => `${hash}`).join(' ')}</div>
            </div>
            <div id="educationPlace${index}" class="educationListFooter" contenteditable="true">${item.place}</div>
        </div>`).join('');

}