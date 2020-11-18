<template>
  <div class="audio-controls__volume">
    <svg
      v-if="!selfMuted && selfVolume >= 50"
      t="1604492613740"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="1682"
      width="200"
      height="200"
      @click="mute"
    >
      <path
        d="M596 139c16.71 16.242 26 38.634 26 62v624c0 48.608-39.423 88-88 88-23.423 0-45.833-9.282-62-26L312.059 727.059A48 48 0 0 0 278.118 713H216c-70.657 0.295-128-57.003-128-128V441c0-70.338 57.343-127.636 128-128h61.198a48 48 0 0 0 33.844-13.962L472 139c34.021-34.576 89.774-34.604 124 0z m219.153 132.989C883.63 332.312 924 422.217 924 518.999c0 96.784-40.37 186.689-108.847 247.012-13.262 11.683-33.482 10.403-45.165-2.859-11.682-13.261-10.402-33.482 2.86-45.164C827.493 669.849 860 597.455 860 519s-32.507-150.85-87.152-198.988c-13.262-11.682-14.542-31.903-2.86-45.164 11.683-13.262 31.903-14.542 45.165-2.86z m-95.508 93.39C760.867 403.048 785 458.494 785 517.973c0 59.513-24.161 114.988-65.425 152.659-13.052 11.915-33.292 10.994-45.208-2.058-11.796-12.922-11.011-32.888 1.67-44.848l0.388-0.36 0.834-0.768C704.657 597.13 721 559.193 721 517.974c0-41.613-16.656-79.88-44.53-105.352-13.045-11.922-13.956-32.163-2.034-45.209 11.922-13.046 32.163-13.957 45.209-2.035z"
        fill="#333333"
        p-id="1683"
      />
    </svg>
    <svg
      v-else-if="!selfMuted && selfVolume < 50 && selfVolume > 0"
      t="1604492613740"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="1682"
      width="200"
      height="200"
      @click="mute"
    >
      <path
        d="M596 139c16.71 16.242 26 38.634 26 62v624c0 48.608-39.423 88-88 88-23.423 0-45.833-9.282-62-26L312.059 727.059A48 48 0 0 0 278.118 713H216c-70.657 0.295-128-57.003-128-128V441c0-70.338 57.343-127.636 128-128h61.198a48 48 0 0 0 33.844-13.962L472 139c34.021-34.576 89.774-34.604 124 0z "
      ></path>
      <path
        d="m719 365C760.867 403.048 785 458.494 785 517.973c0 59.513-24.161 114.988-65.425 152.659-13.052 11.915-33.292 10.994-45.208-2.058-11.796-12.922-11.011-32.888 1.67-44.848l0.388-0.36 0.834-0.768C704.657 597.13 721 559.193 721 517.974c0-41.613-16.656-79.88-44.53-105.352-13.045-11.922-13.956-32.163-2.034-45.209 11.922-13.046 32.163-13.957 45.209-2.035z"
      />
    </svg>
    <svg
      v-else
      t="1604492655584"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="1814"
      width="200"
      height="200"
      @click="mute"
    >
      <path
        d="M596.194 138.74A87.977 87.977 0 0 1 622 200.984v624.03C622 873.608 582.6 913 534 913a88.008 88.008 0 0 1-62.257-25.801l-160.029-160.16a48 48 0 0 0-33.955-14.073l-61.759 0.001c-70.692 0-128-57.297-128-127.978V441.015c0-70.68 57.308-127.978 128-127.978h61.755a48 48 0 0 0 33.955-14.073L471.743 138.8c34.35-34.377 90.068-34.405 124.451-0.062z m342.693 241.925c12.517 12.517 12.517 32.811 0 45.329l-88.283 88.281 88.283 88.283c12.517 12.517 12.517 32.811 0 45.329-12.518 12.517-32.812 12.517-45.33 0l-88.282-88.283-88.281 88.283c-12.518 12.517-32.812 12.517-45.33 0-12.517-12.518-12.517-32.812 0-45.33l88.282-88.282-88.281-88.281c-12.518-12.518-12.518-32.812 0-45.33 12.517-12.517 32.811-12.517 45.329 0l88.281 88.282 88.283-88.281c12.517-12.518 32.811-12.518 45.329 0z"
        fill="#333333"
        p-id="1815"
      />
    </svg>
    <div
      ref="volume"
      class="audio-controls__volume-wrapper"
      @click.self="onClick"
    >
      <div class="audio-controls__volume-outer" @click.self="onClick">
        <div
          class="audio-controls__volume-inner"
          :style="{ width: selfMuted ? 0 : selfVolume + '%' }"
          @click.self="onClick"
        />
        <div
          class="audio-controls__volume-point"
          :style="{ left: selfMuted ? 0 : selfVolume + '%' }"
          :title="selfMuted ? 0 : selfVolume"
          v-drag:callback="onDrag"
        />
      </div>
    </div>
  </div>
</template>

<script>
import directives from "./../directives";
export default {
  name: "AudioVolume",
  props: {
    volume: {
      type: Number,
      default: null,
    },
    muted: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selfMuted: this.muted ? this.muted : false,
      selfVolume: this.volume ? this.volume : 50,
    };
  },
  methods: {
    mute: function () {
      this.selfMuted = !this.selfMuted;
      if (this.selfMuted) {
        this.$emit("change", 0);
      } else {
        this.$emit("change", this.selfVolume);
      }
    },
    onClick: function (e) {
      this.selfVolume = (e.offsetX / this.$refs.volume.offsetWidth) * 100;
      this.$emit("change", this.selfVolume);
    },
    onDrag: function (percent) {
      this.selfVolume = percent;
      this.$emit("change", this.selfVolume);
    },
  },
  directives,
};
</script>
