export interface Location {
  city: string;
  country: string;
  role: string;
  primary?: boolean;
  /** Coordinate sulla mappa stilizzata (viewBox 0 0 1000 640) */
  mapX: number;
  mapY: number;
}

export const locations: Location[] = [
  { city: 'Torino', country: 'Italia · Sede direzionale', role: 'Strategia & coordinamento', primary: true, mapX: 388, mapY: 356 },
  { city: 'Milano', country: 'Italia', role: 'Finanza & capitali', mapX: 405, mapY: 340 },
  { city: 'Roma', country: 'Italia', role: 'Relazioni istituzionali', mapX: 430, mapY: 408 },
  { city: 'Dubai', country: 'Emirati Arabi Uniti', role: 'Capitali & mercati emergenti', mapX: 792, mapY: 470 },
  { city: 'Montecarlo', country: 'Principato di Monaco', role: 'Gestione patrimoniale', mapX: 378, mapY: 372 },
  { city: 'Cracovia', country: 'Polonia', role: 'Espansione Est Europa', mapX: 512, mapY: 292 },
  { city: 'Vilnius', country: 'Lituania', role: 'Innovazione & nuovi mercati', mapX: 548, mapY: 236 },
];
