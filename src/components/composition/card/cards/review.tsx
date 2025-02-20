import { Avatar, Button, Flex, Text, Rating, Paper } from '@pillar-ui/core'
import { getDateFormat } from '@utils/date'
import { ThumbUp, Eye, ThumbDown } from '@pillar-ui/icons'

import type { ReviewCardProps } from '../card.type'

const ReviewComp = ({ user, rating, date, review }: ReviewCardProps) => {
  return (
    <Paper flow="4" className="l_box">
      <Flex as="header" items="center" justify="between">
        <Flex items="center" gap="3">
          <Avatar src={user?.avatar} title={user.name} />
          <div>
            <Text weight="5" size="4">
              {user.name}
            </Text>
            <Rating size="3" rating={rating} />
          </div>
        </Flex>
        <Text color="b" low size="3">
          {getDateFormat(date)}
        </Text>
      </Flex>
      <div className="">
        <Text size="4" color="b" low>
          {review}
        </Text>
      </div>
      <footer>
        <Flex items="center" justify="between">
          <Flex gap="3">
            <Button icon={<ThumbUp />} variant="soft" color="b" size="4">
              Like
            </Button>
            <Button icon={<ThumbDown />} variant="soft" color="b" size="4">
              Dislike
            </Button>
          </Flex>
          <Button icon={<Eye />} variant="text" color="d" size="4">
            Report Review
          </Button>
        </Flex>
      </footer>
    </Paper>
  )
}

export default ReviewComp
