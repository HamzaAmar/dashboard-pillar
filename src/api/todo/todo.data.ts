import { v4 as uuidv4 } from 'uuid'
import { USERS_LIST } from '@api/user/users.data'
import { getRandomNumber } from '@utils/randomNumber'
import { TaskRecord } from './todo.type'
import { CpuInfo } from 'os'

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

// export const TASKS: TaskRecord = {
//   tasks_1: {
//     id: 'tasks_1',
//     title: 'Make Button User Interface',
//     tags: ['UI/UX', 'Accessibility', 'Feature'],
//     tasks: [
//       { slug: 'button-variant', title: 'Button Variants' },
//       { slug: 'button-size', title: 'Button Sizes' },
//       { slug: 'button-color', title: 'Buttons Color' },
//       { slug: 'button-corner', title: 'Button Corner' },
//       { slug: 'button-group', title: 'Button Group' },
//       { slug: 'button-icon', title: 'Button Icon' },
//       { slug: 'button-close', title: 'Button Close' },
//       { slug: 'button-pseudo-class', title: 'Button Pseudo class' },
//     ],
//     done: ['button-variant', 'button-size', 'button-close', 'button-pseudo-class'],
//     participants: getRandomParticipant(5),
//   },
//   tasks_2: {
//     id: 'tasks_2',
//     title: 'Spinner UI Components',
//     tags: ['UI/UX', 'Accessibility', 'Feature'],
//     tasks: [
//       { slug: 'spinner-variant', title: 'Spinner Variants' },
//       { slug: 'spinner-size', title: 'Spinner Sizes' },
//       { slug: 'spinner-color', title: 'Spinners Color' },
//     ],
//     done: ['spinner-variant', 'spinner-size'],
//     participants: getRandomParticipant(1),
//   },
//   tasks_3: {
//     id: 'tasks_3',
//     title: 'Modal Components',
//     tags: ['UI/UX', 'Accessibility', 'Feature', 'Code Review'],
//     tasks: [
//       { slug: 'modal-size', title: 'Modal Sizes' },
//       { slug: 'modal-overlay', title: 'Modal Overlay' },
//       { slug: 'modal-trigger', title: 'Modal Trigger' },
//       { slug: 'modal-content', title: 'Modal Content' },
//       { slug: 'modal-context', title: 'Modal Context' },
//       { slug: 'click-outside', title: 'Use Click Outside Hooks' },
//       { slug: 'scroll-lock', title: 'Scroll Lock' },
//       { slug: 'roving-index', title: 'Reving Index' },
//       { slug: 'inert--fallback', title: 'Inert Fallback' },
//     ],
//     done: [],
//     participants: getRandomParticipant(5),
//   },
//   tasks_4: {
//     id: 'tasks_4',
//     title: 'Menu Button',
//     tags: ['UI/UX', 'Accessibility', 'Feature'],
//     tasks: [
//       { slug: 'menu-item', title: 'Menu Button Item' },
//       { slug: 'menu-trigger', title: 'Menu Button Trigger' },
//       { slug: 'menu-checkbox', title: 'Menu Buttons Item Checkbox' },
//       { slug: 'menu-radio', title: 'Menu Button Item Radio' },
//       { slug: 'menu-label', title: 'Menu Button Label' },
//       { slug: 'menu-radio-group', title: 'Menu Button Radio Group' },
//       { slug: 'menu-content', title: 'Menu Button Content' },
//       { slug: 'menu-context', title: 'Menu Button Context' },
//       {
//         slug: 'menu-keyboard-interaction',
//         title: 'Keyboard Interaction',
//       },
//       { slug: 'roving-index', title: 'Reving Index' },
//       { slug: 'menu-cleaning-code', title: 'Menu Button Code Review' },
//     ],
//     done: [],
//     participants: getRandomParticipant(5),
//   },
//   tasks_5: {
//     id: 'tasks_5',
//     title: 'Form Components',
//     tags: ['UI/UX', 'Accessibility', 'Feature'],
//     tasks: [
//       { slug: 'form-item', title: 'Form Item' },
//       { slug: 'form-controller', title: 'Form Controller' },
//       { slug: 'form-checkbox', title: 'Forms Item Checkbox' },
//       { slug: 'form-radio', title: 'Form Item Radio' },
//       { slug: 'form-label', title: 'Form Label' },
//       { slug: 'form-radio-group', title: 'Form Radio Group' },
//       { slug: 'form-button', title: 'Form Button' },
//       { slug: 'form-input', title: 'Form input' },
//       { slug: 'form-input-number', title: 'Form Input Number' },
//       { slug: 'form-input-file', title: 'Form Input File' },
//       { slug: 'form-dropzone', title: 'Form Dropzone' },
//       { slug: 'form-input-password', title: 'Form Input Password' },
//       { slug: 'form-select', title: 'Form Select' },
//       { slug: 'form-cleaning-code', title: 'Form Button Code Review' },
//     ],
//     done: ['form-select', 'form-input', 'form-input-file', 'form-checkbox', 'form-radio', 'form-radio-group'],
//     participants: getRandomParticipant(5),
//   },
//   tasks_6: {
//     id: 'tasks_6',
//     title: 'Avatar',
//     tags: ['UI/UX', 'Accessibility', 'Feature'],
//     tasks: [
//       { slug: 'avatar', title: 'Avatar' },
//       { slug: 'avatar-corner', title: 'Avatar Corner' },
//       { slug: 'avatar-size', title: 'Avatars Size' },
//       { slug: 'avatar-group', title: 'Avatar Group' },
//       { slug: 'avatar-context', title: 'Avatar Context' },
//       { slug: 'avatar-group-variant', title: 'Avatar Group Variant' },
//       { slug: 'avatar-badge', title: 'Avatar Badge' },
//     ],
//     done: [],
//     participants: getRandomParticipant(5),
//   },
//   tasks_7: {
//     id: 'tasks_7',
//     title: 'Testing User Browser',
//     tags: ['Code Review', 'Clean Code'],
//     tasks: [
//       { slug: 'test-chrome', title: 'Testing in Chrome' },
//       { slug: 'test-firefox', title: 'Testing in firefox' },
//       { slug: 'test-safari-apple', title: 'Testing in Safari Apple' },
//       { slug: 'test-nvda', title: 'Testing in NVDA' },
//     ],
//     done: ['test-chrome'],
//     participants: getRandomParticipant(3),
//   },
//   tasks_8: {
//     id: 'tasks_8',
//     title: 'Code Review',
//     tags: ['Code Review', 'Clean Code'],
//     tasks: [
//       { slug: 'review-button-style', title: 'Review Button Style' },
//       { slug: 'review-button-login', title: 'Review Button Logic' },
//       { slug: 'review-form-style', title: 'Review Badge' },
//       { slug: 'review-form-logic', title: 'Review Form Login' },
//     ],
//     done: ['review-button-style', 'review-button-login', 'review-form-style', 'review-form-logic'],
//     participants: getRandomParticipant(3),
//   },
//   tasks_9: {
//     id: 'tasks_9',
//     title: 'Toast Components',
//     tags: ['UI/UX', 'Accessibility', 'Feature'],
//     tasks: [
//       { slug: 'form-item', title: 'Form Item' },
//       { slug: 'form-controller', title: 'Form Controller' },
//       { slug: 'form-checkbox', title: 'Forms Item Checkbox' },
//       { slug: 'form-radio', title: 'Form Item Radio' },
//       { slug: 'form-label', title: 'Form Label' },
//       { slug: 'form-radio-group', title: 'Form Radio Group' },
//       { slug: 'form-button', title: 'Form Button' },
//       { slug: 'form-input', title: 'Form input' },
//       { slug: 'form-input-number', title: 'Form Input Number' },
//       { slug: 'form-input-file', title: 'Form Input File' },
//       { slug: 'form-dropzone', title: 'Form Dropzone' },
//       { slug: 'form-input-password', title: 'Form Input Password' },
//       { slug: 'form-select', title: 'Form Select' },
//       { slug: 'form-cleaning-code', title: 'Form Button Code Review' },
//     ],
//     done: ['form-select', 'form-input', 'form-input-file', 'form-checkbox', 'form-radio', 'form-radio-group'],
//     participants: getRandomParticipant(5),
//   },
// }

