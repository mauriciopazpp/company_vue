import Vue from 'vue'
import Button from '@/components/Button'

function getRenderedText (Component, propsData) {
  const Constructor = Vue.extend(Component)
  const vm = new Constructor({ propsData: propsData }).$mount()
  return vm.$el.textContent
}

describe('Button', () => {
  it('renders correctly with different props', () => {
    expect(getRenderedText(Button, {
      label: 'NEW SMARTLIST'
    })).toBe('NEW SMARTLIST')

    expect(getRenderedText(Button, {
      label: 'Save'
    })).toBe('Save')
  })
})
