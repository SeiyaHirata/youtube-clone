<template>
  <div class="pa-2">
    <div
      class="v-row overflow-x-auto"
      :style="`height:${windowSize.y * 0.9}px;`"
    >
      <draggable
        :animation="200"
        v-model="data"
        class="d-flex"
        draggable=".item"
        handle=".handle"
      >
        <div v-for="(cardData, index) in data" :key="index" class="item">
          <v-card
            :max-height="windowSize.y * 0.9"
            width="330px"
            class="ma-3 move-cursor"
            color="grey lighten-3 handle"
          >
            <v-card-title class="px-5 pb-0">{{ cardData.name }}</v-card-title>

            <v-container
              :style="`max-height: ${windowSize.y * 0.8}px`"
              class="overflow-y-auto"
            >
              <draggable
                :animation="200"
                v-model="cardData.data"
                tag="div"
                group="listGruop"
              >
                <v-card
                  v-for="(d, i) in cardData.data"
                  :key="i"
                  class="ma-2 item-drag move-cursor"
                >
                  <v-card-text>{{ d.name }}</v-card-text>
                </v-card>
              </draggable>

              <v-card
                color="grey"
                class="ma-2"
                @click="addItem(cardData.id, cardData.data.length)"
              >
                <v-card-text>カードを追加する(途中)</v-card-text>
              </v-card>
              <!-- <v-menu
                bottom
                v-model="cardMenu"
                origin="center center"
                :close-on-content-click="false"
                transition="scale-transition"
              >
                <template v-slot:activator="{ on, attrs }">
                  @click="addCard(data.length)"
                  <v-card color="grey" class="ma-2" v-bind="attrs" v-on="on">
                    <v-card-text>カードを追加する</v-card-text>
                  </v-card>
                </template>

                <v-card height="150px">
                  <v-container>
                    <v-text-field
                      label="タスク名"
                      v-model="cardText"
                    ></v-text-field>
                    <v-card-actions>
                      <v-btn
                        color="green lighten-1"
                        @click="
                          addItem(cardData.id, cardData.data.length, cardText)
                        "
                        >追加</v-btn
                      >
                      <v-btn
                        color="red"
                        @click="
                          () => {
                            cardMenu = false;
                            cardText = '';
                          }
                        "
                        >削除</v-btn
                      >
                    </v-card-actions>
                  </v-container>
                </v-card>
              </v-menu> -->
            </v-container>
          </v-card>
        </div>
        <div>
          <v-menu
            bottom
            v-model="cardMenu"
            origin="center center"
            :close-on-content-click="false"
            transition="scale-transition"
          >
            <template v-slot:activator="{ on, attrs }">
              <!-- @click="addCard(data.length)" -->
              <v-card width="300px" class="ma-3" v-bind="attrs" v-on="on">
                <v-card-title>カード追加</v-card-title>
              </v-card>
            </template>

            <v-card height="150px">
              <v-container>
                <v-text-field
                  label="タスク名"
                  v-model="cardText"
                ></v-text-field>
                <v-card-actions>
                  <v-btn
                    color="green lighten-1"
                    @click="addCard(cardText, data.length)"
                    >追加</v-btn
                  >
                  <v-btn
                    color="red"
                    @click="
                      () => {
                        cardMenu = false;
                        cardText = '';
                      }
                    "
                    >削除</v-btn
                  >
                </v-card-actions>
              </v-container>
            </v-card>
          </v-menu>
        </div>
      </draggable>
    </div>
  </div>
  <!-- TODO delete itemadd 横スクロールのライブラリ削除-->
</template>
<script>
import draggable from "vuedraggable";

export default {
  name: "Home",
  components: {
    draggable
  },
  data() {
    return {
      cardMenu: false,
      cardText: "",
      windowSize: {
        x: window.innerWidth,
        y: window.innerHeight
      },
      // options: {
      //   group: "myGroup",
      //   animation: 100
      // },
      // データパターン
      // data: [

      data: [...Array(10).keys()].map(index => {
        return {
          id: ++index,
          name: "タスクリスト" + index,
          data: [...Array(10).keys()].map(i => {
            return {
              id: ++i,
              name: "カード" + index + "　アイテム" + i
            };
          })
        };
      })
    };
  },
  methods: {
    addCard(text, length) {
      this.cardMenu = false;
      this.cardText = "";
      this.data.push({
        id: length + 1,
        name: text,
        data: []
      });
    },
    addItem(id, length) {
      this.data
        .find(v => v.id == id)
        .data.push({
          id: length + 1,
          name: "カード" + id + "アイテム" + (length + 1)
        });
    },
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight };
    },
    mounted() {
      this.onResize();
    }
  }
};
</script>

<style scoped>
.move-cursor {
  cursor: move;
}
</style>
