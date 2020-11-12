<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Profile</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Profile</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">
        <div id="profile-bg"></div>
          <div id="content">
              <div id="profile-info">
                  <img id="profile-image" src="./IMG_0674.jpg">
                  <h3 id="profile-name">Lukas Metzger</h3>
                  <span id="profile-description">lukas.bischofsheim@gmx.de</span>
              </div>
          </div>
      </div>
          <ion-list>
      <ion-item>
        <div id='friendlist'>Friends</div>
      </ion-item>
      <ion-item>
        <ion-avatar>
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
        </ion-avatar>
        <ion-label class="profile-avatar">Can Dogan</ion-label>
        <ion-button color='success'>Write</ion-button>
      </ion-item>
      <ion-item>
        <ion-avatar>
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
        </ion-avatar>
        <ion-label class="profile-avatar">Julian Schwarz</ion-label>
        <ion-button color='success'>Write</ion-button>
      </ion-item>
      <ion-item>
        <ion-avatar>
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
        </ion-avatar>
        <ion-label class="profile-avatar">Alex Geib</ion-label>
        <ion-button color='success'>Write</ion-button>
      </ion-item>
      <ion-item>
        <ion-avatar>
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
        </ion-avatar>
        <ion-label class="profile-avatar">Kaan Selcuk</ion-label>
        <ion-button color='success'>Write</ion-button>
      </ion-item>
      <ion-item>
        <ion-avatar>
          <img src="https://www.klicksafe.de/fileadmin/media/images/themen/kommunizieren/Apps/Mobile_Games/Super_Mario_Run.png">
        </ion-avatar>
        <ion-label class="profile-avatar">Super Mario</ion-label>
        <ion-button color='success'>Write</ion-button>
      </ion-item>
    </ion-list>
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
  background-color: white;
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
  border: 2px solid goldenrod;
  width: 128px;
  height: 128px;
  margin: 30px auto 0;
  box-shadow: 0px 0px 4px rgba(0,0,0,0.7);
}

.list-item-content {
  padding: 5px;
}

.list-item {
  color: #666666;
}

.post {
  color: #444;
}

.post-time {
  position: absolute;
  right: 5px;
  top: 5px;
  font-size: 11px;
  color: #888;
}

.post-profile-image {
  display: inline-block;
  vertical-align: top;
  width: 48px;
  height: 48px;
  margin-right: 10px;
}
.post-options {
  position: absolute;
  font-size: 16px;
  right: 5px;
  bottom: 5px;
  color: #888;
}

#top{
  background-color: white;
  color: black;
  text-align: center;
}

#top2{
  background-color: white;
  color: white;
  text-align: center;
}

#einstellung1{
  margin-left: 5%;
}

#friendlist {
  background-color: white;
  padding-left: 5%;
  font-size: 20px;
  font-weight: bold;
}

.profile-avatar {
  padding-left: 10px;
}

</style>