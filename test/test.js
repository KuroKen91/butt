const { expect } = require("chai")
const { butt } = require("../butt.js")

describe("butt", function() {
    it("Should return a string", () => {
        const testButt = butt("This is a test");
        expect(typeof testButt).to.equal("string");
    })

    it("should return a string with a random butt in it", () => {
        const testButt = butt("This is a test");
        expect(testButt).to.be.an('string').that.includes("butt");
    })
})