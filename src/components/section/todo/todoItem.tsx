import { forwardRef, useEffect, useId, useRef } from 'react'
import type { TodoItemProps } from './todo.type'
import useBoolean from '@hooks/useBoolean'
import { Badge, Button, Flex, Heading, IconButton, Paper, Textarea } from '@pillar-ui/core'
import { DotsHorizontal, Plus } from '@pillar-ui/icons'

export const TodoItem = forwardRef<HTMLElement, TodoItemProps>(
  ({ title, addNote, length = 0, children, isDragOver, id, color, ...rest }, ref) => {
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
      <Paper
        as="article"
        aria-labelledby={columnId}
        className="todo-item-list l_box todo--item"
        data-drag-over={isDragOver}
        ref={ref}
        {...rest}
      >
        <Flex as="header" className="todo--item-header" justify="between">
          <Flex items="center" gap="3">
            <Heading id={columnId} color="b" low as="h2" weight="5" size="3">
              {title}
            </Heading>
            <Badge color={color} variant="soft" size="3" max={100} type="numeric" number={length} />
          </Flex>
          <Flex items="center" gap="3">
            <IconButton onClick={handleToggle} size="3" icon={<Plus />} title="Add New Column" />
            <IconButton variant="text" size="3" icon={<DotsHorizontal />} title="Add New Column" />
          </Flex>
        </Flex>
        <div className="hover-scrollbar todo--item-main">
          {state && (
            <Paper as="form" flow="4" action="">
              <Textarea ref={textareaRef} size="4" placeholder="Type Your Note" name=""></Textarea>
              <Flex gap="4">
                <Button className="fl-1" onClick={_addNote} type="button" size="4" variant="solid">
                  Add Note
                </Button>
                <Button size="4" type="button" onClick={handleFalse} variant="soft" color="d">
                  Cancel
                </Button>
              </Flex>
            </Paper>
          )}
          <Paper flow="4" className="todo--item-list">
            {children}
          </Paper>
        </div>
      </Paper>
    )
  }
)
