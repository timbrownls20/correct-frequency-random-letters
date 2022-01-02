import { DictionaryFrequency, TextFrequency, IRandomNumberGenerator } from ".";
import LetterData from "./frequency/data/en-GB";

class MockRandom implements IRandomNumberGenerator {
  Random(): number {
    return this.MockNumber;
  }

  constructor(public MockNumber: number) {}
}

describe("Dictionary frequencies", () => {
  test("should be a letter", () => {
    const textFrequencies = new DictionaryFrequency();
    const letter = textFrequencies.random();
    expect(letter).toMatch(/[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/);
  });

  test("cumulative frequency 0 should be A", () => {
    const textFrequencies = new DictionaryFrequency(new MockRandom(0));
    const letter = textFrequencies.random();
    expect(letter).toBe("A");
  });

  test("cumulative frequency 100 should be Z", () => {
    const textFrequencies = new DictionaryFrequency(new MockRandom(100));
    const letter = textFrequencies.random();
    expect(letter).toBe("Z");
  });

  test("cumulative frequency 12 should be B", () => {
    const textFrequencies = new DictionaryFrequency(new MockRandom(12));
    const letter = textFrequencies.random();
    expect(letter).toBe("B");
  });

  test("cumulative frequency 72 should be R", () => {
    const textFrequencies = new DictionaryFrequency(new MockRandom(72));
    const letter = textFrequencies.random();
    expect(letter).toBe("R");
  });
});

describe("Text frequencies", () => {
    test("should be a letter", () => {
      const textFrequencies = new TextFrequency();
      const letter = textFrequencies.random();
      expect(letter).toMatch(/[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/);
    });
  
    test("cumulative frequency 0 should be A", () => {
      const textFrequencies = new TextFrequency(new MockRandom(0));
      const letter = textFrequencies.random();
      expect(letter).toBe("A");
    });
  
    test("cumulative frequency 100 should be Z", () => {
      const textFrequencies = new TextFrequency(new MockRandom(100));
      const letter = textFrequencies.random();
      expect(letter).toBe("Z");
    });
  
    test("cumulative frequency 12 should be B", () => {
      const textFrequencies = new TextFrequency(new MockRandom(12));
      const letter = textFrequencies.random();
      expect(letter).toBe("B");
    });
  
    test("cumulative frequency 72 should be S", () => {
      const textFrequencies = new TextFrequency(new MockRandom(72));
      const letter = textFrequencies.random();
      expect(letter).toBe("S");
    });
  });
  