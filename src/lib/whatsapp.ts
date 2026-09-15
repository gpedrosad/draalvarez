/** WhatsApp del consultorio: +54 9 11 2487-2810 */
export const WHATSAPP_NUMBER = "5491124872810";

export function whatsappUrl(message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export const messages = {
  general:
    "Hola Dra. Luisa Alvarez, me gustaría agendar una cita de medicina estética. Sede preferida: (Palermo / Caballito).",
  comingSoon: "Hola, vengo desde la web",
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
} as const;
