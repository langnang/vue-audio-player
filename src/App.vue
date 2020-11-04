<template>
  <div id="app">
    <h1>单曲播放模式</h1>
    <AudioPlayer :src="audioList[0]" :show-mode="true" :loop="true" />
    <h1>多曲播放模式</h1>
    <AudioPlayer :src-list="audioList" :show-mode="true" />
  </div>
</template>

<script>
import AudioPlayer from "@/audio-player";

export default {
  name: "App",
  components: {
    AudioPlayer,
  },
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
