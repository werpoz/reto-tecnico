export class Film {
  constructor(
    readonly id: string,
    readonly title: string,
    readonly episodeId: number,
    readonly openingCrawl: string,
    readonly director: string,
    readonly producer: string,
    readonly url: string,
    readonly releaseDate: Date,
    readonly createdAt: Date,
    readonly updatedAt: Date,
  ) {}
}
