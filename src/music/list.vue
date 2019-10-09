<template>
  <div>
   
      <mu-list textline="two-line">

        <div v-for="music in musics" :key="music.title" @click="palyMusic(music.url)">
          <mu-list-item avatar :ripple="false" button>
            <mu-list-item-content>
              <mu-list-item-title>{{music.title}}</mu-list-item-title>
              <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87)">Lession {{music.id}}</mu-list-item-sub-title>
              <mu-list-item-sub-title>{{music.desc}}</mu-list-item-sub-title>
            </mu-list-item-content>
            <mu-list-item-action>
              <mu-list-item-after-text>3 min</mu-list-item-after-text>
              <!-- <mu-checkbox
                color="yellow700"
                v-model="selects"
                value="ffff"
                uncheck-icon="star_border"
                checked-icon="star"
              ></mu-checkbox> -->
            </mu-list-item-action>
          </mu-list-item>
          <mu-divider></mu-divider>
        </div>

      </mu-list>
   

    <audio
      ref="aud"
      id="aud"
      src="../english/us_mp3/13%EF%BC%8DThe%20Greenwood%20Boys.mp3"
      controls="controls"
      loop="loop"
    ></audio>

   


    
  </div>
</template>

<script>
var music;
export default {
  props: {
   
  },
  data() {
    return {
      selects: [],
      musics:[
        {
          id:"1",
          title:"A private conversation",
          desc:"Why did the write complain to the people behind him?",
          url:"../english/us_mp3/13%EF%BC%8DThe%20Greenwood%20Boys.mp3"
        },
        {
          id:"2",
          title:"Breakfast or lunch?",
          desc:"Why was the writer's aunt surprise?",
          url:"../english/us_mp3/14%EF%BC%8DDo%20You%20Speak%20English.mp3"
        }
      ]
    };
  },
  created() {
      // this.$axios.get("http://localhost:5000").then((res)=>{
      //   console.log(res)
      // })
  },
  mounted() {
    music = document.getElementById("aud");

    console.log("----------" + music);
  },
  methods: {
    palyMusic(url) {
      //;
      // let music =this.$refs.aud
      music.src =url
        // "http://47.93.201.74:8082/english/us_mp3/13%EF%BC%8DThe%20Greenwood%20Boys.mp3";
      music.play();
    },
    change() {
      alert("222");
    }
  }
};
</script>

<style lang="stylus" scoped></style>