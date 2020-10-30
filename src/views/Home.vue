<template>
  <div class="pa-2">
    <div class="v-row">
      <horizontal-scroll>
        <draggable :animation="200" v-model="data" class="d-flex" width="5000">
          <div class="col-2" v-for="(cardData, index) in data" :key="index">
            <v-card>
              <v-card-title>{{ cardData.name }}</v-card-title>
              <v-container>
                <draggable
                  :animation="200"
                  v-model="cardData.data"
                  tag="div"
                  group="listGruop"
                >
                  <v-card v-for="(d, i) in cardData.data" :key="i" class="ma-2">
                    <v-card-text>{{ d.name }}</v-card-text>
                  </v-card>
                  <v-card
                    color="grey"
                    class="ma-1"
                    @click="addItem(cardData.id)"
                  >
                    <v-card-text>カードを追加する</v-card-text>
                  </v-card>
                </draggable>
              </v-container>
            </v-card>
          </div>
          <div class="col-2">
            <v-card>
              <v-card-title @click="addCard">カード追加</v-card-title>
            </v-card>
          </div>
        </draggable>
      </horizontal-scroll>
    </div>
  </div>
</template>

<script>
// import ListCard from "@/components/ListCard.vue";
import draggable from "vuedraggable";
import HorizontalScroll from "vue-horizontal-scroll";

export default {
  name: "Home",
  components: {
    // ListCard,
    draggable,
    HorizontalScroll
  },
  data() {
    return {
      options: {
        group: "myGroup",
        animation: 100
      },
      itemsA: [{ id: 1, name: "name01" }],
      itemsB: [
        { id: 6, name: "name06" },
        { id: 7, name: "name07" },
        { id: 8, name: "name08" },
        { id: 9, name: "name09" },
        { id: 10, name: "name10" }
      ],

      // データパターン
      data: [
        {
          id: 1,
          name: "代表1",
          data: [
            { id: 2, name: "name02" },
            { id: 3, name: "name03" },
            { id: 4, name: "name04" },
            { id: 5, name: "name05" }
          ]
        },
        {
          id: 6,
          name: "代表2",
          data: [
            { id: 7, name: "name07" },
            { id: 8, name: "name08" },
            { id: 9, name: "name09" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" }
          ]
        },
        {
          id: 6,
          name: "代表2",
          data: [
            { id: 7, name: "name07" },
            { id: 8, name: "name08" },
            { id: 9, name: "name09" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" }
          ]
        },
        {
          id: 6,
          name: "代表2",
          data: [
            { id: 7, name: "name07" },
            { id: 8, name: "name08" },
            { id: 9, name: "name09" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" }
          ]
        },
        {
          id: 6,
          name: "代表2",
          data: [
            { id: 7, name: "name07" },
            { id: 8, name: "name08" },
            { id: 9, name: "name09" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" }
          ]
        },
        {
          id: 6,
          name: "代表5",
          data: [
            { id: 7, name: "name07" },
            { id: 8, name: "name08" },
            { id: 9, name: "name09" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" }
          ]
        },
        {
          id: 6,
          name: "代表2",
          data: [
            { id: 7, name: "name07" },
            { id: 8, name: "name08" },
            { id: 9, name: "name09" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" }
          ]
        },
        {
          id: 6,
          name: "代表3",
          data: [
            { id: 7, name: "name07" },
            { id: 8, name: "name08" },
            { id: 9, name: "name09" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" },
            { id: 10, name: "name10" }
          ]
        }
      ]
    };
  },
  methods: {
    addCard() {
      this.data.push({
        id: 0,
        name: "追加したやつ",
        data: []
      });
    },
    addItem(id) {
      // this.data.push({
      //   id: 0,
      //   name: "追加したやつ",
      //   data: []
      // });
      this.data
        .find(v => v.id == id)
        .data.push({ id: 100, name: "アイテムついか" });
    }
  }
};
</script>
