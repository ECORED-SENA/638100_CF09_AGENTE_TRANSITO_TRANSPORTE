<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Utilización de carriles
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0
        p Saber cuál es la utilización correcta de los diferentes carriles de circulación en una vía, contribuye a la movilidad y la seguridad vial. Los vehículos deben circular por sus respectivos carriles y dentro de los límites de la demarcación horizontal o de piso.
        .row
          .col-12.bg-c3
            .p-4
              p.mb-0 Los carriles solo deben ser invadidos para realizar maniobras de cruce o de adelantamiento. Conducir por el carril adecuado permitirá un mejor flujo vehicular, ya que cada conductor se hará en el carril conforme a la velocidad que lleva de acuerdo con los límites establecidos y así no obstruye el paso de los demás vehículos.
      .col-lg-4
        figure
          img(src='@/assets/curso/tema9/img1.png', style="width: 450px" ,alt='').m-auto
    p.mb-5 Sobre la utilización correcta de los carriles, tenga en cuenta:
    .row.mb-5
      .col-12.bg-c14
        .p-4
          .row.align-items-center
            .col-lg-auto.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema9/img1.svg', style="width: 150px" ,alt='').m-auto
            .col-lg
              ul.lista-ul--color.mb-0
                li.d-flex
                  i.fas.fa-car-side(style="color: #D40A32")
                  | Por norma general en Colombia, se debe transitar por el carril derecho.
                li.d-flex
                  i.fas.fa-car-side(style="color: #D40A32")
                  | Se debe adelantar por el carril izquierdo.
                li.d-flex
                  i.fas.fa-car-side(style="color: #D40A32")
                  | Con la demarcación de piso se pueden diferenciar los diferentes carriles de circulación.
                li.d-flex
                  i.fas.fa-car-side(style="color: #D40A32")
                  | En la zona de seguridad y bermas está prohibido el tránsito de vehículos y llevar a cabo maniobras de adelantamiento.
    p.mb-5 El Código Nacional de Tránsito en el artículo 68, establece la utilización de carriles, por lo que los vehículos transitarán de la siguiente manera:
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4
          p.mb-0 #[b Tabla 7]. Utilización de carriles
        .tabla-a.color-acento-botones
          table
            tbody
              tr(style="background-color: #4D4D4F")
                td.text-center(width="30%") #[b.text-white Indicación]
                td.text-center #[b.text-white Descripción]
              tr
                td #[b Vía de sentido único de tránsito.]
                td
                  ul.lista-ul--color.mb-0
                    li.d-flex
                      i.fas.fa-car-side(style="color: #D40A32")
                      | En aquellas vías con velocidad reglamentada para sus carriles, los vehículos utilizarán el carril de acuerdo con su velocidad de marcha.
                    li.d-flex
                      i.fas.fa-car-side(style="color: #D40A32")
                      | En aquellas vías donde los carriles no tengan reglamentada su velocidad, los vehículos transitarán por el carril derecho y los demás carriles se emplearán para maniobras de adelantamiento.
              tr
                td #[b Vías de doble sentido de tránsito.]
                td
                  ul.lista-ul--color.mb-0
                    li.d-flex
                      i.fas.fa-car-side(style="color: #D40A32")
                      | De dos (2) carriles: por el carril de su derecha y utilizar con precaución el carril de su izquierda para maniobras de adelantamiento y respetar siempre la señalización respectiva.
                    li.d-flex
                      i.fas.fa-car-side(style="color: #D40A32")
                      | De tres (3) carriles: los vehículos deberán transitar por los carriles extremos que queden a su derecha; el carril central solo se utilizará en el sentido que señale la autoridad competente.
                    li.d-flex
                      i.fas.fa-car-side(style="color: #D40A32")
                      | De cuatro (4) carriles: los carriles exteriores se utilizarán para el tránsito ordinario de vehículos; y los interiores para maniobras de adelantamiento o circular a mayores velocidades dentro de los límites establecidos.

</template>

<script>
export default {
  name: 'Tema9',
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
