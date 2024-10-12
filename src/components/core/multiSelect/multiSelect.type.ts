import { Color } from '@type/utils'

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
