// 导入组件，组件必须声明 name
import AudioProgress from "./index.vue";

// 为组件添加 install 方法，用于按需引入
AudioProgress.install = function(Vue) {
  Vue.component(AudioProgress.name, AudioProgress);
};

export default AudioProgress;
