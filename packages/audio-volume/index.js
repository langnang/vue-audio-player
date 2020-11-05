// 导入组件，组件必须声明 name
import AudioVolume from "./index.vue";

// 为组件添加 install 方法，用于按需引入
AudioVolume.install = function(Vue) {
  Vue.component(AudioVolume.name, AudioVolume);
};

export default AudioVolume;
