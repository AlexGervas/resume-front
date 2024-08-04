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

    document.querySelector('#listEducationContainer').innerHTML = data.map((item, index) => {
        const educationListClass = item.like ? 'educationList active' : 'educationList inactive';
        const heartClass = item.like ? 'heart-icon active' : 'heart-icon inactive';
        const titleClass = item.like ? 'educationTitle active' : 'educationTitle inactive';
        const titleDescriptionClass = item.like ? 'educationDescriptionTitle active' : 'educationDescriptionTitle inactive';
        const hashClass = item.like ? 'educationHashtagsList active' : 'educationHashtagsList inactive';
        const footerClass = item.like ? 'educationListFooter active' : 'educationListFooter inactive';

        return `
        <div class="${educationListClass}">
            <div class="likeLine">
                <input id="educationYear${index}" class="${titleClass}" type="text" value="${item.year}" placeholder="Year" />
                <svg class="${heartClass}" width="11" height="11" viewBox="0 0 11 11" fill="" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.75 0.807373C1.99375 0.807373 1.32 1.12388 0.81125 1.61929C0.31625 2.1147 0 2.78901 0 3.55965C0 4.31653 0.31625 4.99083 0.81125 5.5L5.5 10.1926L10.1887 5.5C10.6838 5.0046 11 4.33029 11 3.55965C11 2.80277 10.6838 2.12847 10.1887 1.61929C9.69375 1.12388 9.02 0.807373 8.25 0.807373C7.49375 0.807373 6.82 1.12388 6.31125 1.61929C5.81625 2.1147 5.5 2.78901 5.5 3.55965C5.5 2.80277 5.18375 2.12847 4.68875 1.61929C4.19375 1.12388 3.52 0.807373 2.75 0.807373Z"/
                </svg>
            </div>
            
            <div class="educationListDescription">
                <input id="educationTitle${index}" class="${titleDescriptionClass}" type="text" value="${item.title}" placeholder="Title" />
                <div id="educationHashtagsList${index}" class="${hashClass}" contenteditable="true">${item.hashtags.map((hash) => `${hash}`).join(' ')}</div>                
            </div>
            <div id="educationPlace${index}" class="${footerClass}" contenteditable="true">${item.place}</div>
        </div>
        `;
    }).join('');

    document.addEventListener('DOMContentLoaded', function () {
        const elements = document.querySelectorAll('.heart-icon');

        elements.forEach(element => {
            element.addEventListener('click', function () {
                console.log('Тык в сердечко!');
                const path = this.querySelector('path');
                const colorBlock = this.closest('.educationList');
                const titleElement = colorBlock.querySelector('.educationTitle');
                const titleDescriptionElement = colorBlock.querySelector('.educationDescriptionTitle');
                const hashtagElement = colorBlock.querySelector('.educationHashtagsList');
                const footerElement = colorBlock.querySelector('.educationListFooter');

                if (path.getAttribute('fill') === '#F6ED1E') {
                    path.setAttribute('fill', '#FFFFFF');
                    colorBlock.style.backgroundColor = '#FFFFFF';
                    titleElement.classList.remove('active');
                    titleElement.classList.add('inactive');
                    titleDescriptionElement.classList.remove('active');
                    titleDescriptionElement.classList.add('inactive');
                    hashtagElement.classList.remove('active');
                    hashtagElement.classList.add('inactive');
                    footerElement.classList.remove('active');
                    footerElement.classList.add('inactive');
                } else {
                    path.setAttribute('fill', '#F6ED1E');
                    colorBlock.style.backgroundColor = '#28D979';
                    titleElement.classList.remove('inactive');
                    titleElement.classList.add('active');
                    titleDescriptionElement.classList.remove('inactive');
                    titleDescriptionElement.classList.add('active');
                    hashtagElement.classList.remove('inactive');
                    hashtagElement.classList.add('active');
                    footerElement.classList.remove('inactive');
                    footerElement.classList.add('active');
                }
            });
        });
    });

}


