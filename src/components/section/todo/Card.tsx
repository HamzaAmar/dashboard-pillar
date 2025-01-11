import { Dots } from '@components/icons'
import { Draggable } from '@hello-pangea/dnd'
import { Avatar, AvatarGroup, Chips, Flex, Heading, IconButton, Paper, ProgressBar, Text } from '@pillar-ui/core'
import { useId } from 'react'
import { BadgeColor, TodoCardProps } from './todo.type'

const COLORS: BadgeColor = {
  0: 'd',
  1: 'i',
  2: 'se',
  3: 'b',
  4: 'su',
  5: 'w',
  6: 'o',
}

export const TodoCard = ({ tags, title, tasks, done, participants, index, id }: TodoCardProps) => {
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
            flow="3"
            {...dragHandleProps}
            {...draggableProps}
            ref={innerRef}
            className="todo-card l_box"
            data-drag={snapshot.isDragging}
            aria-labelledby={taskId}
          >
            <Flex as="header" gap="3" justify="between" items="center">
              <Heading as="h3" id={taskId} size="4">
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
                    const badgeColor = COLORS[index]

                    return (
                      <Chips key={tag} size="2" variant="soft" color={badgeColor}>
                        {tag}
                      </Chips>
                    )
                  })}
                </Flex>
              )}
              {tags?.length && (
                <AvatarGroup size="1">
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
