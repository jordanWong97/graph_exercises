const { balancedBrackets } = require("./extraPractice");

describe("balancedBrackets", function () {
  it("return true for balanced brackets", function () {
    expect(balancedBrackets('hello')).toBe(true);
    expect(balancedBrackets('(hi) [there]')).toBe(true);
    expect(balancedBrackets('(hi [there])')).toBe(true);
    expect(balancedBrackets('(((hi)))')).toBe(true);
  });

  it("return false for unbalanced brackets", function () {
    expect(balancedBrackets('(hello')).toBe(false);
    expect(balancedBrackets('(nope]')).toBe(false);
    expect(balancedBrackets('((ok) [nope)]')).toBe(false);
    });

});