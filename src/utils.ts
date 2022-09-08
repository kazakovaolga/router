import { getRandomColor } from "./getRandomColor";
import { Content } from "./types";

async function getImage() {
    const url = `https://aws.random.cat/meow`;
    const response = await fetch(url);    
    const json = await response.json();
    console.log('json=', json);
    return json;
};

export const createLogger = (el: HTMLElement, content: string) => () => {    
    if (el) {
        el.style.backgroundColor = getRandomColor();        
    };    
}

export const createImage = (el: HTMLElement, content: string) => async() => {    
    const src=await getImage();
    el.innerHTML = `<img src="${src.file}">`;
    return el;
};


export const leftPage = (el: HTMLElement, content: string) => (...args: Content[]) => {
    el.innerHTML = `<h2>You have left the page ${content}</h2>`;
    return el;
};
