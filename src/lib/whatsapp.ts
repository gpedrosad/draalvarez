/** WhatsApp del consultorio: https://wa.me/1124872810 */
export const WHATSAPP_NUMBER = "1124872810";

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
    "Hola, quiero turno para Botox con el equipo de Dra. Luisa Alvarez / Dra. Renata Moguillansky ($300.000).",
  botox:
    "Hola, quiero consultar por Botox con el equipo de Dra. Luisa Alvarez. Sede preferida: (Palermo / Caballito).",
  botoxEvaluacion:
    "Hola, quiero una evaluación para Botox con el equipo de Dra. Luisa Alvarez. Sede preferida: (Palermo / Caballito).",
  botoxArrugas:
    "Hola, quiero evaluación de Botox para arrugas / líneas de expresión con el equipo de Dra. Luisa Alvarez. Sede preferida: (Palermo / Caballito).",
  botoxBruxismo:
    "Hola, quiero evaluación de Botox para bruxismo con el equipo de Dra. Luisa Alvarez. Sede preferida: (Palermo / Caballito).",
  botoxRosacea:
    "Hola, quiero evaluación de Botox para rosácea con el equipo de Dra. Luisa Alvarez. Sede preferida: (Palermo / Caballito).",
  botoxHiperhidrosis:
    "Hola, quiero evaluación de Botox para hiperhidrosis axilar con el equipo de Dra. Luisa Alvarez. Sede preferida: (Palermo / Caballito).",
  botoxSebo:
    "Hola, quiero evaluación de Botox para secreción sebácea / exceso de grasa con el equipo de Dra. Luisa Alvarez. Sede preferida: (Palermo / Caballito).",
  botoxPrecio:
    "Hola, vi Botox a $300.000 en el equipo de Dra. Luisa Alvarez (Dra. Renata Moguillansky) y quiero reservar evaluación. Sede preferida: (Palermo / Caballito).",
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
