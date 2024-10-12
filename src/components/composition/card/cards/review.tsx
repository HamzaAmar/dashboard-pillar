import { Avatar, Button, Flex, Text } from '@components/core'
import { Rating } from '@components/composition'
import { getDateFormat } from '@utils/date'
import { Dislike, Eye, Like } from '@components/icons'

import type { ReviewCardProps } from '../card.type'

const ReviewComp = ({ user, rating, date, review }: ReviewCardProps) => {
  return (
    <article className="l_box l_flow-md">
      <Flex as="header" items="center" justify="between">
        <Flex items="center" gap="xs">
          <Avatar variant="image" image={user?.avatar} title={user.name} />
          <div>
            <Text weight="medium" size="sm">
              {user.name}
            </Text>
            <Rating rating={rating} />
          </div>
        </Flex>
        <Text color="slate" contrast="low" size="xs">
          {getDateFormat(date)}
        </Text>
      </Flex>
      <div className="">
        <Text size="sm" color="slate" contrast="low">
          {review}
        </Text>
      </div>
      <footer>
        <Flex items="center" justify="between">
          <Flex gap="xs">
            <Button icon={<Like />} variant="soft" color="slate" size="sm">
              Like
            </Button>
            <Button icon={<Dislike />} variant="soft" color="slate" size="sm">
              Dislike
            </Button>
          </Flex>
          <Button icon={<Eye />} variant="text" color="danger" size="sm">
            Report Review
          </Button>
        </Flex>
      </footer>
    </article>
  )
}

export default ReviewComp
