import { Color, Corner } from '@pillar-ui/core'
import type { DropzoneOptions } from 'react-dropzone'

export interface DropzoneProps extends DropzoneOptions {
  color?: Color
  corner?: Corner
}
