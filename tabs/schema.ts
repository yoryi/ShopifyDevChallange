interface SettingItem {
  "type": string, "label": string, "id": string, default: boolean | string | number
}

interface PresetBlockItem {
  "type": string
}

export interface Block {
  "type": string,
  "name": string,
  "settings": [{ "id": string, "type": string, "label": string }]
}

export interface Section {
  "name": string,
  "settings": SettingItem[],
  "blocks": Block[],
  "presets": [{ "name": string, "blocks": PresetBlockItem[] }]
}