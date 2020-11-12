<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ folder }}</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ folder }}</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">
        <ion-card style="text-align: center">
        <img src="./csm__MG_8378final1920_67dc6ffe34.jpg">
    <ion-card-header>
      <ion-card-title>News</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <p>The expansion of the main building is in full swing. For more detailed information click here: <a href="https://www.hs-mainz.de/">Link</a></p>
    </ion-card-content>
  </ion-card>

  <ion-list>
    <ion-list-header>
      <ion-label><h1>Notifications</h1></ion-label>
    </ion-list-header>
    <ion-item>
      <ion-item-sliding>
      <ion-item>
        <ion-label><p><a href="/Channels" >New Messages</a> (13)</p></ion-label>
      </ion-item>
      <ion-item-options side="end">
        <ion-item-option @click="unread(item)" color="danger">Delete</ion-item-option>
      </ion-item-options>
    </ion-item-sliding>
    </ion-item>
    <ion-item>
      <ion-item-sliding>
      <ion-item>
        <ion-label><p><a href="/Events">New Events</a> (3)</p></ion-label>
      </ion-item>
      <ion-item-options side="end">
        <ion-item-option @click="unread(item)" color="danger">Delete</ion-item-option>
      </ion-item-options>
    </ion-item-sliding>
    </ion-item>
    <ion-item>
      <ion-item-sliding>
      <ion-item>
        <ion-label><p><a href="/Surveys">New Survey</a> (1)</p></ion-label>
      </ion-item>
      <ion-item-options side="end">
        <ion-item-option @click="unread(item)" color="danger">Delete</ion-item-option>
      </ion-item-options>
    </ion-item-sliding>
    </ion-item>
  </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardTitle, } from '@ionic/vue';
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
    IonCard, IonCardContent, IonCardTitle,
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
  position: relative;
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