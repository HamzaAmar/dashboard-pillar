import { Button, Flex, Heading, Text } from '@pillar-ui/core'
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
      direction="col"
      {...classnames('preview-code l_box', { preview__full: full })}
    >
      <Flex as="header" className="preview-code--header" justify="between" items="center">
        <div className="u_leading__sm">
          <Heading id={articleId} as="h2" size="3" weight="5">
            {title}
          </Heading>
          <Text color="b" low size="3">
            {description}
          </Text>
        </div>
        <Button size="3" onClick={handleToggle} variant="outline">
          {showCode ? 'Hide' : 'Show'} Code
        </Button>
      </Flex>

      <Flex style={style} gap="4" className="preview-code--main" {...rest}>
        {children}
      </Flex>
      {showCode && <Highlight code={code}>{children}</Highlight>}
    </Flex>
  )
}

export default Preview
