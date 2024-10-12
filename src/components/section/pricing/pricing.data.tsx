import { USERS_LIST } from '@api/user/users.data'
import { Component, FileUpload, Link, Setting, User } from '@components/icons'
import type { FeaturePricingModel, PlanFeatureProps, ReviewProps } from './pricing.type'

export const REVIEW: ReviewProps[] = [
  {
    id: 1,
    title: 'I am very Happy to use this platform',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda est earum eius omnis porro quod minima magnam commodi laudantium illum ipsum, a vitae rerum nemo optio iusto dignissimos nobis esse.',
    user: { name: USERS_LIST[1].name, avatar: USERS_LIST[1].avatar },
    company: 'Apple',
  },
  {
    id: 2,
    title: 'Basic Plan is Good and not expensive Thanks',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda est earum eius omnis porro quod minima magnam commodi laudantium illum ipsum, a vitae rerum nemo optio iusto dignissimos nobis esse.',
    user: { name: USERS_LIST[2].name, avatar: USERS_LIST[2].avatar },
    company: 'Apple',
  },
  {
    id: 3,
    title: 'The best hosting platform',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda est earum eius omnis porro quod minima magnam commodi laudantium illum ipsum, a vitae rerum nemo optio iusto dignissimos nobis esse.',
    user: { name: USERS_LIST[3].name, avatar: USERS_LIST[3].avatar },
    company: 'MongoDB',
  },
  {
    id: 4,
    title: 'I come here from Remix and I like this platform',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda est earum eius omnis porro quod minima magnam commodi laudantium illum ipsum, a vitae rerum nemo optio iusto dignissimos nobis esse.',
    user: { name: USERS_LIST[4].name, avatar: USERS_LIST[4].avatar },
    company: 'Oracle',
  },
  {
    id: 5,
    title: 'Hello world',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda est earum eius omnis porro quod minima magnam commodi laudantium illum ipsum, a vitae rerum nemo optio iusto dignissimos nobis esse.',
    user: { name: USERS_LIST[5].name, avatar: USERS_LIST[5].avatar },
    company: 'Dice',
  },
  {
    id: 6,
    title: 'Hello world',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda est earum eius omnis porro quod minima magnam commodi laudantium illum ipsum, a vitae rerum nemo optio iusto dignissimos nobis esse.',
    user: { name: USERS_LIST[6].name, avatar: USERS_LIST[6].avatar },
    company: 'Apple',
  },
  {
    id: 7,
    title: 'Hello world',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda est earum eius omnis porro quod minima magnam commodi laudantium illum ipsum, a vitae rerum nemo optio iusto dignissimos nobis esse.',
    user: { name: USERS_LIST[7].name, avatar: USERS_LIST[7].avatar },
    company: 'MongoDB',
  },
  {
    id: 8,
    title: 'Hello world',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda est earum eius omnis porro quod minima magnam commodi laudantium illum ipsum, a vitae rerum nemo optio iusto dignissimos nobis esse.',
    user: { name: USERS_LIST[8].name, avatar: USERS_LIST[8].avatar },
    company: 'Apple',
  },
  {
    id: 9,
    title: 'Hello world',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda est earum eius omnis porro quod minima magnam commodi laudantium illum ipsum, a vitae rerum nemo optio iusto dignissimos nobis esse.',
    user: { name: USERS_LIST[9].name, avatar: USERS_LIST[9].avatar },
    company: 'UnderDog',
  },
  {
    id: 10,
    title: 'Hello world',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda est earum eius omnis porro quod minima magnam commodi laudantium illum ipsum, a vitae rerum nemo optio iusto dignissimos nobis esse.',
    user: { name: USERS_LIST[10].name, avatar: USERS_LIST[10].avatar },
    company: 'UnderDog',
  },
  {
    id: 11,
    title: 'Hello world',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda est earum eius omnis porro quod minima magnam commodi laudantium illum ipsum, a vitae rerum nemo optio iusto dignissimos nobis esse.',
    user: { name: USERS_LIST[11].name, avatar: USERS_LIST[11].avatar },
    company: 'Nasa',
  },
  {
    id: 12,
    title: 'Hello world',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda est earum eius omnis porro quod minima magnam commodi laudantium illum ipsum, a vitae rerum nemo optio iusto dignissimos nobis esse.',
    user: { name: USERS_LIST[12].name, avatar: USERS_LIST[12].avatar },
    company: 'Nasa',
  },
]

export const PRICING_FEATURES: FeaturePricingModel = {
  head: [
    {
      slug: '14-days',
      content: ['FEATURES', 'Native Front Features'],
    },
    {
      slug: 'no-user',
      content: ['Free', 'Trial'],
    },
    {
      slug: 'no-email',
      content: ['Base', '$10/Mo'],
    },
    {
      slug: 'no-data',
      content: ['Business', '$20/Mo'],
    },
    {
      slug: 'full Secure',
      content: ['Entrprise', '$40/Mo'],
    },
  ],
  body: [
    {
      slug: '14-days',
      title: '14-days free trial',
      feature: [true, true, true, true],
    },
    {
      slug: 'no-user',
      title: 'No user limit',
      feature: [false, false, true, true],
    },
    {
      slug: 'no-email',
      title: 'No Email and chat limit',
      feature: [false, false, false, true],
    },
    {
      slug: 'no-data',
      title: 'No data limit',
      feature: [false, false, true, true],
    },
    {
      slug: 'full Secure',
      title: 'Full Secure',
      feature: [false, false, false, true],
    },
  ],
}

export const FEATURES_PLAN: PlanFeatureProps[] = [
  {
    slug: 'visual',
    icon: <Component width={32} />,
    title: 'Visual widget builder',
    description: 'the easiest to use drag and drop builder',
  },
  {
    slug: 'end-to-end',
    icon: <User width={32} />,
    title: 'End to end Testing to all deploy',
    description: 'the easiest to use drag and drop builder',
  },
  {
    slug: 'end-to-testing',
    icon: <User width={32} />,
    title: 'End to end Testing to all deploy',
    description: 'the easiest to use drag and drop builder',
  },
  {
    slug: 'simple-deploy',
    icon: <User width={32} />,
    title: 'Simple and Fast deploy',
    description: 'the easiest to use drag and drop builder',
  },
  {
    slug: 'fast-deploy',
    icon: <User width={32} />,
    title: 'Visual widget builder',
    description: 'the easiest to use drag and drop builder',
  },
  {
    slug: 'secure-deploy',
    icon: <Setting width={32} />,
    title: 'More Secure than others',
    description: 'the easiest to use drag and drop builder',
  },
  {
    slug: 'nice-visual',
    icon: <Link width={32} />,
    title: 'Visual widget builder',
    description: 'the easiest to use drag and drop builder',
  },
  {
    slug: 'nice-api',
    icon: <User width={32} />,
    title: 'Nice Api to Work with',
    description: 'The simplest Api To Work With',
  },
  {
    slug: 'free-image-storage',
    icon: <FileUpload width={32} />,
    title: 'Free Image Storage',
    description: 'App to 10 GB OF free Multimedia Storage',
  },
]
