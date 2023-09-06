<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 11
      h1 Conceptos de mantenimiento: preventivo, correctivo, predictivo
    .row.justify-content-center.mb-5
      .col-md-9.col-lg.bg-c15
        .p-4
          p.mt-0.mt-lg-5 Un buen conductor tiene buenos hábitos y precisamente uno de los aspectos más importantes es mantener el vehículo en óptimas condiciones que garanticen una circulación segura en las vías, protegiendo su vida y la de los demás usuarios.
      .col-lg-auto.px-0
        figure
          img(src='@/assets/curso/tema12/img1.png', style="width: 487px" ,alt='').m-auto
    p El tener flota y equipos en buenas condiciones, garantiza disponibilidad y la posibilidad de ser competitivos en los diferentes mercados.
    p.mb-5 El mantenimiento, son todas aquellas acciones, procesos que de manera técnica tienen como fin y permiten mantener en buenas condiciones el funcionamiento de los equipos; podemos clasificarlos de la siguiente manera:
    TabsB.color-secundario
      .py-4.py-md-5(titulo="Mantenimiento correctivo" :icono="require('@/assets/curso/tema12/img1.svg')")
        .row.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            ul.lista-ul--color.mb-0
              li.d-flex
                i.fas.fa-car-side(style="color: #D40A32")
                | Este también puede catalogarse como un mantenimiento reactivo, los equipos están trabajando de manera permanente y, por lo tanto, los tiempos muertos o improductivos por efectos de estas revisiones son muy pocos.
              li.d-flex
                i.fas.fa-car-side(style="color: #D40A32")
                | En términos de costos son más altos, pues cuando un componente o una pieza se llevan a su límite de falla, generalmente pueden afectar otras piezas que también deben ser reparadas y los tiempos de intervención pueden ser un poco mayores.
              li.d-flex
                i.fas.fa-car-side(style="color: #D40A32")
                | Estos mantenimientos pueden clasificarse para equipos que en las operaciones o en las empresas sean de baja prioridad, en equipos de muy bajo valor o en equipos que no vayan a generar pérdidas económicas mayores o colapsen las operaciones.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema12/img2.png', style="width: 420px" ,alt='').m-auto
      .py-4.py-md-5(titulo="Mantenimiento preventivo" :icono="require('@/assets/curso/tema12/img2.svg')")
        .row.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            ul.lista-ul--color.mb-0
              li.d-flex
                i.fas.fa-car-side(style="color: #D40A32")
                span Es planeado de manera regular y ajustado a fechas definidas y a unos tiempos de intervención, independientemente de las condiciones operativas del equipo, con la finalidad de anticipar posibles daños o fallas.
              li.d-flex
                i.fas.fa-car-side(style="color: #D40A32")
                span Al ser un mantenimiento periódico reduce las consecuencias de daños mayores, pues son detectados a tiempo.
              li.d-flex
                i.fas.fa-car-side(style="color: #D40A32")
                span Para estas revisiones es muy conveniente elaborar un #[i check list], basado en las fichas técnicas de los equipos y las recomendaciones de los fabricantes, para preservar la integridad de las máquinas y tener una trazabilidad de los componentes revisados e intervenidos.
              li.d-flex
                i.fas.fa-car-side(style="color: #D40A32")
                span Es de gran utilidad tener bases de datos que permitan llevar estos controles y avisen las fechas próximas de los mantenimientos y a qué componentes.
              li.d-flex
                i.fas.fa-car-side(style="color: #D40A32")
                span La principal ventaja de este mantenimiento es que los equipos se conservan en mejores condiciones y pueden durar más tiempo operativos, bajando costos por intervenciones, pero esto también implica como desventaja realizar más inspecciones y mantenimientos menores en la vida útil del equipo.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema12/img3.png', style="width: 420px" ,alt='').m-auto
      .py-4.py-md-5(titulo="Mantenimiento predictivo" :icono="require('@/assets/curso/tema12/img3.svg')")
        .row.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            ul.lista-ul--color.mb-0
              li.d-flex
                i.fas.fa-car-side(style="color: #D40A32")
                | Se basa en realizar un diagnóstico y supervisión, basado en las características del equipo y fichas técnicas, para predecir y prevenir daños o averías y determinar cuando debería ser sustituido la pieza o componente antes que falle, es mucho más anticipado que el mantenimiento preventivo, pues no se interviene cuando la pieza falla.
              li.d-flex
                i.fas.fa-car-side(style="color: #D40A32")
                | Este mantenimiento tiene la ventaja que los equipos pueden tener más tiempo de operación y las intervenciones para su mantenimiento son muy rápidas, la desventaja radica en tener las herramientas y tecnologías que permitan hacer estos diagnósticos y determinar la periodicidad del cambio de todos los componentes.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema12/img4.png', style="width: 420px" ,alt='').m-auto

</template>

<script>
export default {
  name: 'Tema12',
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
