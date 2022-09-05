import { Router } from "./router";
import { createLogger, createImage,leftPage} from "./utils";

const router = Router();
const header=document.querySelector('.header') as HTMLElement;
const root=document.getElementById('root') as HTMLElement;
const footer=document.getElementById('footer') as HTMLElement;

router.on(/.*/, createLogger(header,"/.*"), createImage(root,"/.*"), leftPage(footer,"/.*"));
//router.on(/.*/, createLogger(header), createImage(root), leftPage(footer,"/.*"));

router.on(
    (path: string) => path === "/contacts",
    createLogger(header,"/contacts"),
    createImage(root,"/contacts"), // onEnter    
    leftPage(footer,"/contacts") // onLeave
);
router.on(
    "/about",
    createLogger(header,"/about"),
    createImage(root,"/about"),
    // createImage(root,"/about"),    
    leftPage(footer,"/about")
);
router.on(
    "/about/us",
    createLogger(header,"/about/us"), 
    createImage(root,"/about/us"),   
    // createImage(root,"/about/us"),
    leftPage(footer,"/about/us")
);

(document.querySelector('body') as HTMLElement).addEventListener("click", (event) => {
    console.log('event=', event);
    // const el=event.target;
    // if (!el.matches("a")) {
    //     return;
    // }

    if (event !== null && event.target !== null) {
        const element = event.target as Element;

        if (!element.matches('a')) {
            return;
        };
        
        const url = element.getAttribute("href") as string;
        console.log(url);
        router.go(url);
    }
    event.preventDefault();
    
    // let url = event.target.getAttribute("href");
    // router.go(url);
    //unsubscribe();
});  