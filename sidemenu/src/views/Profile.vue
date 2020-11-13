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
                  <img id="profile-image" src="https://media-exp1.licdn.com/dms/image/C4D03AQG7nImdbLC__Q/profile-displayphoto-shrink_200_200/0?e=1610582400&v=beta&t=nVMNoDA1PvJGYQc8qsO9QxF3H0OrQJDifBeBDjiDXew">
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
          <img src="https://profile-images.xing.com/images/a878e196c2cb2ef979ca69b8aca370c6-1/can-dogan.1024x1024.jpg">
        </ion-avatar>
        <ion-label class="profile-avatar">Can Dogan (<a style="font-weight: bold; text-decoration: none;" href="/mentorSelected">Mentor</a>)</ion-label>
        <ion-button color='success'><a class="profile-friends-write" href="/Channels" >Write</a></ion-button>
      </ion-item>
      <ion-item>
        <ion-avatar>
          <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEs3ApGuax8MQ/profile-displayphoto-shrink_200_200/0?e=1610582400&v=beta&t=15NKQ_WqPW3wWm_l5jB8XQ4K7B9K7tAnAL05QG98c4c">
        </ion-avatar>
        <ion-label class="profile-avatar">Julian Schwarz</ion-label>
        <ion-button color='success'><a class="profile-friends-write" href="/Channels" >write</a></ion-button>
      </ion-item>
      <ion-item>
        <ion-avatar>
          <img src="./Alex.jpeg">
        </ion-avatar>
        <ion-label class="profile-avatar">Alex Geib</ion-label>
        <ion-button color='success'><a class="profile-friends-write" href="/Channels" >write</a></ion-button>
      </ion-item>
      <ion-item>
        <ion-avatar>
          <img src="https://profile-images.xing.com/static/nobody_m.1024x1024.jpg">
        </ion-avatar>
        <ion-label class="profile-avatar">Kaan Selcuk</ion-label>
        <ion-button color='success'><a class="profile-friends-write" href="/Channels" >write</a></ion-button>
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
  
  color: black;
  text-align: center;
}

#top2{
  
  color: white;
  text-align: center;
}

#einstellung1{
  margin-left: 5%;
}

#friendlist {
  
  padding-left: 5%;
  font-size: 20px;
  font-weight: bold;
}

.profile-avatar {
  padding-left: 10px;
}

.profile-friends-write {
  text-decoration: none;
  color: white;
}

</style>