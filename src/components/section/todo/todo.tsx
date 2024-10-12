import { useRef, useEffect, useState, forwardRef, useId } from 'react'
import {
  Avatar,
  Badge,
  Breadcrumb,
  Button,
  Chips,
  Flex,
  Heading,
  IconButton,
  ProgressBar,
  Text,
  Textarea,
} from '@components/core'
import { CirclePlus, Dots, Plus } from '@components/icons'
import useBoolean from '@hooks/useBoolean'
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd'
import { v4 as uuid4 } from 'uuid'

import type { AddNoteParams, BadgeColor, TodoCardProps, TodoItemProps } from './todo.type'
import { TODO_LISTS } from '@api/todo/todo.data'

const badgeColors: BadgeColor = {
  0: 'danger',
  1: 'indigo',
  2: 'purple',
  3: 'slate',
  4: 'success',
  5: 'warning',
  6: 'yellow',
}

/*
======================================================================================================
  Todo Card Section
======================================================================================================
*/

const TodoCard = ({ tags, title, tasks, done, participants, index, id }: TodoCardProps) => {
  const doneLength = done?.length ?? 0
  const tasksLength = tasks?.length ?? 0
  const taskId = `task-${useId()}-item`

  const value = (doneLength * 100) / tasksLength

  return (
    <Draggable draggableId={id} index={index}>
      {({ dragHandleProps, draggableProps, innerRef, ...rest }, snapshot) => {
        return (
          <article
            {...dragHandleProps}
            {...draggableProps}
            ref={innerRef}
            className="todo-card l_box l_flow-sm"
            data-drag={snapshot.isDragging}
            aria-labelledby={taskId}
          >
            <Flex as="header" gap="xs" justify="between" items="center">
              <Heading as="h3" id={taskId} size="2xs">
                <button onClick={() => alert()} className="todo-card--button">
                  {title}
                </button>
              </Heading>
              <IconButton size="sm" icon={<Dots />} title="Add New Column" />
            </Flex>
            {!Number.isNaN(value) ? (
              <div className="l_flow-sm">
                <Flex gap="xs" items="center" justify="between">
                  <Flex gap="xs" items="center">
                    <Text as="span" size="sm" color="slate" contrast="low">
                      Tasks
                    </Text>
                    <Text as="span" weight="medium" size="xs">
                      {doneLength}/{tasksLength}
                    </Text>
                  </Flex>
                  <Text as="span" weight="medium" size="xs" color="primary" contrast="low">
                    {Math.floor(value)}%
                  </Text>
                </Flex>
                <ProgressBar value={value} label={`${doneLength} of ${tasks} tasks`} />
              </div>
            ) : (
              <Text size="xs" color="slate" contrast="low">
                No Task Added Please Click the ({title}) above to add new Tasks
              </Text>
            )}
            <Flex as="footer" gap="xs" items="center" justify="between">
              {tags?.length && (
                <Flex wrap gap="2xs">
                  {tags.map((tag, index) => {
                    const badgeColor = badgeColors[index]

                    return (
                      <Chips key={tag} size="sm" variant="soft" color={badgeColor}>
                        {tag}
                      </Chips>
                    )
                  })}
                </Flex>
              )}
              {tags?.length && (
                <Avatar.Group size="xs">
                  {participants?.map(({ avatar, name, slug }) => (
                    <Avatar key={slug} variant="image" image={avatar} title={name} />
                  ))}
                </Avatar.Group>
              )}
            </Flex>
          </article>
        )
      }}
    </Draggable>
  )
}

/*
======================================================================================================
  Todo Item Section
======================================================================================================
*/

const TodoItem = forwardRef<HTMLElement, TodoItemProps>(
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
          <Flex items="center" gap="xs">
            <Badge color="slate" size="sm" max={100} variant="number" number={length} />
            <Heading id={columnId} color="slate" contrast="low" as="h2" weight="medium" size="xs">
              {title}
            </Heading>
          </Flex>
          <Flex items="center" gap="xs">
            <IconButton onClick={handleToggle} size="sm" icon={<Plus />} title="Add New Column" />
            <IconButton size="sm" icon={<Dots />} title="Add New Column" />
          </Flex>
        </Flex>
        {state && (
          <form className="l_flow-sm" action="">
            <Textarea ref={textareaRef} size="sm" placeholder="Type Your Note" name=""></Textarea>
            <Flex gap="sm">
              <Button onClick={_addNote} type="button" size="sm" variant="solid" fluid>
                Add Note
              </Button>
              <Button size="sm" type="button" onClick={handleFalse} variant="solid" color="slate" fluid>
                Cancel
              </Button>
            </Flex>
          </form>
        )}
        <div className="todo--item-main l_flow-sm">{children}</div>
      </article>
    )
  }
)

/*
======================================================================================================
  Todo Section
======================================================================================================
*/

