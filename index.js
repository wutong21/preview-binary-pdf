import Vue from 'vue'
import PreviewBinaryPdf from './PreviewBinaryPdf.vue'

PreviewBinaryPdf.install = (Vue) => {
  Vue.component(PreviewBinaryPdf.name,PreviewBinaryPdf)
}
export default PreviewBinaryPdf