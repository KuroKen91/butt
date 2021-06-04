const { expect } = require("chai")
const { randomReplace } = require("../replaceWord.js")

describe("randomReplace", function() {
    it("Should return a string", () => {
        const test = randomReplace("YOOOO", "This is a test");
        expect(typeof test).to.equal("string");
    })

    it("should return a string with your word choice in it", () => {
        const test = randomReplace("YOOOO","This is a test");
        expect(test).to.be.an('string').that.includes("YOOOO");
    })
})