import Partido from "../entities/Partido";

const partidos: Partido[] = [
  {
    id: 1,
    title: "Partido progreso y justicia(PPJ)",
    name: "Laura Fernandez",
    propuestas: [
      "Reforma educativa integral: Implementar un sistema educativo que fomente la creatividad, el pensamiento crítico y la educación tecnológica desde temprana edad.",
      "Transparencia Gubernamental: Crear una plataforma digital que permita a los ciudadanos acceder a la información gubernamental en tiempo real, incluyendo presupuestos y gastos públicos.",
      "Desarrollo Sostenible: Invertir en energías renovables y promover prácticas sostenibles en industrias clave para reducir la huella de carbono del país.",
    ],
    votos: 3,
    image: 'https://i.pinimg.com/originals/05/5a/91/055a91979264664a1ee12b9453610d82.png'
  },
  {
    id: 2,
    title: "Partido Unidad Nacional(PUN)",
    name: "Carlos Mendez",
    propuestas: [
      "Fortalecimiento de la Seguridad: Aumentar el presupuesto para las fuerzas de seguridad, con énfasis en la capacitación y el equipamiento moderno para combatir el crimen organizado.",
      "Infraestructura Moderna: Lanzar un programa nacional para la construcción y modernización de carreteras, puentes y redes de transporte público.",
      "Apoyo a la Pequeña Empresa: Ofrecer incentivos fiscales y acceso a financiamiento a bajo interés para emprendedores y pequeñas empresas, fomentando la innovación y la creación de empleo.",
    ],
    votos: 7,
    image: 'https://i.pinimg.com/originals/05/5a/91/055a91979264664a1ee12b9453610d82.png'
  },
  {
    id: 3,
    title: "Partido Verde Futuro(PVF)",
    name: "Ana Lopez",
    propuestas: [
      "Protección del Medio Ambiente: Implementar políticas estrictas para la conservación de bosques, ríos y áreas naturales protegidas, junto con un programa de reforestación masiva.",
      "Salud y Bienestar: Aumentar la inversión en el sistema de salud pública para garantizar el acceso universal a servicios médicos de calidad, incluyendo la salud mental.",
      "Economía Circular: Promover un modelo económico que reduzca el desperdicio a través del reciclaje, la reutilización y la innovación en materiales sostenibles.",
    ],
    votos: 9,
    image: 'https://i.pinimg.com/originals/05/5a/91/055a91979264664a1ee12b9453610d82.png'
  }
];

export default partidos;
