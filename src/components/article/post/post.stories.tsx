import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { Post } from '..'

export default {
  title: 'Components/Article/Post',
  component: Post,
  args: {
    children: (
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, provident! Sit, minus quae velit blanditiis
        exercitationem obcaecati dolore sed nihil modi! Reiciendis sunt similique sint dolores perferendis dignissimos
        corrupti repellendus!
      </p>
    ),
  },
} as ComponentMeta<typeof Post>

const Template: ComponentStory<typeof Post> = (args) => <Post {...args} />

export const PostWithText = Template.bind({})
export const PostWithTextAndImage = Template.bind({})
PostWithTextAndImage.args = {
  children: (
    <div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, provident! Sit, minus quae velit blanditiis
        exercitationem obcaecati dolore sed nihil modi! Reiciendis sunt similique sint dolores perferendis dignissimos
        corrupti repellendus!
      </p>
      <img src="https://picsum.photos/id/300/300/300" alt="" />
    </div>
  ),
}
