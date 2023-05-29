import { h, render } from 'preact';
import { useState } from 'preact/hooks'

interface SettingItem {
  "show_tabs": boolean,
  "tab_text_color": string,
  "tab_font_size": number
}

interface Block {
  "tab_title": string,
}

interface Section {
  "settings": SettingItem,
  "blocks": Block[],
}

const App = ({ settings, blocks }: Section) => {
  const [selected, setSelected] = useState(-1)

  if (settings.show_tabs) {
    return (
      <div class="tabs-container">
        <ul class="tabs tw-list-none tw-flex tw-px-0 tw-py-1 tw-mx-2 tw-my-10 tw-border-0 tw-border-b tw-border-b-black tw-border-opacity-20 tw-border-solid tw-cursor-pointer">
          {
            blocks.map((e, index) => {
              return (
                <li style={"font-size: " + settings.tab_font_size + "px; color: " + settings.tab_text_color} class="tw-text-center tw-w-[100px]" onClick={() => { setSelected(index) }}>{e.tab_title}</li>
              )
            })
          }
        </ul>
        <div class="tab-content tw-pl-10">
          {
            blocks.map((e, index) => {
              return (
                <div class={(index === selected ? '' : ' hidden')}>Content for {e.tab_title}</div>
              )
            })
          }
        </div>
      </div>
    )
  }
  return null

}

const renderSectionID = 'tab-render-area'
const section = JSON.parse(document.getElementById(renderSectionID)?.dataset?.section || '')
const blocks = JSON.parse(document.getElementById(renderSectionID)?.dataset?.blocks || '')

console.log('before render')

render(<App settings={section} blocks={blocks} />, document.getElementById(renderSectionID) || document);