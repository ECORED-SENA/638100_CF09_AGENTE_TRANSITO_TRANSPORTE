<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Velocidades de circulación en Colombia
    .row.justify-content-center.mb-5
      .col-md-9.col-lg.bg-c8
        .p-4
          p.mt-0.mt-lg-5 A menudo se suele escuchar sobre siniestros viales donde se habla que la causa fue exceso de velocidad, aunque realmente la velocidad es el resultado de una decisión tomada por el conductor, ya que es él quien decide a qué velocidad llevar su vehículo y cumplir o no con los límites de velocidad establecidos en la normatividad.
          p.mb-0 #[b En la actualidad, los vehículos ofrecen diseños y condiciones que brindan comodidad, estabilidad y seguridad al conductor lo que hace que tome actitudes riesgosas y confiadas al volante.]
      .col-lg-auto.px-0
        figure
          img(src='@/assets/curso/tema5/img1.png', style="width: 487px" ,alt='').m-auto
    .row.bg-c9
      .col-12
        .px-5
          .row.mb-5
            .col-12.bg-c4
              .p-4
                .row.align-items-center
                  .col-md-auto.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img2.svg', style="width: 70px" ,alt='').m-auto
                  .col
                    p.mb-0 Entiéndase por velocidad la relación que se establece entre el espacio recorrido por un objeto (vehículo) y el tiempo que gasta en recorrer ese espacio. Generalmente, su unidad de medida es km/h, por ejemplo: 60 km/h, significa que un vehículo recorre sesenta kilómetros en una hora.
          p.mb-5 #[b En relación con la velocidad, se deben tener presentes algunos aspectos clave como los que se detallan a continuación:]
          .tarjeta.tarjeta--azul.mb-5
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.justify-content-center
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b Velocidad y afectación motora]
                    p.mb-0 La velocidad afecta tanto a la distancia de frenado como a la capacidad y tiempo de reacción. A mayor velocidad, menor capacidad de reacción, además de aumentar la detención del vehículo, la distancia de frenado y la probabilidad que el conductor pierda con mayor facilidad el control del vehículo, impidiendo que los otros usuarios de la vía también puedan advertir el peligro y reaccionar adecuadamente. Así mismo, a mayor velocidad se van a provocar lesiones más severas en un accidente de tránsito.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema5/img2.png', style="width: 450px" ,alt='').m-auto
                .row.justify-content-center
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b Factor humano]
                    p.mb-0 Es la persona que decide la velocidad del vehículo, generalmente los conductores jóvenes conducen a velocidades más altas, los conductores que llevan pasajeros toman mayores precauciones y conducen a menor velocidad en comparación con una persona que va sola en el vehículo. Si el conductor está familiarizado con la carretera, existe la posibilidad de que decida conducir a mayor velocidad.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema5/img3.png', style="width: 450px" ,alt='').m-auto
                .row.justify-content-center
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b Factor vehículo]
                    p.mb-0 Puede influir en la velocidad en cuanto a que las características del vehículo en lo referente a la seguridad activa (carrocería, neumáticos, sistemas de frenado, dirección, suspensión, confort, entre otros) y la seguridad pasiva (cinturón de seguridad de tres puntos, airbags, arcos de protección antivuelco, etc.), le generen precisamente confianza y seguridad al conductor para aumentar la velocidad del vehículo.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema5/img4.png', style="width: 450px" ,alt='').m-auto
                .row.justify-content-center
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b Factor entorno]
                    p.mb-0 En la medida que la vía ofrezca diseños de trazado y condiciones de circulación segura, una vía pavimentada, con buena visibilidad, bien señalizada provocará que se aumente la velocidad y las condiciones climáticas harán que la velocidad se vea reducida y el conductor no asuma riesgos innecesarios.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema5/img5.png', style="width: 450px" ,alt='').m-auto
    p.mb-5 Las velocidades establecidas para Colombia están estipuladas en la ley 1239 de 2008, así:
    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-4
          p.mb-0 #[b Tabla 2]. Velocidades permitidas en Colombia
        .tabla-a.color-acento-botones
          table
            tbody
              tr(style="background-color: #4D4D4F")
                td.text-center(width="20%") #[b.text-white Norma]
                td.text-center #[b.text-white Descripción]
              tr
                td.text-center #[b Código Nacional de Tránsito, artículo 106.]
                td Límites de velocidad en vías urbanas y carreteras municipales En las vías urbanas las velocidades máximas y mínimas para vehículos de servicio público o particular será determinada y debidamente señalizada por la autoridad de tránsito competente en el distrito o municipio respectivo. En ningún caso podrá sobrepasar los 80 kilómetros por hora.
              tr
                td.text-center #[b Código Nacional de Tránsito, artículo 106.]
                td Límites de velocidad en vías urbanas y carreteras municipales. El límite de velocidad para los vehículos de servicio público, de carga y de transporte escolar, será de sesenta (60) kilómetros por hora. La velocidad en zonas escolares y en zonas residenciales será hasta de treinta (30) kilómetros por hora.
              tr
                td.text-center #[b Código Nacional de Tránsito, artículo 107.]
                td Límites de velocidad en carreteras nacionales y departamentales. En las carreteras nacionales y departamentales las velocidades autorizadas para vehículos públicos o privados, serán determinadas por el Ministerio de Transporte o la gobernación, según sea el caso teniendo en cuenta las especificaciones de la vía. En ningún caso podrá sobrepasar los 120 kilómetros por hora.
              tr
                td.text-center #[b Código Nacional de Tránsito, artículo 107.]
                td
                  p Límites de velocidad en carreteras nacionales y departamentales. Para el servicio público, de carga y de transporte escolar el límite de velocidad en ningún caso podrá exceder los ochenta (80) kilómetros por hora.
                  p.mb-0 Será obligación de las autoridades mencionadas, la debida señalización de estas restricciones.
              tr
                td(colspan="2")
                  p #[b Parágrafo]
                  p.mb-0 La entidad encargada de fijar la velocidad máxima y mínima, en las zonas urbanas de que trata el artículo 106 y en las carreteras nacionales y departamentales de que trata este artículo, debe establecer los límites de velocidad de forma sectorizada, razonable, apropiada y coherente con el tráfico vehicular, las condiciones del medio ambiente, la infraestructura vial, el estado de las vías, visibilidad, las especificaciones de la vía, su velocidad de diseño y las características de operación de la vía.

</template>

<script>
export default {
  name: 'Tema5',
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
