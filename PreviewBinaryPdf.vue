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
      this.getData(val)
    },
    url(val) {
      this.getUrl(val)
    }
  },
  mounted(){
    this.getUrl(this.url)
    this.getData(this.data)
  },
  data() {
    return {
      fileUrl: "",
      iframeType: "application/x-google-chrome-pdf"
    };
  },
  methods:{
    getData(val){
      if (val !== null) {
        this.binaryDataToUrl(val)
      }
    },
    getUrl(val){
      if (val !== null) {
        this.fileUrl = val
      }
    },
    binaryDataToUrl(data){
      let blob = new Blob([data], {
        type: `${this.type}`
      })
      this.fileUrl = window.URL.createObjectURL(blob)
    }
  }
};
</script>