const Todo = () => {
  const [lists, setLists] = useState<typeof TODO_LISTS>(TODO_LISTS)

  function addNote({ id, text }: AddNoteParams) {
    const taskID = uuid4()
    const task = {
      id: taskID,
      title: text,
    }
    const tasks = { ...lists.tasks, [taskID]: task }

    const columns = {
      ...lists.columns,
      [id]: {
        ...lists.columns[id as keyof typeof lists.columns],
        tasksIds: [taskID, ...lists.columns[id as keyof typeof lists.columns].tasksIds],
      },
    }

    const newList = { ...lists, tasks, columns }
    setLists(newList)
  }

  function handleDragEnd(result: DropResult) {
    const { source, destination, draggableId, type } = result
    if (!destination) {
      return
    }
    if (type === 'column') {
      const columnsList = [...lists.columnOrder]
      columnsList.splice(source.index, 1)
      columnsList.splice(destination.index, 0, draggableId as any)

      const newList = {
        ...lists,
        columnOrder: columnsList,
      }
      setLists(newList)
      return
    }
    if (source.droppableId === destination.droppableId) {
      const column = lists.columns[source.droppableId as keyof typeof lists.columns]
      const tasksIds = [...column.tasksIds]
      tasksIds.splice(source.index, 1)
      tasksIds.splice(destination.index, 0, draggableId)

      const newColumn = {
        ...column,
        tasksIds,
      }
      const newState = {
        ...lists,
        columns: {
          ...lists.columns,
          [newColumn.id]: newColumn,
        },
      }

      setLists(newState)
    } else if (source.droppableId !== destination.droppableId) {
      const sourceColumn = lists.columns[source.droppableId as keyof typeof lists.columns]
      const destinationColumn = lists.columns[destination.droppableId as keyof typeof lists.columns]
      const sourceTaskIds = [...sourceColumn.tasksIds]
      const destinationTaskIds = [...destinationColumn.tasksIds]
      sourceTaskIds.splice(source.index, 1)
      destinationTaskIds.splice(destination.index, 0, draggableId)
      const newColumns = {
        ...lists.columns,
        [source.droppableId]: {
          ...sourceColumn,
          tasksIds: sourceTaskIds,
        },
        [destination.droppableId]: {
          ...destinationColumn,
          tasksIds: destinationTaskIds,
        },
      }
      const newState = {
        ...lists,
        columns: newColumns,
      }
      setLists(newState)
    }
  }

  return (
    <section aria-labelledby="todo--page-id">
      <Flex items="center" justify="between">
        <Heading as="h1" id="todo--page-id" size="xs">
          TODO Page
        </Heading>
        <Breadcrumb size="sm">
          <Breadcrumb.Item link="../../">Home</Breadcrumb.Item>
          <Breadcrumb.Item link="../..">Pages</Breadcrumb.Item>
          <Breadcrumb.Item link="./" current>
            Jobs
          </Breadcrumb.Item>
        </Breadcrumb>
      </Flex>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="container" direction="horizontal" type="column">
          {(provider, snapshot) => {
            return (
              <Flex
                data-drag={snapshot.isDraggingOver}
                ref={provider.innerRef}
                className="todo-container"
                {...provider.droppableProps}
                gap="lg"
              >
                {lists.columnOrder.map((column, index) => {
                  return (
                    <Draggable key={column} draggableId={column} index={index}>
                      {({ dragHandleProps, draggableProps, innerRef }) => {
                        return (
                          <div className="todo-items-wrapper" {...dragHandleProps} {...draggableProps} ref={innerRef}>
                            <Droppable key={column} type="task" droppableId={column}>
                              {({ innerRef, droppableProps, placeholder }, snapshot) => {
                                return (
                                  <TodoItem
                                    {...droppableProps}
                                    ref={innerRef}
                                    id={column}
                                    length={lists.columns[column].tasksIds.length}
                                    title={lists.columns[column].title ?? 'hello'}
                                    isDragOver={snapshot.isDraggingOver}
                                    addNote={addNote}
                                  >
                                    {lists.columns[column].tasksIds.map((task, index) => {
                                      const taskProps = lists.tasks[task] ?? {}
                                      return (
                                        <TodoCard
                                          key={task}
                                          index={index}
                                          {...taskProps}
                                          isDragOver={snapshot.isDraggingOver}
                                        />
                                      )
                                    })}
                                    {placeholder}
                                  </TodoItem>
                                )
                              }}
                            </Droppable>
                          </div>
                        )
                      }}
                    </Draggable>
                  )
                })}
                <Flex justify="center" items="center" className="todo--item todo--item-add l_box ">
                  <Button size="sm" fluid variant="link" icon={<CirclePlus />}>
                    Add New Column
                  </Button>
                </Flex>
                {provider.placeholder}
              </Flex>
            )
          }}
        </Droppable>
      </DragDropContext>
    </section>
  )
}

export default Todo
