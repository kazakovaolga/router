import { getRandomColor } from "./getRandomColor";
import { Content } from "./types";

async function getImage() {
    const url = `https://aws.random.cat/meow`;
    let response = await fetch(url);
    let status = response.status;
    let json = await response.json();
    console.log('json=', json);
    return json;
};

// USAGEf
export const createLogger = (el: HTMLElement, content: string) => () => {
    //const header = document.querySelector(".header") as HTMLHeadElement;
    if (el) {
        el.style.backgroundColor = getRandomColor();
        // console.log('header.style.backgroundColor =', header.style.backgroundColor);
    };
    //return header;
}


// export async function createImage(el: HTMLElement) {
//     console.log("createImage el=", el);
//     let src = await getImage();
//     console.log("createImage src=", src.file);
//     el.innerHTML = `<img src="${src.file}">`;
// };

export const createImage = (el: HTMLElement, content: string) => async() => {
    // console.log("createImage content=", content);
    // console.log("createImage args=", args);    
    let src=await getImage();
    el.innerHTML = el.innerHTML = `<img src="${src.file}">`;
};


export const leftPage = (el: HTMLElement, content: string) => (...args: Content[]) => {
    el.innerHTML = `<h2>You have left the page ${content} args=${JSON.stringify(
        args
    )}</h2>`;
    return args;
};


