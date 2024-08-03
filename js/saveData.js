export function saveToSessionStorage() {
    const elements = document.querySelectorAll('input, div[contenteditable], textarea');

    elements.forEach(element => {
        const key = element.id;

        if (element.tagName === 'DIV' || element.tagName === 'TEXTAREA') {
            sessionStorage.setItem(key, element.innerText);
        } else {
            sessionStorage.setItem(key, element.value);
        }
    });
}

export function loadFromSessionStorage() {
    const elements = document.querySelectorAll('input, div[contenteditable], textarea');

    elements.forEach(element => {
        const key = element.id;
        const value = sessionStorage.getItem(key);

        if (value !== null) {
            if (element.tagName === 'DIV' || element.tagName === 'TEXTAREA') {
                element.innerText = value;
            } else {
                element.value = value;
            }
        }
    });
}