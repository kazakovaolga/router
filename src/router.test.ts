import { Router } from "./router";
import { createLogger, createImage, leftPage } from "./utils";

describe("public interface", () => {
    const router = Router();
    const unmockedFetch = global.fetch;

    beforeEach(() => {
        function mockResponse() {
            return new Promise((resolve) => {
                resolve({
                    ok: true,
                    status: 200,
                    json: () => {
                        return {file:"https:\/\/purr.objects-us-east-1.dream.io\/i\/win_20150714_153831.jpg"};
                    },
                });
            });
        };
        global.fetch = jest.fn().mockImplementation(mockResponse);
    });

    afterEach(() => {
        global.fetch = unmockedFetch;
    });


    it("is a function", () => {
        expect(router).toBeInstanceOf(Object);
    });

    it("check router on and go", () => {        
        const root = document.createElement('article');
        root.id = 'root';
        const header = document.createElement("header");
        header.className = 'header';
        const footer = document.createElement('footer');
        footer.id = 'footer';

        const listeners = router.on(
            (path: string) => path === "/contacts",
            createLogger(header, "/contacts"),            
            createImage(root, "/contacts"), // onEnter            
            leftPage(footer, "/contacts") // onLeave            
        );
        
        expect(listeners()).toBeInstanceOf(Object);
        expect(listeners().length).toBe(1);

        router.go("/contacts");
        expect(location.pathname).toEqual("/contacts");
        expect(listeners).toBeCalled;
    });
});