const reverse = require("./reverse-string.js");

test("Reverse function exists", () => {
  expect(reverse).toBeDefined();
});

test("Reverse reverses a string", () => {
  expect(reverse("abcd")).toEqual("dcba");
});

test("Reverse reverses a string", () => {
  expect(reverse("  abcd")).toEqual("dcba  ");
});

test("Reverse reverses a string", () => {
    expect(reverse("Willian")).toEqual("nailliW");
  });
