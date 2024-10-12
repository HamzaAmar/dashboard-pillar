import { getUsers } from '@api/user'
import { getDate } from '@utils/date'
import { getRandomNumber } from '@utils/randomNumber'
import { PostModel, ReviewModel } from './posts.type'

function getRandomReview() {
  const users = getUsers()

  const userIndex = getRandomNumber({ min: 10, max: users.length })
  const randomReview = getRandomNumber({ min: 2, max: 10 })
  const reviews = Array.from<unknown, ReviewModel>({ length: randomReview }, (_, index) => {
    return {
      id: 'review-type-index',
      user: {
        slug: users[userIndex].slug,
        name: users[userIndex].name,
        avatar: users[userIndex].avatar,
      },
      review: 'hello',
      date: getDate({ days: -index }),
      likes: [
        {
          user: users[userIndex - 1],
          type: 'Celebrate',
        },
      ],
      rating: 4,
    }
  })
  return reviews
}

export function getPosts() {
  const users = getUsers()
  const posts = Array.from<unknown, PostModel>({ length: 30 }, (_, index) => {
    const userIndex = getRandomNumber({ min: 5, max: users.length - 1 })

    return {
      id: `${new Date().getTime()}--${index}`,
      user: users[userIndex],
      content: 'Hello world My name Is hamza miloud amar I love Programming and I like to be a web developer at google',
      date: getDate({ days: -userIndex * 1.5 }),
      likes: [
        { user: users[userIndex - 1], type: 'Like' },
        { user: users[userIndex - 2], type: 'Like' },
        { user: users[userIndex - 3], type: 'Celebrate' },
        { user: users[userIndex - 4], type: 'Like' },
        { user: users[userIndex - 5], type: 'Funny' },
        { user: users[userIndex - 6], type: 'Like' },
      ],
      reviews: [...getRandomReview()],
    }
  })
  return posts
}

export const POSTS_LIST = getPosts()
