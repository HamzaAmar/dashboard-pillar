import { ReactElement } from 'react'
import { LanguageUnion } from '@hooks/useSettings/useSettings.type'
import { RequestNotificationTypes } from 'src/api/notifacation/notifacation.type'

interface LanguageProps {
  slug: LanguageUnion
  title: string
  icon: ReactElement
}

export const LANGUAGES: LanguageProps[] = [
  {
    slug: 'en',
    title: 'English',
    icon: (
      <svg width="20" aria-hidden={true} viewBox="0 0 512 512">
        <path fill="#f5f5f5" d="M0 0h512v512H0z" />
        <path
          fill="#ff4b55"
          d="M0 0h512v40H0zM0 158h512v39H0zM0 79h512v39H0zM0 236h512v40H0zM0 394h512v39H0zM0 472h512v40H0zM0 315h512v39H0z"
        />

        <path fill="#41479b" d="M0 0h275v276H0z" />
        <path
          fill="#f5f5f5"
          d="m35 21 2 6h7l1 2-6 4 2 6c0 1 0 2-1 1l-6-4-5 4c-1 1-2 0-1-1l2-6-6-4c-1-1 0-2 1-2h6l3-6h1zM35 74l2 6h7l1 2-6 4 2 6c0 1 0 2-1 1l-6-4-5 4c-1 1-2 0-1-1l2-6-6-4c-1-1 0-2 1-2h6l3-6h1zM35 133l2 6h7l1 2-6 4 2 6c0 1 0 2-1 1l-6-4-5 4c-1 1-2 0-1-1l2-6-6-4c-1-1 0-2 1-2h6l3-6h1zM35 187l2 6h7l1 2-6 4 2 6c0 1 0 2-1 1l-6-4-5 4c-1 1-2 0-1-1l2-6-6-4c-1-1 0-2 1-2h6l3-6h1zM35 236l2 6 7 1 1 1-6 4 2 7-1 1-6-4-5 4-1-1 2-7-6-4 1-1 6-1 3-6h1zM61 46l2 6h7v2l-5 4 2 6-1 1-6-4-5 4c-1 1-2 0-2-1l2-6-5-4c-1-1 0-2 1-2h6l2-6h2zM61 105l2 6h7v2l-5 4 2 6-1 1-6-4-5 4c-1 1-2 0-2-1l2-6-5-4c-1-1 0-2 1-2h6l2-6h2zM61 161l2 6h7v2l-5 4 2 6-1 1-6-4-5 4c-1 1-2 0-2-1l2-6-5-4c-1-1 0-2 1-2h6l2-6h2zM61 211l2 6h7v2l-5 4 2 6-1 1-6-3-5 3c-1 1-2 0-2-1l2-6-5-4 1-2h6l2-6h2zM87 21l2 6h7v2l-5 4 2 6c0 1-1 2-2 1l-5-4-5 4c-1 1-2 0-2-1l2-6-5-4v-2h7l2-6h2zM87 74l2 6h7v2l-5 4 2 6c0 1-1 2-2 1l-5-4-5 4c-1 1-2 0-2-1l2-6-5-4v-2h7l2-6h2zM87 133l2 6h7v2l-5 4 2 6c0 1-1 2-2 1l-5-4-5 4c-1 1-2 0-2-1l2-6-5-4v-2h7l2-6h2zM87 187l2 6h7v2l-5 4 2 6c0 1-1 2-2 1l-5-4-5 4c-1 1-2 0-2-1l2-6-5-4v-2h7l2-6h2zM87 236l2 6 7 1v1l-5 4 2 7-2 1-5-4-5 4-2-1 2-7-5-4v-1l7-1 2-6h2zM113 46l2 6h7v2l-5 4 2 6c0 1-1 2-2 1l-5-4-6 4-1-1 2-6-5-4v-2h7l2-6h2zM113 105l2 6h7v2l-5 4 2 6c0 1-1 2-2 1l-5-4-6 4-1-1 2-6-5-4v-2h7l2-6h2zM113 161l2 6h7v2l-5 4 2 6c0 1-1 2-2 1l-5-4-6 4-1-1 2-6-5-4v-2h7l2-6h2zM113 211l2 6h7v2l-5 4 2 6c0 1-1 2-2 1l-5-3-6 3-1-1 2-6-5-4v-2h7l2-6h2zM139 21l2 6h6c1 0 2 1 1 2l-5 4 2 6c0 1-1 2-2 1l-5-4-6 4-1-1 2-6-6-4 1-2h7l2-6h2zM139 74l2 6h6c1 0 2 1 1 2l-5 4 2 6c0 1-1 2-2 1l-5-4-6 4-1-1 2-6-6-4 1-2h7l2-6h2zM139 133l2 6h6c1 0 2 1 1 2l-5 4 2 6c0 1-1 2-2 1l-5-4-6 4-1-1 2-6-6-4 1-2h7l2-6h2zM139 187l2 6h6c1 0 2 1 1 2l-5 4 2 6c0 1-1 2-2 1l-5-4-6 4-1-1 2-6-6-4 1-2h7l2-6h2zM139 236l2 6 6 1 1 1-5 4 2 7-2 1-5-4-6 4-1-1 2-7-6-4 1-1 7-1 2-6h2zM164 46l3 6h6l1 2-6 4 2 6c1 1 0 2-1 1l-5-4-6 4c-1 1-2 0-1-1l2-6-6-4 1-2h7l2-6h1zM164 105l3 6h6l1 2-6 4 2 6c1 1 0 2-1 1l-5-4-6 4c-1 1-2 0-1-1l2-6-6-4 1-2h7l2-6h1zM164 161l3 6h6l1 2-6 4 2 6c1 1 0 2-1 1l-5-4-6 4c-1 1-2 0-1-1l2-6-6-4 1-2h7l2-6h1zM164 211l3 6h6l1 2-6 4 2 6c1 1 0 2-1 1l-5-3-6 3c-1 1-2 0-1-1l2-6-6-4 1-2h7l2-6h1zM190 21l2 6h7l1 2-6 4 2 6c1 1 0 2-1 1l-6-4-5 4c-1 1-2 0-1-1l2-6-6-4c-1-1 0-2 1-2h6l3-6h1zM190 74l2 6h7l1 2-6 4 2 6c1 1 0 2-1 1l-6-4-5 4c-1 1-2 0-1-1l2-6-6-4c-1-1 0-2 1-2h6l3-6h1zM190 133l2 6h7l1 2-6 4 2 6c1 1 0 2-1 1l-6-4-5 4c-1 1-2 0-1-1l2-6-6-4c-1-1 0-2 1-2h6l3-6h1zM190 187l2 6h7l1 2-6 4 2 6c1 1 0 2-1 1l-6-4-5 4c-1 1-2 0-1-1l2-6-6-4c-1-1 0-2 1-2h6l3-6h1zM190 236l2 6 7 1 1 1-6 4 2 7-1 1-6-4-5 4-1-1 2-7-6-4 1-1 6-1 3-6h1zM216 46l2 6h7v2l-5 4 2 6-1 1-6-4-5 4c-1 1-2 0-2-1l2-6-5-4c-1-1 0-2 1-2h6l2-6h2zM216 105l2 6h7v2l-5 4 2 6-1 1-6-4-5 4c-1 1-2 0-2-1l2-6-5-4c-1-1 0-2 1-2h6l2-6h2zM216 161l2 6h7v2l-5 4 2 6-1 1-6-4-5 4c-1 1-2 0-2-1l2-6-5-4c-1-1 0-2 1-2h6l2-6h2zM216 211l2 6h7v2l-5 4 2 6-1 1-6-3-5 3c-1 1-2 0-2-1l2-6-5-4 1-2h6l2-6h2zM242 21l2 6h7v2l-5 4 2 6-1 1-6-4-5 4c-1 1-2 0-2-1l2-6-5-4v-2h7l2-6h2zM242 74l2 6h7v2l-5 4 2 6-1 1-6-4-5 4c-1 1-2 0-2-1l2-6-5-4v-2h7l2-6h2zM242 133l2 6h7v2l-5 4 2 6-1 1-6-4-5 4c-1 1-2 0-2-1l2-6-5-4v-2h7l2-6h2zM242 187l2 6h7v2l-5 4 2 6-1 1-6-4-5 4c-1 1-2 0-2-1l2-6-5-4v-2h7l2-6h2zM242 236l2 6 7 1v1l-5 4 2 7-1 1-6-4-5 4-2-1 2-7-5-4v-1l7-1 2-6h2z"
        />
      </svg>
    ),
  },
  {
    slug: 'fr',
    title: 'French',
    icon: (
      <svg width="20" aria-hidden={true} viewBox="0 0 512 512">
        <path fill="#230f8f" d="M0 0h171v512H0z" />
        <path fill="#fff" d="M171 0h170v512H171z" />
        <path fill="#eb2a30" d="M341 0h171v512H341z" />
      </svg>
    ),
  },
  // {
  //   slug: "deutsche",
  //   title: "Deutsche",
  //   icon: (
  //     <svg width="20" aria-hidden={true} viewBox="0 0 512 512">
  //       <path fill="#464655" d="M0 0h512v171H0z" />
  //       <path fill="#ffe15a" d="M0 341h512v171H0z" />
  //       <path fill="#ff4b55" d="M0 171h512v170H0z" />
  //     </svg>
  //   ),
  // },
  {
    slug: 'ar',
    title: 'Arabic',
    icon: (
      <svg width="24" aria-hidden={true} viewBox="0 0 48 48" stroke="none">
        <path fill="#f54337" d="M2 9v30h10V9H2z" />
        <path fill="#398f3d" d="M12 9v10h34V9H12z" />
        <path fill="#edeff1" d="M12 19v10h34V19H12z" />
        <path fill="#434343" d="M12 29v10h34V29H12z" />
      </svg>
    ),
  },
]
export const requestText: Record<RequestNotificationTypes, (name: string, type?: string) => string> = {
  like: (name) => `<strong>${name}</strong> Like one of your posts.`,
  comments: (name) => `<strong>${name}</strong> Reviews one of your posts.`,
  'new Job': (name) => `Congratulate <strong>${name}</strong> on starting new position`,
  add: (name, type) => `<strong>${name}</strong> added an <strong>${type}</strong> that might interest you`,
  delete: (name, type) => `<strong>${name}</strong> delete an <strong>${type}</strong> that might interest you`,
  modify: (name, type) => `<strong>${name}</strong> modify an <strong>${type}</strong> that might interest you`,
  accept: (name) => `You're now friends with <strong>${name}</strong>! See his photos, posts and more.`,
  birthday: (name) => `<strong>${name}</strong>! Sent you Friends Request`,
  friend: (name) => `<strong>${name}</strong>! Sent you Friends Request`,
  join: (name, type) => name,
  suggest: (name) => `You have a new friend suggestion : <strong>${name}</strong>`,
  know: (name, type) => `You may know <strong>${name}</strong>. Add to your ${type}.`,
}
