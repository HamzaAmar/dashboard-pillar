import { Flex, Text } from '@components/core'
import { FileUpload } from '@components/icons'
import { useDropzone } from 'react-dropzone'

import type { DropzoneProps } from './dropzone.type'

const Dropzone = ({
  color = 'indigo',
  corner = 'sm',
  // Rest Gonna be all dropzone attribute because we extends it and typescript
  ...rest
}: DropzoneProps) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone(rest)
  return (
    <Flex items="center" gap="md" className="dropzone--wrapper">
      <Flex
        justify="center"
        items="center"
        direction="column"
        gap="sm"
        className={`dropzone u_corner--${corner} u_${color}`}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <>
            <FileUpload width={32} stroke="var(--color-shared-11)" />
            <Text size="sm" color="slate" contrast="low">
              Drag 'n' drop some files here, or click to select files
            </Text>
          </>
        )}
      </Flex>
    </Flex>
  )
}

export default Dropzone
