<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Help</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Help</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">
        <div class="flexColumn" style="width: 100%">
          <div>
            <ion-searchbar id="help-searchbar" aria-placeholder="Search"></ion-searchbar>
          </div>
          <div class="flexRow">
            <div>
              <ion-chip id="help-filterIcon">
                <img style="width: 15px; height: 15px;" :src="i.funnel">
              </ion-chip>
            </div>
            <div style="margin-top: 20px;" class="flexRow">
              <a>
                <ion-chip outline color="dark">
                  <ion-label>FAQ</ion-label>
                  <ion-icon name="close-circle"></ion-icon>
                </ion-chip>
              </a>
              <a>
                <ion-chip outline color="dark">
                  <ion-label>BLOG</ion-label>
                  <ion-icon name="close-circle"></ion-icon>
                </ion-chip>
              </a>
              <a>
                <ion-chip outline color="dark">
                  <ion-label>Channels</ion-label>
                  <ion-icon name="close-circle"></ion-icon>
                </ion-chip>
              </a>
              <a>
                <ion-chip outline color="dark">
                  <ion-label>Events</ion-label>
                  <ion-icon name="close-circle"></ion-icon>
                </ion-chip>
              </a>
            </div>
          </div>
          <div id="help-searchResults" class="flexColumn">
            <div>
              <ion-card>
                <ion-item>
                  <ion-icon :icon="pin" slot="start"></ion-icon>
                  <ion-label>Channels</ion-label>
                  <ion-button fill="outline" slot="end">FAQ</ion-button>
                </ion-item>

                <ion-card-content>
                  Can we join any channel we want?
                </ion-card-content>
              </ion-card>
            </div>
            <div>
              <ion-card>
                <ion-item>
                  <ion-icon :icon="pin" slot="start"></ion-icon>
                  <ion-label>Events</ion-label>
                  <ion-button fill="outline" slot="end">FAQ</ion-button>
                </ion-item>

                <ion-card-content>
                  How can I create an event?
                </ion-card-content>
              </ion-card>
            </div>
            <div>
              <ion-card>
                <ion-item>
                  <ion-icon :icon="pin" slot="start"></ion-icon>
                  <ion-label>Events</ion-label>
                  <ion-button fill="outline" slot="end">BLOG</ion-button>
                </ion-item>

                <ion-card-content>
                  Is there any events for this and that?
                </ion-card-content>
              </ion-card>
            </div>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonSearchbar, IonCard, IonCardContent, IonIcon, IonItem, IonLabel } from '@ionic/vue';
import * as allIcons from "ionicons/icons";
import { useRoute } from 'vue-router';
import { ref, computed, watch, defineComponent } from 'vue';

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
    IonSearchbar,
    IonCard, 
    IonCardContent,
    IonIcon, 
    IonItem, 
    IonLabel
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
  display: flex;
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

.flexRow {
  flex-direction: row;
}

.flexColumn {
  flex-direction: column;
}

#help-searchResults {
  margin-top: 20px;
}

#help-searchbar {
  position: absolute;
  top: -40px;
}

#help-ionCard {
  text-align: center;
}

#help-filterIcon {
  top: 15px;
  left: -40%;
}
</style>