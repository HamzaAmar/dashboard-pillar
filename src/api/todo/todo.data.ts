import { v4 as uuidv4 } from 'uuid'
import { USERS_LIST } from '@api/user/users.data'
import { getRandomNumber } from '@utils/randomNumber'
import { TaskRecord } from './todo.type'

const getRandomParticipant = (number: number) => {
  const users = Array.from({ length: number }, (_, index) => {
    const userIndex = getRandomNumber({ min: 1, max: USERS_LIST.length })
    const { name, avatar } = USERS_LIST[userIndex]
    const participant = {
      slug: uuidv4(),
      name,
      avatar,
    }
    return participant
  })
  return users
}

export const TASKS: TaskRecord = {
  tasks_1: {
    id: 'tasks_1',
    title: 'Make Button User Interface',
    tags: ['UI/UX', 'Accessibility', 'Feature'],
    tasks: [
      { slug: 'button-variant', title: 'Button Variants' },
      { slug: 'button-size', title: 'Button Sizes' },
      { slug: 'button-color', title: 'Buttons Color' },
      { slug: 'button-corner', title: 'Button Corner' },
      { slug: 'button-group', title: 'Button Group' },
      { slug: 'button-icon', title: 'Button Icon' },
      { slug: 'button-close', title: 'Button Close' },
      { slug: 'button-pseudo-class', title: 'Button Pseudo class' },
    ],
    done: ['button-variant', 'button-size', 'button-close', 'button-pseudo-class'],
    participants: getRandomParticipant(5),
  },
  tasks_2: {
    id: 'tasks_2',
    title: 'Spinner UI Components',
    tags: ['UI/UX', 'Accessibility', 'Feature'],
    tasks: [
      { slug: 'spinner-variant', title: 'Spinner Variants' },
      { slug: 'spinner-size', title: 'Spinner Sizes' },
      { slug: 'spinner-color', title: 'Spinners Color' },
    ],
    done: ['spinner-variant', 'spinner-size'],
    participants: getRandomParticipant(1),
  },
  tasks_3: {
    id: 'tasks_3',
    title: 'Modal Components',
    tags: ['UI/UX', 'Accessibility', 'Feature', 'Code Review'],
    tasks: [
      { slug: 'modal-size', title: 'Modal Sizes' },
      { slug: 'modal-overlay', title: 'Modal Overlay' },
      { slug: 'modal-trigger', title: 'Modal Trigger' },
      { slug: 'modal-content', title: 'Modal Content' },
      { slug: 'modal-context', title: 'Modal Context' },
      { slug: 'click-outside', title: 'Use Click Outside Hooks' },
      { slug: 'scroll-lock', title: 'Scroll Lock' },
      { slug: 'roving-index', title: 'Reving Index' },
      { slug: 'inert--fallback', title: 'Inert Fallback' },
    ],
    done: [],
    participants: getRandomParticipant(5),
  },
  tasks_4: {
    id: 'tasks_4',
    title: 'Menu Button',
    tags: ['UI/UX', 'Accessibility', 'Feature'],
    tasks: [
      { slug: 'menu-item', title: 'Menu Button Item' },
      { slug: 'menu-trigger', title: 'Menu Button Trigger' },
      { slug: 'menu-checkbox', title: 'Menu Buttons Item Checkbox' },
      { slug: 'menu-radio', title: 'Menu Button Item Radio' },
      { slug: 'menu-label', title: 'Menu Button Label' },
      { slug: 'menu-radio-group', title: 'Menu Button Radio Group' },
      { slug: 'menu-content', title: 'Menu Button Content' },
      { slug: 'menu-context', title: 'Menu Button Context' },
      {
        slug: 'menu-keyboard-interaction',
        title: 'Keyboard Interaction',
      },
      { slug: 'roving-index', title: 'Reving Index' },
      { slug: 'menu-cleaning-code', title: 'Menu Button Code Review' },
    ],
    done: [],
    participants: getRandomParticipant(5),
  },
  tasks_5: {
    id: 'tasks_5',
    title: 'Form Components',
    tags: ['UI/UX', 'Accessibility', 'Feature'],
    tasks: [
      { slug: 'form-item', title: 'Form Item' },
      { slug: 'form-controller', title: 'Form Controller' },
      { slug: 'form-checkbox', title: 'Forms Item Checkbox' },
      { slug: 'form-radio', title: 'Form Item Radio' },
      { slug: 'form-label', title: 'Form Label' },
      { slug: 'form-radio-group', title: 'Form Radio Group' },
      { slug: 'form-button', title: 'Form Button' },
      { slug: 'form-input', title: 'Form input' },
      { slug: 'form-input-number', title: 'Form Input Number' },
      { slug: 'form-input-file', title: 'Form Input File' },
      { slug: 'form-dropzone', title: 'Form Dropzone' },
      { slug: 'form-input-password', title: 'Form Input Password' },
      { slug: 'form-select', title: 'Form Select' },
      { slug: 'form-cleaning-code', title: 'Form Button Code Review' },
    ],
    done: ['form-select', 'form-input', 'form-input-file', 'form-checkbox', 'form-radio', 'form-radio-group'],
    participants: getRandomParticipant(5),
  },
  tasks_6: {
    id: 'tasks_6',
    title: 'Avatar',
    tags: ['UI/UX', 'Accessibility', 'Feature'],
    tasks: [
      { slug: 'avatar', title: 'Avatar' },
      { slug: 'avatar-corner', title: 'Avatar Corner' },
      { slug: 'avatar-size', title: 'Avatars Size' },
      { slug: 'avatar-group', title: 'Avatar Group' },
      { slug: 'avatar-context', title: 'Avatar Context' },
      { slug: 'avatar-group-variant', title: 'Avatar Group Variant' },
      { slug: 'avatar-badge', title: 'Avatar Badge' },
    ],
    done: [],
    participants: getRandomParticipant(5),
  },
  tasks_7: {
    id: 'tasks_7',
    title: 'Testing User Browser',
    tags: ['Code Review', 'Clean Code'],
    tasks: [
      { slug: 'test-chrome', title: 'Testing in Chrome' },
      { slug: 'test-firefox', title: 'Testing in firefox' },
      { slug: 'test-safari-apple', title: 'Testing in Safari Apple' },
      { slug: 'test-nvda', title: 'Testing in NVDA' },
    ],
    done: ['test-chrome'],
    participants: getRandomParticipant(3),
  },
  tasks_8: {
    id: 'tasks_8',
    title: 'Code Review',
    tags: ['Code Review', 'Clean Code'],
    tasks: [
      { slug: 'review-button-style', title: 'Review Button Style' },
      { slug: 'review-button-login', title: 'Review Button Logic' },
      { slug: 'review-form-style', title: 'Review Badge' },
      { slug: 'review-form-logic', title: 'Review Form Login' },
    ],
    done: ['review-button-style', 'review-button-login', 'review-form-style', 'review-form-logic'],
    participants: getRandomParticipant(3),
  },
}

type TaskIDS = keyof typeof TASKS
type ColumnsIDS = keyof typeof COLUMNS

export const COLUMNS = {
  columns_1: {
    id: 'columns_1',
    title: 'TODO',
    tasksIds: ['tasks_3', 'tasks_6'] as TaskIDS[],
  },

  columns_2: {
    id: 'columns_2',
    title: 'In Progress',
    tasksIds: ['tasks_1', 'tasks_2', 'tasks_4', 'tasks_5'] as TaskIDS[],
  },
  columns_3: {
    id: 'columns_3',
    title: 'Testing',
    tasksIds: ['tasks_7'] as TaskIDS[],
  },
  columns_4: {
    id: 'columns_4',
    title: 'DONE',
    tasksIds: ['tasks_8'] as TaskIDS[],
  },
}

export const TODO_LISTS = {
  tasks: TASKS,
  columns: COLUMNS,
  columnOrder: ['columns_1', 'columns_2', 'columns_3', 'columns_4'] as ColumnsIDS[],
} as const
