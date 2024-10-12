import { Button, Flex, Grid, Heading, Text } from '@components/core'
import { Highlight } from '..'
import useBoolean from '@hooks/useBoolean'
import type { PreviewProps } from './preview.type'
import { classnames } from '@utils/classnames'
import { useId } from 'react'

const Preview = ({ children, title, description, code, full, style, ...rest }: PreviewProps) => {
  const { state: showCode, handleToggle } = useBoolean(false)
  const articleId = `preview-${useId()}-id`
  return (
    <Flex
      aria-labelledby={articleId}
      as="article"
      direction="column"
      {...classnames('preview-code l_box', { preview__full: full })}
    >
      <Flex as="header" className="preview-code--header" justify="between" items="center">
        <div className="u_leading__sm">
          <Heading id={articleId} as="h2" size="xs" weight="medium">
            {title}
          </Heading>
          <Text color="slate" contrast="low" size="xs">
            {description}
          </Text>
        </div>
        <Button size="xs" onClick={handleToggle} variant="outline">
          {showCode ? 'Hide' : 'Show'} Code
        </Button>
      </Flex>

      <Flex style={style} gap="sm" className="preview-code--main" {...rest}>
        {children}
      </Flex>
      {showCode && <Highlight code={code}>{children}</Highlight>}
    </Flex>
  )
}

export default Preview