export const TASKS: TaskRecord = {
  tasks_1: {
    id: 'tasks_1',
    title: 'Make Button User Interface',
    description: 'Design and implement various button styles, sizes, and accessibility features.',
    tags: ['UI/UX', 'Accessibility', 'Feature'],
    tasks: [
      { slug: 'button-variant', title: 'Button Variants', description: 'Create different visual styles for buttons.' },
      {
        slug: 'button-size',
        title: 'Button Sizes',
        description: 'Define various sizes for buttons (small, medium, large).',
      },
      {
        slug: 'button-color',
        title: 'Buttons Color',
        description: 'Implement color variations for buttons (primary, secondary, etc.).',
      },
      { slug: 'button-corner', title: 'Button Corner', description: 'Adjust corner radius options for buttons.' },
      { slug: 'button-group', title: 'Button Group', description: 'Enable grouping of buttons for better usability.' },
      { slug: 'button-icon', title: 'Button Icon', description: 'Add icon support for buttons.' },
      {
        slug: 'button-close',
        title: 'Button Close',
        description: 'Design a close button with specific functionality.',
      },
      {
        slug: 'button-pseudo-class',
        title: 'Button Pseudo class',
        description: 'Handle hover, focus, and active states for buttons.',
      },
    ],
    done: ['button-variant', 'button-size', 'button-close', 'button-pseudo-class'],
    participants: getRandomParticipant(5),
  },
  tasks_2: {
    id: 'tasks_2',
    title: 'Spinner UI Components',
    description: 'Develop spinner components for loading indicators with different styles and sizes.',
    tags: ['UI/UX', 'Accessibility', 'Feature'],
    tasks: [
      { slug: 'spinner-variant', title: 'Spinner Variants', description: 'Create different types of spinner designs.' },
      { slug: 'spinner-size', title: 'Spinner Sizes', description: 'Define various sizes for spinners.' },
      { slug: 'spinner-color', title: 'Spinners Color', description: 'Implement color options for spinners.' },
    ],
    done: ['spinner-variant', 'spinner-size'],
    participants: getRandomParticipant(1),
  },
  tasks_3: {
    id: 'tasks_3',
    title: 'Modal Components',
    description: 'Build modal dialogs with overlay, triggers, content, and accessibility features.',
    tags: ['UI/UX', 'Accessibility', 'Feature', 'Code Review'],
    tasks: [
      { slug: 'modal-size', title: 'Modal Sizes', description: 'Define different sizes for modals.' },
      { slug: 'modal-overlay', title: 'Modal Overlay', description: 'Implement an overlay for modal dialogs.' },
      { slug: 'modal-trigger', title: 'Modal Trigger', description: 'Create triggers to open modals.' },
      { slug: 'modal-content', title: 'Modal Content', description: 'Design the content area inside modals.' },
      { slug: 'modal-context', title: 'Modal Context', description: 'Provide context management for modals.' },
      {
        slug: 'click-outside',
        title: 'Use Click Outside Hooks',
        description: 'Enable closing modals by clicking outside.',
      },
      { slug: 'scroll-lock', title: 'Scroll Lock', description: 'Prevent scrolling when a modal is open.' },
      { slug: 'roving-index', title: 'Reving Index', description: 'Implement keyboard navigation for modal elements.' },
      {
        slug: 'inert--fallback',
        title: 'Inert Fallback',
        description: 'Ensure accessibility by using inert attribute fallbacks.',
      },
    ],
    done: [],
    participants: getRandomParticipant(5),
  },
  tasks_4: {
    id: 'tasks_4',
    title: 'Menu Button',
    description:
      'Design and develop menu buttons with item checkboxes, radio groups, labels, and keyboard interactions.',
    tags: ['UI/UX', 'Accessibility', 'Feature'],
    tasks: [
      { slug: 'menu-item', title: 'Menu Button Item', description: 'Create individual items in the menu.' },
      { slug: 'menu-trigger', title: 'Menu Button Trigger', description: 'Implement the trigger to open the menu.' },
      {
        slug: 'menu-checkbox',
        title: 'Menu Buttons Item Checkbox',
        description: 'Add checkbox functionality to menu items.',
      },
      {
        slug: 'menu-radio',
        title: 'Menu Button Item Radio',
        description: 'Add radio button functionality to menu items.',
      },
      { slug: 'menu-label', title: 'Menu Button Label', description: 'Provide descriptive labels for menu items.' },
      {
        slug: 'menu-radio-group',
        title: 'Menu Button Radio Group',
        description: 'Group radio buttons within the menu.',
      },
      { slug: 'menu-content', title: 'Menu Button Content', description: 'Define the content structure for the menu.' },
      { slug: 'menu-context', title: 'Menu Button Context', description: 'Manage context for the menu component.' },
      {
        slug: 'menu-keyboard-interaction',
        title: 'Keyboard Interaction',
        description: 'Enable keyboard navigation for the menu.',
      },
      {
        slug: 'roving-index',
        title: 'Reving Index',
        description: 'Implement roving index for keyboard focus management.',
      },
      {
        slug: 'menu-cleaning-code',
        title: 'Menu Button Code Review',
        description: 'Review and clean up the menu button codebase.',
      },
    ],
    done: [],
    participants: getRandomParticipant(5),
  },
  tasks_5: {
    id: 'tasks_5',
    title: 'Form Components',
    description: 'Develop form components including input fields, checkboxes, radio buttons, and file uploaders.',
    tags: ['UI/UX', 'Accessibility', 'Feature'],
    tasks: [
      { slug: 'form-item', title: 'Form Item', description: 'Create reusable form item components.' },
      { slug: 'form-controller', title: 'Form Controller', description: 'Implement form state management.' },
      { slug: 'form-checkbox', title: 'Forms Item Checkbox', description: 'Add checkbox functionality to forms.' },
      { slug: 'form-radio', title: 'Form Item Radio', description: 'Add radio button functionality to forms.' },
      { slug: 'form-label', title: 'Form Label', description: 'Provide accessible labels for form elements.' },
      { slug: 'form-radio-group', title: 'Form Radio Group', description: 'Group radio buttons within forms.' },
      { slug: 'form-button', title: 'Form Button', description: 'Integrate buttons within forms.' },
      { slug: 'form-input', title: 'Form input', description: 'Create text input fields for forms.' },
      { slug: 'form-input-number', title: 'Form Input Number', description: 'Add numeric input fields to forms.' },
      { slug: 'form-input-file', title: 'Form Input File', description: 'Enable file uploads in forms.' },
      { slug: 'form-dropzone', title: 'Form Dropzone', description: 'Implement drag-and-drop zones for file uploads.' },
      {
        slug: 'form-input-password',
        title: 'Form Input Password',
        description: 'Create password input fields with masking.',
      },
      { slug: 'form-select', title: 'Form Select', description: 'Add dropdown select menus to forms.' },
      {
        slug: 'form-cleaning-code',
        title: 'Form Button Code Review',
        description: 'Review and clean up the form component codebase.',
      },
    ],
    done: ['form-select', 'form-input', 'form-input-file', 'form-checkbox', 'form-radio', 'form-radio-group'],
    participants: getRandomParticipant(5),
  },
  tasks_6: {
    id: 'tasks_6',
    title: 'Avatar',
    description: 'Design avatar components with customizable corners, sizes, badges, and grouping options.',
    tags: ['UI/UX', 'Accessibility', 'Feature'],
    tasks: [
      { slug: 'avatar', title: 'Avatar', description: 'Create basic avatar components.' },
      { slug: 'avatar-corner', title: 'Avatar Corner', description: 'Adjust corner radius options for avatars.' },
      { slug: 'avatar-size', title: 'Avatars Size', description: 'Define various sizes for avatars.' },
      { slug: 'avatar-group', title: 'Avatar Group', description: 'Enable grouping of multiple avatars.' },
      { slug: 'avatar-context', title: 'Avatar Context', description: 'Provide context management for avatars.' },
      {
        slug: 'avatar-group-variant',
        title: 'Avatar Group Variant',
        description: 'Create different group variants for avatars.',
      },
      { slug: 'avatar-badge', title: 'Avatar Badge', description: 'Add badge support for avatars.' },
    ],
    done: [],
    participants: getRandomParticipant(5),
  },
  tasks_7: {
    id: 'tasks_7',
    title: 'Testing User Browser',
    description: 'Test the application across different browsers to ensure compatibility and accessibility.',
    tags: ['Code Review', 'Clean Code'],
    tasks: [
      { slug: 'test-chrome', title: 'Testing in Chrome', description: 'Perform testing in Google Chrome browser.' },
      { slug: 'test-firefox', title: 'Testing in firefox', description: 'Perform testing in Mozilla Firefox browser.' },
      {
        slug: 'test-safari-apple',
        title: 'Testing in Safari Apple',
        description: 'Perform testing in Safari browser on macOS.',
      },
      { slug: 'test-nvda', title: 'Testing in NVDA', description: 'Test accessibility using NVDA screen reader.' },
    ],
    done: ['test-chrome'],
    participants: getRandomParticipant(3),
  },
  tasks_8: {
    id: 'tasks_8',
    title: 'Code Review',
    description:
      'Conduct thorough reviews of the codebase to ensure quality, maintainability, and adherence to standards.',
    tags: ['Code Review', 'Clean Code'],
    tasks: [
      {
        slug: 'review-button-style',
        title: 'Review Button Style',
        description: 'Review the styling of button components.',
      },
      {
        slug: 'review-button-login',
        title: 'Review Button Logic',
        description: 'Review the logic behind button functionality.',
      },
      { slug: 'review-form-style', title: 'Review Badge', description: 'Review the styling of badge components.' },
      {
        slug: 'review-form-logic',
        title: 'Review Form Login',
        description: 'Review the logic of form login functionality.',
      },
    ],
    done: ['review-button-style', 'review-button-login', 'review-form-style', 'review-form-logic'],
    participants: getRandomParticipant(3),
  },
  tasks_9: {
    id: 'tasks_9',
    title: 'Toast Components',
    description: 'Develop toast notification components with various configurations and accessibility features.',
    tags: ['UI/UX', 'Accessibility', 'Feature'],
    tasks: [
      {
        slug: 'form-item',
        title: 'Form Item',
        description: 'Create reusable form item components for toast notifications.',
      },
      {
        slug: 'form-controller',
        title: 'Form Controller',
        description: 'Implement state management for toast notifications.',
      },
      {
        slug: 'form-checkbox',
        title: 'Forms Item Checkbox',
        description: 'Add checkbox functionality to toast forms.',
      },
      { slug: 'form-radio', title: 'Form Item Radio', description: 'Add radio button functionality to toast forms.' },
      { slug: 'form-label', title: 'Form Label', description: 'Provide accessible labels for toast form elements.' },
      { slug: 'form-radio-group', title: 'Form Radio Group', description: 'Group radio buttons within toast forms.' },
      { slug: 'form-button', title: 'Form Button', description: 'Integrate buttons within toast forms.' },
      { slug: 'form-input', title: 'Form input', description: 'Create text input fields for toast forms.' },
      {
        slug: 'form-input-number',
        title: 'Form Input Number',
        description: 'Add numeric input fields to toast forms.',
      },
      { slug: 'form-input-file', title: 'Form Input File', description: 'Enable file uploads in toast forms.' },
      {
        slug: 'form-dropzone',
        title: 'Form Dropzone',
        description: 'Implement drag-and-drop zones for file uploads in toasts.',
      },
      {
        slug: 'form-input-password',
        title: 'Form Input Password',
        description: 'Create password input fields with masking for toasts.',
      },
      { slug: 'form-select', title: 'Form Select', description: 'Add dropdown select menus to toast forms.' },
      {
        slug: 'form-cleaning-code',
        title: 'Form Button Code Review',
        description: 'Review and clean up the toast component codebase.',
      },
    ],
    done: ['form-select', 'form-input', 'form-input-file', 'form-checkbox', 'form-radio', 'form-radio-group'],
    participants: getRandomParticipant(5),
  },
}

type TaskIDS = keyof typeof TASKS
type ColumnsIDS = keyof typeof COLUMNS

export const COLUMNS = {
  columns_1: {
    id: 'columns_1',
    title: 'TODO',
    color: 'i',
    tasksIds: ['tasks_3', 'tasks_6'] as TaskIDS[],
  },

  columns_2: {
    id: 'columns_2',
    title: 'In Progress',
    color: 'se',
    tasksIds: ['tasks_1', 'tasks_2', 'tasks_4', 'tasks_5', 'tasks_9'] as TaskIDS[],
  },
  columns_3: {
    id: 'columns_3',
    title: 'Testing',
    color: 'su',
    tasksIds: ['tasks_7'] as TaskIDS[],
  },
  columns_4: {
    id: 'columns_4',
    title: 'DONE',
    color: 'w',
    tasksIds: ['tasks_8'] as TaskIDS[],
  },
} as const

export const TODO_LISTS = {
  tasks: TASKS,
  columns: COLUMNS,
  columnOrder: ['columns_1', 'columns_2', 'columns_3', 'columns_4'] as ColumnsIDS[],
} as const
