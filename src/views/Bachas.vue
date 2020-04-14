<template>
    <v-container fluid>

      <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <v-card height="100%">
          <v-toolbar dark>
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Settings</v-toolbar-title>
          </v-toolbar>
          <v-img :src="dialog_src" height="calc(100% - 80px)" contain>
          </v-img>
        </v-card>
      </v-dialog>

      <v-row dense>
        <v-col v-for="card in cards" :key="card.title" cols="4">
          <v-card dark>
            <v-img :src="card.src" class="white--text align-end" height="400px">
            </v-img>

            <v-card-actions>
              <v-card-title v-text="card.title"></v-card-title>
              <v-spacer></v-spacer>

              <v-btn @click="dialog_src = card.medida;dialog = true">
                Medidas
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      dialog_src:'https://www.johnsonacero.com/wp-content/uploads/2015/01/E28-e1430738061908.jpg',
      dialog_text:"name",
      cards: [
        {
            title: 'E28',
            src: 'https://www.johnsonacero.com/wp-content/uploads/2015/01/E28-e1430738061908.jpg',
            medida:''
        },
        {
            title: 'E37',
            src: 'https://www.johnsonacero.com/wp-content/uploads/2015/01/E37-e1430738096487.jpg',
            medida:''
        },
        {
            title: 'Z52',
            src: 'https://www.johnsonacero.com/wp-content/uploads/2015/01/Z52-e1430737960597.jpg',
            medida:''
        },
        {
            title: 'LUXOR MINI SI55 A',
            src: 'https://www.johnsonacero.com/wp-content/uploads/2015/01/IMG_6677-Large1-e1421881027494.jpg',
            medida:'https://www.johnsonacero.com/wp-content/uploads/2015/01/LUXOR-MINI-SI55-A.jpg',
            dialog:'false'
        },
        {
            title: 'LUXOR SI71 A',
            src: 'https://www.johnsonacero.com/wp-content/uploads/2015/01/Luxor-Compact-Large-e1489527596748.jpg',
            medida:'https://www.johnsonacero.com/wp-content/uploads/2015/01/Luxor-Compact-SI71-A-Luxor-Compact-SI71-STA.jpg',
            dialog:'false'
        },
        {
            title: 'LUXOR SI85 A',
            src: 'https://www.johnsonacero.com/wp-content/uploads/2015/01/LUXOR-Large-e1489527216393.jpg',
            medida:'https://www.johnsonacero.com/wp-content/uploads/2015/01/Luxor-SI85-A-Luxor-SI85-STA.jpg',
            dialog:'false'
        },
      ],
    }),
  }
</script>

<style scoped>
  
</style>