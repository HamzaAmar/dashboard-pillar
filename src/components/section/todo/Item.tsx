import { forwardRef, useEffect, useId, useRef } from 'react'
import type { TodoItemProps } from './todo.type'
import useBoolean from '@hooks/useBoolean'
import { Badge, Button, Flex, Heading, IconButton, Paper, Textarea } from '@pillar-ui/core'
import { Dots, Plus } from '@components/icons'

export const TodoItem = forwardRef<HTMLElement, TodoItemProps>(
  ({ title, addNote, length = 0, children, isDragOver, id, ...rest }, ref) => {
    const { state, handleToggle, handleFalse } = useBoolean(false)
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const columnId = `column-${useId()}-todo`

    function _addNote() {
      addNote({ id, text: textareaRef.current?.value ?? '' })
      handleFalse()
    }

    useEffect(() => {
      if (state) {
        if (textareaRef.current) {
          textareaRef.current.focus()
        }
      }
    }, [state])

    return (
      <article
        aria-labelledby={columnId}
        className="todo-item-list l_box todo--item l_flow-sm"
        data-drag-over={isDragOver}
        ref={ref}
        {...rest}
      >
        <Flex as="header" className="todo--item-header" justify="between">
          <Flex items="center" gap="3">
            <Badge color="b" size="4" max={100} type="numeric" number={length} />
            <Heading id={columnId} color="b" low as="h2" weight="5" size="3">
              {title}
            </Heading>
          </Flex>
          <Flex items="center" gap="3">
            <IconButton onClick={handleToggle} size="4" icon={<Plus />} title="Add New Column" />
            <IconButton size="4" icon={<Dots />} title="Add New Column" />
          </Flex>
        </Flex>
        {state && (
          <form className="l_flow-sm" action="">
            <Textarea ref={textareaRef} size="4" placeholder="Type Your Note" name=""></Textarea>
            <Flex gap="4">
              <Button onClick={_addNote} type="button" size="4" variant="solid" fluid>
                Add Note
              </Button>
              <Button size="4" type="button" onClick={handleFalse} variant="solid" color="b" fluid>
                Cancel
              </Button>
            </Flex>
          </form>
        )}
        <Paper flow="4" className="todo--item-main">
          {children}
        </Paper>
      </article>
    )
  }
)
