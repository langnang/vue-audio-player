<template>
  <div class="audio-player">
    <!--音频控件-->
    <div class="audio-controls">
      <!--音频控件：上一首-->
      <div
        v-if="isShowPrev"
        class="audio-controls__previous"
        title="上一首"
        @click="onPlayPrev"
      >
        <svg
          t="1604247544322"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="927"
          width="200"
          height="200"
        >
          <path
            d="M206 865h-38c-30.928 0-56-25.072-56-56V216c0-30.928 25.072-56 56-56h38c30.928 0 56 25.072 56 56v593c0 30.928-25.072 56-56 56z m168.686-386.191l422.304-303.4c32.294-23.201 77.282-15.83 100.484 16.464A72 72 0 0 1 911 233.883v559.053c0 39.764-32.235 72-72 72a72 72 0 0 1-39.95-12.1L376.288 570.877c-25.73-17.16-32.677-51.93-15.517-77.66a56 56 0 0 1 13.915-14.368z"
            p-id="928"
          />
        </svg>
      </div>
      <!--音频控件：开始-->
      <div
        v-if="!isPlaying"
        class="audio-controls__start"
        title="播放"
        @click="onPlay(currentIndex)"
      >
        <svg
          t="1604403365290"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3249"
          width="200"
          height="200"
        >
          <path
            d="M512 78.8c-239.3 0-433.2 194-433.2 433.2 0 239.3 194 433.2 433.2 433.2 239.3 0 433.2-194 433.2-433.2 0.1-239.2-193.9-433.2-433.2-433.2z m183.3 447.9L455.1 720c-12.3 9.9-30.5 1.1-30.5-14.6V318.7c0-15.7 18.2-24.5 30.5-14.6l240.2 193.4c9.4 7.5 9.4 21.7 0 29.2z"
            p-id="3250"
          />
        </svg>
      </div>
      <!--音频控件：暂停-->
      <div
        v-if="isPlaying"
        class="audio-controls__pause"
        title="暂停"
        @click="onPause"
      >
        <svg
          t="1604247561230"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1072"
          width="200"
          height="200"
        >
          <path
            d="M680 160h128c30.928 0 56 25.072 56 56v593c0 30.928-25.072 56-56 56H680c-30.928 0-56-25.072-56-56V216c0-30.928 25.072-56 56-56z m-464 0h128c30.928 0 56 25.072 56 56v593c0 30.928-25.072 56-56 56H216c-30.928 0-56-25.072-56-56V216c0-30.928 25.072-56 56-56z"
            p-id="1073"
          />
        </svg>
      </div>
      <!--音频控件：下一首-->
      <div
        v-if="isShowNext"
        class="audio-controls__next"
        title="下一首"
        @click="onPlayNext"
      >
        <svg
          t="1604247579325"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1217"
          width="200"
          height="200"
        >
          <path
            d="M817 160h38c30.928 0 56 25.072 56 56v593c0 30.928-25.072 56-56 56h-38c-30.928 0-56-25.072-56-56V216c0-30.928 25.072-56 56-56zM648.314 546.191l-422.304 303.4c-32.294 23.201-77.282 15.83-100.484-16.464A72 72 0 0 1 112 791.117V232.064c0-39.764 32.235-72 72-72a72 72 0 0 1 39.95 12.1l422.762 281.959c25.73 17.16 32.677 51.93 15.517 77.66a56 56 0 0 1-13.915 14.368z"
            p-id="1218"
          />
        </svg>
      </div>
      <!--音频控件：播放模式-->
      <div v-if="showMode" class="audio-controls__mode" @click="onCickPLayMode">
        <!--音频控件：单曲循环-->
        <svg
          v-if="selfPlayMode == 'single' || selfPlayMode == 'single-loop'"
          :class="{
            inactive: selfPlayMode == 'single',
          }"
          t="1604496141856"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="12644"
          width="200"
          height="200"
          title="单曲循环"
        >
          <path
            d="M640 234.666667c153.173333 0 277.333333 124.16 277.333333 277.333333S793.173333 789.333333 640 789.333333a21.333333 21.333333 0 0 1 0-42.666666c129.607111 0 234.666667-105.059556 234.666667-234.666667 0-126.435556-99.996444-229.532444-225.223111-234.481778L640 277.333333H384c-129.607111 0-234.666667 105.059556-234.666667 234.666667 0 126.435556 99.996444 229.532444 225.223111 234.481778L384 746.666667h42.666667v-43.392a8.533333 8.533333 0 0 1 1.137777-4.266667l1.365334-1.777778a8.533333 8.533333 0 0 1 9.856-1.592889l2.204444 1.592889 64.739556 64.739556a8.533333 8.533333 0 0 1 1.592889 9.856l-1.592889 2.204444-64.739556 64.739556a8.533333 8.533333 0 0 1-14.264889-3.768889l-0.298666-2.275556V789.333333h-42.666667C230.826667 789.333333 106.666667 665.173333 106.666667 512c0-149.831111 118.826667-271.928889 267.377777-277.162667l9.955556-0.170666h256z"
          ></path>
          <path
            d="M554.666667 640V384h-36.124445L469.333333 427.150222v40.618667l49.208889-43.861333V640z"
          ></path>
        </svg>
        <!--音频控件：列表循环-->
        <svg
          v-else-if="selfPlayMode == 'list-loop'"
          title="列表循环"
          t="1604563821277"
          class="icon"
          viewBox="0 0 1092 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="6511"
          width="200"
          height="200"
        >
          <path
            d="M240.693333 589.546667a32 32 0 0 0-22.666666 9.386666l-113.12 113.12a64 64 0 0 0 0 90.666667l113.12 113.013333a32 32 0 0 0 45.28-45.28L150.186667 757.333333l113.12-113.12a32 32 0 0 0-22.613334-54.666666zM783.306667 98.88a32 32 0 0 0-22.613334 54.666667L873.813333 266.666667l-113.12 113.12a32 32 0 1 0 45.28 45.28l113.12-113.12a64 64 0 0 0 0-90.666667L805.973333 108.266667a32 32 0 0 0-22.666666-9.386667z"
          ></path>
          <path
            d="M117.973333 544a32 32 0 0 1-32-32V437.333333a202.666667 202.666667 0 0 1 202.666667-202.666666h597.333333a32 32 0 0 1 0 64h-597.333333a138.666667 138.666667 0 0 0-138.666667 138.666666v74.666667a32 32 0 0 1-32 32zM736.64 789.333333h-602.666667a32 32 0 0 1 0-64h602.666667a138.666667 138.666667 0 0 0 138.666667-138.666666V512a32 32 0 0 1 64 0v74.666667a202.666667 202.666667 0 0 1-202.666667 202.666666z"
          ></path>
        </svg>
        <!--音频控件：随机播放-->
        <svg
          v-else-if="selfPlayMode == 'random'"
          t="1604300800668"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="5233"
          width="200"
          height="200"
          title="随机播放"
        >
          <path
            d="M768 640v-64.981333a21.333333 21.333333 0 0 1 35.413333-16l125.226667 109.909333a21.333333 21.333333 0 0 1-0.042667 32.085333l-125.226666 109.226667a21.333333 21.333333 0 0 1-35.370667-16.042667V725.333333h-66.346667a256 256 0 0 1-202.069333-98.816l-170.538667-219.306666A170.666667 170.666667 0 0 0 194.346667 341.333333H85.333333V256h109.013334A256 256 0 0 1 396.373333 354.816l170.538667 219.306667A170.666667 170.666667 0 0 0 701.653333 640H768z"
          ></path>
          <path
            d="M768 256V191.018667a21.333333 21.333333 0 0 1 35.413333-16l125.226667 109.909333a21.333333 21.333333 0 0 1-0.042667 32.085333l-125.226666 109.226667A21.333333 21.333333 0 0 1 768 410.197333V341.333333h-66.346667a170.666667 170.666667 0 0 0-134.698666 65.877334l-170.538667 219.306666A256 256 0 0 1 194.346667 725.333333H85.333333v-85.333333h109.013334a170.666667 170.666667 0 0 0 134.698666-65.877333l170.538667-219.306667A256 256 0 0 1 701.653333 256H768z"
          ></path>
        </svg>
        <!--音频控件：列表播放-->
        <svg
          v-else
          t="1604306527698"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="13436"
          width="200"
          height="200"
          title="列表播放"
        >
          <path
            d="M832 832a32 32 0 0 1 3.744 63.776L832 896H192a32 32 0 0 1-3.744-63.776L192 832h640z m0-304a32 32 0 0 1 3.744 63.776L832 592H192a32 32 0 0 1-3.744-63.776L192 528h640zM224.256 128.544a64 64 0 0 1 26.816 5.888L256 136.96l127.488 72.832a64 64 0 0 1 4.832 108.096l-4.8 3.04L256 393.824a64 64 0 0 1-95.52-50.016l-0.224-5.568V192.544a64 64 0 0 1 64-64z m0 64v145.696l127.488-72.864-127.488-72.832zM832 224a32 32 0 0 1 3.744 63.776L832 288H496a32 32 0 0 1-3.744-63.776L496 224H832z"
            p-id="13437"
          />
        </svg>
      </div>

      <!--音频信息：当前播放位置/音频长度-->
      <div class="audio-controls__time">
        {{ mm_ss(currentTime) }} / {{ mm_ss(duration) }}
      </div>
      <!--音频控件：当前播放进度-->
      <AudioProgress
        :style="{
          width: `calc(100% - ${320 +
            (isShowPrev ? 36 : 0) +
            (isShowNext ? 36 : 0) +
            (showMode ? 36 : 0)}px)`,
        }"
        :percent="percentage"
        @change="onChangeProgress"
      />
      <!--音频控件：音量-->
      <AudioVolume
        ref="volume"
        title="音量"
        :volume="volume"
        @change="onChangeVolume"
      />
    </div>
    <!--音频播放器-->
    <audio
      ref="audio"
      class="audio-player__audio"
      :src="source"
      @progress="onProgress"
      @canplaythrough="onCanPlayThrough"
      @ended="onEnded"
      @timeupdate="onPlaying"
    >
      您的浏览器不支持 audio 标签。
    </audio>
  </div>
