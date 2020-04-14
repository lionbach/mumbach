<template>
    <v-carousel interval="6000" cycle continuous hide-delimiters :show-arrows="false"  height="calc(100vh - 148px)">
        <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src">
            <v-row class="fill-height" align="center" justify="center">
                <div class="display-3 fondogris">{{item.text}}</div>
            </v-row>
        </v-carousel-item>
    </v-carousel>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        src: 'https://www.tendenciascocinasintegrales.com/wp-content/uploads/2018/07/DSC6713.jpg',
        text: 'Mesadas a medida',
      },
      {
        src: 'https://static.websguru.com.ar/var/m_d/d6/d61/24460/407038-Marmoleria-Marques-banner-2.jpg?v=7.3.44821',
        text: 'Bachas Johnson Acero',
      },
      {
        src: 'http://marmoleriacassini.com.ar/modules/highlighted/images/big/productos/cocina/Fotos-negocio-048.jpg',
        text: 'Revestimientos y pisos',
      },
      {
        src: 'http://marmoleriavillara.com.ar/marmoleria/wp-content/uploads/2015/04/slide1.jpg',
        text: 'Granitos y marmoles nacionales e importados',
      },
    ],
  }),
};
</script>

<style scoped>
  .fondogris {
    background-color: rgba(81, 81, 81, 0.8);
    margin: 25px;
    padding: 5px;
    color: white;
  }
</style>