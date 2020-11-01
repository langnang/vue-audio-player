<template>
  <AudioPlayer :audio-list="audioList"/>
</template>

<script>
import AudioPlayer from '@/audio-player';

export default {
  name: 'App',
  components: {
    AudioPlayer,
  },
  data() {
    return {
      audioList: [
        {
          id: '100630',
          cover: 'https://img.1ting.com/images/special/384/s300_83917da6dbb2d38a1841ba1cb491a9d8.jpg',
          src: 'https://96.f.1ting.com/local_to_cube_202004121813/96kmp3/zzzzzmp3/2015kNov/20X/20m_MingX/01.mp3',
          lyric: '[ti: Fly]\n' +
            '[ar: J. Holiday]\n' +
            '[al: ]\n' +
            '\n' +
            '[00:00.19]J. Holiday - Fly\n' +
            '[00:01.29]Our Muzik - 最前沿的歐美音樂!\n' +
            '[00:02.19]\n' +
            '[00:03.19](Fly, fly, fly, fly Ooh)\n' +
            '[00:19.45]\n' +
            '[00:19.45]I know people change but I hate we\'ve changed.\n' +
            '[00:26.07]And its killing me trying to figure out where we are.\n' +
            '[00:32.29]Cause it aint the same, girl I\'ll take the blame.\n' +
            '[00:38.27]And I\'m willing to take this chance that you feel we\'ve traveled too far.\n' +
            '[00:44.59]Lord knows I wanna keep you, life without you I just can\'t see it.\n' +
            '[00:49.87]But sometimes you gotta let love be what it\'s gonna be.\n' +
            '[00:55.53](Ooh oh)\n' +
            '[00:58.15]\n' +
            '[00:59.15]I\'ma let you fly and pray you come back to me cause I do believe.\n' +
            '[01:12.08]If I let you fly then you fly back, then it was meant to be.\n' +
            '[01:21.41]So fly, fly, fly, fly.\n' +
            '[01:29.79]\n' +
            '[01:30.79]It was only me, taking flights over sea.\n' +
            '[01:36.52]But now it\'s you cause they finally realized you\'re a star.\n' +
            '[01:42.58]Whenever we\'re in the same place at the same time.\n' +
            '[01:45.08]No we don\'t feel the same way, I want to rewind.\n' +
            '[01:48.70]Take it back to where things made stop, I think we flown to far.\n' +
            '[01:55.29]Lord knows I wanna keep you, life without you damn, I just can\'t see it.\n' +
            '[02:00.50]Sometimes you gotta let love be what it\'s gonna be.\n' +
            '[02:06.11](Yeah oh oh)\n' +
            '[02:09.28]\n' +
            '[02:10.28]I\'ma let you fly and pray you come back to me cause I do believe.\n' +
            '[02:22.57]If I let you fly then you fly back, then it was meant to be.\n' +
            '[02:32.12]So fly, fly, fly, fly.\n' +
            '[02:36.83]\n' +
            '[02:37.83]Fly, fly, fly, and all I know to let you do is -\n' +
            '[02:43.11]Fly, fly, fly, fly, fly.\n' +
            '[02:46.84]Hey, I wanna fly with you, fly, I know you, fly, I know you gotta see what you gotta see.\n' +
            '[02:55.34]Fly, fly, fly, fly, fly.\n' +
            '[02:58.71]And I hope you fly back to me if I let ya\'\n' +
            '[03:01.60]\n' +
            '[03:02.60]I\'ma let you fly and pray you come back to me cause I do believe.\n' +
            '[03:15.29]If I let you fly then you fly back, then it was meant to be.\n' +
            '[03:24.47]So fly, fly, fly, fly.\n' +
            '[03:28.78]\n' +
            '[03:29.78]Fly, fly, fly, and all I know to let you do is -\n' +
            '[03:35.43]Fly, fly, fly, fly, fly.\n' +
            '[03:39.21]Hey, I wanna fly with you, fly, I know you, fly, I know you gotta see what you gotta see.\n' +
            '[03:47.68]Fly, fly, fly, fly, fly.\n' +
            '[03:50.69]And I hope you fly back to me if I let ya\'\n' +
            '[03:54.72]',
          album: 'October Snow (单曲)',
          author: '陈明憙Jocelyn'
        },
        {
          id: '128519',
          cover: 'https://img.1ting.com/images/special/429/s300_9c49b49e7e266283ac7368515718eb59.jpg',
          src: 'https://96.f.1ting.com/local_to_cube_202004121813/96kmp3/2020/08/25/25a_pyc/01.mp3',
          lyric: '[ti:RUN 2008]\n' +
            '[ar:信]\n' +
            '[al:我就是我]\n' +
            '\n' +
            '[00:00.00]歌名: RUN 2008\n' +
            '[00:02.00]歌手: 信\n' +
            '[00:04.00]\n' +
            '[00:08.13]you gotta run for your life\n' +
            '[00:16.23]you gotta run for your life\n' +
            '[00:24.38]you gotta run for your life\n' +
            '[00:32.56]you gotta run for your life\n' +
            '[00:41.40]－MUSIC－\n' +
            '[00:49.75]等待黎明的迹象\n' +
            '[00:57.82]感受脉搏正在不断膨胀的力量\n' +
            '[01:06.94]绕一段远路也无妨\n' +
            '[01:14.48]梦有续集 请各自前往\n' +
            '[01:23.01]向倾倒的世界\n' +
            '[01:31.31]用热情 来渴望\n' +
            '[01:39.60]跨开步 踏着光芒 Yeah～\n' +
            '[01:48.63]you gotta run gotta run gotta run for your life\n' +
            '[01:50.66]you gotta run gotta run gotta run for your life\n' +
            '[01:52.72]you gotta run gotta run gotta run for your life\n' +
            '[01:55.06]啊～嚯～\n' +
            '[01:56.98]you gotta run gotta run gotta run for your life\n' +
            '[01:58.91]you gotta run gotta run gotta run for your life\n' +
            '[02:00.93]you gotta run gotta run gotta run for your life\n' +
            '[02:03.20]啊～\n' +
            '[02:04.60]－MUSIC－\n' +
            '[02:22.41]抬头仰 星在摇晃\n' +
            '[02:30.78]看见远处在传递着未知的谜样\n' +
            '[02:39.81]俯瞰这世界在低唱\n' +
            '[02:48.11]张开双臂 编希望的网\n' +
            '[02:55.66]向倾倒的世界\n' +
            '[03:04.20]用热情 来渴望\n' +
            '[03:12.43]跨开步 踏着光芒 Yeah～\n' +
            '[03:21.69]you gotta run gotta run gotta run for your life\n' +
            '[03:23.73]you gotta run gotta run gotta run for your life\n' +
            '[03:25.82]you gotta run gotta run gotta run for your life\n' +
            '[03:28.01]啊～嚯～\n' +
            '[03:29.94]you gotta run gotta run gotta run for your life\n' +
            '[03:31.92]you gotta run gotta run gotta run for your life\n' +
            '[03:33.85]you gotta run gotta run gotta run for your life\n' +
            '[03:36.54]啊～啊～啊\n' +
            '[03:37.50](Rap)情绪 怎么去控制 冰冻心灵\n' +
            '[03:39.86]如何能够找到回家道路\n' +
            '[03:41.62]靠近我 无数黑暗 旅程\n' +
            '[03:43.72]找回自已 要变幻脱胎和换骨\n' +
            '[03:46.34]超越疾风 勇敢如我无惧\n' +
            '[03:48.14]不同凡响 才是我爱显现突兀\n' +
            '[03:50.41]乞求梦想 能够与众不同\n' +
            '[03:52.26]因为存在努力呼吸 不服输不哭\n' +
            '[03:54.33]烈日高照 别再不知所措\n' +
            '[03:56.22]奋斗战士 努力维持不败纪录\n' +
            '[03:58.33]荣誉净土 让你无法选择\n' +
            '[04:00.09]唯有赢得胜利 那才是我们最后的觉悟\n' +
            '[04:02.92]you gotta run gotta run gotta run for your life\n' +
            '[04:05.03]you gotta run gotta run gotta run for your life\n' +
            '[04:07.11]you gotta run gotta run gotta run for your life\n' +
            '[04:08.82]啊～嚯～\n' +
            '[04:11.32]you gotta run gotta run gotta run for your life\n' +
            '[04:13.29]you gotta run gotta run gotta run for your life\n' +
            '[04:15.37]you gotta run gotta run gotta run for your life\n' +
            '[04:17.04]啊～\n' +
            '[04:24.30]－END－\n' +
            '[04:30.30]',
          album: '如果你今晚也会想起我（单曲）',
          author: '潘悦晨'
        }
      ]
    }
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
