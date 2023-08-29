<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Conocimiento de las señales de tránsito
    .row.mb-5
      .col-12.bg-c10.p-4
        .row.align-items-center
          .col-md-auto
            figure
              img(src='@/assets/curso/tema6/img2.svg', style="width: 80px" ,alt='').m-auto
          .col
            p.mb-0 El Ministerio de Transporte, como autoridad suprema de tránsito en Colombia, ha reglamentado mediante la Resolución 1885 de 2015 el “Manual de Señalización Vial, Dispositivos Uniformes para la Regulación del Tránsito en Calles, Carreteras y Ciclorrutas de Colombia”, el cual es un libro técnico que cuenta con 888 páginas de las cuales se puede extractar la siguiente información sobre las señales de tránsito.
    .row.align-items-center.mb-4
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/tema6/img3.svg', style="width: 50px" ,alt='').m-auto
      .col-auto.bg-c11(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Señales verticales
    .row.align-items-center.mb-5
      .col.mb-4.mb-lg-0
        p.mb-0 Estas reglamentan las limitaciones, prohibiciones, restricciones, advierten de peligros, informan acerca de rutas, direcciones, destinos y sitios de interés se clasifican de acuerdo a la función que desempeñan y pueden ser reglamentarias, preventivas, informativas y transitorias.
      .col-lg-auto
        figure
          img(src='@/assets/curso/tema6/img4.svg', style="width: 170px" ,alt='').m-auto
    .row.align-items-center.mb-4
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/tema6/img3.svg', style="width: 50px" ,alt='').m-auto
      .col-auto.bg-c11(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Señales reglamentarias
    .row.align-items-center.mb-5
      .col.mb-4.mb-lg-0
        p.mb-0 Son 58 y su finalidad es notificar las prioridades en el uso de las vías, prohibiciones, restricciones, obligaciones y autorizaciones existentes, donde su transgresión constituye una infracción de tránsito, presentando su clasificación. En el numeral 2.2 Señales reglamentarias del Manual de señalización vial, dentro de los anexos, se pueden encontrar más información y significados de cada sigla.
      .col-lg-auto
        figure
          img(src='@/assets/curso/tema6/img5.svg', style="width: 170px" ,alt='').m-auto
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4
          p.mb-0 #[b Tabla 3]. Señales reglamentarias y su clasificación
        .tabla-a.color-acento-botones
          table
            tbody
              tr(style="background-color: #4D4D4F")
                td.text-center(width="30%") #[b.text-white Clasificación de las Señales reglamentarias]
                td.text-center #[b.text-white Señal Reglamentaria (SR)]
              tr
                td.text-center #[b De prioridad]
                td SR 01, SR 02.
              tr
                td.text-center #[b Prohibición]
                td SR-04, SR-06, SR-08, SR-10, SR-14, SR-14A, SR-26, SR-50.
              tr
                td.text-center #[b Paso por Clase de Vehículos]
                td SR-16,SR-18,SR-21,SR-22,SR-23,SR-24,SR-25,SR-51,SR-52,SR-53,SR-54.
              tr
                td.text-center #[b Otras prohibiciones]
                td SR-20, SR-28, SR-28A, SR-29, SR-41, SR-43, SR-47.
              tr
                td.text-center #[b De restricción]
                td SR-11, SR-12, SR-13, SR-30, SR-30A, SR-30B, SR-31, SR-32, SR-33, SR-48.
              tr
                td.text-center #[b De obligación]
                td SR-03, SR-05, SR-07, SR-09, SR-17, SR-19, SR-35, SR-36, SR-38, SR-39, SR-44, SR-45, SR-46, SR-49.
              tr
                td.text-center #[b De autorización]
                td SR-34, SR40,SR42.
    p.mb-5 A continuación se exponen en el siguiente recurso los ejemplos de cada una de las señales reglamentarias de prohibición:
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema6/img6.svg' alt='')
        p.text-center #[b Señales de prohibición primer grupo]
        p.text-center Prohibición de maniobras y giros
        .row.justify-content-center
          .col-auto
            a.boton.color-acento-botones.me-3.anexo-1.indicador__container(@click="modal1 = true")
              span Ver señales
              i.fas.fa-file-download
              .indicador--click(v-if="mostrarIndicador")
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema6/img7.svg' alt='')
        p.text-center #[b Señales preventivas segundo grupo]
        p.text-center Prohibición de maniobras y giros
        .row.justify-content-center
          .col-auto
            a.boton.color-acento-botones.me-3.anexo-2.indicador__container(@click="modal2 = true")
              span Ver señales
              i.fas.fa-file-download
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema6/img8.svg' alt='')
        p.text-center #[b Señales de prohibición tercer grupo]
        p.text-center Otras prohibiciones relacionadas a velocidad, luces, tipo de vehículo, etc.
        .row.justify-content-center
          .col-auto
            a.boton.color-acento-botones.me-3.anexo-3.indicador__container(@click="modal3 = true")
              span Ver señales
              i.fas.fa-file-download
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema6/img9.svg' alt='')
        p.text-center #[b Señales de prohibición cuarto grupo]
        p.text-center Prohibición de maniobras y circulación.
        .row.justify-content-center
          .col-auto
            a.boton.color-acento-botones.me-3.anexo-4.indicador__container(@click="modal4 = true")
              span Ver señales
              i.fas.fa-file-download
    .row.align-items-center.mb-4
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/tema6/img3.svg', style="width: 50px" ,alt='').m-auto
      .col-auto.bg-c11(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Señales preventivas
    .row.align-items-center.mb-5
      .col.mb-4.mb-lg-0
        p.mb-0 También denominadas señales de advertencia de peligro están diseñadas para indicar previamente al conductor la existencia de riesgos o situaciones imprevistas de forma permanente o temporal presentadas en la vía o zonas adyacentes.
      .col-lg-auto
        figure
          img(src='@/assets/curso/tema6/img10.svg', style="width: 170px" ,alt='').m-auto
    p.mb-5 De acuerdo con el origen de los riesgos que previenen, las señales preventivas se clasifican en:
    .row.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          p.mb-0 #[b Tabla 4]. Señales preventivas y su clasificación
        .tabla-a.color-acento-botones
          table
            tbody
              tr(style="background-color: #4D4D4F")
                td.text-center(width="20%") #[b.text-white Clasificación de las Señales preventivas]
                td.text-center #[b.text-white Señal Preventiva (SP)]
              tr
                td.text-center(rowspan="2") #[b Preventivas sobre características geométricas de la vía]
                td #[b De curvatura horizontal]: SP-01, SP-02, SP-03, SP-04, SP-05, SP-06, SP-07, SP-08, SP-09, SP-10, SP-69, SP-70, SP-75.
              tr
                td #[b Pendientes longitudinales]: SP-27, SP-27A.
              tr
                td.text-center #[b Preventivas relacionadas con la superficie de rodadura]
                td SP-24, SP-25, SP-25A, SP-26, SP-57.
              tr
                td.text-center #[b Preventivas sobre restricciones físicas de la vía]
                td SP-28, SP-30, SP-31, SP-32, SP-34, SP-35, SP-36, SP-38, SP-50, SP-51.
              tr
                td.text-center #[b Preventivas de intersecciones con otras vías]
                td SP-11, SP-12, SP-13, SP-14, SP-15, SP-16, SP-17, SP-18, SP-19, SP-20, SP-21, SP-22, SP-52, SP-52a, SP-53, SP-54.
              tr
                td.text-center #[b Preventivas sobre características operativas de la vía]
                td SP-23, SP-29, SP-33, SP-39, SP-41, SP-43, SP-45, SP-46, SP-46ª, SP-46b, SP-47, SP-47ª, SP-47b, SP-48, SP-49, SP-55, SP-55ª, SP-56, SP-56ª, SP-59, SP-59ª, SP-59b, SP-68.
              tr
                td.text-center #[b Preventivas sobre situaciones especiales]
                td
                  p.mb-0 #[b Preventivas sobre situaciones especiales]: SP-37, SP-42.
                  p.mb-0 #[b Superficie deslizante]: SP-44.
                  p.mb-0 #[b Riesgo de accidente]: SP-67.
                  p.mb-0 #[b Proyección de gravilla]: SP-71.
                  p.mb-0 #[b Salida de vehículos de bomberos]: SP-72.
                  p.mb-0 #[b Ráfagas de viento lateral]: SP-73.
                  p.mb-0 #[b Desnivel severo]: SP-74.
    p.mb-5 A continuación puede observar la representación visual de cada una de las señales preventivas sobre características geométricas de la vía y su clasificación mencionadas en la tabla anterior.
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema6/img11.svg' alt='')
        p.text-center #[b Señales preventivas primer grupo]
        p.text-center De curvatura horizontal.
        .row.justify-content-center
          .col-auto
            a.boton.color-acento-botones.me-3.anexo-5.indicador__container(@click="modal5 = true")
              span Ver señales
              i.fas.fa-file-download
              .indicador--click(v-if="mostrarIndicador")
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema6/img12.svg' alt='')
        p.text-center #[b Señales preventivas segundo grupo]
        ul.lista-ul--color
          li.d-flex
            i.fas.fa-car-side(style="color: #D40A32")
            | Pendientes longitudinales.
          li.d-flex
            i.fas.fa-car-side(style="color: #D40A32")
            | Preventivas relacionadas con la superficie de rodadura.
          li.d-flex
            i.fas.fa-car-side(style="color: #D40A32")
            | Preventivas sobre restricciones  físicas de la vía.
        .row.justify-content-center
          .col-auto
            a.boton.color-acento-botones.me-3.anexo-6.indicador__container(@click="modal6 = true")
              span Ver señales
              i.fas.fa-file-download
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema6/img13.svg' alt='')
        p.text-center #[b Señales preventivas tercer grupo]
        p.text-center  Preventivas de Intersecciones con otras vías.
        .row.justify-content-center
          .col-auto
            a.boton.color-acento-botones.me-3.anexo-7.indicador__container(@click="modal7 = true")
              span Ver señales
              i.fas.fa-file-download
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema6/img14.svg' alt='')
        p.text-center #[b Señales preventivas cuarto grupo]
        ul.lista-ul--color
          li.d-flex
            i.fas.fa-car-side(style="color: #D40A32")
            | Preventivas sobre características operativas de la vía.
          li.d-flex
            i.fas.fa-car-side(style="color: #D40A32")
            | Preventivas sobre situaciones especiales.
        .row.justify-content-center
          .col-auto
            a.boton.color-acento-botones.me-3.anexo-8.indicador__container(@click="modal8 = true")
              span Ver señales
              i.fas.fa-file-download
    .row.align-items-center.mb-4
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/tema6/img3.svg', style="width: 50px" ,alt='').m-auto
      .col-auto.bg-c11(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Señales informativas
    .row.align-items-center.mb-5
      .col.mb-4.mb-lg-0
        p.mb-0 Dan información acerca de distancias a ciudades y localidades, kilómetros de rutas, nombres de calles, lugares de interés turístico, servicios al usuario, entre otros para llegar de manera segura, simple y directa a nuestros destinos.
      .col-lg-auto
        figure
          img(src='@/assets/curso/tema6/img15.svg', style="width: 170px" ,alt='').m-auto
    .row.bg-c12
      .col-12
        .p-5
          p #[b A continuación se verá la representación visual de cada una de las señales informativas de distancias a ciudades y localidades.]
          .row.justify-content-center.mb-5
            .col-11.col-md-8.col-lg.bg-c13.m-2
              .p-4
                figure.mb-4
                  img(src='@/assets/curso/tema6/img17.svg', style="width: 170px" ,alt='').m-auto
                p.text-center #[b Señales informativas primer grupo]
                ul.lista-ul--color
                  li.d-flex
                    i.fas.fa-car-side(style="color: #D40A32")
                    | Direcciones hacia destinos, calles o rutas.
                  li.d-flex
                    i.fas.fa-car-side(style="color: #D40A32")
                    | Hacia dónde conduce la vía.
                  li.d-flex
                    i.fas.fa-car-side(style="color: #D40A32")
                    | Enlaces o empalmes con otras vías.
                  li.d-flex
                    i.fas.fa-car-side(style="color: #D40A32")
                    | Carriles apropiados para cada destino.
                  li.d-flex
                    i.fas.fa-car-side(style="color: #D40A32")
                    | Inicio de la salida a otras vías.
                  li.d-flex
                    i.fas.fa-car-side(style="color: #D40A32")
                    | Distancias a que se encuentran los destinos.
                  li.d-flex
                    i.fas.fa-car-side(style="color: #D40A32")
                    | Hito kilométrico a lo largo de la vía.
                  li.d-flex
                    i.fas.fa-car-side(style="color: #D40A32")
                    | Identificación de rutas y calles.
                .row.justify-content-center
                  .col-auto
                    a.boton.color-acento-botones.me-3.anexo-9.indicador__container(@click="modal9 = true")
                      span Ver señales
                      i.fas.fa-file-download
                      .indicador--click(v-if="mostrarIndicador")
            .col-11.col-md-8.col-lg.bg-c13.m-2
              .p-4
                figure.mb-4
                  img(src='@/assets/curso/tema6/img18.svg', style="width: 170px" ,alt='').m-auto
                p.text-center #[b Señales Informativas segundo grupo]
                p.text-center Servicios generales.
                .row.justify-content-center
                  .col-auto
                    a.boton.color-acento-botones.me-3.anexo-10.indicador__container(@click="modal10 = true")
                      span Ver señales
                      i.fas.fa-file-download
            .col-11.col-md-8.col-lg.bg-c13.m-2
              .p-4
                figure.mb-4
                  img(src='@/assets/curso/tema6/img19.svg', style="width: 170px" ,alt='').m-auto
                p.text-center #[b Señales informativas tercer grupo]
                ul.lista-ul--color
                  li.d-flex
                    i.fas.fa-car-side(style="color: #D40A32")
                    | Lugares de atractivo turístico existentes en las inmediaciones de la vía.
                  li.d-flex
                    i.fas.fa-car-side(style="color: #D40A32")
                    | Nombres de ciudades, ríos, puentes, calles, parques, lugares históricos y otros.
                  li.d-flex
                    i.fas.fa-car-side(style="color: #D40A32")
                    | Cualquier otra información de importancia para los conductores.
                .row.justify-content-center
                  .col-auto
                    a.boton.color-acento-botones.me-3.anexo-11.indicador__container(@click="modal11 = true")
                      span Ver señales
                      i.fas.fa-file-download
          .row.align-items-center.mb-4
            .col-auto.pe-0(style="z-index:2")
              figure
                img(src='@/assets/curso/tema6/img3.svg', style="width: 50px" ,alt='').m-auto
            .col-auto.bg-c11(style="z-index:1")
              .p-2
                h3.mb-0.ms-3 Demarcaciones
          .row.align-items-center.mb-5
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema6/img1.png', style="width: 450px" ,alt='').m-auto
            .col-lg-8
              p Se conocen como demarcaciones la aplicación de marcas viales conformadas por líneas, flechas, símbolos y letras que se adhieren sobre el pavimento, bordillos o sardineles y estructuras de las vías de circulación o adyacentes a ellas, así como a los dispositivos que se colocan sobre la superficie de rodadura para regular, canalizar el tránsito o indicar la presencia de obstáculos.
              p.mb-0 A continuación, se expone la aplicación de marcas viales por líneas, flechas, símbolos, letras y su clasificación, así:
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/YkheE91-VYc" title="Manual de señalización vial - Demarcaciones" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video. Manual de señalización vial - Demarcaciones

    ModalA(:abrir-modal.sync="modal1")
      figure
        img(src='@/assets/curso/tema6/ProhibicionPrimerGrupo.png', alt='Señales de prohibición de primer grupo')

    ModalA(:abrir-modal.sync="modal2")
      figure
        img(src='@/assets/curso/tema6/ProhibicionSegundoGrupo.png', alt='Señales de prohibición de segundo grupo')

    ModalA(:abrir-modal.sync="modal3")
      figure
        img(src='@/assets/curso/tema6/ProhibicionTercerGrupo.png', alt='Señales de prohibición de tercer grupo')

    ModalA(:abrir-modal.sync="modal4")
      figure
        img(src='@/assets/curso/tema6/ProhibicioncuartoGrupo.png', alt='Señales de prohibición de cuarto grupo')


    ModalA(:abrir-modal.sync="modal5")
      figure
        img(src='@/assets/curso/tema6/PreventivasPrimerGrupo.png', alt='Señales preventivas de primer grupo')

    ModalA(:abrir-modal.sync="modal6")
      figure
        img(src='@/assets/curso/tema6/PreventivasSegundoGrupo.png', alt='Señales preventivas de segundo grupo')

    ModalA(:abrir-modal.sync="modal7")
      figure
        img(src='@/assets/curso/tema6/PreventivasTercerGrupo.png', alt='Señales preventivas de tercer grupo')

    ModalA(:abrir-modal.sync="modal8")
      figure
        img(src='@/assets/curso/tema6/PreventivasCuartoGrupo.png', alt='Señales preventivas de cuarto grupo')


    ModalA(:abrir-modal.sync="modal9")
      figure
        img(src='@/assets/curso/tema6/informativasPrimerGrupo.png', alt='Señales informativas de primer grupo')

    ModalA(:abrir-modal.sync="modal10")
      figure
        img(src='@/assets/curso/tema6/InformativasSegundoGrupo.png', alt='Señales informativas de segundo grupo')

    ModalA(:abrir-modal.sync="modal11")
      figure
        img(src='@/assets/curso/tema6/InformativasTercerGrupo.png', alt='Señales informativas de tercer grupo')
</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
    modal6: false,
    modal7: false,
    modal8: false,
    modal9: false,
    modal10: false,
    modal11: false,
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
