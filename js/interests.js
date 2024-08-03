export function getInterestsData() {
    const interestData = ["branding", "design", "photography", "artificial intelligence", "illustration",
        "typography", "social networks", "research", "dron pilot", "games"];

    document.querySelector('#listInterestsContainer').innerHTML = interestData.map((item) =>
        `<div class="interestsList">${item}</div>`).join('<br>');

}