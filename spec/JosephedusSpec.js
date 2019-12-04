describe("Josephedus", function () {
  it("should return '[1]' when there's only 1 user", function () {
    expect(josephedus([1], 1)).toEqual([1]);

  });
});
