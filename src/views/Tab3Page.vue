<template>
  <ion-page>
    <ion-content>

      <!-- Segundo Card -->
      <ion-card class="gram-card">
        <ion-card-header class="card-img">
        <img alt="Profile Picture" :src="imageUrl2" class="card-imagem" />
      </ion-card-header>
        <ion-card-header class="card-header">
          <ion-card-title class="card-titulo">Geovane Almeida da Silva</ion-card-title>
          <ion-card-subtitle class="card-subtitulo"> Dev {Front-end}</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content class="card-content">
          <ion-list class="customizar-lista">
            <ion-item class="list-item">
              React
            </ion-item>
            <ion-item class="list-item">
              Vue
            </ion-item>
            <ion-item class="list-item">
              Java
            </ion-item>
            <ion-item class="list-item">
              Java Script
            </ion-item>
            <ion-item class="list-item">
              HTML5
            </ion-item>
            <ion-item class="list-item">
              react native
            </ion-item>
            <ion-item class="list-item">
              CSS3
            </ion-item>
            <ion-item class="list-item">
              bootstrap
            </ion-item>
            <ion-item class="list-item">
              bulma
            </ion-item>
          </ion-list>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonRow, IonList, IonItem, IonPage, IonContent } from '@ionic/vue';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  components: { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonRow, IonList, IonItem,  IonPage, IonContent },
  props: {
    imageUrl2: {
      type: String as PropType<string>,
        default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Lq2RPhzCt9Lmo-pNv57liRmxgs7SpIZHVw&usqp=CAU'
      // default: 'https://ead.ifms.edu.br/pluginfile.php/728427/user/icon/moove/f1?rev=13340160',
    }
  },
});
</script>

<style scoped>
.gram-card{
  display: flex;
  flex-direction: column;
}


.card-img{
  display: flex;
  align-items: center;
  margin: 0.9em;
  padding: 0;
  border: 0;
}
.card-img > img{
  border-radius: 0.5em;
  height: 95%;
  width: 95%;
}

.card-header{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.customizar-lista{
  display: grid;
  grid-template-columns: auto auto auto;
}
</style>
