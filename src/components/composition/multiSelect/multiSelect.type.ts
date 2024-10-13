import { Color } from '@pillar-ui/core'

interface Option {
  value: string
  label: string
}

export interface MultiSelectProps {
  searchable?: boolean
  clearable?: boolean
  options: Option[]
  color?: Color
  //   type: "single" | "multiple";
}
