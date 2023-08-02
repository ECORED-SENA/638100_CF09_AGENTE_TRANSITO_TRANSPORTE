<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 Aquí finaliza el estudio de las temáticas de este componente formativo. En este punto, haga un análisis de la estructura que se muestra enseguida y registre su propia síntesis en su libreta personal de apuntes. Además, haga un repaso de los temas que considere necesarios. ¡Adelante!
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Esquema general de este componente formativo, que enuncia las temáticas desarrolladas en el mismo y destaca aspectos clave estudiados: Tema central: condiciones seguras de conducción según normatividad. Temas integradores: 1 Reglamentación, a partir de la cual se establece el orden y pautas para llevar a cabo la conducción. 2 Factor humano, que vincula los buenos hábitos y comportamientos en la conducción y las responsabilidades de las personas. 3 Mecánica básica, que incluye técnicas de inspección y mantenimiento y, con ella, se analizan fallas mecánicas que ponen en riesgo la seguridad.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
