//https://en.wikipedia.org/wiki/Letter_frequency
import _ from "lodash";

class RandomPercentageGenerator {
  Random() {
    return _.random(100000) / 1000;
  }
}

class Letter {
  CumulativeFrequency;
  Letter;
  TextFrequency;
  DictionaryFrequency;
}

class LetterFrequency {
  
  _letters;
  _randomNumberGenerator;

  constructor(
    Type,
    randomNumberGenerator
  ) {
    this._randomNumberGenerator =
      randomNumberGenerator || new RandomPercentageGenerator();

    this._letters = [
      new Letter("A", 11.7, 5.7),
      new Letter("B", 4.4, 6),
      new Letter("C", 5.2, 9.4),
      new Letter("D", 3.2, 6.1),
      new Letter("E", 2.8, 3.9),
      new Letter("F", 4, 4.1),
      new Letter("G", 1.6, 3.3),
      new Letter("H", 4.2, 3.7),
      new Letter("I", 7.3, 3.9),
      new Letter("J", 0.51, 1.1),
      new Letter("K", 0.86, 1),
      new Letter("L", 2.4, 3.1),
      new Letter("M", 3.8, 5.6),
      new Letter("N", 2.3, 2.2),
      new Letter("O", 7.6, 2.5),
      new Letter("P", 4.3, 7.7),
      new Letter("Q", 0.22, 0.49),
      new Letter("R", 2.8, 6),
      new Letter("S", 6.7, 11),
      new Letter("T", 16, 5),
      new Letter("U", 1.2, 2.9),
      new Letter("V", 0.82, 1.5),
      new Letter("W", 5.5, 2.7),
      new Letter("X", 0.045, 0.05),
      new Letter("Y", 0.76, 0.36),
      new Letter("Z", 0.045, 0.24),
    ];

    let cumulativeFrequency = 100;
    this._letters.slice(0)
      .reverse()
      .map((e) => {
        e.CumulativeFrequency = cumulativeFrequency;
        const frequency =
          Type == FrequencyType.Dictionary
            ? e.DictionaryFrequency
            : e.TextFrequency;
        cumulativeFrequency =
          Math.round(
            (cumulativeFrequency - frequency + Number.EPSILON) * 1000
          ) / 1000;
      });
  }

  random = () => {
    const rnd = this._randomNumberGenerator.Random();
    return this._letters.slice(0).reverse().reduce((acc, current) => {
      if (rnd <= current.CumulativeFrequency) {
        acc = current.Letter;
      }
      return acc;
    }, "A");
  };
}

export default LetterFrequency;
