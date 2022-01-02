Gets random letters in the correct frequency

Examples

- A is used more commonly than Z so A is returned more frequently than Z
- Y is used less commonly than T so Y is returned less frequently than T

## Dictionary Frequency

Returns letters in correct frequency as found in English Dictionary

### Usage

```
import {DictionaryFrequency} from "correct-frequency-random-letters"

const dictionary = new DictionaryFrequency();

dictionary.random() // return random letter
dictionary.frequencies() // return frequency table for all letters
```

## Text Frequency

Returns letters in correct frequency as found in samples of written English text

### Usage

```
import {TextFrequency} from "correct-frequency-random-letters"

const text = new TextFrequency();

text.random() // return random letter
text.frequencies() // return frequency table for all letters
```




