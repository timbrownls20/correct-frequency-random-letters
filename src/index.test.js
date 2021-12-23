import LetterFrequency from ".";

class MockRandom {
  MockNumber;

  Random() {
    return this.MockNumber;
  }
}

describe("Dictionary frequencies", () => {
  test("should be a letter", () => {
    const textFrequencies = new LetterFrequency(FrequencyType.Dictionary);
    const letter = textFrequencies.random();
    expect(letter).toMatch(/[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/);
  });

  test("cumulative frequency 0 should be A", () => {
    const textFrequencies = new LetterFrequency(
      FrequencyType.Dictionary,
      new MockRandom(0)
    );
    const letter = textFrequencies.random();
    expect(letter).toBe("A");
  });

  test("cumulative frequency 100 should be Z", () => {
    const textFrequencies = new LetterFrequency(
      FrequencyType.Dictionary,
      new MockRandom(100)
    );
    const letter = textFrequencies.random();
    expect(letter).toBe("Z");
  });

  test("cumulative frequency 8 should be B", () => {
    const textFrequencies = new LetterFrequency(
      FrequencyType.Dictionary,
      new MockRandom(8)
    );
    const letter = textFrequencies.random();
    expect(letter).toBe("B");
  });

  test("cumulative frequency 72 should be R", () => {
    const textFrequencies = new LetterFrequency(
      FrequencyType.Dictionary,
      new MockRandom(72)
    );
    const letter = textFrequencies.random();
    expect(letter).toBe("R");
  });
});
