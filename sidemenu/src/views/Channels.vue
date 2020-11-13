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
            <img src="https://profile-images.xing.com/images/a878e196c2cb2ef979ca69b8aca370c6-1/can-dogan.1024x1024.jpg">
          </ion-avatar>
          <ion-label>
            <h2>Can Dogan</h2>
            <p>Want to get something to eat?</p>
          </ion-label>
        </ion-item>

        <ion-item>
          <ion-avatar slot="start">
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEs3ApGuax8MQ/profile-displayphoto-shrink_200_200/0?e=1610582400&v=beta&t=15NKQ_WqPW3wWm_l5jB8XQ4K7B9K7tAnAL05QG98c4c">
          </ion-avatar>
          <ion-label>
            <h2>Julian Schwarz</h2>
            <p>Learn session on friday?</p>
          </ion-label>
        </ion-item>

        <ion-item>
          <ion-avatar slot="start">
            <img src="./Alex.jpeg">
          </ion-avatar>
          <ion-label>
            <h2>Alexander Geib</h2>
            <p>Want to play football on friday?</p>
          </ion-label>
        </ion-item>

        <ion-item>
          <ion-avatar slot="start">
            <img src="https://profile-images.xing.com/static/nobody_m.1024x1024.jpg">
          </ion-avatar>
          <ion-label>
            <h2>Kaan Selcuk</h2>
            <p>Whats up?</p>
          </ion-label>
        </ion-item>
      </ion-list>
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
    IonToolbar
  },
  setup() {
    const route = useRoute();
    const folder = ref(route.params.id || 'Inbox');
    const matchedFolder = computed(() => route.params.id);

    watch(matchedFolder, () => {
      folder.value = matchedFolder.value as string;
    })
    
    return { folder, i:allIcons }
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