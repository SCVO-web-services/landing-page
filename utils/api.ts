import { Noticia } from '../types/noticia';

const noticias: Noticia[] = [
  {
    id: 1,
    titulo: "Nuevo tratamiento para la diabetes tipo 2",
    resumen: "Investigadores desarrollan un medicamento innovador para controlar la diabetes.",
    contenido: "Un equipo de científicos ha desarrollado un nuevo medicamento que promete mejorar significativamente el control de la diabetes tipo 2...",
    fecha: "2025-01-10",
    autor: "Dr. María González"
  },
  {
    id: 2,
    titulo: "Estudio revela la relación entre obesidad y enfermedades cardíacas",
    resumen: "Nuevas investigaciones muestran cómo la obesidad afecta la salud del corazón.",
    contenido: "Un reciente estudio ha demostrado una fuerte correlación entre la obesidad y el aumento de riesgo de enfermedades cardíacas...",
    fecha: "2025-01-09",
    autor: "Dr. Juan Pérez"
  },
  {
    id: 3,
    titulo: "Nuevas guías de nutrición para una vida saludable",
    resumen: "Expertos publican recomendaciones actualizadas sobre alimentación balanceada.",
    contenido: "Un grupo de nutricionistas ha publicado nuevas guías que enfatizan la importancia de una dieta equilibrada para mantener una buena salud...",
    fecha: "2025-01-08",
    autor: "Dra. Ana Martínez"
  },
  {
    id: 4,
    titulo: "Avances en la cirugía bariátrica",
    resumen: "Nuevas técnicas quirúrgicas mejoran los resultados en pacientes con obesidad severa.",
    contenido: "Cirujanos han desarrollado nuevas técnicas en cirugía bariátrica que prometen mejores resultados y menos complicaciones para los pacientes...",
    fecha: "2025-01-07",
    autor: "Dr. Carlos López"
  },
  {
    id: 5,
    titulo: "Impacto de la dieta mediterránea en la salud",
    resumen: "Estudios confirman los beneficios de la dieta mediterránea en la prevención de enfermedades crónicas.",
    contenido: "Investigaciones recientes han confirmado que la dieta mediterránea puede reducir significativamente el riesgo de enfermedades crónicas como la diabetes y las enfermedades cardíacas...",
    fecha: "2025-01-06",
    autor: "Dra. Laura Fernández"
  },
  {
    id: 6,
    titulo: "Nuevas terapias para la obesidad infantil",
    resumen: "Desarrollan programas innovadores para combatir la obesidad en niños.",
    contenido: "Un equipo de pediatras ha creado nuevos programas de intervención para ayudar a los niños a combatir la obesidad y llevar una vida más saludable...",
    fecha: "2025-01-05",
    autor: "Dr. Pedro Sánchez"
  }
];

export async function obtenerNoticias(): Promise<Noticia[]> {
  // Simula una llamada a API con un retraso
  await new Promise(resolve => setTimeout(resolve, 1000));
  return noticias;
}

export async function obtenerNoticiaPorId(id: number): Promise<Noticia | undefined> {
  // Simula una llamada a API con un retraso
  await new Promise(resolve => setTimeout(resolve, 500));
  return noticias.find(noticia => noticia.id === id);
}