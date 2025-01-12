import { useRef, useEffect, useState, forwardRef, useId } from 'react'
import {
  Avatar,
  AvatarGroup,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Chips,
  Flex,
  Heading,
  IconButton,
  Paper,
  ProgressBar,
  Text,
  Textarea,
} from '@pillar-ui/core'
import { CirclePlus, Dots, Plus } from '@components/icons'
import useBoolean from '@hooks/useBoolean'
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd'
import { v4 as uuid4 } from 'uuid'

import type { AddNoteParams, BadgeColor, TodoCardProps, TodoItemProps } from './todo.type'
import { TODO_LISTS } from '@api/todo/todo.data'

const badgeColors: BadgeColor = {
  0: 'd',
  1: 'i',
  2: 'se',
  3: 'b',
  4: 'su',
  5: 'w',
  6: 'o',
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
          <Paper
            as="article"
            flow="4"
            {...dragHandleProps}
            {...draggableProps}
            ref={innerRef}
            className="todo-card l_box"
            data-drag={snapshot.isDragging}
            aria-labelledby={taskId}
          >
            <Flex as="header" gap="3" justify="between" items="center">
              <Heading as="h3" id={taskId} size="1">
                <button onClick={() => alert()} className="todo-card--button">
                  {title}
                </button>
              </Heading>
              <IconButton size="4" icon={<Dots />} title="Add New Column" />
            </Flex>
            {!Number.isNaN(value) ? (
              <Paper flow="3">
                <Flex gap="3" items="center" justify="between">
                  <Flex gap="3" items="center">
                    <Text as="span" size="4" color="b" low>
                      Tasks
                    </Text>
                    <Text as="span" weight="5" size="3">
                      {doneLength}/{tasksLength}
                    </Text>
                  </Flex>
                  <Text as="span" weight="5" size="3" color="p" low>
                    {Math.floor(value)}%
                  </Text>
                </Flex>
                <ProgressBar value={value} label={`${doneLength} of ${tasks} tasks`} />
              </Paper>
            ) : (
              <Text size="3" color="b" low>
                No Task Added Please Click the ({title}) above to add new Tasks
              </Text>
            )}
            <Flex as="footer" gap="3" items="center" justify="between">
              {tags?.length && (
                <Flex wrap gap="1">
                  {tags.map((tag, index) => {
                    const badgeColor = badgeColors[index]

                    return (
                      <Chips key={tag} size="4" variant="soft" color={badgeColor}>
                        {tag}
                      </Chips>
                    )
                  })}
                </Flex>
              )}
              {tags?.length && (
                <AvatarGroup size="3">
                  {participants?.map(({ avatar, name, slug }) => (
                    <Avatar key={slug} src={avatar} title={name} />
                  ))}
                </AvatarGroup>
              )}
            </Flex>
          </Paper>
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
      <Paper
        as="article"
        flow="4"
        aria-labelledby={columnId}
        className="todo-item-list l_box todo--item "
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
          <Paper as="form" flow="4" action="">
            <Textarea ref={textareaRef} size="4" placeholder="Type Your Note" name=""></Textarea>
            <Flex gap="4">
              <Button onClick={_addNote} type="button" size="4" variant="solid" fluid>
                Add Note
              </Button>
              <Button size="4" type="button" onClick={handleFalse} variant="solid" color="b" fluid>
                Cancel
              </Button>
            </Flex>
          </Paper>
        )}
        <Paper flow="4" className="todo--item-main">
          {children}
        </Paper>
      </Paper>
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
        <Heading as="h1" id="todo--page-id" size="3">
          TODO Page
        </Heading>
        <Breadcrumb>
          <BreadcrumbItem href="../../">Home</BreadcrumbItem>
          <BreadcrumbItem href="../..">Pages</BreadcrumbItem>
          <BreadcrumbItem href="./" current>
            Jobs
          </BreadcrumbItem>
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
                gap="6"
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
                  <Button size="4" fluid variant="link" icon={<CirclePlus />}>
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
