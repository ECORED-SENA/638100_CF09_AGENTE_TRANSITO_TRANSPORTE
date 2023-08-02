<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Distancias de seguridad
    .row.justify-content-center.mb-5
      .col-md-9.col-lg.bg-c15
        .p-4
          p.mt-0.mt-lg-4 Durante la circulación del tránsito se pueden presentar diversas situaciones inesperadas o sorpresivas que llevan a que el conductor deba reaccionar de manera inmediata ante ellas para evitar riesgos como atropellamientos, choques, colisiones, entre otros.
          p.mb-0 #[b Por eso es importante estar alerta, ir a velocidades permitidas y mantener las distancias de seguridad entre vehículo y vehículo, para reaccionar a tiempo y, en caso de tener que frenar repentinamente, no chocar con otro vehículo.]
      .col-lg-auto.px-0
        figure
          img(src='@/assets/curso/tema8/img1.png', style="width: 487px" ,alt='').m-auto
    p.mb-5 El Código Nacional de Tránsito en el artículo 108 establece que la separación entre dos vehículos que circulen, uno tras de otro en el mismo carril de una calzada, será de acuerdo con la velocidad, así:
    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-4
          p.mb-0 #[b Tabla 6]. Separación entre vehículos
        .tabla-a.color-acento-botones
          table
            tbody
              tr(style="background-color: #4D4D4F")
                td.text-center(width="50%") #[b.text-white Velocidades]
                td.text-center #[b.text-white Descripción]
              tr
                td Para velocidades de hasta treinta (30) kilómetros por hora.
                td Diez (10) metros.
              tr
                td Para velocidades entre treinta (30) y sesenta (60) kilómetros por hora.
                td Veinte (20) metros.
              tr
                td Para velocidades entre sesenta (60) y ochenta (80) kilómetros por hora.
                td Veinticinco (25) metros.
              tr
                td Para velocidades de ochenta (80) kilómetros en adelante.
                td Treinta (30) metros o la que la autoridad competente indique.
              tr
                td(colspan="2") En todos los casos, el conductor deberá atender al estado del suelo, humedad, visibilidad, peso del vehículo y otras condiciones que puedan alterar la capacidad de frenado de este, manteniendo una distancia prudente con el vehículo que antecede.
    p.mb-5 Estas son algunas generalidades que se deben conocer y comprender, en relación con las distancias de seguridad:
    .tarjeta.tarjeta--azul
      .p-4.p-lg-5
        SlyderA(tipo="b")
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Separación clave]
              p.mb-0 En las vías es necesario mantener una distancia de seguridad. Esta distancia hace referencia a la separación que debe existir entre dos vehículos, que evitará un choque en caso de frenado intempestivo. Cuanto mayor sea la distancia entre los dos vehículos, mayor espacio para realizar alguna maniobra que impida el choque, teniendo en cuenta la velocidad, las condiciones de la vía y del vehículo en cuanto a frenado y adherencia.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema8/img2.png', style="width: 450px" ,alt='').m-auto
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Distancia de detención o de parada]
              p.mb-0 Aquí intervienen la distancia de reacción y la distancia de frenado que, sumadas, dan como resultado la distancia de detención o de parada que se convierte, entonces, en la distancia o metros recorridos por el vehículo, desde el momento en que el conductor se percata del incidente hasta que el vehículo se detiene.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema8/img3.png', style="width: 450px" ,alt='').m-auto
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Distancia de reacción]
              p.mb-0 Es la distancia recorrida desde que el conductor percibe el peligro hasta que pisa el freno o se gira el volante. Este es el espacio recorrido desde que se ve el incidente hasta que se reacciona al incidente. Esta reacción tarda entre punto cinco (0,5) y un (1) segundo, el factor humano influye en la reacción en cuanto a experiencia, pericia, cansancio, estado físico, capacidad de reacción, etc.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema8/img4.png', style="width: 450px" ,alt='').m-auto
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Distancia de frenado]
              p.mb-0 Es la distancia recorrida entre el momento que el conductor pisa el freno hasta que el vehículo se detiene completamente. Aquí influyen el estado del vehículo en cuanto al estado de los frenos, la suspensión, etc., velocidad del vehículo, condiciones de la vía, condiciones meteorológicas como neblina, lluvia que afectaron la visibilidad para maniobrar adecuadamente.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema8/img5.png', style="width: 450px" ,alt='').m-auto

</template>

<script>
export default {
  name: 'Tema8',
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
