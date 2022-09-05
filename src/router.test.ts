import { Router } from "./router";
import { createLogger, createImage, leftPage } from "./utils";
import { Listener } from "./types"
// const unmockedFetch = global.fetch;

describe("public interface", () => {
    const router = Router();

    // beforeEach(() => {
    //     global.fetch = () =>
    //         Promise.resolve({
    //             json: () =>
    //                 Promise.resolve(
    //                     {
    //                         file: ''
    //                     }
    //                 ),
    //             status: 200,
    //         });
    // });

    // afterEach(() => {
    //     global.fetch = unmockedFetch;
    // });

    it("is a function", () => {
        expect(router).toBeInstanceOf(Object);
    });


    it("", () => {
        // const body=document.createElement("body");
        const root = document.createElement('article');
        root.id = 'root';
        let header = document.createElement("header");
        header.className = 'header';
        let footer = document.createElement('footer');
        footer.id = 'footer';
        const fn=jest.fn();

        // body.appendChild(header);
        let currentPath: string = location.pathname;
        let previousPath: string | null = null;
        let listeners = router.on(
            (path: string) => path === "/contacts",
            createLogger(header, "/contacts"),
            //jest.fn(),
            createImage(root, "/contacts"), // onEnter
            //jest.fn(),
            leftPage(footer, "/contacts") // onLeave
            //jest.fn()
        );

        // console.log('listener=',listeners());
        expect(listeners()).toBeInstanceOf(Object);
        expect(listeners().length).toBe(1);
    });
});