import { mount } from '@vue/test-utils'
import PreviewBinaryPdf from '../../PreviewBinaryPdf.vue'

describe('PreviewBinaryPdf.vue', () => {
  it('是否渲染了iframe组件', () => {
    const wrapper = mount(PreviewBinaryPdf)
    expect(wrapper.element).toMatchSnapshot()
  })
  test('is a Vue instance', () => {
    const wrapper = mount(PreviewBinaryPdf)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
