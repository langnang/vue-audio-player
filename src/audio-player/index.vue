<template>
  <div class="audio-player">
    <!--音频信息-->
    <div class="audio-info">
      <!--音频信息：封面 -->
      <div class="audio-info__cover" :class="{playing:isPlaying}">
        <img :src="audioList[currentIndex].cover"/>
      </div>
      <!--音频信息：歌词 -->
      <div class="audio-info__lyric">
        {{ audioList[currentIndex].lyric }}
      </div>
      <!--音频信息：专辑 -->
      <div class="audio-info__album">
        {{ audioList[currentIndex].album }}
      </div>
      <!--音频信息：作者 -->
      <div class="audio-info__author">
        {{ audioList[currentIndex].author }}
      </div>
    </div>
    <!--音频控件-->
    <div class="audio-controls">
      <!--音频控件：上一首-->
      <button class="audio-controls__previos" @click="playPrev">
        <svg t="1604247544322" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
             p-id="927" width="200" height="200">
          <path
            d="M206 865h-38c-30.928 0-56-25.072-56-56V216c0-30.928 25.072-56 56-56h38c30.928 0 56 25.072 56 56v593c0 30.928-25.072 56-56 56z m168.686-386.191l422.304-303.4c32.294-23.201 77.282-15.83 100.484 16.464A72 72 0 0 1 911 233.883v559.053c0 39.764-32.235 72-72 72a72 72 0 0 1-39.95-12.1L376.288 570.877c-25.73-17.16-32.677-51.93-15.517-77.66a56 56 0 0 1 13.915-14.408z"
            p-id="928"></path>
        </svg>
      </button>
      <!--音频控件：开始-->
      <button class="audio-controls__start" v-if="!isPlaying" @click="play">
        <svg t="1604247462626" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
             p-id="8660" width="200" height="200">
          <path
            d="M897.143467 597.051733l-464.648534 311.5264c-46.976 31.488-110.592 18.944-142.08-28.023466A102.4 102.4 0 0 1 273.066667 823.5264V200.4736c0-56.5504 45.8496-102.4 102.4-102.4a102.4 102.4 0 0 1 57.028266 17.348267l464.64 311.5264c46.976 31.488 59.528533 95.104 28.032 142.08a102.4 102.4 0 0 1-28.023466 28.023466z"
            p-id="8661"></path>
        </svg>
      </button>
      <!--音频控件：暂停-->
      <button class="audio-controls__pause" v-if="isPlaying" @click="pause">
        <svg t="1604247561230" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
             p-id="1072" width="200" height="200">
          <path
            d="M680 160h128c30.928 0 56 25.072 56 56v593c0 30.928-25.072 56-56 56H680c-30.928 0-56-25.072-56-56V216c0-30.928 25.072-56 56-56z m-464 0h128c30.928 0 56 25.072 56 56v593c0 30.928-25.072 56-56 56H216c-30.928 0-56-25.072-56-56V216c0-30.928 25.072-56 56-56z"
            p-id="1073"></path>
        </svg>
      </button>
      <!--音频控件：下一首-->
      <button class="audio-controls__next" @click="playNext">
        <svg t="1604247579325" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
             p-id="1217" width="200" height="200">
          <path
            d="M817 160h38c30.928 0 56 25.072 56 56v593c0 30.928-25.072 56-56 56h-38c-30.928 0-56-25.072-56-56V216c0-30.928 25.072-56 56-56zM648.314 546.191l-422.304 303.4c-32.294 23.201-77.282 15.83-100.484-16.464A72 72 0 0 1 112 791.117V232.064c0-39.764 32.235-72 72-72a72 72 0 0 1 39.95 12.1l422.762 281.959c25.73 17.16 32.677 51.93 15.517 77.66a56 56 0 0 1-13.915 14.408z"
            p-id="1218"></path>
        </svg>
      </button>
    </div>
    <!--音频播放器-->
    <audio
      ref="audio"
      class="audio-player__audio"
      :autoplay="autoPlay"
      controls
      :loop="loop"
      :muted="muted"
      :preload="preLoad"
      :src="audioList[currentIndex].src"
    >
      您的浏览器不支持 audio 标签。
    </audio>
  </div>
</template>

<script>
export default {
  name: 'AudioPlayer',
  props: {
    // 是否音频就绪后马上播放
    autoPlay: {
      type: Boolean,
      default: false,
    },
    // 是否循环播放音频
    loop: {
      type: Boolean,
      default: false,
    },
    // 是否静音
    muted: {
      type: Boolean,
      default: false,
    },
    // 是否预加载音频
    preLoad: {
      type: Boolean,
      default: false,
    },
    // 播放列表
    audioList: {
      type: Array,
      default: null,
    }
  },
  data() {
    return {
      item: {
        id: '', // 编号
        cover: '', // 封面
        src: '', // 源文件
        lyric: '', // 歌词
        album: '', // 专辑
        author: '' // 作者
      },
      currentIndex: 0, // 当前播放的音频位置索引
      isPlaying: false, // 音频是否正在播放
      volume: 100,// 音频音量
      currentTime: 0,// 音频当前播放位置
      duration: 0,// 音频长度
    }
  },
  computed: {
    // 音频元素
    audio: function () {
      console.log(this.$refs);
      return this.$refs.audio;
    },
  },
  filters: {
    audioDate: function (value) {
      return value;
    }
  },
  created() {
    console.log(this.$data);
  },
  methods: {
    // 播放
    play() {
      this.isPlaying = true;
      this.$refs.audio.play();
    },
    // 暂停
    pause() {
      this.isPlaying = false;
      this.$refs.audio.pause();
    },
    // 上一首
    playPrev() {
      this.currentIndex--;
      if (this.currentIndex < 0) {
        this.currentIndex = this.audioList.length - 1;
      }
      console.log(this.currentIndex);
    },
    // 下一首
    playNext() {
      this.currentIndex++;
      if (this.currentIndex > this.audioList.length - 1) {
        this.currentIndex = 0;
      }
    }
  }
}
</script>

<style lang="scss">
.audio-player {
  .audio-info {
    .audio-info__cover {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      overflow: hidden;

      &.playing {
        -webkit-animation: rotate 3s linear 0s infinite forwards;
        animation: rotate 3s linear 0s infinite forwards;
      }

      img {
        width: 100%;
      }
    }

    .audio-info__lyric {
      display: none;
    }
  }

  .audio-controls {
    button {
      width: 40px;
      height: 40px;

      svg {
        width: 100%;
        height: 100%;
      }
    }

    .audio-controls__previous {
    }
  }

  .audio-player__audio {
    width: 100%;
  }
}

@-webkit-keyframes rotate {
  0% {
    -webkit-transform: rotateZ(0);
    transform: rotateZ(0);
  }

  100% {
    -webkit-transform: rotateZ(360deg);
    transform: rotateZ(360deg);
  }
}

@keyframes rotate {
  0% {
    -webkit-transform: rotateZ(0);
    transform: rotateZ(0);
  }

  100% {
    -webkit-transform: rotateZ(360deg);
    transform: rotateZ(360deg);
  }
}
</style>
