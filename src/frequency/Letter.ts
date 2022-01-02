class Letter {
  public CumulativeFrequency: number;

  constructor(
    public Letter: string,
    public TextFrequency: number,
    public DictionaryFrequency: number
  ) {}
}

export default Letter;
