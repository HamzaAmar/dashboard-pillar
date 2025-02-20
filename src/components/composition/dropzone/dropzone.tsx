import { Flex, Text } from '@pillar-ui/core'
import { FileUpload } from '@pillar-ui/icons'
import { useDropzone } from 'react-dropzone'

import type { DropzoneProps } from './dropzone.type'

const Dropzone = ({
  color = 'p',
  corner = '4',
  // Rest Gonna be all dropzone attribute because we extends it and typescript
  ...rest
}: DropzoneProps) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone(rest)
  return (
    <Flex items="center" gap="5" className="dropzone--wrapper">
      <Flex
        justify="center"
        items="center"
        direction="col"
        gap="4"
        className={`dropzone u_corner--${corner} u_${color}`}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <>
            <FileUpload width={32} stroke="var(--color-shared-11)" />
            <Text size="4" color="b" low>
              Drag 'n' drop some files here, or click to select files
            </Text>
          </>
        )}
      </Flex>
    </Flex>
  )
}

export default Dropzone
