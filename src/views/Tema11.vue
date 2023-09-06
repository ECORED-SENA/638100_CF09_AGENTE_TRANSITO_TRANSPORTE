<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 10
      h1 Técnicas para inspección de medios de transporte
    .row.justify-content-center.mb-5
      .col-md-9.col-lg.bg-c8
        .p-4
          p En pro de ayudar a la buena movilidad y la seguridad vial, surge la responsabilidad que se tiene de garantizar las óptimas condiciones de circulación del vehículo, cumpliendo con todos los requerimientos que exige la normatividad.
          p.mb-0 #[b Como buen hábito se debe hacer, frecuentemente, una revisión preoperacional del vehículo, teniendo en cuenta aspectos básicos y conforme a las recomendaciones dadas en el manual del fabricante.]
      .col-lg-auto.px-0
        figure
          img(src='@/assets/curso/tema11/img1.png', style="width: 487px" ,alt='').m-auto
    .row.mb-5
      .col-12.bg-c4
        .p-4
          .row.align-items-center
            .col-md-auto.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img2.svg', style="width: 70px" ,alt='').m-auto
            .col
              p.mb-0 Se deben hacer revisiones periódicamente por el personal idóneo y en lugares debidamente autorizados y certificados, pero el conductor puede realizar revisiones diarias teniendo en cuenta aspectos básicos del vehículo.
    .row.mb-5
      .col-12.bg-c14
        .p-4
          p Sobre la inspección de vehículos es necesario:
          ul.lista-ul--color.mb-0
            li.d-flex
              i.fas.fa-car-side(style="color: #D40A32")
              span Una revisión preoperacional es una herramienta que sirve para disminuir la probabilidad de un accidente.
            li.d-flex
              i.fas.fa-car-side(style="color: #D40A32")
              span Con estas revisiones se pueden detectar fallas y así se podrán corregir de manera oportuna.
            li.d-flex
              i.fas.fa-car-side(style="color: #D40A32")
              span Las inspecciones o revisiones se deben hacer de manera consciente y detenidamente para no pasar por alto ningún elemento que pueda poner en riesgo la seguridad del conductor, los ocupantes y los demás usuarios de la vía.
    p.mb-5 #[b.txt-c1 Las unidades de transporte se inspeccionan por seguridad de todos los actores viales, para preservar la vida, los bienes y los recursos, lo cual permite detectar un problema a tiempo y puede prevenir muchísimos inconvenientes]. Por lo anterior, se deben tener en cuenta los siguientes tips:
    .row.justify-content-center.mb-5
      .col-md-9.col-lg-5.m-2
        .row
          .col-12.px-0
            figure
              img(src='@/assets/curso/tema11/img2.png', style="width: 520px" ,alt='').m-auto
          .col-12.bg-c20
            .p-4
              p.text-center.text-white.mb-0 Usar todos sus sentidos,  como visión, olfato, tacto, oído, para identificar anomalías.
      .col-md-9.col-lg-5.m-2
        .row
          .col-12.px-0
            figure
              img(src='@/assets/curso/tema11/img3.png', style="width: 520px" ,alt='').m-auto
          .col-12.bg-c20
            .p-4
              p.text-center.text-white.mb-0 Revisar los medidores, para detectar algún problema.
      .col-lg-5
    p.mb-5 #[b En adición, tenga en cuenta revisar periódicamente los siguientes elementos:]
    .tarjeta.tarjeta--azul.mb-5
      .p-4.p-lg-5
        SlyderA(tipo="b")
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Llantas]
              p.mb-0 Con el uso, las llantas van perdiendo su agarre, por lo que, si no se les hace revisión periódica y cambio si se requiere, pueden ocasionar un accidente, en especial, cuando se va transitando por zonas húmedas.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema11/img4.png', style="width: 450px" ,alt='').m-auto
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Luces]
              p.mb-0 Las luces en buen estado son importantes porque le indican al peatón la ubicación del automóvil y su dirección, por lo que, si estas se encuentran dañadas, pueden ser causa de muertes en carretera.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema11/img5.png', style="width: 450px" ,alt='').m-auto
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Frenos]
              p.mb-0 El mantenimiento de los frenos es indispensable, porque de ellos depende que el conductor pueda o no detener el vehículo en un momento dado, por lo que, si no se les hace el debido proceso, pueden ocasionar daños irreparables para la vida o los bienes.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema11/img6.png', style="width: 450px" ,alt='').m-auto
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Conexiones para remolques]
              p.mb-0 La revisión de las conexiones para remolques es vital, ya que estas aseguran una carga, por lo que, si no está en excelentes condiciones, se pueden causar daños a terceros y hasta la muerte.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema11/img7.png', style="width: 450px" ,alt='').m-auto
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Dispositivos aseguramiento de carga]
              p.mb-0 La revisión de los dispositivos para el aseguramiento de carga, en especial cuando se trata de cargas largas o pesadas, es de vital importancia, ya que de ellos depende que esta permanezca en su lugar todo el tiempo, protegiendo la vida y los bienes ajenos.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema11/img8.png', style="width: 450px" ,alt='').m-auto
    p.mb-5 #[b Para afianzar los conceptos vistos, le invitamos a revisar los videos de la Agencia Nacional de Seguridad Vial sobre el tema:]
    .row.mb-5
      .col-auto
        a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=KndkCCX-VEE" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p La mecánica preventiva.
      .col-auto
        a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=1AnDxvpxIiM" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p Revisión técnico mecánica.
      .col-auto
        a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=XOrepCH9czw" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p Mitigando la siniestralidad.
    .row.align-items-center.mb-4
      .col-lg-8.mb-4.mb-lg-0
        p Con estas observaciones, se pueden detectar algunos problemas, como baja presión del aire, desgaste de las llantas u otro tipo de problemas.
        p Las técnicas de inspección a los equipos de transporte deben estar muy relacionadas con la integridad operativa y con la normatividad que esté vigente en el momento, es por esto que el punto de partida es el marco regulatorio, cuyas bases tienen sus orígenes en la Ley 769 de 2002.
        p.mb-0 Esta adopta el Código Nacional de Tránsito Terrestre, en el cual se reglamenta la revisión para todos los vehículos automotores y su alcance técnico, al definir los sistemas del vehículo al que se va a realizar la inspección, la cual deben hacer cumplir los Centros de Diagnóstico Automotriz (CDA), entidades que certifican el cumplimiento de la normatividad de los vehículos.
      .col-lg-4
        figure
          img(src='@/assets/curso/tema11/img9.png', style="width: 380px" ,alt='').m-auto
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema11/img10.png', style="width: 380px" ,alt='').m-auto
      .col-lg-8
        p Basados en esta normatividad, se le orienta al aprendiz para que conozca qué debe tener en cuenta para realizar sus listas de chequeo y sus inspecciones. Sin embargo, en la actualidad, también se cuenta con la Resolución 3768 de 2013, que es la que regula la Inspección Técnica Vehicular.
        p En el #[strong Código Nacional de Tránsito, el Artículo 28] dice textualmente que para que un vehículo pueda transitar por el territorio nacional:
        .bloque-texto-d.color-secundario.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            p.text-regular Debe garantizar como mínimo un perfecto funcionamiento de frenos, del sistema de dirección, del sistema de suspensión, del sistema de señales visuales y audibles permitidas, y del sistema de escape de gases; y demostrar un estado adecuado de llantas, del conjunto de vidrios de seguridad y de los espejos y cumplir con las normas de emisiones contaminantes que establezcan las autoridades ambientales.
            i.fas.fa-quote-right
    p.mb-5 #[b En los siguientes documentos, podrá afianzar los conocimientos adquiridos sobre las normatividades importantes a nivel nacional, por lo que le invitamos a descargarlos y revisarlos de manera autónoma.]
    .row.mb-5
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/ley-769-de-2002-codigo-nacional-de-transito_3704_0.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Ley 769 de 2002.
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Resolucion_3768_2013-Sep-26.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Resolución 3768 de 2013.
      .col-auto
        a.anexo.mb-4(href="https://www.aso-cda.org/wp-content/uploads/2017/08/LA-ITV-EN-COLOMBIA.pdf" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Inspección técnica vehicular.
    p.mb-5 Siguiendo con el tema, el alcance técnico contemplado en la norma verifica lo que se muestra a continuación (Código Nacional de Tránsito):
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0
        .tarjeta.tarjeta--azul
          .p-4
            SlyderA(tipo="b")
              .row.justify-content-center
                .col-10
                  .row.align-items-center.mb-3
                    .col-auto
                      figure
                        img(src='@/assets/curso/tema11/img12.png', style="width: 50px" ,alt='').m-auto
                    .col
                      p.mb-0 Estado de la carrocería.
                  .row.align-items-center.mb-3
                    .col-auto
                      figure
                        img(src='@/assets/curso/tema11/img13.png', style="width: 50px" ,alt='').m-auto
                    .col
                      p.mb-0 Niveles de emisión de gases y elementos contaminantes de acuerdo con la legislación vigente sobre la materia.
                  .row.align-items-center.mb-3
                    .col-auto
                      figure
                        img(src='@/assets/curso/tema11/img14.png', style="width: 50px" ,alt='').m-auto
                    .col
                      p.mb-0 Buen funcionamiento del sistema mecánico.
                  .row.align-items-center.mb-3
                    .col-auto
                      figure
                        img(src='@/assets/curso/tema11/img15.png', style="width: 50px" ,alt='').m-auto
                    .col
                      p.mb-0 Funcionamiento adecuado del sistema eléctrico y del conjunto óptico.
                  .row.align-items-center
                    .col-auto
                      figure
                        img(src='@/assets/curso/tema11/img16.png', style="width: 50px" ,alt='').m-auto
                    .col
                      p.mb-0 Eficiencia del sistema de combustión interna.
              .row.justify-content-center
                .col-10
                  .row.align-items-center.mb-3
                    .col-auto
                      figure
                        img(src='@/assets/curso/tema11/img17.png', style="width: 50px" ,alt='').m-auto
                    .col
                      p.mb-0 Elementos de seguridad.
                  .row.align-items-center.mb-3
                    .col-auto
                      figure
                        img(src='@/assets/curso/tema11/img18.png', style="width: 50px" ,alt='').m-auto
                    .col
                      p.mb-0 Buen estado del sistema de frenos, constatando, especialmente, en el caso en que este opere con aire, que no emita señales acústicas por encima de los niveles permitidos.
                  .row.align-items-center.mb-3
                    .col-auto
                      figure
                        img(src='@/assets/curso/tema11/img19.png', style="width: 50px" ,alt='').m-auto
                    .col
                      p.mb-0 Adecuado funcionamiento de las llantas del vehículo.
                  .row.align-items-center.mb-3
                    .col-auto
                      figure
                        img(src='@/assets/curso/tema11/img20.png', style="width: 50px" ,alt='').m-auto
                    .col
                      p.mb-0 Funcionamiento de los sistemas y elementos de emergencia (#[i airbags]).
                  .row.align-items-center
                    .col-auto
                      figure
                        img(src='@/assets/curso/tema11/img21.png', style="width: 50px" ,alt='').m-auto
                    .col
                      p.mb-0 Buen funcionamiento de los dispositivos utilizados para el cobro en la prestación del servicio público.
      .col-lg-4
        figure
          img(src='@/assets/curso/tema11/img11.png', style="width: 380px" ,alt='').m-auto
    p.mb-5 Estas revisiones están reglamentadas con base en las siguientes #[b.txt-c1 Normas Técnicas de Colombia: NTC 5375 y NTC 5385], dando alcance a las inspecciones #[b.txt-c1 sensoriales y mecanizadas]. La Norma 5375 define requisitos que deben cumplir los vehículos en las inspecciones y también indica cuándo este no cumple y genera un riesgo.
    .row.mb-5
      .col-12.d-none.d-lg-block
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema11/img22.png', alt='Texto que describa la imagen')
          .tarjeta.color-acento-botones1.p-3(x="34.3%" y="25.8%" numero="+")
            h5 Para la revisión exterior
            p Definida en la NTC 5375, los elementos a inspeccionar son:
            .row
              .col-6
                ul.lista-ul--color.mb-0
                  li.d-flex
                    i.fas.fa-car-side(style="color: #D40A32")
                    span Chasis.
                  li.d-flex
                    i.fas.fa-car-side(style="color: #D40A32")
                    span Carrocería.
                  li.d-flex
                    i.fas.fa-car-side(style="color: #D40A32")
                    span Limpiaparabrisas.
                  li.d-flex
                    i.fas.fa-car-side(style="color: #D40A32")
                    span Espejos retrovisores.
              .col-6
                ul.lista-ul--color.mb-0
                  li.d-flex
                    i.fas.fa-car-side(style="color: #D40A32")
                    span Escalones de ascenso.
                  li.d-flex
                    i.fas.fa-car-side(style="color: #D40A32")
                    span Soportes de llanta de repuesto.
                  li.d-flex
                    i.fas.fa-car-side(style="color: #D40A32")
                    span Vidrios.
                  li.d-flex
                    i.fas.fa-car-side(style="color: #D40A32")
                    span Dispositivos de retención de carga.
          .tarjeta.color-acento-botones1.p-3(x="39.6%" y="48%" numero="+")
            h5 Para la revisión interior
            p Basada en la seguridad pasiva del vehículo, la norma establece lo siguiente en la revisión:
            ul.lista-ul--color.mb-0
              li.d-flex
                i.fas.fa-car-side(style="color: #D40A32")
                span Habitáculo del conductor y pasajeros.
              li.d-flex
                i.fas.fa-car-side(style="color: #D40A32")
                span Cinturones de seguridad y anclajes.
              li.d-flex
                i.fas.fa-car-side(style="color: #D40A32")
                span Dispositivos de control y seguridad.
          .tarjeta.color-acento-botones1.p-3(x="50%" y="55%" numero="+")
            h5 Alumbrado y señalización
            p Es muy importante su adecuada revisión, ya que los equipos deben lograr permitir ver y ser vistos en sus desplazamientos, importante en la seguridad activa.
          .tarjeta.color-acento-botones1.p-3(x="60.4%" y="47.6%" numero="+")
            h5 Salidas de emergencia
            p Están dadas, sobre todo, en el transporte de pasajeros, para una adecuada evacuación en caso de emergencia; están reglamentadas en la NTC 5375.
          .tarjeta.color-acento-botones1.p-3(x="65.7%" y="25.8%" numero="+")
            h5 Sistema de frenos
            p Debe evaluarse en forma detallada.
      .col-12.d-block.d-lg-none
        figure.mb-5
          img(src='@/assets/curso/tema11/img23.png', style="width: 260px" ,alt='').m-auto
        .row.justify-content-center
          .col-md-8.mb-4
            .tarjeta-avatar
              img(src='@/assets/curso/tema11/img1.svg' alt='AvatarTop')
              .tarjeta.color-acento-botones1
                .p-4
                  p #[b Para la revisión exterior]
                  p Definida en la NTC 5375, los elementos a inspeccionar son:
                  ul.lista-ul--color.mb-0
                    li.d-flex
                      i.fas.fa-car-side(style="color: #D40A32")
                      span Chasis.
                    li.d-flex
                      i.fas.fa-car-side(style="color: #D40A32")
                      span Carrocería.
                    li.d-flex
                      i.fas.fa-car-side(style="color: #D40A32")
                      span Limpiaparabrisas.
                    li.d-flex
                      i.fas.fa-car-side(style="color: #D40A32")
                      span Espejos retrovisores.
                    li.d-flex
                      i.fas.fa-car-side(style="color: #D40A32")
                      span Escalones de ascenso.
                    li.d-flex
                      i.fas.fa-car-side(style="color: #D40A32")
                      span Soportes de llanta de repuesto.
                    li.d-flex
                      i.fas.fa-car-side(style="color: #D40A32")
                      span Vidrios.
                    li.d-flex
                      i.fas.fa-car-side(style="color: #D40A32")
                      span Dispositivos de retención de carga.
          .col-md-8.mb-4
            .tarjeta-avatar
              img(src='@/assets/curso/tema11/img2.svg' alt='AvatarTop')
              .tarjeta.color-acento-botones1
                .p-4
                  p #[b Para la revisión interior]
                  p Basada en la seguridad pasiva del vehículo, la norma establece lo siguiente en la revisión:
                  ul.lista-ul--color.mb-0
                    li.d-flex
                      i.fas.fa-car-side(style="color: #D40A32")
                      span Habitáculo del conductor y pasajeros.
                    li.d-flex
                      i.fas.fa-car-side(style="color: #D40A32")
                      span Cinturones de seguridad y anclajes.
                    li.d-flex
                      i.fas.fa-car-side(style="color: #D40A32")
                      span Dispositivos de control y seguridad.
          .col-md-8.mb-4
            .tarjeta-avatar
              img(src='@/assets/curso/tema11/img3.svg' alt='AvatarTop')
              .tarjeta.color-acento-botones1
                .p-4
                  p #[b Alumbrado y señalización]
                  p Es muy importante su adecuada revisión, ya que los equipos deben lograr permitir ver y ser vistos en sus desplazamientos, importante en la seguridad activa.
          .col-md-8.mb-4
            .tarjeta-avatar
              img(src='@/assets/curso/tema11/img4.svg' alt='AvatarTop')
              .tarjeta.color-acento-botones1
                .p-4
                  p #[b Salidas de emergencia]
                  p Están dadas, sobre todo, en el transporte de pasajeros, para una adecuada evacuación en caso de emergencia; están reglamentadas en la NTC 5375.
          .col-md-8.mb-4
            .tarjeta-avatar
              img(src='@/assets/curso/tema11/img5.svg' alt='AvatarTop')
              .tarjeta.color-acento-botones1
                .p-4
                  p #[b Sistema de frenos]
                  p Debe evaluarse en forma detallada.
    .row.justify-content-center.mb-5
      .col-11.col-md-8.col-lg.bg-c21.m-2
        .p-4
          .row
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema11/img6.svg', style="width: 70px" ,alt='').m-auto
            .col
              p #[b NTC 5375]
              p Para aprender más sobre: sistema de suspensión, sistema de dirección, rines y llantas, motor, sistema de combustible, sistema de transmisión, etc., puede descargar el documento y revisarlo para afianzar sus conocimientos sobre NTC 5375.
              .row
                .col-auto
                  a.boton.color-acento-botones.me-3(:href="obtenerLink('/downloads/ntc-5375.pdf')" target="_blank" type="application/pdf")
                    span Descargar
                    i.fas.fa-file-download
      .col-11.col-md-8.col-lg.bg-c22.m-2
        .p-4
          .row
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema11/img6.svg', style="width: 70px" ,alt='').m-auto
            .col
              p.text-white #[b NTC 5385]
              p.text-white La NTC 5385 es de vital importancia para su conocimiento, por lo que le invitamos a descargar y revisar el documento con el fin de profundizar en el tema.
              .row
                .col-auto
                  a.boton.color-acento-botones.me-3(:href="obtenerLink('/downloads/ntc-5385.pdf')" target="_blank" type="application/pdf")
                    span Descargar
                    i.fas.fa-file-download
    p.mb-5 Por otro lado, también se habla de la inspección de unidades de transporte, por lo que se presenta un panorama general de cómo realizarla, para lo cual se hace necesario apoyarse en los sentidos, (inspecciones sensoriales), entre los cuales se tienen:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/QzWr2AecXZA" title="Inspecciones de unidades de transporte" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Inspecciones de unidades de transporte
    .row
      .col-12.bg-c4
        .p-4
          .row.align-items-center
            .col-md-auto.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img2.svg', style="width: 70px" ,alt='').m-auto
            .col
              p.mb-0 #[b ¡Importante!]
              p.mb-0 Esta lista de inspección es solo un indicador general, pero se debe realizar ajustada al tipo de modo de transporte, a la carga u operación específica y a la normatividad que esté en vigencia.

</template>

<script>
export default {
  name: 'Tema11',
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
