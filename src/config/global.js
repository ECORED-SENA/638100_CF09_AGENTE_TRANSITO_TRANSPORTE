export default {
  global: {
    componenteFormativo: 'Buenas prácticas en la conducción de vehículos',
    descripcionCurso:
      'Este componente formativo aborda aspectos clave de las buenas prácticas en la conducción de vehículos. Con su estudio responsable el aprendiz se afianzará en conocimiento y aplicación de la normatividad en tránsito y transporte, adaptación al medio y conocimiento del vehículo, para garantizar una circulación segura.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Reglamentación para conductores en Colombia',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Adaptación al medio',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Buenos hábitos en la conducción y normas de comportamiento',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Manejo defensivo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Velocidades de circulación en Colombia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Conocimiento de las señales de tránsito',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Maniobras de adelantamiento',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Distancias de seguridad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Utilización de carriles',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema10',
        numero: '10',
        titulo: 'Conceptos de mecánica básica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '10.1',
            titulo:
              'Características de llantas, carrocería, sistema eléctrico, lubricantes, correas de transmisión',
            hash: 't_10_1',
          },
          {
            numero: '10.2',
            titulo: 'Funcionamiento de testigos de los equipos',
            hash: 't_10_2',
          },
          {
            numero: '10.3',
            titulo: 'Señales luminosas y auditivas de los equipos',
            hash: 't_10_3',
          },
          {
            numero: '10.4',
            titulo: 'Seguridad pasiva y activa del vehículo',
            hash: 't_10_4',
          },
          {
            numero: '10.5',
            titulo:
              'Características y componentes del equipo de prevención y seguridad',
            hash: 't_10_5',
          },
        ],
      },
      {
        nombreRuta: 'tema11',
        numero: '11',
        titulo: 'Técnicas para inspección de medios de transporte',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema12',
        numero: '12',
        titulo:
          'Conceptos de mantenimiento: preventivo, correctivo, predictivo',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Adaptación al medio',
      referencia:
        'Agencia Nacional de Seguridad Vial. (2016). Manual de referencia para conductores de vehículos en general y motocicletas. ANSV.',
      tipo: 'Manual',
      link:
        'https://ansv.gov.co/es/normativa/manual-de-referencia-para-conductores-de-vehiculos-en-general-y-motocicletas',
    },
    {
      tema: 'Adaptación al medio',
      referencia:
        'Ministerio de Transporte. (2009) Resolución 3245 de 2009. Por la cual se reglamenta el Decreto 1500 de 2009 y se establecen requisitos para la habilitación de los Centros de Enseñanza Automovilística.',
      tipo: 'Resolución',
      link:
        'http://www.avancejuridico.com/actualidad/documentosoficiales/2009/47418/r_mt_3245_2009.html',
    },
    {
      tema: 'Buenos hábitos en la conducción y normas de comportamiento',
      referencia:
        'Congreso de Colombia. (2011). Ley 1503 de 2011. Por la cual se promueve la formación de hábitos, comportamientos y conductas seguros en la vía y se dictan otras disposiciones.',
      tipo: 'Ley',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=45453',
    },
    {
      tema: 'Reglamentación para conductores en Colombia',
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación. (2012). <em>Revisión técnico-mecánica y de emisiones contaminantes en vehículos automotores.</em> Icontec.',
      tipo: 'Norma Técnica Colombiana',
      link: 'https://www.cda-sa.com/assets/files/NTC_5375.pdf',
    },
    {
      tema: 'Reglamentación para conductores en Colombia',
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación. (2011). <em>Centros de diagnóstico automotor. Especificaciones del servicio.</em> Icontec.',
      tipo: 'Norma Técnica Colombiana',
      link: 'https://cdasugamuxi.com.co/gallery/NTC_5385.pdf',
    },
    {
      tema: 'Conceptos de mantenimiento: preventivo,correctivo,predictivo',
      referencia:
        'Ministerio de Transporte. (2013). Resolución 378 de 2013. Por la cual se adoptan unas medidas para garantizar la seguridad en el transporte público terrestre automotor.',
      tipo: 'Resolución',
      link:
        'https://www.redjurista.com/Documents/resolucion_378_de_2013_ministerio_de_transporte.aspx#/',
    },
    {
      tema: 'Velocidades de circulación en Colombia',
      referencia:
        'Congreso de Colombia. (2008). Ley 1239 de 2008. Por medio de la cual se modifican los artículos 106 y 107 de la Ley 769 del 2 de agosto de 2002 y se dictan otras disposiciones.',
      tipo: 'Ley',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=31604',
    },
    {
      tema: 'Conocimiento de las señales de tránsito',
      referencia:
        'Ministerio de Transporte. (2015). Resolución 1885 de 2015. Por la cual se adopta el Manual de Señalización Vial.',
      tipo: 'Manual',
      link:
        'https://www.mintransporte.gov.co/documentos/29/manuales-de-senalizacion-vial/',
    },
  ],
  glosario: [
    {
      termino: 'Conductor',
      significado:
        'persona habilitada y capacitada técnica y teóricamente para operar un vehículo.',
    },
    {
      termino: 'Hábito',
      significado:
        'conductas que se repiten frecuentemente hasta que forman parte de las nuestras actividades diarias.',
    },
    {
      termino: 'NTC',
      significado: 'Norma Técnica Colombiana.',
    },
    {
      termino: 'Tránsito',
      significado:
        'movilización de personas, animales o vehículos por una vía pública o privada abierta al público.',
    },
    {
      termino: 'Vehículo de servicio público',
      significado:
        'de acuerdo con el artículo 2° del Código Nacional de Tránsito Ley 769 del 2002 se define como: vehículo automotor homologado, destinado al transporte de pasajeros, carga o ambos por las vías de uso público mediante el cobro de una tarifa, porte, flete o pasaje.',
    },
    {
      termino: 'Velocidad',
      significado:
        'magnitud física que expresa la relación entre el espacio recorrido por un objeto y el tiempo que emplea en recórrelo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de Colombia. (2002). Ley 769 de 2002. Por la cual se expide el Código Nacional de Tránsito Terrestre y se dictan otras disposiciones',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0769_2002.html',
    },
    {
      referencia:
        'Ministerio de Transporte. (2009). Resolución 3245 de 2009. Por la cual se reglamenta el Decreto 1500 de 2009 y se establecen requisitos para la habilitación de los Centros de Enseñanza Automovilística.',
      link:
        'http://www.avancejuridico.com/actualidad/documentosoficiales/2009/47418/r_mt_3245_2009.html',
    },
    {
      referencia:
        'Agencia Nacional de Seguridad Vial. (2016). <em>Manual de referencia para conductores de vehículos en general y motocicletas. ANSV.</em>',
      link: '',
    },
    {
      referencia:
        'Congreso de Colombia. (2011). Ley 1503 de 2011. Por la cual se promueve la formación de hábitos, comportamientos y conductas seguros en la vía y se dictan otras disposiciones.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=45453',
    },
    {
      referencia:
        'Ministerio de Transporte. (2013). Resolución 378 de 2013. Por la cual se adoptan unas medidas para garantizar la seguridad en el transporte público terrestre automotor.',
      link:
        'https://www.redjurista.com/Documents/resolucion_378_de_2013_ministerio_de_transporte.aspx#/',
    },
    {
      referencia: 'Ministerio del Transporte. (s. f.). Glosario.',
      link: 'https://www.mintransporte.gov.co/glosario/',
    },
    {
      referencia:
        'Ministerio de Transporte. (2015). Resolución 1885 de 2015. Por la cual se adopta el Manual de Señalización Vial.',
      link:
        'https://www.mintransporte.gov.co/documentos/29/manuales-de-senalizacion-vial/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Zaida Fernanda Sotelo Peña',
          cargo: 'Experta temática',
          centro:
            'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
        },
        {
          nombre: 'Fabián Leonardo Correa Díaz',
          cargo: 'Diseñador Instruccional',
          centro:
            'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Distrito Capital- Centro de Diseño y Metrología',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrector de estilo',
          centro:
            'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres ',
          cargo: 'Storyboard e Ilustración ',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Mary Jeans Palacio ',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada ',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey ',
          cargo: 'Locución',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad Didáctica',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniel Ricardo Mutis',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
