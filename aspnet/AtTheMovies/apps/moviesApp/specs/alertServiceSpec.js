describe("A Jasmine test", function() {

    beforeEach(function() {
        module("moviesApp");
    });

    it("should pass when expecting a true", function() {
        expect(true).toBe(true);
    });
});