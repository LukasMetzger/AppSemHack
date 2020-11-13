<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>mentorSelected</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">mentorSelected</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">
        <div id="profile-bg"></div>
          <div id="content">
              <div id="profile-info">
                  <img id="profile-image" src="https://profile-images.xing.com/images/a878e196c2cb2ef979ca69b8aca370c6-1/can-dogan.1024x1024.jpg">
                  <h3 id="profile-name">Can Dogan</h3>
                  <span id="profile-description">dogan_can@mail.de</span>
              </div>
          </div>
          <div>
           <ion-item>
            <ion-label>Institut:</ion-label>
            <ion-note slot="end">Hochschule Mainz</ion-note>
          </ion-item>
           <ion-item>
            <ion-label>Studiengang:</ion-label>
            <ion-note slot="end">Wirtschaftsinformatik B. Sc. dual</ion-note>
          </ion-item>
           <ion-item>
            <ion-label>Semester:</ion-label>
            <ion-note slot="end">5.</ion-note>
          </ion-item>
           <ion-item>
            <ion-label>Fähigkeiten:</ion-label>
            <ion-note slot="end">SQL, PHP, JS, TS</ion-note>
          </ion-item>
           <ion-item>
            <ion-label>Interessen:</ion-label>
            <ion-note slot="end">Games, Fußball</ion-note>
          </ion-item>
          </div>
          <div>
            <section class="full-width">
              <ion-button shape="round" expand="full" color="primary" id="mentorSelected-backButton" href="/myMentor">Back to myMentor</ion-button>
            </section>
          </div>
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

.initflex {
    display: flex;
}

.flexRow {
    flex-direction: row;
}

.flexColumn {
    flex-direction: column;
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

#mentorSelected-backButton {
    margin-left: 2.5%;
    position: absolute;
    bottom: 0;
    width: 95%;
    height: 7.5%;
}
</style>