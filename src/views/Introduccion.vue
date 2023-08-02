<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.mb-5
      .col-12.bg-c1
        .p-4
          .row.align-items-center
            .col-md-auto
              figure
                img(src='@/assets/curso/intro/img1.svg', style="width: 80px" ,alt='').m-auto
            .col
              p.mb-0 Aquí comienza el estudio del componente formativo #[b “Buenas prácticas en la conducción de vehículos”]. Un módulo de estudio pensado para usted. Comience su ruta por los contenidos, visualizando con atención el vídeo que se muestra enseguida. #[b ¡Adelante!]
    figure(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/fxV91y3favw" title="Buenas prácticas en la conducción de vehículos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Buenas prácticas en la conducción de vehículos

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
