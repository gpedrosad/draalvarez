export const INSTAGRAM_URL = "https://www.instagram.com/draalvarezluisasilvana";

/** Perfil Google · Caballito (reseñas) */
export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/Dra.+Alvarez+Luisa+Silvana/@-34.6209262,-58.4445949,17z/data=!4m8!3m7!1s0x95bccb2bfd82916d:0x9c58c319d1f79e8b!8m2!3d-34.6209262!4d-58.4445949!9m1!1b1!16s%2Fg%2F11z0yl0p2x";

/** Perfil Google · Palermo (Sinclair 2949) */
export const GOOGLE_PALERMO_URL =
  "https://www.google.com/maps/place/Dra.+Alvarez+Luisa+Silvana+-+Medicina+Est%C3%A9tica+y+L%C3%A1ser/@-34.5757279,-58.4237479,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcb5006179361f:0x5eea238c70334efd!8m2!3d-34.5757279!4d-58.4237479!16s%2Fg%2F11y09w5f28";

/** Perfil Google · Caballito (García Lorca 55) */
export const GOOGLE_CABALLITO_URL =
  "https://www.google.com/maps/place/Dra.+Alvarez+Luisa+Silvana/@-34.6209262,-58.4445949,17z/data=!3m1!4b1!4m6!3m5!1s0x95bccb2bfd82916d:0x9c58c319d1f79e8b!8m2!3d-34.6209262!4d-58.4445949!16s%2Fg%2F11z0yl0p2x";

export const googleRating = {
  score: "5.0",
  count: 18,
} as const;

export const locations = [
  {
    name: "Caballito",
    addressLine: "Federico García Lorca 55",
    city: "CABA",
    mapsUrl: GOOGLE_CABALLITO_URL,
  },
  {
    name: "Palermo",
    addressLine: "Sinclair 2949",
    city: "CABA",
    mapsUrl: GOOGLE_PALERMO_URL,
  },
] as const;
