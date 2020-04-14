<template>
  <div class="home">

    <section id="hero">
      <v-row no-gutters>
        <v-img height="80vh" src="../../public/001.jpeg">
          <v-theme-provider dark>
            <v-container fill-height>
              <v-row align="center" class="white--text mx-auto" justify="center">
                <v-col class="white--text text-center" cols="12" tag="h1">
                  <span class="font-weight-light display-2">
                    BIENVENIDO A
                  </span>
                  <br>
                  <span class="font-weight-black display-3">
                    MUMBACH MARMOLES Y MUEBLES
                  </span>
                </v-col>
              </v-row>
            </v-container>
          </v-theme-provider>
        </v-img>
      </v-row>
    </section>

    <section id="about-me">
      <div class="py-6"></div>
      <v-container class="text-center">
        <v-responsive class="mx-auto title font-weight-light mb-8" max-width="720">
          Vuetify is the #1 component library for Vue.js and has been in active development since 2016. The goal of the project is to provide users with everything that is needed to build rich and engaging web applications using the Material Design specification. It accomplishes that with a consistent update cycle, Long-term Support (LTS) for previous versions, responsive community engagement, a vast ecosystem of resources and a dedication to quality components.
        </v-responsive>
        <v-row>
          <v-col cols="4" md="2">
            <v-img aspect-ratio="1" src="https://picsum.photos/500/300?image=15" ></v-img>
          </v-col>
          <v-col cols="4" md="2">
            <v-img aspect-ratio="1" src="https://picsum.photos/500/300?image=15" ></v-img>
          </v-col>
          <v-col cols="4" md="2">
            <v-img aspect-ratio="1" src="https://picsum.photos/500/300?image=15" ></v-img>
          </v-col>
          <v-col cols="4" md="2">
            <v-img aspect-ratio="1" src="https://picsum.photos/500/300?image=15" ></v-img>
          </v-col>
          <v-col cols="4" md="2">
            <v-img aspect-ratio="1" src="https://picsum.photos/500/300?image=15" ></v-img>
          </v-col>
          <v-col cols="4" md="2">
            <v-img aspect-ratio="1" src="https://picsum.photos/500/300?image=15" ></v-img>
          </v-col>
        </v-row>
      </v-container>
      <div class="py-6"></div>
    </section>

    <section id="features" class="grey lighten-3">
      <div class="py-6"></div>
      <v-container>
        <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">Blog</h2>
        <v-row>
          <v-col cols="12" md="6">
            <v-img class="mb-4" height="275" max-width="100%" src="https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"></v-img>
          </v-col>
          <v-col cols="12" md="6">
            <h3 class="font-weight-black mb-4 text-uppercase">
              Mobile first and Responsive
            </h3>
            <div class="title font-weight-light mb-5">
              Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum.
            </div>
          </v-col>
        </v-row>
      </v-container>
      <div class="py-6"></div>
    </section>

    <section id="stats">
      <v-parallax :height="$vuetify.breakpoint.smAndDown ? 700 : 500" src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80">
        <div class="py-6"></div>
        <v-container>
          <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">Blog</h2>
          <v-row>
            <v-col cols="12" md="6">
              <h3 class="font-weight-black mb-4 text-uppercase">
                Mobile first and Responsive
              </h3>
              <div class="title font-weight-light mb-5">
                Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum.
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <v-img class="mb-4" height="275" max-width="100%" src="https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"></v-img>
            </v-col>
          </v-row>
        </v-container>
        <div class="py-6"></div>
      </v-parallax>
    </section>

    <section id="blog">
      <div class="py-6"></div>
      <v-container>
        <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">Blog</h2>
        <v-row>
          <v-col cols="12" md="6">
            <v-img class="mb-4" height="275" max-width="100%" src="https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"></v-img>
          </v-col>
          <v-col cols="12" md="6">
            <h3 class="font-weight-black mb-4 text-uppercase">
              Mobile first and Responsive
            </h3>
            <div class="title font-weight-light mb-5">
              Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum.
            </div>
          </v-col>
        </v-row>
      </v-container>
      <div class="py-6"></div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
  },
  data: () => ({
    articles: [
      {
        src: 'https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        title: 'Mobile first & Responsive',
        text: 'Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum.',
      },
      {
        src: 'https://images.unsplash.com/photo-1475938476802-32a7e851dad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        title: 'Think outside the box',
        text: 'Nam ut leo ipsum. Maecenas pretium aliquam feugiat. Aenean vel tempor est, vitae tincidunt risus. Sed sodales vestibulum nibh.',
      },
      {
        src: 'https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1892&q=80',
        title: 'Small changes, big difference',
        text: 'Vestibulum in dictum velit, in rhoncus nibh. Maecenas neque libero, interdum a dignissim in, aliquet vitae lectus. Phasellus lorem enim, luctus ut velit eget.',
      },
    ],
    features: [
      {
        icon: 'mdi-account-group-outline',
        title: 'Vibrant Community',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam',
      },
      {
        icon: 'mdi-update',
        title: 'Frequent Updates',
        text: 'Sed ut elementum justo. Suspendisse non justo enim. Vestibulum cursus mauris dui, a luctus ex blandit. Lorem ipsum dolor sit amet consectetur adipisicing elit. qui ipsum eveniet facilis obcaecati corrupti consectetur adipisicing elit.',
      },
      {
        icon: 'mdi-shield-outline',
        title: 'Long-term Support',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam',
      },
    ],
    stats: [
      ['24k', 'Github Stars'],
      ['330+', 'Releases'],
      ['1m', 'Downloads/mo'],
      ['5m', 'Total Downloads'],
    ],
  }),

}
</script>

<style scoped>
.translucido {
  opacity: 0.8;
}
</style>
