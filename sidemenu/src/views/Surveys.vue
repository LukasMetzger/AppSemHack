<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Surveys</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Surveys</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">

         <div>
            <ion-searchbar id="help-searchbar" aria-placeholder="Search"></ion-searchbar>
          </div>

        <ion-slides>

        <ion-slide>
          <div class="slide">
            <ion-card style="text-align: center">
        <img src="./digieduhack_post.png">
    <ion-card-header>
      <ion-card-title>Should there be a Semsterhack 3.0?</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <ion-list>
    <ion-radio-group value="biff">
      <ion-list-header>
        Expiring date: 30.12.2020
      </ion-list-header>
      <p>Question 1/10</p>
      <ion-item>
        <ion-label>Yes, obviously!!!</ion-label>
        <ion-radio slot="start" value="biff"></ion-radio>
      </ion-item>

      <ion-item>
        <ion-label>Oh god no!!</ion-label>
        <ion-radio slot="start" value="siff"></ion-radio>
      </ion-item>

      <ion-item>
        <ion-label>I could not care less!</ion-label>
        <ion-radio slot="start" value="griff"></ion-radio>
      </ion-item>
      
    </ion-radio-group>
  </ion-list>
    </ion-card-content>
    
  </ion-card>
  <p>Next Survey</p>
  <ion-icon :src="i.arrowForwardOutline" color="primary"></ion-icon>
          </div>

        </ion-slide>

        <ion-slide>
          <div class="slide">
            <ion-card style="text-align: center">
        <img src="./csm_Campus_Headerbild_02_f3284c00d9.jpg">
    <ion-card-header>
      <ion-card-title>Do you prefere "Presences lectures" or "Home Schooling"?</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <ion-list>
    <ion-radio-group value="biff">
      <ion-list-header>
        Expiring date: 01.02.2020
      </ion-list-header>
      <p>Question 1/2</p>
      <ion-item>
        <ion-label>Presences lectures</ion-label>
        <ion-radio slot="start" value="biff"></ion-radio>
      </ion-item>

      <ion-item>
        <ion-label>Home Schooling</ion-label>
        <ion-radio slot="start" value="siff"></ion-radio>
      </ion-item>
      
    </ion-radio-group>
  </ion-list>
    </ion-card-content>
    
  </ion-card>
  <p>Next Survey</p>
  <ion-icon :src="i.arrowForwardOutline" color="primary"></ion-icon>
          </div>
        </ion-slide>
      </ion-slides>
      </div>

      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
      <ion-fab-button @click="showMessage">
        <ion-icon :src="i.add" color="white"></ion-icon>
      </ion-fab-button>
    </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { useRoute } from 'vue-router';
import { ref, computed, watch } from 'vue';
import * as allIcons from "ionicons/icons";

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
    
    return { folder, i : allIcons }
  }
}
</script>

<style scoped>
ion-menu-button {
  color: var(--ion-color-primary);
}

#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
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

#help-searchbar {
  position: relative;
  top: 15px;
}
</style>