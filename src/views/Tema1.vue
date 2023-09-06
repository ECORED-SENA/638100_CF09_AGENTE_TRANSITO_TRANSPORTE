<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0
      .titulo-principal__numero
        span 1
      h1 Reglamentación para conductores en Colombia
    .row.bg-c2
      .col-12
        .px-5.pt-5
          .row.mb-5
            .col-lg-7.mb-4.mb-lg-0
              p La movilidad de los actores viales (conductor, pasajero, peatón) requiere un conjunto de reglas de circulación, claras y específicas, las cuales se encuentran establecidas en un orden jerárquico, como lo establece la teoría pura del derecho que, para el caso colombiano, se encuentra estipulado en la Constitución Política de 1991. La Constitución establece la libre locomoción, regulada mediante Ley 769 de 2002 por la cual se expide el Código Nacional de Tránsito Terrestre y se dictan otras disposiciones.
              .row
                .col-12.bg-c3
                  .p-4
                    p.mb-0 Este Código rige en, absolutamente, todo el territorio nacional y cobija a todos los peatones, usuarios, pasajeros, conductores, motociclistas, ciclistas, agentes de tránsito y vehículos, por las vías públicas o privadas que están abiertas al público o en las vías privadas que internamente circulen.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema1/img1.png', style="width: 480px" ,alt='').m-auto
          .row.mb-5
            .col-12.bg-c4
              .p-4
                .row.align-items-center
                  .col-md-auto.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img2.svg', style="width: 70px" ,alt='').m-auto
                  .col
                    p.mb-0 En Colombia, es el Ministerio de Transporte quien define, orienta, vigila e inspecciona la ejecución de políticas nacionales en cuanto a tránsito se refiere, como máxima autoridad en lo que tiene que ver con tránsito y transporte, a su vez las autoridades de tránsito serán las encargadas de promover la difusión y el conocimiento de las disposiciones del Código Nacional de Tránsito.
          p.mb-5 Dentro de los documentos que son de carácter obligatorio al conducir un vehículo, se encuentran:
          .tarjeta.tarjeta--azul.mb-5
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.justify-content-center
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b Licencia de tránsito]
                    p.mb-0 Identifica al vehículo como legal, acredita la propiedad y autoriza para transitar por todo el territorio colombiano. Contiene información sobre marca, modelo, plazas, placa, cilindraje, motor, chasis, clase de vehículo, tipo de carrocería, tipo de combustible, color, nombre del propietario.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema1/img2.png', style="width: 450px" ,alt='').m-auto
                .row.justify-content-center
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b Licencia de conducción]
                    p.mb-0 Este es un documento público, personal e intransferible, expedido por la autoridad designada para este fin y con la cual acredita para la conducción de vehículos automotores dependiendo de la categoría que se obtenga, con validez en todo el territorio nacional.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema1/img3.png', style="width: 450px" ,alt='').m-auto
                .row.justify-content-center
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b Seguro Obligatorio de Accidentes de Tránsito (SOAT)]
                    p.mb-0 A través de este seguro se ampara los daños a personas que se causen en accidentes de tránsito, cubriendo servicios médicos hasta un máximo de 500 veces el (SMLV). Para gastos de transporte y movilización de la víctima, cubre hasta un máximo de 10 veces el salario mínimo legal diario vigente.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema1/img4.png', style="width: 450px" ,alt='').m-auto
                .row.justify-content-center
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b Certificado de Revisión Técnico-Mecánica y de Gases]
                    p.mb-0 Este aplica para todos los vehículos y certifica que se encuentren en buenas condiciones, garantizando la seguridad vial a todos los actores viales.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema1/img5.png', style="width: 450px" ,alt='').m-auto
                .row.justify-content-center
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b Las placas]
                    p.mb-0 Se constituye como un documento público válido en todo el territorio nacional que identifica de manera externa y privada el vehículo que, excepto motocicletas, deben contar con dos placas idénticas, que deben estar ubicadas en la parte delantera y trasera del vehículo, este elemento es diseñado y elaborado por el Ministerio de Transporte.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema1/img6.png', style="width: 450px" ,alt='').m-auto
          p.mb-5 La siguiente tabla le muestra las categorías de licencias de conducción vigentes para el territorio colombiano:
    .row.justify-content-center
      .col-lg-11
        .titulo-sexto.color-acento-contenido.mb-4
          p.mb-0 #[b Tabla 1]. Categorías de licencias de conducción
        .tabla-a.color-acento-botones
          table
            tbody
              tr
                td(rowspan="2" style="background-color: #4D4D4F") #[b.text-white Vehículos particulares]
                td Motocicletas
                td #[b A1]: Motocicletas con cilindrada hasta 125 c.c.
                td #[b A2]: Motocicletas y mototriciclos con cilindrada mayor a 125 c.c.
                td
              tr
                td Vehículos
                td #[b B1]: Automóviles, motocarros, cuatrimotos, camperos, camionetas y microbuses de servicio particular.
                td #[b B2]: Camiones rígidos, busetas y buses de servicio particular.
                td #[b B3]: Vehículos articulados servicio particular.
              tr
                td(style="background-color: #4D4D4F") #[b.text-white Servicio público]
                td Vehículos
                td #[b C1]: Automóviles, camperos, camionetas y microbuses de servicio público.
                td #[b C2]: Camiones rígidos, busetas y buses de servicio público.
                td #[b C3]: Vehículos articulados servicio público.
              tr
                td(colspan="5") No es restrictivo que en la licencia de conducción de mayor categoría se pueda operar vehículos de categoría inferior.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
