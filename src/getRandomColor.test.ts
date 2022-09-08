import {getRandomColor} from "./getRandomColor";

describe("public interface", () => {    
    it("is a function", () => {
        expect(getRandomColor).toBeInstanceOf(Object);
        expect(typeof (getRandomColor())).toBe('string');
    });
});