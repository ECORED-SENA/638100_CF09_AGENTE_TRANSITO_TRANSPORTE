<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Conceptos de mecánica básica
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema10/img1.png', style="width: 450px" ,alt='').m-auto
      .col-lg-8
        p Generalmente la práctica de la mecánica de un vehículo se ejerce por personal idóneo y capacitado para tal fin, pero hay aspectos básicos que todo conductor debe conocer acerca de los sistemas que componen el vehículo.
        .row
          .col-12.bg-c15
            .p-4
              p.mb-0 #[b Estos conocimientos podrán ayudar a la detección de problemas que se deben solucionar y quizá le darán al conductor las herramientas para resolver aspectos básicos sin necesidad de acudir al taller y recibir ayuda de expertos. ]
    p.mb-5 En cuanto a aspectos importantes sobre mecánica básica, se debe tener en cuenta que:
    .row.bg-c16
      .col-12
        .px-5.pt-5
          p.text-center.mb-5 #[b Sobre mecánica básica]
          SlyderF(columnas="col-lg-6 col-xl-4")
            .tarjeta.color-acento-primario
              .row
                .col-12
                  img(src='@/assets/curso/tema10/img2.png' alt='AvatarTop')
              .row
                .col-12
                  .p-4
                    p.text-center #[b Solución primaria]
                    p.text-center En ocasiones el vehículo puede presentar intempestivamente algunas fallas o problemas que requerirán ser solucionados por el usuario del vehículo.
            .tarjeta.color-acento-primario
              .row
                .col-12
                  img(src='@/assets/curso/tema10/img3.png' alt='AvatarTop')
              .row
                .col-12
                  .p-4
                    p.text-center #[b Apoyos en la vía]
                    p.text-center También puede recibir ayuda de otros conductores o de las mismas autoridades.
            .tarjeta.color-acento-primario
              .row
                .col-12
                  img(src='@/assets/curso/tema10/img4.png' alt='AvatarTop')
              .row
                .col-12
                  .p-4
                    p.text-center #[b Manual del fabricante]
                    p.text-center Es importante contar con el manual del fabricante, ya que este contiene instrucciones que sirven de guía para el adecuado y óptimo uso de cada uno de los elementos componentes del vehículo.
            .tarjeta.color-acento-primario
              .row
                .col-12
                  img(src='@/assets/curso/tema10/img5.png' alt='AvatarTop')
              .row
                .col-12
                  .p-4
                    p.text-center #[b Diagnóstico y reparación de fallas básicas]
                    p.text-center Se hace necesario, además, saber manejar e interpretar los manuales de operación del vehículo, ya que estos dan las pautas para diagnosticar una falla y así mismo poder reparar o reemplazar de manera correcta los elementos del vehículo que estén presentando fallas.
    Separador
    #t_9_1
    .titulo-segundo.color-acento-contenido
      h2 9.1. Características de llantas, carrocería, sistema eléctrico, lubricantes, correas de transmisión
    p Es importante que dentro del proceso de aprendizaje el aprendiz conozca los sistemas que componen las unidades de transporte, para definir qué elementos va a inspeccionar de manera visual y garantizar que estén cumpliendo los requisitos para operar.
    .row.align-items-center.mb-5
      .col-lg-6.mb-4.mb-lg-0
        .row.mb-3
          .col-12.bg-c18
            .p-4
              p.text-white.mb-0 Se debe tener claro qué es un vehículo automotor, que en su concepción es un elemento con un complejo mecánico que se desplaza por sus propios medios y para lograrlo, requiere sistemas y partes que interactúan de forma coordinada.
        .row
          .col-12.bg-c17
            .p-4
              p #[b También dentro del Código Nacional de Tránsito, en la Ley 769 de 2002 en el Artículo 2 se indica que es:]
              .bloque-texto-e.color-secundario.p-4
                .bloque-texto-e__texto.mb-4
                  i.fas.fa-quote-left
                  p.text-regular Todo aparato montado sobre ruedas que permite el transporte de personas, animales o cosas de un punto a otro por vía terrestre pública o privada abierta al público.
                  i.fas.fa-quote-right
                .row.align-items-end
                  .col
                    .bloque-texto-e__autor
                      .h5.mb-0 Ley 769 de 2002 en el Artículo 2
      .col-lg-6
        figure
          img(src='@/assets/curso/tema10/img6.png', style="width: 520px" ,alt='').m-auto
    p #[b En este sentido, dentro de los sistemas que componen el vehículo se encuentran:]
    p.mb-5 Los siguientes sistemas son los que permiten que un vehículo pueda funcionar y ponerse en marcha.
    .tarjeta.tarjeta--azul.mb-5
      .p-4.p-lg-5
        SlyderA(tipo="b")
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Sistema del motor]
              p.mb-0 Está conformado por un dispositivo que es el motor con una serie de accesorios que transforman la energía eléctrica, cinética o química en energía mecánica de movimiento, energía térmica o de rotación a través de la combustión y una seria de mezclas de combustible con agua, lo que permite al final que los vehículos se desplacen.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema10/img7.png', style="width: 450px" ,alt='').m-auto
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Sistema de lubricación]
              p.mb-0 Es el encargado de distribuir y lubricar con aceite las piezas móviles que conforman el motor, reduciendo la fricción y evitando el desgaste anticipado entre las superficies, lo compone la bomba de aceite, tuberías, válvulas, el cárter, entre otros.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema10/img8.png', style="width: 450px" ,alt='').m-auto
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Sistema de transmisión]
              p.mb-0 Este transfiere la potencia generada por el motor a través de engranajes de diferentes tamaños desde el cigüeñal hacia las ruedas y permite un balance en la velocidad y el torque.  Está compuesto por la caja de cambios de velocidades, el embrague, el árbol de transmisión, el grupo cónico-diferencial y los semiejes.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema10/img9.png', style="width: 450px" ,alt='').m-auto
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Sistema de dirección]
              p.mb-0 Se encarga de permitir al conductor controlar la dirección, transmitiendo movimiento del volante a las llantas. Los componentes funcionan en perfecta coordinación, pues el volante acciona la columna de dirección, el cual va unido a la caja de dirección.  Existen cuatro tipos: mecánica, hidráulica, electrohidráulica y eléctrica.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema10/img10.png', style="width: 450px" ,alt='').m-auto
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Sistema de combustible]
              p Es muy importante en los motores de combustión interna (esta mezcla se compone de aire, combustible y chispa), este sistema es el encargado de almacenar y convertir el combustible en energía de movimiento.
              p.mb-0 Es un mecanismo de alimentación en los motores. En el caso de los motores de explosión o ciclo Otto los inyectores reemplazan al carburador, mientras que en los vehículos con motor diésel el sistema de inyección se usa de forma obligatoria.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema10/img11.png', style="width: 450px" ,alt='').m-auto
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Sistema de suspensión]
              p.mb-0 Mantiene el contacto neumático-suelo, que permite la adherencia y las mejoras en otros sistemas del equipo como el frenado y la dirección, aumentando el control sobre el equipo de transporte, además genera en los usuarios desplazamientos confortables. El sistema de suspensión está conformado por amortiguadores, resortes y puntales.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema10/img12.png', style="width: 450px" ,alt='').m-auto
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Sistema de frenos]
              p Permite la reducción la fuerza de inercia de las ruedas a través de la fricción. Este sistema es muy importante en términos de seguridad, pero este proceso implica una alta transformación de energía mecánica en energía calórica, en donde la mayor parte es producida en las llantas delanteras.
              p.mb-0 Actualmente, se encuentran frenos de disco y un poco más en desuso los frenos de tambor. Las áreas de contacto son los discos, pastillas o bandas y campanas, además de la fricción generada entre el suelo y el neumático.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema10/img13.png', style="width: 450px" ,alt='').m-auto
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Sistema de seguridad]
              p.mb-0 Está diseñado para minimizar los daños en caso de un accidente y en los vehículos se clasifican en dos grupos; la seguridad pasiva y la seguridad activa, estos desarrollos se han trabajado durante años en pro de mejorar la seguridad vial, en donde se impone cada vez más la tecnología y la normatividad al respecto.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema10/img14.png', style="width: 450px" ,alt='').m-auto
    p.mb-5 Dentro del sistema de componentes del vehículo se destaca en el sistema motor una clasificación de acuerdo con el trabajo que realizan, si es por energía calórica (motor térmico) o por energía eléctrica (motor eléctrico) y una vez definida esta condición se clasifican como se muestra a continuación:
    p.text-center.mb-5 #[b Clasificación de los motores]
    SlyderF(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema10/img15.png' alt='AvatarTop')
        p.text-center #[b Motores de gasolina]
        p Obtienen su energía a través la reacción termoquímica de la mezcla de oxígeno y combustible.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema10/img16.png' alt='AvatarTop')
        p.text-center #[b Motores de diésel]
        p En este tipo de motores la combustión se genera por la atmósfera de aire caliente en la que el diésel es inyectado.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema10/img17.png' alt='AvatarTop')
        p.text-center #[b Motores eléctricos]
        p La energía eléctrica es generada por medio de la inducción electromagnética que se transforma en energía mecánica.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema10/img18.png' alt='AvatarTop')
        p.text-center #[b Motores híbridos]
        p Combinan la energía eléctrica y la energía generada por la combustión de la mezcla de combustible y aire.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema10/img19.png' alt='AvatarTop')
        p.text-center #[b GNC (gas natural comprimido)]
        p La combustión se logra por la inflamación de combustibles alternativos.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema10/img20.png' alt='AvatarTop')
        p.text-center #[b Motores de GLP (gas licuado de petróleo)]
        p La combustión se logra por la inflamación de combustibles alternativos.
    Separador
    #t_9_2
    .titulo-segundo.color-acento-contenido
      h2 9.2. Funcionamiento de testigos de los equipos
    p.mb-5 Los testigos en las unidades de transporte son pictogramas codificados que están ubicados en el tablero de instrumentos, tienen como objetivo principal dar aviso sobre el funcionamiento de los sistemas y los dispositivos del vehículo y, alertar sobre una falla o avería en los mismos.
    .row.justify-content-center.mb-5
      .col-lg-auto.px-0
        figure
          img(src='@/assets/curso/tema10/img21.png', style="width: 590px" ,alt='').m-auto
      .col-md-11.col-lg.bg-c19
        .p-4
          p #[b Símbolos testigos de los equipos]
          p.mb-0 Los testigos pueden tener 3 colores de acuerdo con la información que transmiten, los de color verde son informativos de los elementos que pueden estar funcionando en el momento de la conducción; los de color naranja indican que cuando se detenga el vehículo se revise adecuadamente y los testigos de color rojo son de atención inmediata, con estos dos últimos es probable que se requiera atención mecánica especializada, en algunas ocasiones una vez reparada la falla genera que el testigo se encienda, por tanto, se debe escanear para que esta se desactive. Los vehículos modernos vienen con testigos digitales y conectados.
    p Cuando los testigos se iluminan el operador de la unidad de transporte debe detenerse en un lugar que no genere accidentes en la vía y que permita realizar la inspección.
    p.mb-5 #[b Es importante examinar el color del testigo encendido a continuación se revisará el funcionamiento de los testigos rojos:]
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema10/img24.png' alt='')
        p.text-center #[b Batería con signo de más y menos]
        p Este dibujo indica una falla en el sistema de carga o en la batería.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema10/img23.png' alt='')
        p.text-center #[b Gotero con una gota]
        p Anuncia que se debe revisar la presión del aceite y evaluar la cantidad o cambio.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema10/img22.png' alt='')
        p.text-center #[b Circulo entre paréntesis con un signo de admiración en medio]
        p Este testigo es uno de los que más debe tenerse presente, es un aviso sobre la falla en el sistema de frenos o también puede mostrar que está transitando con el freno de mano puesto.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema10/img25.png' alt='')
        p.text-center #[b Auto con puertas abiertas]
        p Este icono informa que alguna puerta de pasajero del auto o el baúl está abierta.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema10/img26.png' alt='')
        p.text-center #[b Individuo con el cinturón de seguridad]
        p Este dibujo indica que hay uno de los ocupantes sin el cinturón abrochado.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema10/img27.png' alt='')
        p.text-center #[b Termómetro]
        p Este dibujo anuncia la elevación de la temperatura en el vehículo o la falta de líquido refrigerante.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema10/img28.png' alt='')
        p.text-center #[b Timón]
        p Indica fallas en la dirección del automóvil.
    p.mb-5 Si bien es importante identificar el funcionamiento de los testigos rojos se reconoce que no son los únicos existentes en el tablero de instrumentos, entonces, qué ocurre con los testigos de color amarillo, identifique su función en el siguiente recurso:
    SlyderF(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema10/img29.png' alt='')
        p.text-center #[b Circulo con líneas a los lados]
        p Este dibujo es informa al piloto sobre el desgaste de las pastillas de freno.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema10/img30.png' alt='')
        p.text-center #[b Motor]
        p Este testigo encendido muestra que hay una falla en el motor.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema10/img31.png' alt='')
        p.text-center #[b Circulo con las letras ABS en el interior]
        p Anuncia un fallo en el sistema de frenos ABS.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema10/img32.png' alt='')
        p.text-center #[b Vidrio con líneas punteadas]
        p Avisa que el nivel del tanque del limpiaparabrisas está bajo y debe llenarse.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema10/img33.png' alt='')
        p.text-center #[b Dispensador de gasolina]
        p Informa sobre el nivel bajo de la gasolina en el vehículo.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema10/img34.png' alt='')
        p.text-center #[b Individuo sentado con un círculo en frente]
        p Este testigo informa sobre el fallo en o desconexión de alguna de las bolsas de aire (Air bag) del vehículo.
    Separador
    #t_9_3
    .titulo-segundo.color-acento-contenido
      h2 9.3. Señales luminosas y auditivas de los equipos
    p.mb-5 Los dispositivos dentro del campo de seguridad vial son fundamentales, ya que los actores viales a través de sus sentidos pueden percibir la presencia de vehículos o equipos en las vías o en sus inmediaciones y generan seguridad en sus desplazamientos. Estos son:
    .row.align-items-center.mb-4
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/tema6/img3.svg', style="width: 50px" ,alt='').m-auto
      .col-auto.bg-c11(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Sistemas de iluminación de los vehículos
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0
        p.mb-0 Estos elementos son indispensables, pues en las vías y sobre todo cuando las condiciones de luz y de visibilidad no son favorables, se requiere que los equipos de transporte tengan dispositivos que permitan una conducción segura y ser vistos por otros actores viales, estas condiciones de iluminación son fundamentales en la seguridad activa de los vehículos. Además, un buen sistema de iluminación en los vehículos va a permitir iluminar la calzada, observar la señalización, actuar de forma adecuada frente a obstáculos y anticipar frente a otros conductores cambios de dirección de los vehículos. Para activarlos se hace a través del interruptor de control de luces del vehículo.
      .col-lg-4
        figure
          img(src='@/assets/curso/tema10/img35.png', style="width: 450px" ,alt='').m-auto
    p.mb-5 #[b La iluminación con la que cuentan los vehículos se puede clasificar de la siguiente manera:]
    .tarjeta.tarjeta--azul.mb-5
      .p-4.p-lg-5
        SlyderA(tipo="b")
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Luces Conducción Diurna]
              p.mb-0 No deben confundirse con las luces cortas, las luces de conducción diurna están diseñadas para hacer el vehiculó más visible a otros conductores. Suelen ser luces en la parte delantera y trasera de tu auto que pueden encenderse de forma automática cuando enciendes el motor.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema10/img36.png', style="width: 450px" ,alt='').m-auto
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Luces cortas]
              p.mb-0 A diferencia de las luces altas, las luces cortas (o luces de cruce) dan suficiente luz para mostrarte a dónde vas sin deslumbramiento excesivo que podría deslumbrar a los conductores que se aproximan. Las luces cortas son esenciales cuando se conduce por la noche. También mejoran la visibilidad y la seguridad cuando se utilizan durante el día, por ejemplo, durante condiciones meteorológicas adversas (lluvia, nieve, granizo o niebla) o al amanecer y antes del atardecer.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema10/img37.png', style="width: 450px" ,alt='').m-auto
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Luces altas]
              p.mb-0 Al igual que las luces cortas, las luces altas ayudan al conductor a ver la carretera en la oscuridad. También, indican a otros conductores dónde te encuentras. Las luces altas proporcionan una distribución de luz intensa y ponderada en el centro con mucho deslumbramiento. Solo deben usarse cuando haya dificultad para ver y no haya otros autos visibles en ninguna dirección, o si el vehículo se encuentra al menos a 150 metros del tráfico que se aproxima y se necesitan las luces completas para ver la carretera.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema10/img38.png', style="width: 450px" ,alt='').m-auto
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Luces antiniebla]
              p.mb-0 Las luces antiniebla, con su forma única de haz plano y ancho, suelen colocarse en la parte baja de la parte delantera del auto, cerca del parachoques delantero. La forma del haz atraviesa la niebla para iluminar la superficie de la carretera, mientras que la posición evita que la luz se refleje de nuevo y deslumbre al conductor. Como las luces antiniebla son tan fuertes que pueden distraer a otros conductores, solo deben utilizarse durante la niebla (pero no en la lluvia) cuando los faros normales son ineficaces.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema10/img39.png', style="width: 450px" ,alt='').m-auto
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Luces traseras]
              p.mb-0 Las luces traseras son las luces rojas en la parte trasera del vehículo que se encienden de manera sistemática cuando tus las luces delanteras están encendidas. Les permite saber a los conductores que vienen detrás que el vehículo está allí y qué tan lejos está.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema10/img40.png', style="width: 450px" ,alt='').m-auto
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Luces de señalización/intermitentes]
              p.mb-0 Las luces de señalización, conocidas como intermitentes, se encuentran en la parte delantera y trasera del auto. Las luces de señalización también se pueden encontrar en los espejos laterales. Se utilizan para que otros conductores sepan que está planeando girar y probablemente tendrán que desacelerar para girar.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema10/img41.png', style="width: 450px" ,alt='').m-auto
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Luces de emergencia]
              p.mb-0 Las luces de señalización también se usan como luces de peligro, luces intermitentes o luces de emergencia. Cuando se encienden las luces de emergencia, parpadean para advertir a otros conductores de problemas de tránsito o situación de emergencia. Por ejemplo, advertir a otros conductores de un peligro en la carretera, cuando el vehículo se ha detenido y está causando una obstrucción temporal. No deben utilizarse cuando estacionas temporalmente.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema10/42.png', style="width: 450px" ,alt='').m-auto
    .row.align-items-center.mb-4
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/tema6/img3.svg', style="width: 50px" ,alt='').m-auto
      .col-auto.bg-c11(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Sistemas auditivos / sonoros de los vehículos
    .row.align-items-center
      .col-lg-7.mb-4.mb-lg-0
        p.mb-0 Estos elementos electromagnéticos permiten que los operadores de vehículos alerten a los actores viales sobre su proximidad o acercamiento a un obstáculo; funcionan a 12 o a 24 voltios y de acuerdo con la normatividad deben estar sobre los 80 decibeles.
      .col-lg-5
        figure
          img(src='@/assets/curso/tema10/img42.png', style="width: 450px" ,alt='').m-auto
    Separador
    #t_9_4
    .titulo-segundo.color-acento-contenido
      h2 9.4. Seguridad pasiva y activa del vehículo
    p.mb-5 El avance tecnológico que se da por los fabricantes de vehículos en materia de seguridad vial está orientado a proteger la vida del conductor, de manera que la seguridad activa y pasiva se clasifica básicamente en dos componentes:
    TabsB.color-secundario
      .py-4.py-md-5(titulo="Seguridad Activa" :icono="require('@/assets/curso/tema10/img2.svg')")
        .row.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            p Son elementos que proporcionan a los equipos de transporte mayor eficacia y mejor comportamiento en estabilidad, todos estos actúan antes de que se produzca un accidente, siempre tratando de evitar que este ocurra. Entre los elementos tenemos:
            ul.lista-ul--color.mb-0
              li.d-flex
                i.fas.fa-car-side(style="color: #D40A32")
                | El sistema de frenado.
              li.d-flex
                i.fas.fa-car-side(style="color: #D40A32")
                | El sistema de dirección.
              li.d-flex
                i.fas.fa-car-side(style="color: #D40A32")
                | El sistema de suspensión.
              li.d-flex
                i.fas.fa-car-side(style="color: #D40A32")
                | Los neumáticos y su adherencia al suelo.
              li.d-flex
                i.fas.fa-car-side(style="color: #D40A32")
                | El sistema de iluminación.
              li.d-flex
                i.fas.fa-car-side(style="color: #D40A32")
                | Sistemas de control de estabilidad.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema10/img43.png', style="width: 420px" ,alt='').m-auto
      .py-4.py-md-5(titulo="Seguridad Pasiva" :icono="require('@/assets/curso/tema10/img2.svg')")
        .row.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            p Esta tecnología reúne a todos aquellos elementos que reducen los daños al mínimo cuando es inevitable los accidentes ocurra. Entre los elementos tenemos:
            ul.lista-ul--color.mb-0
              li.d-flex
                i.fas.fa-car-side(style="color: #D40A32")
                span Los cinturones de seguridad.
              li.d-flex
                i.fas.fa-car-side(style="color: #D40A32")
                span Los #[em airbags], chasis y Carrocería.
              li.d-flex
                i.fas.fa-car-side(style="color: #D40A32")
                span Cristales de los parabrisas y laterales.
              li.d-flex
                i.fas.fa-car-side(style="color: #D40A32")
                span Reposacabezas.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema10/img44.png', style="width: 420px" ,alt='').m-auto
      .py-4.py-md-5(titulo="Seguridad activa para motocicletas" :icono="require('@/assets/curso/tema10/img3.svg')")
        .row.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            ul.lista-ul--color.mb-0
              li.d-flex
                i.fas.fa-car-side(style="color: #D40A32")
                span El ABS.
              li.d-flex
                i.fas.fa-car-side(style="color: #D40A32")
                span Control de frenado en curva.
              li.d-flex
                i.fas.fa-car-side(style="color: #D40A32")
                span El CBS. Se trata de un sistema combinado de frenos.
              li.d-flex
                i.fas.fa-car-side(style="color: #D40A32")
                span Control de presión de neumáticos.
              li.d-flex
                i.fas.fa-car-side(style="color: #D40A32")
                span El control de estabilidad.
              li.d-flex
                i.fas.fa-car-side(style="color: #D40A32")
                span Control dinámico de tracción.
              li.d-flex
                i.fas.fa-car-side(style="color: #D40A32")
                span El ajuste electrónico de la suspensión.
              li.d-flex
                i.fas.fa-car-side(style="color: #D40A32")
                span Iluminación dinámica.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema10/img45.png', style="width: 420px" ,alt='').m-auto
      .py-4.py-md-5(titulo="Seguridad pasiva para motocicletas" :icono="require('@/assets/curso/tema10/img3.svg')")
        .row.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            ul.lista-ul--color.mb-0
              li.d-flex
                i.fas.fa-car-side(style="color: #D40A32")
                span Cazadora. Para evitar abrasiones en caso de que el motorista caiga sobre el asfalto.
              li.d-flex
                i.fas.fa-car-side(style="color: #D40A32")
                span Guantes.
              li.d-flex
                i.fas.fa-car-side(style="color: #D40A32")
                span Protecciones de rodilla.
              li.d-flex
                i.fas.fa-car-side(style="color: #D40A32")
                span #[em Neck-brace]. Este collarín ayuda a evitar problemas de cervicales.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema10/img46.png', style="width: 420px" ,alt='').m-auto
    Separador
    #t_9_5
    .titulo-segundo.color-acento-contenido
      h2 9.5. Características y componentes del equipo de prevención y seguridad
    p.mb-5 El equipo de prevención y seguridad es el conjunto de elementos necesarios para la atención inicial de emergencias que debe poseer un vehículo, de acuerdo con las disposiciones del Ministerio de Transporte ningún automotor podrá transitar sin estos elementos, si se presenta el caso se puede ordenar comparendo según las infracciones del Código Nacional de Tránsito.
    SlyderF(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-terciario.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema10/img47.png' alt='AvatarTop')
        p.text-center.text-white.mb-0 #[b 1. Gato vehicular]
      .tarjeta.color-terciario.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema10/img48.png' alt='AvatarTop')
        p.text-center.text-white.mb-0 #[b 2. Cruceta]
      .tarjeta.color-terciario.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema10/img49.png' alt='AvatarTop')
        p.text-center.text-white.mb-0 #[b 3. Señal reflectiva]
      .tarjeta.color-terciario.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema10/img50.png' alt='AvatarTop')
        p.text-center.text-white.mb-0 #[b 4. botiquín de primeros auxilios]
      .tarjeta.color-terciario.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema10/img51.png' alt='AvatarTop')
        p.text-center.text-white.mb-0 #[b 5. Extintor]
      .tarjeta.color-terciario.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema10/img52.png' alt='AvatarTop')
        p.text-center.text-white.mb-0 #[b 6. Tacos para vehiculos]
      .tarjeta.color-terciario.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema10/img53.png' alt='AvatarTop')
        p.text-center.text-white.mb-0 #[b 7. Caja de herramientas]
      .tarjeta.color-terciario.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema10/img54.png' alt='AvatarTop')
        p.text-center.text-white.mb-0 #[b 8. Llanta de repuesto]
      .tarjeta.color-terciario.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema10/img55.png' alt='AvatarTop')
        p.text-center.text-white.mb-0 #[b 9. Linterna]

</template>

<script>
export default {
  name: 'Tema10',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
