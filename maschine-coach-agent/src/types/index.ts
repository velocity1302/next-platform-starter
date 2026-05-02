export type GenreKey =
  | 'hiphop'
  | 'trap'
  | 'house'
  | 'techno'
  | 'drum_bass'
  | 'pop'
  | 'ambient'
  | 'afrobeat'
  | 'reggaeton'
  | 'lofi';

export interface GenreGuide {
  naam: string;
  bpm: string;
  drumstijl: string;
  bassAanpak: string;
  akkoordIdee: string;
  arrangement: string;
}

export interface CoachStep {
  id: string;
  titel: string;
  doel: string;
  actie: string;
  waarom: string;
  luistercheck: string;
}
