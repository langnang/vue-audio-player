<template>
  <div id="app">
    <h1>单曲播放模式</h1>
    <h3>单曲播放</h3>
    <AudioPlayer
      :src="audioList[0]"
      @play="onPlay"
      @pause="onPause"
      @playing="onPlaying"
      @ended="onEnded"
      @progress-change="onProgressChange"
      @volume-change="onVolumeChange"
    />
    <h3>单曲循环</h3>
    <AudioPlayer
      :src="audioList[2]"
      :show-mode="true"
      :loop="true"
      @play="onPlay"
      @pause="onPause"
      @playing="onPlaying"
      @ended="onEnded"
      @progress-change="onProgressChange"
      @volume-change="onVolumeChange"
      @mode-change="onModeChange"
    />
    <h1>多曲播放模式</h1>
    <AudioPlayer
      :src-list="audioList"
      :show-mode="true"
      play-mode="random"
      @play="onPlay"
      @pause="onPause"
      @playing="onPlaying"
      @ended="onEnded"
      @progress-change="onProgressChange"
      @volume-change="onVolumeChange"
      @mode-change="onModeChange"
      @play-prev="onPlayPrev"
      @play-next="onPlayNext"
    />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      audioList: [
        "https://96.f.1ting.com/local_to_cube_202004121813/96kmp3/zzzzzmp3/2015kNov/20X/20m_MingX/01.mp3",
        "https://96.f.1ting.com/local_to_cube_202004121813/96kmp3/2020/08/25/25a_pyc/01.mp3",
        "https://96.f.1ting.com/local_to_cube_202004121813/96kmp3/2020/08/13/13d_jtq/01.mp3",
        "https://96.f.1ting.com/local_to_cube_202004121813/96kmp3/2020/08/13/13s_ylf/01.mp3",
        "https://96.f.1ting.com/local_to_cube_202004121813/96kmp3/2020/08/13/13r_ylf/01.mp3",
      ],
    };
  },
  methods: {
    onPlay: function() {
      console.log("onPlay");
    },
    onPlayPrev: function(index) {
      console.log("onPlayPrev", index);
    },
    onPlayNext: function(index) {
      console.log("onPlayNext", index);
    },
    onPlaying: function(time) {
      console.log("onPlaying", time);
    },
    onPause: function() {
      console.log("onPause");
    },
    onEnded: function() {
      console.log("onEnded");
    },
    onProgressChange: function(progress) {
      console.log("onProgressChange", progress);
    },
    onVolumeChange: function(volume) {
      console.log("onVolumeChange", volume);
    },
    onModeChange: function(mode) {
      console.log("onVolumeChange", mode);
    },
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  text-align: center;
}
</style>
