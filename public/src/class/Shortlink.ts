class Shortlink {

    public token: string | undefined;
    public merchant: number;
    public decoder: number;
    public shorlink: string | undefined;

  constructor(
      token: string,
      merchant: number,
      decoder: number,
      shortlink: string,
  )
  {
      this.token = token;
      this.merchant = merchant;
      this.decoder = decoder;
      this.shorlink = shortlink;
  }

public static fromJson(json: any): Shortlink{
      return new Shortlink(
          json.token,
          json.merchant,
          json.decoder,
          json.shortlink
      );
}
}

export default Shortlink;