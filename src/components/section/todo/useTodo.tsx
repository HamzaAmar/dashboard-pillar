import { TODO_LISTS } from '@api/todo/todo.data'
import { useState } from 'react'
import { DropResult } from 'react-beautiful-dnd'
import { v4 as uuid4 } from 'uuid'

interface AddNoteParams {
  id: string
  text: string
}

export const useTodoList = (initialLists = TODO_LISTS) => {
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

  return {
    lists,
    addNote,
    handleDragEnd,
  }
}
