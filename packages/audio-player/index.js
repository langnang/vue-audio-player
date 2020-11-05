// 导入组件，组件必须声明 name
import AudioPlayer from "./index.vue";

// 为组件提供 install 安装方法，供按需引入
AudioPlayer.install = function(Vue) {
  Vue.component(AudioPlayer.name, AudioPlayer);
};

// 默认导出组件
export default AudioPlayer;
