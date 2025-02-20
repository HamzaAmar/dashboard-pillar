import { Breadcrumb, BreadcrumbItem, Button, Flex, Heading } from '@pillar-ui/core'
import { Plus } from '@pillar-ui/icons'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'
import { TodoCard } from './todoCard'
import { useTodoList } from './useTodo'
import { TodoItem } from './todoItem'

const Todo = () => {
  const { lists, addNote, handleDragEnd } = useTodoList()

  return (
    <section aria-labelledby="todo--page-id" className="taskboard-container">
      <Flex items="center" justify="between">
        <Heading id="todo--page-id" size="6">
          Task Board
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
                gap="4"
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
                                    color={lists.columns[column].color ?? 'd'}
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
                  <Button size="4" fluid variant="link" icon={<Plus />}>
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