</template>

<script>
import AudioProgress from "./../audio-progress";
import AudioVolume from "./../audio-volume";
export default {
  name: "AudioPlayer",
  components: {
    AudioProgress,
    AudioVolume,
  },
  props: {
    // 音频播放源
    src: {
      type: String,
      default: null,
    },
    // 是否单曲循环播放
    loop: {
      type: Boolean,
      default: false,
    },
    // 播放列表
    srcList: {
      type: Array,
      default: null,
    },
    // 播放列表关键字
    srcKey: {
      type: String,
      default: null,
    },
    // 是否显示上一首按钮
    showPrev: {
      type: Boolean,
      default: false,
    },
    // 是否显示下一首按钮
    showNext: {
      type: Boolean,
      default: false,
    },
    // 是否显示播放模式按钮
    showMode: {
      type: Boolean,
      default: false,
    },
    // 播放模式
    playMode: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      isPlaying: false, // 音频是否正在播放
      currentIndex: 0, // 当前播放的音频位置索引
      volume: 50, // 音频音量
      currentTime: 0, // 音频当前播放位置
      duration: 0, // 音频长度
      selfPlayMode: this.playMode
        ? this.playMode
        : this.loop
        ? "single-loop"
        : "single", // 播放模式：单曲播放，单曲循环，顺序播放，循环播放，随机播放
    };
  },
  computed: {
    percentage: function() {
      return (this.currentTime / this.duration) * 100;
    },
    // 是否是多曲音频源
    isList: function() {
      return this.srcList ? true : false;
    },
    // 是否显示上一首按钮
    isShowPrev: function() {
      return this.showPrev || this.isList;
    },
    // 是否显示下一首按钮
    isShowNext: function() {
      return this.showNext || this.isList;
    },
    // 是否是单曲循环
    isSingleLoop: function() {
      return this.loop
        ? this.selfPlayMode == "single-loop"
        : this.selfPlayMode == "single";
    },
    // 音频源
    source: function() {
      if (this.isList) {
        return this.srcKey
          ? this.srcList[this.currentIndex][this.srcKey]
          : this.srcList[this.currentIndex];
      }
      return this.src;
    },
  },
  methods: {
    // 调整音量
    onChangeVolume(value) {
      this.$refs.audio.volume = value / 100;
      this.$emit("volume-change", value);
    },
    //调整进度
    onChangeProgress(value) {
      this.$refs.audio.currentTime = (value / 100) * this.duration;
      this.$emit("progress-change", value);
    },
    // 点击播放模式
    onCickPLayMode() {
      if (this.selfPlayMode == "single") {
        this.selfPlayMode = "single-loop";
      } else if (this.selfPlayMode == "single-loop") {
        if (!this.isList) {
          this.selfPlayMode = "single";
        } else {
          this.selfPlayMode = "list";
        }
      } else if (this.selfPlayMode == "list") {
        this.selfPlayMode = "list-loop";
      } else if (this.selfPlayMode == "list-loop") {
        this.selfPlayMode = "random";
      } else if (this.selfPlayMode == "random") {
        this.selfPlayMode = "single";
      }
      this.$emit("mode-change", this.selfPlayMode);
    },
    // 秒转为分:秒
    mm_ss(val) {
      return (
        ("00" + parseInt(val / 60)).slice(-2) +
        ":" +
        ("00" + parseInt(val % 60)).slice(-2)
      );
    },
    onPlayPrev() {
      if (this.isList) {
        if (this.selfPlayMode == "random") {
          this.currentIndex = parseInt(this.srcList.length * Math.random());
        } else {
          if (this.currentIndex == 0) {
            this.currentIndex = this.srcList.length - 1;
          } else {
            this.currentIndex--;
          }
        }
        this.$emit("play-prev", this.currentIndex);
      } else {
        this.$emit("play-prev");
      }
    },
    onPlayNext() {
      if (this.isList) {
        if (this.selfPlayMode == "random") {
          this.currentIndex = parseInt(this.srcList.length * Math.random());
        } else {
          if (this.currentIndex == this.srcList.length - 1) {
            this.currentIndex = 0;
          } else {
            this.currentIndex++;
          }
        }
        this.$emit("play-next", this.currentIndex);
      } else {
        this.$emit("play-next");
      }
    },
    // 播放
    onPlay(index) {
      this.currentIndex = index;
      if (!this.source) return;

      this.$refs.audio.play();
      this.isPlaying = true;
      this.$emit("play", this.currentIndex);
    },
    // 播放中
    onPlaying() {
      this.currentTime = this.$refs.audio.currentTime;
      this.$emit("playing", this.currentTime);
    },
    // 暂停
    onPause() {
      this.$refs.audio.pause();
      this.isPlaying = false;
      this.$emit("pause");
    },
    // 客户端正在请求数据，缓冲中
    onProgress() {
      this.duration = this.$refs.audio.duration;
    },
    // 歌曲已经载入完全
    onCanPlayThrough() {
      if (this.isPlaying) {
        this.$refs.audio.play();
      }
    },
    // 音频的播放是否已结束
    onEnded() {
      // 单曲播放
      if (this.selfPlayMode == "single") {
        this.isPlaying = false;
        this.$emit("ended");
        return;
      }
      // 单曲循环
      if (this.selfPlayMode == "single-loop") {
        this.$refs.audio.play();
        return;
      }
      // 顺序播放
      if (this.selfPlayMode == "list") {
        if (this.currentIndex != this.srcList.length - 1) {
          this.onPlayNext();
        } else {
          this.isPlaying = false;
          this.$emit("ended");
        }
        return;
      }
      // 循环播放
      if (this.selfPlayMode == "list-loop") {
        this.onPlayNext();
        return;
      }
      // 随机播放
      if (this.selfPlayMode == "random") {
        this.onPlayNext();
        return;
      }
    },
  },
};
</script>

<style lang="scss">
@import "index";
</style>
