import Letter from "./frequency/Letter";
import FrequencyType from "./frequency/FrequencyType";
import LetterData from "./frequency/data/en-GB";

export interface IRandomNumberGenerator {
  Random(): number;
}

class RandomPercentageGenerator implements IRandomNumberGenerator {
  Random(): number {
    return this._getRandomNumber(0, 100000) / 1000;
  }

  _getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

class LetterFrequency {
  private _randomNumberGenerator: IRandomNumberGenerator;
  //private _letterFrequency: Array<Letter>; 

  get LetterData() : Array<Letter> {
    return LetterData;
  }

  constructor(
    public Type: FrequencyType,
    randomNumberGenerator: IRandomNumberGenerator | undefined = undefined
  ) {
    this._randomNumberGenerator =
      randomNumberGenerator || new RandomPercentageGenerator();
    let cumulativeFrequency = 100;
    LetterData.slice(0)
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

  random = (): string => {
    const rnd: number = this._randomNumberGenerator.Random();
    return LetterData.slice(0)
      .reverse()
      .reduce((acc: string, current: Letter) => {
        if (rnd <= current.CumulativeFrequency) {
          acc = current.Letter;
        }
        return acc;
      }, "A");
  };
}

export class DictionaryFrequency extends LetterFrequency {
  constructor(
    randomNumberGenerator: IRandomNumberGenerator | undefined = undefined
  ) {
    super(FrequencyType.Dictionary, randomNumberGenerator);
  }
}

export class TextFrequency extends LetterFrequency {
  constructor(
    randomNumberGenerator: IRandomNumberGenerator | undefined = undefined
  ) {
    super(FrequencyType.Text, randomNumberGenerator);
  }
}
