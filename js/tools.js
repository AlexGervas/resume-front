export function getTools() {
    const tools = [
        {
            type: "design", list: [
                {logo: "public/logoFigma.png", link: "https://www.figma.com/"},
                {logo: "public/adobe illustrator.png", link: "https://www.adobe.com/products/illustrator.html"},
                {logo: "public/logoNotion.png", link: "https://www.notion.so/"},
                {logo: "public/adobe photoshop.png", link: "https://www.adobe.com/ru/products/photoshop.html"},
                {logo: "public/adobe premiere.png", link: "https://www.adobe.com/products/premiere.html"},

                {logo: "public/logoMeet.png", link: "https://meet.google.com/landing"}
            ]
        },
        {
            type: "no-code", list: [
                {logo: "public/logoZapìer 1.png", link: "https://zapier.com/"},
                {logo: "public/logoFramer.png", link: "https://www.framer.com/"},
                {logo: "public/logoWebflow.png", link: "https://webflow.com/"},
                {logo: "public/logoWordpress.png", link: "https://wordpress.com/"}
            ]
        },
        {
            type: "artoficial intelligence", list: [
                {logo: "public/logoChatGPT 1.png", link: "https://openai.com/chatgpt/"},
                {logo: "public/logoCopilot 1.png", link: "https://copilot.microsoft.com/"},
                {logo: "public/logoMidjourney 1.png", link: "https://www.midjourney.com/home"}
            ]
        },
    ];

    const outputDiv = document.getElementById("toolsList");

    outputDiv.innerHTML = `
        ${tools.map(item => `
            <div class="toolsBox">
                <div class="subTitleBlock">${item.type}</div>
                ${item.list.map(value => `<a target="_blank" href="${value.link}"><img src="${value.logo}" class="logoTools" alt="" /></a>`).join('')}
            </div>
        `).join('')}
    `;


}