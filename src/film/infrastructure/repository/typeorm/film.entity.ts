import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FilmEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  episodeId: number;

  @Column()
  openingCrawl: string;

  @Column()
  director: string;

  @Column()
  producer: string;

  @Column()
  releaseDate: Date;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column()
  url: string;
}
