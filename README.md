# vue-audio-player

> Vue 音频播放器组件

## 安装

```bash
npm i -S @langnang/vue-audio-player
```

## 按需引入

```javascript
import { AudioPlayer } from "@langnang/vue-audio-player";
import "@langnang/vue-audio-player/lib/vue-audio-player.css";

components: {
  AudioPlayer;
}
```

## 全局引入

```javascript
import AudioPlayer from "@langnang/vue-audio-player";
import "@langnang/vue-audio-player/lib/vue-audio-player.css";

Vue.use(AudioPlayer);
```

## 使用

## Attributes

| 参数      | 说明                   | 类型    | 默认值 |
| --------- | ---------------------- | ------- | ------ |
| src       | 单曲音频源             | String  | -      |
| loop      | 是否单曲音频源循环播放 | Boolean | false  |
| src-list  | 多曲音频源             | Array   | -      |
| src-key   | 多曲音频源关键字       | String  | -      |
| show-next | 是否显示上一首按钮     | Boolean | false  |
| show-prev | 是否显示下一首按钮     | Boolean | false  |
| show-mode | 是否显示模式切换按钮   | Boolean | false  |

## Events

| 事件            | 说明                | 回调        |
| --------------- | ------------------- | ----------- |
| playing         | 播放中              | currentTime |
| ended           | 音频/列表播放结束后 | -           |
| volume-change   | 音量修改            | volume      |
| progress-change | 进度修改            | currentTime |
| mode-change     | 模式修改            | mode        |

## Methods

| 方法      | 说明   | 回调 |
| --------- | ------ | ---- |
| play      | 播放   | -    |
| pause     | 暂停   | -    |
| play-prev | 上一首 | -    |
| play-next | 下一首 | -    |

## Data

| 参数         | 说明               | 类型    | 默认值 |
| ------------ | ------------------ | ------- | ------ |
| currentIndex | 当前播放的音频索引 | Number  | 0      |
| isPlaying    | 音频是否正在播放   | Boolean | false  |
| duration     | 音频持续时间       | Number  | -      |
| currentTime  | 音频当前播放时间   | Number  | -      |

## Slots

## 参考

- [HTML <audio> 标签 | W3school](https://www.w3school.com.cn/tags/tag_audio.asp)
- [HTML DOM Audio 对象 | W3scool](https://www.w3school.com.cn/jsref/dom_obj_audio.asp)
- https://github.com/1014156094/vue-audio-player
