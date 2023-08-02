<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Maniobras de adelantamiento
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema7/img1.png', style="width: 450px" ,alt='').m-auto
      .col-lg-8
        p Un adelantamiento es una maniobra cuyo objetivo es sobrepasar a otro vehículo que va circulando adelante, en el mismo sentido y con una velocidad inferior a la que lleva el vehículo que quiere realizar el adelantamiento. Esta maniobra requiere de mucha atención, observación y seguridad para llevarla a cabo ya que es una acción riesgosa que puede traer consigo la posibilidad de accidente.
        .row
          .col-12.bg-c3
            .p-4
              p.mb-0 Adicionalmente, la mala realización de esta maniobra puede implicar multas de tránsito, si no se tiene en cuenta la señalización tanto vertical como la demarcación de piso que, en algunas partes de la vía, según su diseño geométrico (curvas, pendientes) y las condiciones de visibilidad, no lo permiten y prohíben esta maniobra.
    .row.mb-5
      .col-12.bg-c4
        .p-4
          .row.align-items-center
            .col-md-auto.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img2.svg', style="width: 70px" ,alt='').m-auto
            .col
              p.mb-0 Realizar esta maniobra implica considerar si, en verdad, es necesario llevarla a cabo, si hay las condiciones de visibilidad adecuada, si es una zona de cruce de peatones, si la línea central es continua y recordar que está prohibido adelantar por la derecha.
    p.mb-5 Algunos aspectos a tener en cuenta para realizar maniobras de adelantamiento son:
    .row.mb-5
      .col-12.bg-c14
        .p-4
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-car-side(style="color: #D40A32")
              | Asegurarse de que no hay otro vehículo atrás que quiera sobrepasarlo, haciendo uso de los espejos retrovisores, esto podrá originar un choque.
            li.d-flex
              i.fas.fa-car-side(style="color: #D40A32")
              | Si se tiene con el espacio suficiente para hacer la maniobra y está seguro de hacerlo, haga saber su intención con las luces direccionales.
            li.d-flex
              i.fas.fa-car-side(style="color: #D40A32")
              | Verificar si se cuenta con el tiempo, la distancia y la visibilidad para realizar el adelantamiento.
            li.d-flex
              i.fas.fa-car-side(style="color: #D40A32")
              | Ponga el vehículo en el cambio que le permita acelerar con rapidez.
            li.d-flex
              i.fas.fa-car-side(style="color: #D40A32")
              | Vuelva al carril de la derecha verificando que tiene el espacio y la separación suficiente con el carro que acaba de adelantar y antes de que se acerque un vehículo que venga en dirección opuesta y le obligue a incorporarse al carril derecho de manera abrupta.
            li.d-flex
              i.fas.fa-car-side(style="color: #D40A32")
              | Si otro vehículo trata de sobrepasarlo, disminuya la velocidad y manténganse a la derecha de este, dele el espacio para realizar la maniobra de adelantamiento, cuando el vehículo haya terminado la maniobra y vuelva al carril original, se podrá retomar la velocidad que llevaba antes del adelantamiento.
    p.mb-5 En lo relacionado con las maniobras de adelantamiento, se deben tener en cuenta los siguientes aspectos clave:
    p.text-center.mb-5.fs-3 #[b Maniobras de adelantamiento]
    .row.justify-content-center
      .col-lg-10
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul1")
          .row.justify-content-center.align-items-center(titulo="Distancias")
            .col-lg-6.mb-4.mb-lg-0
              p.mb-0 Infortunadamente hay vías con trayectos en los cuales es difícil adelantar, lo cual lleva a que conductores decidan hacer la maniobra sin contar con la distancia adecuada para hacerlo, poniendo en riesgo su vida y la de los demás usuarios de la vía.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema7/img1.svg', style="width: 170px" ,alt='').m-auto
          .row.justify-content-center.align-items-center(titulo="Invasión")
            .col-lg-6.mb-4.mb-lg-0
              p.mb-0 Toda maniobra para adelantar implica invadir el carril contrario o el carril de otros vehículos que van en sentido de circulación contrario, o no, y volver a su carril original de manera segura, ya que cuenta con el espacio suficiente y es visto por los vehículos que vienen de frente a él.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema7/img1.svg', style="width: 170px" ,alt='').m-auto
          .row.justify-content-center.align-items-center(titulo="Visibilidad")
            .col-lg-6.mb-4.mb-lg-0
              p.mb-0 Es común llevar a cabo maniobras indebidas, generalmente en zonas donde es prohibido adelantar. La Distancia de Visibilidad de Adelantamiento (DVA), es definida como la longitud continua de visibilidad que requiere un conductor para invadir el carril del sentido contrario para adelantar.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema7/img2.svg', style="width: 170px" ,alt='').m-auto
          .row.justify-content-center.align-items-center(titulo="Velocidad de circulación")
            .col-lg-6.mb-4.mb-lg-0
              p.mb-0 Esta distancia de visibilidad dependerá de la velocidad de circulación propia del vehículo que está llevando a cabo la maniobra de adelantamiento, de la velocidad del vehículo a adelantar y de la velocidad del vehículo que venga de frente o en sentido contrario y es importante calcularla para establecer si la maniobra se puede hacer con total seguridad o si se van a correr riesgos. Una velocidad de circulación mayor requiere una distancia de visibilidad de adelantamiento mayor.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema7/img3.svg', style="width: 170px" ,alt='').m-auto

</template>

<script>
export default {
  name: 'Tema7',
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
