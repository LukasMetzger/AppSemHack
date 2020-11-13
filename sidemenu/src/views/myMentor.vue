<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>myMentor</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">myMentor</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">
        <h2>Mentorship Management</h2>
        <ion-card style="text-align: center; margin-top: 20%">
          <ion-card-header>
            <ion-button expand="full" color="primary" href="/mySelectedMentor">Select Mentor</ion-button>
          </ion-card-header>
          <ion-card-content>
            <ion-card-title style="text-align: justify; font-size: 12px; text-decoration: none;">This button is used to select a new mentor. If you already have a mentor, you will be redirected to his profile.</ion-card-title>
          </ion-card-content>
        </ion-card>
        <ion-card style="text-align: center; margin-top: 20%">
          <ion-card-header>
            <ion-button expand="full" color="primary">Provide Mentorship</ion-button>
          </ion-card-header>
          <ion-card-content>
            <ion-card-title style="text-align: justify; font-size: 12px; text-decoration: none;">If you want to provide yourself as a mentor, you can just ask for a mentorship privilege.</ion-card-title>
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

.flexColumn {

}

#profile-bg {
  position: fixed;
  left: 0;
  top: 20px;
  width: 100%;
  height: 150px;

  /*     background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/94311/bg.jpg') no-repeat transparent;*/
  background-size: 100%;
  background-position: 50% 20%;

  text-align: center;
}

#content {
  position: relative;
  margin-top: 100px;
  
  box-shadow: 0px -1px 10px rgba(0,0,0,0.4);
  padding-top: 200px;
}

#profile-info {
  position: absolute;
  top: -95px;
  width: 100%;
  z-index: 2;
  text-align: center;
}
#profile-name {
  color: #444;
  font-size: 26px;
}
#profile-description {
  font-size: 15px;
  color: #888;
}
#profile-description a {
  color: #888;
}

#profile-image {
  display: block;
  border-radius: 100px;
  width: 128px;
  height: 128px;
  margin: 30px auto 0;
  box-shadow: 0px 0px 4px rgba(0,0,0,0.7);
}

#myMentor-selectNewMentor {
  margin-top: 75px;
}

#myMentor-provideMentorship {
  margin-top: 75px;
}
</style>