import { Color, Corner } from '@type/utils'

import type { DropzoneOptions } from 'react-dropzone'

export interface DropzoneProps extends DropzoneOptions {
  color?: Color
  corner?: Corner
}
