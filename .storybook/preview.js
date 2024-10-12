import '@scss/main.scss'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { withRouter } from 'storybook-addon-react-router-v6'
import { FORCE_REMOUNT } from '@storybook/core-events'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    default: 'dark',
    target: 'html',
    list: [
      { name: 'dark', class: 'dark', color: 'hsl(0deg 0% 5%)' },
      { name: 'light', class: 'light', color: 'hsl(0deg 0% 95%)' },
    ],
    onChange: (theme) => {
      FORCE_REMOUNT()
    },
  },
  backgrounds: { disable: true },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
}

export const decorators = [withRouter]
