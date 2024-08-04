export function getExperienceData() {

    const experienceData = [
        {
            date: "Jun. 2023 - Present",
            job: "Marketing Manager",
            jobDescription: "Pankayam | Full-time",
            tasks: [
                "Strategy development and planning of campaigns that promote the business and generate genuine traffic",
                "SEO Content Creation for Blogs, Website, Social media"
            ],
            mostRecentExperience: true
        },
        {
            date: "2017 - Present",
            job: "Graphic / Web designer",
            jobDescription: "Freelance",
            tasks: [
                "Development of internal projects from scratch, product design of brands",
                "Landing page, webapps and hybrid apps",
                "Coordinating with outside agencies, art services, web designer, marketing, printers, and colleagues as necessary"
            ],
            mostRecentExperience: false
        },
        {
            date: "Sep. 2021 - Jun. 2023",
            job: "Legal Assistant",
            jobDescription: "Law Firm | Intern",
            tasks: [
                "Provide administrative support to lawyer and enhance office effectiveness",
                "Handle communication with clients, witnesses etc",
                "Repare case briefs and summarize depositions, interrogatories and testimony"
            ],
            mostRecentExperience: false
        }
    ]

    const jobListContainer = document.querySelector('#jobListContainer');
    jobListContainer.innerHTML = '';

    experienceData.forEach((item, index) => {
        if (item.mostRecentExperience === true) {
            jobListContainer.innerHTML += `
                <div class="jobItem">
                    <div class="jobItemMostRecentTitleContainer">
                        <input id="jobItemMostRecentTitle${index}" class="jobItemMostRecentTitle" type="text" value="${item.date}" placeholder="Date works" />
                        <div class="jobItemMostRecentIcon">most recent</div>
                    </div>
                    <div class="jobItemContent">
                        <div class="jobInfoContainer">
                            <input id="jobInfoItem${index}" class="jobInfoItem" type="text" value="${item.job}" placeholder="Job discipline" />
                            <input id="aboutJob${index}" class="aboutJob" type="text" value="${item.jobDescription}" placeholder="Job description" />
                        </div>
                        <div id="featurePoints" class=editableContainer>
                            <ul class="customList featuredPoints" contenteditable="true">
                                ${item.tasks.map((task, taskIndex) => `<li> ${task}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        } else {
            jobListContainer.innerHTML += `
                <div class="jobItem">
                    <input id="jobItemTitle${index}" class="jobItemTitle" type="text" value="${item.date}" placeholder="Date works" />
                    <div class="jobItemContent">
                        <div class="jobInfoContainer">
                            <input id="previousJobItem${index}" class="jobInfoItem" type="text" value="${item.job}" placeholder="Job discipline" />
                            <input id="previousJobItem${index}" class="aboutJob" type="text" value="${item.jobDescription}" placeholder="Job description" />
                        </div>
                        <div id="featurePoints${index}" class=editableContainer>
                            <ul class="customList featuredPoints" contenteditable="true">
                                ${item.tasks.map((task, taskIndex) => `<li> ${task}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        }
    });
}