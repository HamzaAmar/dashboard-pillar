import { UserInfoNameAvatar } from '@api/user/user.type'

interface Task {
  slug: string
  title: string
}

interface Participant extends UserInfoNameAvatar {}

export interface TaskProps {
  id: string
  title: string
  tags?: string[]
  tasks?: Task[]
  done?: string[]
  participants?: Participant[]
}

export interface Column {
  id: string
  title: string
  tasksIds: string[]
}

export type TaskRecord = Record<string, TaskProps>
export type ColumnRecord = Record<string, Column>

export interface TodoProps {
  tasks: TaskRecord
  columns: ColumnRecord
  columnsOrder: string[]
}
