<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Manejo defensivo
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema4/img1.png', style="width: 480px" ,alt='').m-auto
      .col-lg-8
        p.mb-0 Al conducir un vehículo se quisiera tener la garantía de no tener que correr riesgos que pongan en peligro la vida del ser humano ni enfrentarse a situaciones adversas o infortunadas dentro de los desplazamientos, pero es inevitable que causas ajenas provoquen accidentes de tránsito o situaciones peligrosas.
    .row.mb-5
      .col-12.bg-c7
        .p-4
          p.mb-0 Es por lo anterior que surge el concepto de #[b manejo defensivo] que se constituye en un conjunto de herramientas, estrategias y habilidades en la conducción que ayudan a disminuir los accidentes de tránsito y sus efectos, anticipándose a los hechos, a las situaciones de peligro y estar atentos a los errores que puedan cometer otros actores viales para actuar de forma correcta y oportuna, tomando las decisiones acertadas para poner a salvo la vida del conductor y demás usuarios de la vía y que, por consiguiente, evitarán desenlaces infortunados.
    .row.mb-5
      .col-12.bg-c4
        .p-4
          .row.align-items-center
            .col-md-auto.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img2.svg', style="width: 70px" ,alt='').m-auto
            .col
              p.mb-0 En este sentido el objetivo del manejo defensivo es generar seguridad a los diferentes actores viales, reduciendo el riesgo de accidentes y su impacto sobre los involucrados en un evento de tránsito.
    p.mb-5 Los aspectos más importantes a tener en cuenta en el manejo defensivo son:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/FkOknFU9FlQ?si=YJCEQWvh46_ktgrz" title="Generalidades del manejo defensivo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Generalidades del manejo defensivo
    .row
      .col-12.bg-c3
        .p-4
          p.mb-0 En relación con el manejo defensivo es importante resaltar las técnicas de conducción las cuales resultan del aprendizaje continuo y de la experiencia que se va adquiriendo a través de la práctica, donde se desarrollarán habilidades y destrezas que traen consigo un mejor desempeño, tanto del conductor como del vehículo, donde se podrán llevar a cabo maniobras especiales con movimientos más precisos y seguros que no pongan en riesgo al conductor ni a los demás usuarios de la vía.

</template>

<script>
export default {
  name: 'Tema4',
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
