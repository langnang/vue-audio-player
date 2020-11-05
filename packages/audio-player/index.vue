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
          v-if="playMode == 'single' || playMode == 'single-loop'"
          :class="{
            inactive: playMode == 'single',
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
            d="M773.597867 203.776l-0.273067 0.443733a33.621333 33.621333 0 0 0-20.343467-6.485333c-18.978133 0.785067-33.723733 16.725333-32.9728 35.771733a33.826133 33.826133 0 0 0 15.633067 26.794667l-0.1024 0.170667a375.227733 375.227733 0 0 1 166.2976 311.876266c0 207.018667-168.448 375.466667-375.466667 375.466667-27.818667 0-27.818667 0-54.340266-2.901333-90.453333-9.898667-152.610133-58.9824-155.5456-61.201067a375.330133 375.330133 0 0 1-165.5808-311.364267c0-201.4208 159.5392-365.841067 358.843733-374.647466l-41.984 40.823466 0.8192 0.853334a33.860267 33.860267 0 0 0-15.2576 29.218133c0.750933 18.978133 16.725333 33.757867 35.669333 33.041067a33.792 33.792 0 0 0 26.0096-14.472534l0.3072 0.341334 128.648534-124.996267L515.6864 34.0992l-0.4096 0.4096a33.6896 33.6896 0 0 0-26.3168-11.400533c-18.944 0.750933-33.6896 16.725333-32.9728 35.703466a33.8944 33.8944 0 0 0 13.038933 25.156267l45.226667 45.2608C275.182933 135.714133 82.602667 331.741867 82.602667 572.347733c0 147.626667 73.1136 285.149867 193.194666 366.114134 3.072 2.56 77.550933 62.190933 188.757334 74.308266 29.422933 3.208533 31.1296 3.310933 61.781333 3.310934 244.667733 0 443.733333-199.0656 443.733333-443.733334A443.392 443.392 0 0 0 773.597867 203.776"
            p-id="12645"
          />
          <path
            d="M542.071467 400.827733a33.28 33.28 0 0 0-17.134934 6.075734l-0.170666-0.3072-106.8032 69.700266 0.170666 0.273067a33.9968 33.9968 0 0 0-15.837866 29.696c0.750933 18.944 16.725333 33.723733 35.669333 32.9728a33.109333 33.109333 0 0 0 17.1008-6.0416l0.2048 0.273067 53.998933-35.259734v249.856h0.034134c0 0.477867-0.238933 0.887467-0.2048 1.365334a34.2016 34.2016 0 1 0 68.4032-1.365334h0.034133v-0.170666c0-0.4096 0.2048-0.750933 0.2048-1.160534 0-0.273067-0.170667-0.477867-0.2048-0.785066V435.2c0-0.477867 0.2048-0.887467 0.2048-1.3312a34.4064 34.4064 0 0 0-35.669333-33.041067"
            p-id="12646"
          />
        </svg>
        <!--音频控件：列表播放-->
        <svg
          v-if="playMode == 'list'"
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
        <!--音频控件：列表循环-->
        <svg
          v-if="playMode == 'list-loop'"
          t="1604306395716"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="7277"
          width="200"
          height="200"
          title="列表循环"
        >
          <path
            d="M64.532459 511.40739a63.893258 63.893258 0 0 0 63.893259-63.893258V383.620873a63.893258 63.893258 0 0 1 63.893258-63.893258h612.736347l-83.061236 82.422303a63.893258 63.893258 0 0 0 0 90.728427 63.893258 63.893258 0 0 0 90.728427 0l191.679775-191.679775a63.893258 63.893258 0 0 0 0-90.728427l-191.679775-191.679775a63.893258 63.893258 0 0 0-90.728427 90.728427L805.055323 191.941098H192.318976a191.679775 191.679775 0 0 0-191.679775 191.679775v63.893259a63.893258 63.893258 0 0 0 63.893258 63.893258z"
            fill="#383B48"
            p-id="7278"
          />
          <path
            d="M959.038076 511.40739a63.893258 63.893258 0 0 0-63.893258 63.893258v63.893259a63.893258 63.893258 0 0 1-63.893259 63.893258H218.515212l83.061236-81.783371a63.893258 63.893258 0 0 0 0-90.089494 63.893258 63.893258 0 0 0-90.728427 0l-191.679775 191.679775a63.893258 63.893258 0 0 0 0 90.728427l191.679775 191.679775a63.893258 63.893258 0 0 0 90.728427-91.36736L218.515212 830.873682H831.251559a191.679775 191.679775 0 0 0 191.679775-191.679775V575.300648a63.893258 63.893258 0 0 0-63.893258-63.893258z"
            fill="#383B48"
            p-id="7279"
          />
        </svg>
        <!--音频控件：随机播放-->
        <svg
          v-if="playMode == 'random'"
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
            d="M912 311.9c0 4.1-1.3 7.6-4 10.2l-142.9 143c-2.7 2.7-6.1 4-10.2 4-3.8 0-7.2-1.4-10-4.2-2.8-2.8-4.2-6.2-4.2-10v-85.7H626.3c-14.3 0-27.2 2.3-38.9 6.7-11.6 4.5-21.9 11.2-30.8 20.1-8.9 8.9-16.5 18.1-22.7 27.4-6.3 9.4-13 20.9-20.1 34.6-9.5 18.5-21.1 43.9-34.8 76.3-8.6 19.6-16 36.2-22.1 49.6-6.1 13.4-14.2 29-24.1 46.9s-19.5 32.8-28.5 44.6c-9.1 11.9-20.1 24.2-33.1 37.1-13 12.8-26.4 23-40.2 30.6-13.8 7.6-29.7 13.8-47.5 18.8-17.8 4.9-36.9 7.3-57.2 7.3h-100c-4.1 0-7.6-1.3-10.2-4-2.7-2.6-4-6-4-10.1v-85.7c0-4.1 1.3-7.6 4-10.2 2.7-2.7 6.1-4 10.2-4h100c14.3 0 27.2-2.3 38.9-6.7 11.6-4.5 21.9-11.2 30.8-20.1 8.9-8.9 16.5-18.1 22.7-27.4 6.3-9.4 13-20.9 20.1-34.6 9.5-18.4 21.1-43.9 34.8-76.3 8.6-19.6 16-36.2 22.1-49.6 6.1-13.4 14.2-29 24.1-46.9 10-17.8 19.5-32.8 28.5-44.6 9.1-11.9 20.1-24.2 33.1-37.1 13-12.8 26.4-23 40.2-30.6 13.8-7.6 29.7-13.8 47.5-18.8 17.8-4.9 36.9-7.3 57.2-7.3h114.3v-85.7c0-4.1 1.3-7.6 4-10.2 2.7-2.7 6.1-4 10.2-4 3.6 0 7.1 1.5 10.7 4.5L908 301.9c2.7 2.4 4 5.9 4 10z m-502.7 43.3c-17.8 27.4-38.2 68-61.1 121.9-6.6-13.4-12-24.1-16.5-32.4-4.5-8.2-10.5-17.7-18.1-28.4-7.6-10.7-15.2-19.2-22.7-25.3-7.6-6.1-17-11.3-28.2-15.6-11.2-4.3-23.3-6.5-36.4-6.5h-99.9c-4.1 0-7.6-1.3-10.2-4-2.7-2.7-4-6.1-4-10.2V269c0-4.1 1.3-7.6 4-10.2 2.7-2.7 6.1-4 10.2-4h100c74.2-0.1 135.3 33.4 182.9 100.4zM912 711.9c0 4.1-1.3 7.6-4 10.2l-142.9 143c-2.7 2.7-6.1 4-10.2 4-3.8 0-7.2-1.4-10-4.2s-4.2-6.2-4.2-10v-85.7c-9.5 0-22.2 0.1-37.9 0.2-15.8 0.2-27.8 0.3-36.2 0.5-8.4 0.2-19.2 0-32.6-0.5s-23.9-1.2-31.7-2.3c-7.7-1-17.3-2.6-28.5-4.7-11.3-2.1-20.7-4.8-28.2-8.3-7.4-3.4-16.1-7.7-25.9-12.8-9.9-5.1-18.6-11-26.4-17.8-7.7-6.9-16-14.8-24.6-23.8-8.6-9.1-17-19.4-25-31 17.6-27.7 37.8-68.3 60.8-121.9 6.6 13.4 12 24.2 16.5 32.4s10.5 17.7 18.1 28.4c7.6 10.7 15.2 19.2 22.7 25.3 7.6 6.1 17 11.4 28.2 15.6 11.2 4.3 23.3 6.5 36.4 6.5h114.3v-85.7c0-4.1 1.3-7.6 4-10.2 2.7-2.7 6.1-4 10.2-4 3.6 0 7.1 1.5 10.7 4.5L908 702c2.7 2.3 4 5.8 4 9.9z"
            p-id="5234"
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
  },
  data() {
    return {
      isPlaying: false, // 音频是否正在播放
      currentIndex: 0, // 当前播放的音频位置索引
      volume: 50, // 音频音量
      currentTime: 0, // 音频当前播放位置
      duration: 0, // 音频长度
      playMode: this.loop ? "single-loop" : "single", // 播放模式：单曲播放，单曲循环，顺序播放，循环播放，随机播放
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
        ? this.playMode == "single-loop"
        : this.playMode == "single";
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
      if (this.playMode == "single") {
        this.playMode = "single-loop";
      } else if (this.playMode == "single-loop") {
        if (!this.isList) {
          this.playMode = "single";
        } else {
          this.playMode = "list";
        }
      } else if (this.playMode == "list") {
        this.playMode = "list-loop";
      } else if (this.playMode == "list-loop") {
        this.playMode = "random";
      } else if (this.playMode == "random") {
        this.playMode = "single";
      }
      this.$emit("mode-change", this.playMode);
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
        if (this.playMode == "random") {
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
        if (this.playMode == "random") {
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
      if (this.playMode == "single") {
        this.isPlaying = false;
        this.$emit("ended");
        return;
      }
      // 单曲循环
      if (this.playMode == "single-loop") {
        this.$refs.audio.play();
        return;
      }
      // 顺序播放
      if (this.playMode == "list") {
        if (this.currentIndex != this.srcList.length - 1) {
          this.onPlayNext();
        } else {
          this.isPlaying = false;
          this.$emit("ended");
        }
        return;
      }
      // 循环播放
      if (this.playMode == "list-loop") {
        this.onPlayNext();
        return;
      }
      // 随机播放
      if (this.playMode == "random") {
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
