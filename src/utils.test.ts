import {createLogger,createImage,leftPage} from "./utils";


describe("public interface", () => {
    let body:HTMLElement;
    let header:HTMLHeadElement;
    let article:HTMLElement;
    let footer:HTMLElement;

    beforeEach(() => {
        body=document.createElement("body");
        header=document.createElement("header");
        header.className='header';
        article=document.createElement("article");
        article.id="root";
        footer=document.createElement("footer");
        footer.id="footer";


        body.appendChild(header);
        body.appendChild(article);
        body.appendChild(footer);

    });
    
    it("is a functions", () => {
        expect(createLogger).toBeInstanceOf(Function);
        expect(createImage).toBeInstanceOf(Function);
        expect(leftPage).toBeInstanceOf(Function);
    });


    it("check header color change", async() => {        
        // console.log('header 1=',header);
        header.style.backgroundColor="rgb(255, 255, 255)";
        const color=header.style.backgroundColor;
        // console.log('color=',color);

        expect(header).toBeInstanceOf(HTMLElement);
        expect(color).toBe("rgb(255, 255, 255)");

        createLogger(header,"/contacts")();
        //createLogger(header);
        // console.log('header 2=',header);

        const colorChange=header.style.backgroundColor;
        // console.log('typeof colorChange=',typeof(colorChange));
        // console.log('colorChange=',colorChange);
        expect(header).toBeInstanceOf(HTMLElement);
        expect(color!==colorChange).toBeTruthy();
    });

    it("check header color change", async() => {        
        console.log('article 1=',article);        
        const img=article.innerHTML;
        console.log('img=',img);

        expect(article).toBeInstanceOf(HTMLElement);        

        createImage(article,"/contacts")();        
        //createImage(article),
        console.log('article 2=',article);

        // let imgChange=article.innerHTML;        
        // console.log('imgChange=',imgChange);        
        // expect(img!==imgChange).toBeTruthy();
    });

    
//     it("check header color change", () => {   
//         let content='/contacts'     
//         let args=leftPage(footer,content);
//         // console.log('header 2=',header);
//         expect(footer.innerHTML).toBe(`<h2>You have left the page ${content} args=${JSON.stringify(
//             args
//         )}</h2>`);        
//     });
});
