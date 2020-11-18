export default {
  drag: {
    bind: function(el, binding, vnode) {
      // 当前元素
      const point = el;
      // Vue 组件对象
      const _vm = vnode.context;
      // 回调函数
      let callback = null;
      if (binding.arg === "callback") {
        callback = _vm[binding.expression];
      }
      point.onmousedown = (e) => {
        // 进度条底部元素
        const outer = e.path[1];
        // 进度条进度元素
        const inner = e.path[1].childNodes[0];
        // 进度条总长度
        const outerWidth = outer.offsetWidth;
        // 进度条原始位置
        const originX = e.clientX;
        // 进度条原始百分比
        const originLeft = parseFloat(point.style.left);
        document.onmousemove = (e) => {
          // 进度条移动到的位置
          const latestX = e.clientX;
          // 移动后的位置
          let percent = ((latestX - originX) / outerWidth) * 100 + originLeft;
          // 防止进度条超出范围
          if (percent >= 100) {
            percent = 100;
          }
          if (percent <= 0) {
            percent = 0;
          }
          point.style.left = percent + "%";
          inner.style.width = percent + "%";
          if (callback) {
            callback(percent);
          }
        };
        document.onmouseup = () => {
          document.onmousemove = null;
          document.onmouseup = null;
        };
      };
    },
  },
};
