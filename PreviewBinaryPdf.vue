<template>
  <iframe
    :src="fileUrl"
    :scrolling="scrolling"
    frameborder="0"
    :type="iframeType"
    :width="width"
    :style="`height:${height}`"
  ></iframe>
</template>

<script>
export default {
  name: "PreviewBinaryPdf",
  props: {
    url: { type: String, default: "" },
    width: { type: String, default: "100%" },
    height: { type: String, default: "100vh" },
    scrolling: { type: String, default: "auto" },
    type: { type: String, default: "application/pdf;charset=utf-8" },
    data: { type: ArrayBuffer, default: null },
  },
  watch: {
    data(val) {
      if (val !== null) {
        this.binaryDataToUrl(val)
      }
    },
    url(val) {
      if (val !== null) {
        this.fileUrl = this.url
      }
    }
  },
  data() {
    return {
      fileUrl: "",
      iframeType: "application/x-google-chrome-pdf"
    };
  },
  methods:{
    binaryDataToUrl(data){
      let blob = new Blob([data], {
        type: `${this.type}`
      })
      this.fileUrl = window.URL.createObjectURL(blob)
    }
  }
};
</script>
