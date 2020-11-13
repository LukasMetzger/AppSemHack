<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Events</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Events</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">
        <div>
            <ion-searchbar id="help-searchbar" aria-placeholder="Search"></ion-searchbar>
          </div>
          <ion-card style="text-align: center">
    <ion-card-header>
      <ion-card-title>Your Calendar</ion-card-title>
    </ion-card-header>
    <ion-card-content style="background-color: white">
     <img src="./Calendar.png">
    </ion-card-content>
  </ion-card>
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
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonFab, IonIcon,
  IonFabButton, alertController} from '@ionic/vue';
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
    IonFab, IonIcon,
    IonFabButton
  },
  methods: {
    async showMessage() {
      const alert = await alertController
        .create({
          header: 'Add Event',
          subHeader: 'Found a new event? Just add it to your calendar!',
          message: 'Comming soon!',
          buttons: ['OK'],
        });
      return alert.present();
    }
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

ion-slides {
      height: 100%;
    }

    .swiper-slide {
      display: block;
    }

    .swiper-slide h2 {
      margin-top: 2.8rem;
    }

    .swiper-slide img {
      max-height: 50%;
      max-width: 80%;
      margin: 60px 0 40px;
      pointer-events: none;
    }

    b {
      font-weight: 500;
    }

    p {
      padding: 0 40px;
      font-size: 14px;
      line-height: 1.5;
      color: var(--ion-color-step-600, #60646b);
    }

    p b {
      color: var(--ion-text-color, #000000);
    }

    #help-searchbar {
  position: relative;
  top: -20px;
}

</style>