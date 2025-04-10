import {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies,
} from "../challenges/exercise005";

describe("findNextNumber", () => {
  test("returns the next number after the given number in the array", () => {
    //Arrange, Act and Assert
    expect(findNextNumber([5, 3, 7, 8, 1, 10], 7)).toBe(8);

    //Arrange, Act and Assert
    expect(findNextNumber([5, 3, 7, 8, 1, 10], 1)).toBe(10);

    //Arrange, Act and Assert
    expect(findNextNumber([4, 22, 654, 123, 65, 23, 40, 1], 22)).toBe(654);
  });

  test("if the number is not found in the array, returns null", () => {
    //Arrange, Act and Assert
    expect(findNextNumber([5, 3, 7, 8, 1, 10], 55)).toBe(null);
  });

  test("if the number is found more than once, returns the number after the first instance", () => {
    //Arrange, Act and Assert
    expect(findNextNumber([5, 3, 7, 8, 1, 3, 10], 3)).toBe(7);
  });

  test("if the number is found in the final index position of the array, returns null", () => {
    //Arrange, Act and Assert
    expect(findNextNumber([5, 3, 7, 8, 1, 3, 10], 10)).toBe(null);
  });
});

describe("count1sand0s", () => {
  test("returns an object with the count of 1s and 0s in a string", () => {
    //Arrange, Act and Assert
    expect(count1sand0s("11000")).toEqual({
      1: 2,
      0: 3,
    });

    //Arrange, Act and Assert
    expect(count1sand0s("0101010111")).toEqual({
      1: 6,
      0: 4,
    });

    //Arrange, Act and Assert
    expect(count1sand0s("1111111")).toEqual({
      1: 7,
      0: 0,
    });

    //Arrange, Act and Assert
    expect(count1sand0s("0111")).toEqual({
      1: 3,
      0: 1,
    });
  });
});

describe("reverseNumber", () => {
  test("reverses the digits of a number", () => {
    //Arrange, Act and Assert
    expect(reverseNumber(5)).toBe(5);

    //Arrange, Act and Assert
    expect(reverseNumber(104)).toBe(401);

    //Arrange, Act and Assert
    expect(reverseNumber(12345)).toBe(54321);

    //Arrange, Act and Assert
    expect(reverseNumber(100)).toBe(1); // No leading 0 necessary
  });
});

describe("sumArrays", () => {
  test("returns the total of the numbers in all sub arrays", () => {
    //Arrange
    const arrs = [[1, 2, 3], [6, 3, 1], [1], [9, 10], [3, 5]];

    //Act and Assert
    expect(sumArrays(arrs)).toBe(44);
  });
});

describe("arrShift", () => {
  test("returns an array with the first and last items swapped", () => {
    //Arrange, Act and Assert
    expect(arrShift([1, 2])).toEqual([2, 1]);

    //Arrange, Act and Assert
    expect(arrShift([1, 2, 3])).toEqual([3, 2, 1]);

    //Arrange, Act and Assert
    expect(arrShift([1, 2, 3, 4])).toEqual([4, 2, 3, 1]);
  });

  test("makes no difference when the array length is < 2", () => {
    //Arrange, Act and Assert
    expect(arrShift([1])).toEqual([1]);

    //Arrange, Act and Assert
    expect(arrShift([])).toEqual([]);
  });
});

describe("findNeedle", () => {
  test("returns true if any of the properties of an object contain the specified string", () => {
    //Arrange
    const obj1 = {
      name: "LINNMON",
      description: "Small round table",
      price: 31.89,
      store: "Warrington",
      code: 12872,
    };

    //Act and Assert
    expect(findNeedle(obj1, "table")).toBe(true);

    // Note that the objects provided to the function could have any keys/values
    //Arrange
    const obj2 = {
      product_name: "Sparkle n Shine Dishwasher Tablets",
      price: 1.99,
      location: "Hulme",
      discounted: false,
      available: true,
    };

    //Act and Assert
    expect(findNeedle(obj2, "Dishwasher")).toBe(true);
  });

  test("returns false if none of the properties of an object contain the specified string", () => {
    //Arrange
    const obj1 = {
      name: "LINNMON",
      description: "Small round table",
      price: 31.89,
      store: "Warrington",
      code: 12872,
    };

    //Act and Assert
    expect(findNeedle(obj1, "chair")).toBe(false);

    // Note that the objects provided to the function could have any keys/values
    //Arrange
    const obj2 = {
      product_name: "Sparkle n Shine Dishwasher Tablets",
      price: 1.99,
      location: "Hulme",
      discounted: false,
      available: true,
    };
    //Act and Assert
    expect(findNeedle(obj2, "Carpet Cleaner")).toBe(false);
  });

  test("The search string should not be case sensitive", () => {
    //Arrange
    const obj1 = {
      name: "LINNMON",
      description: "Small round table",
      price: 31.89,
      store: "Warrington",
      code: 12872,
    };

    //Act and Assert
    expect(findNeedle(obj1, "warrington")).toBe(true);

    //Act and Assert
    expect(findNeedle(obj1, "linnmon")).toBe(true);

    //Act and Assert
    expect(findNeedle(obj1, "Liverpool")).toBe(false);
  });
});

describe("getWordFrequencies", () => {
  test("returns the frequencies of each word in a string", () => {
    //Arrange, Act and Assert
    expect(getWordFrequencies("hello world")).toEqual({
      hello: 1,
      world: 1,
    });

    //Arrange, Act and Assert
    expect(getWordFrequencies("the cat is hairier than the rat")).toEqual({
      the: 2,
      cat: 1,
      is: 1,
      hairier: 1,
      than: 1,
      rat: 1,
    });

    //Arrange, Act and Assert
    expect(getWordFrequencies("hello hello hello")).toEqual({
      hello: 3,
    });
  });

  //Arrange, Act and Assert
  test("ignores capitalisation", () => {
    expect(getWordFrequencies("Hello hello hello")).toEqual({
      hello: 3,
    });
  });

  test("ignores punctuation", () => {
    // Hint: Google "JavaScript remove special characters from string" to get some ideas!
    //Arrange, Act and Assert
    expect(
      getWordFrequencies("Hello, hello hello! What have we here?")
    ).toEqual({
      hello: 3,
      what: 1,
      have: 1,
      we: 1,
      here: 1,
    });
  });
});
