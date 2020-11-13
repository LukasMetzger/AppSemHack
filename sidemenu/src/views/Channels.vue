<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Channels</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Channels</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">

        <div>
            <ion-searchbar id="help-searchbar" aria-placeholder="Search"></ion-searchbar>
          </div>

        <ion-list>
        <ion-list-header>
          <h1>Groups</h1>
        </ion-list-header>

        <ion-item>
          <ion-avatar slot="start">
            <img src="./hs-mainz.jpg">
          </ion-avatar>
          <ion-label>
            <h2>My university</h2>
            <h3>Hochschule Mainz</h3>
            <p>Does someone know when the Semsterhack starts</p>
          </ion-label>
        </ion-item>

        <ion-item>
          <ion-avatar slot="start">
            <img src="./LogoWirtschaft.png">
          </ion-avatar>
          <ion-label>
            <h2>HS-Mainz WI18-ERP Systems</h2>
            <h3>Course by Prof. Dr. Mustermann</h3>
            <p>Does anyone want to provide old exams?</p>
          </ion-label>
        </ion-item>

        <ion-item>
          <ion-avatar slot="start">
            <img src="./Football_Image_Logo.png">
          </ion-avatar>
          <ion-label>
            <h2>Football</h2>
            <h3>Everyone who is interested in football</h3>
            <p>Someone wanna play on Friday?</p>
          </ion-label>
        </ion-item>

        <ion-item>
          <ion-avatar slot="start">
            <img src="./DEH2020_01_logo_color_RGB.jpg">
          </ion-avatar>
          <ion-label>
            <h2>Semesterack</h2>
            <h3>Share your ideas about the Semesterhack 2.0</h3>
            <p>Hi Guys, i have a great idea concerning</p>
          </ion-label>
        </ion-item>
      </ion-list>

      <ion-list>
        <ion-list-header>
          <h1>Friends</h1>
        </ion-list-header>

        <ion-item>
          <ion-avatar slot="start">
            <img src="">
          </ion-avatar>
          <ion-label>
            <h2>Can Dogan</h2>
            <p>Want to get something to eat?</p>
          </ion-label>
        </ion-item>

        <ion-item>
          <ion-avatar slot="start">
            <img src="">
          </ion-avatar>
          <ion-label>
            <h2>Julian Schwarz</h2>
            <p>Learn session on friday?</p>
          </ion-label>
        </ion-item>

        <ion-item>
          <ion-avatar slot="start">
            <img src="">
          </ion-avatar>
          <ion-label>
            <h2>Alexander Geib</h2>
            <p>Want to play football on friday?</p>
          </ion-label>
        </ion-item>

        <ion-item>
          <ion-avatar slot="start">
            <img src="">
          </ion-avatar>
          <ion-label>
            <h2>Kaan Selcuk</h2>
            <p>Whats up?</p>
          </ion-label>
        </ion-item>
      </ion-list>
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
    IonToolbar
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

#help-searchbar {
  position: relative;
  top: 0px;
}
</style>