
<template>
    <v-footer dark class="font-weight-medium">
      <v-col class="text-start" cols="5" >
        Paso de los Libres
        <br>
        Corrientes - Argentina
      </v-col>
      <v-col class="text-center" cols="2" >
        {{ new Date().getFullYear() }}
      </v-col>
      <v-col class="text-end" cols="5" >
        Creado por LionBach
      </v-col>
    </v-footer>  
</template>

<script>
export default {
  name: 'Footer',

  data: () => ({
  }),
};
</script>