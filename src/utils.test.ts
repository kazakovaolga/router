import { Router } from "./router";
import { createLogger, createImage, leftPage } from "./utils";

describe("public interface", () => {
    const router = Router();
    let body: HTMLElement;
    let header: HTMLHeadElement;
    let article: HTMLElement;
    let footer: HTMLElement;
    const unmockedFetch = global.fetch;

    beforeEach(() => {
        body = document.createElement("body");
        header = document.createElement("header");
        header.className = 'header';
        article = document.createElement("article");
        article.id = "root";
        footer = document.createElement("footer");
        footer.id = "footer";

        body.appendChild(header);
        body.appendChild(article);
        body.appendChild(footer);

        function mockResponse() {
            return new Promise((resolve) => {
                resolve({
                    ok: true,
                    status: 200,
                    json: () => {
                        return { file: "https:\/\/purr.objects-us-east-1.dream.io\/i\/win_20150714_153831.jpg" };
                    },
                });
            });
        };
        global.fetch = jest.fn().mockImplementation(mockResponse);
    });

    afterEach(() => {
        global.fetch = unmockedFetch;
    });

    it("is a functions", () => {
        expect(createLogger).toBeInstanceOf(Function);
        expect(createImage).toBeInstanceOf(Function);
        expect(leftPage).toBeInstanceOf(Function);
    });


    it("check header color change", async () => {
        header.style.backgroundColor = "rgb(255, 255, 255)";
        const color = header.style.backgroundColor;

        expect(header).toBeInstanceOf(HTMLElement);
        expect(color).toBe("rgb(255, 255, 255)");

        createLogger(header, "/contacts")();
        const colorChange = header.style.backgroundColor;
        expect(header).toBeInstanceOf(HTMLElement);
        expect(color !== colorChange).toBeTruthy();
    });

    it("check src img", async () => {
        const el = await createImage(article, "/contacts")();
        expect(el.id).toBe('root');
        const url = 'https:\/\/purr.objects-us-east-1.dream.io\/i\/win_20150714_153831.jpg'
        let img = el.innerHTML;
        expect(img).toEqual(`<img src="${url}">`);
    });

    it("check leave url text", () => {
        let content = '/contacts'
        const args=[{currentPath: '/about', previousPath: content}]
        const el = leftPage(footer, content)();
        expect(el.innerHTML).toBe(`<h2>You have left the page ${content}</h2>`);
    });
});
