<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Newsfeed</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Newsfeed</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">
        <ion-card style="text-align: center">
        <img src="./csm__MG_8378final1920_67dc6ffe34.jpg">
    <ion-card-header>
      <ion-card-title>Expansion at Hochschule Mainz</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <p>The expansion of the main building is in full swing. For more detailed information click here: <a href="https://www.hs-mainz.de/"> DigiEduHack</a></p>
    </ion-card-content>
  </ion-card>

  <ion-card style="text-align: center">
        <img src="./digieduhack_post.png">
    <ion-card-header>
      <ion-card-title>DigiEduHack - #Semesterhack 2.0</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <p>The semester hack will take place again this year. You have an idea and want to be creative? Then inform yourself here how you can participate:<a href="https://digieduhack.com/en/"> HS-Mainz</a></p>
    </ion-card-content>
  </ion-card>

  <ion-card style="text-align: center">
        <img src="./corona-5077153_1920.jpg">
    <ion-card-header>
      <ion-card-title>Corona - News</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <p>Find out everything you need to know about new decisions regarding the Covid-19 pandemic: <a href="https://www.hs-mainz.de/hochschule/aktuelles/informationen-zum-corona-virus/"> Status</a></p>
    </ion-card-content>
  </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { useRoute } from 'vue-router';
import { ref, computed, watch } from 'vue';

export default {
  name: 'Folder',
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
  },
  setup() {
    const route = useRoute();
    const folder = ref(route.params.id || 'Inbox');
    const matchedFolder = computed(() => route.params.id);
    
    watch(matchedFolder, () => {
      folder.value = matchedFolder.value as string;
    })
    
    return { folder }
  }
}
</script>

<style scoped>
ion-menu-button {
  color: var(--ion-color-primary);
}

#container {
  text-align: center;
  left: 0;
  right: 0;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>