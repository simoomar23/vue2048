import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Tile from '~/components/Tile.vue'

describe('Tile tests', () => {
  it('should div background color be orange when value is 2', () => {
    const wrapper = mount(Tile, {
      props: {
        value: 2,
      },
    })
    const div = wrapper.get('[data-test="tile"]').element
    expect((div as HTMLDivElement).style.backgroundColor).toEqual('rgb(241, 101, 40)')
  })
})
