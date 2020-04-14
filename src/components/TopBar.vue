<template>
  <div class="TopBar">
    <v-app-bar height="64" app dark>
      <img src="../../public/logo-mmm-x1.png">
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-divider vertical></v-divider>
        <v-btn to="/" text>Inicio</v-btn>
        <v-divider vertical></v-divider>
        <v-btn to="/inicio" text>Granitos y marmoles</v-btn>
        <v-divider vertical></v-divider>
        <v-btn to="/bachas" text>Bachas</v-btn>
        <v-divider vertical></v-divider>
        <v-btn text>Presupuestos</v-btn>
        <v-divider vertical></v-divider>
        <v-btn to="/about" text>Contacto</v-btn>
        <v-divider vertical></v-divider>
      </v-toolbar-items>

      <v-toolbar-items class="hidden-md-and-up">
        <v-divider vertical></v-divider>
        <v-btn text @click.stop="drawer = !drawer">Menu</v-btn>
        <v-divider vertical></v-divider>
      </v-toolbar-items>

    </v-app-bar>


    <v-navigation-drawer v-model="drawer" fixed right temporary dark>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            MENU
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list>
        <v-divider></v-divider>
        <v-list-item to="/" link>
          <v-list-item-content>
            <v-list-item-title>INICIO</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item to="/inicio" link>
          <v-list-item-content>
            <v-list-item-title>GRANITOS Y MARMOLES</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item to="/bachas" link>
          <v-list-item-content>
            <v-list-item-title>BACHAS</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title>PRESUPUESTOS</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item to="/about" link>
          <v-list-item-content>
            <v-list-item-title>CONTACTO</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
      </v-list>

    </v-navigation-drawer>


  </div>
</template>

<script>
export default {
  name: 'TopBar',

  data: () => ({
    drawer: null,
    items: [
      { title: 'Home', icon: 'dashboard' },
      { title: 'About', icon: 'question_answer' },
    ],
  }),
};
</script>
