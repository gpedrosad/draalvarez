export const WHATSAPP_NUMBER = "5491100000000";

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const messages = {
  general:
    "Hola Dra. Luisa Alvarez, me gustaría agendar una cita de medicina estética. Sede preferida: (Palermo / Caballito).",
  evaluacion:
    "Hola, quiero reservar una evaluación dermatoestética (consulta 360°). Sede preferida: (Palermo / Caballito).",
  problema:
    "Hola, quiero consultar por un tratamiento para una condición de la piel (acné, manchas, rosácea u otra). Sede preferida: (Palermo / Caballito).",
  deseo:
    "Hola, quiero información sobre tratamientos de rejuvenecimiento y realce (resultados naturales). Sede preferida: (Palermo / Caballito).",
  packMesoterapia:
    "Hola, quiero info del pack de 2 sesiones de mesoterapia facial ($150.000).",
  packSkinbooster:
    "Hola, quiero info del pack de 2 sesiones de Skinbooster o relleno de labios ($360.000).",
  packMasaje:
    "Hola, quiero info del pack de 2 sesiones de masaje descontracturante ($110.000).",
  renataSkinbooster:
    "Hola, quiero turnos con Dra. Renata Moguillansky — Skinbooster ($200.000).",
  renataPeelingPrp:
    "Hola, quiero turnos con Dra. Renata Moguillansky — Peeling + PRP ($135.000).",
  renataBotox:
    "Hola, quiero turnos con Dra. Renata Moguillansky — Botox ($300.000).",
  claudiaPeelingLaser:
    "Hola, quiero turnos con Dra. Claudia Koch — Peeling + Láser Q-Switched ($230.000).",
  claudiaPrp:
    "Hola, quiero turnos con Dra. Claudia Koch — PRP ($100.000).",
  claudiaPeelingMeso:
    "Hola, quiero turnos con Dra. Claudia Koch — Peeling + Mesoterapia ($135.000).",
  dianaLimpieza:
    "Hola, quiero turnos con Diana Godoy — Limpieza facial ($85.000).",
  dianaMasaje:
    "Hola, quiero turnos con Diana Godoy — Masaje + reflexología ($90.000).",
  dianaDermapen:
    "Hola, quiero turnos con Diana Godoy — Dermapen o dermaplaning ($87.000).",
} as const;
