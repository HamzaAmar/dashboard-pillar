export const status404Color = `
import {NotFound} from '@components/composition'

function StatusStories(){
    return(
        <NotFound color="danger" />
        <NotFound color="success" />
        <NotFound color="purple" />
        <NotFound color="yellow" />
        <NotFound color="indigo" />
        <NotFound color="warning" />
        <NotFound color="slate" />
        <NotFound color="mint" />
        <NotFound />
    )
}`
export const status404Variant = `
import {NotFound} from '@components/composition'

function StatusStories(){
    return(
        <NotFound variant="gradient" color="red" />
        <NotFound variant="outline" />
        <NotFound variant="solid" />
    )
}`
export const statusType = `
import {NotFound} from '@components/composition'

function StatusStories(){
    return(
        <Error500 />
        <NotFound />
        <ComingSoom />
    )
}`
export const customStatus = `
import { StatusArticle } from '@components/composition'

function StatusStories(){
    return(
     <StatusArticle
        title="Add Email With Success"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptas
      laborum aliquid vero quo assumenda harum error, mollitia alias soluta
      quia. Natus vitae repellat minima consequatur enim quidem architecto!
      Numquam?"
        status="success"
      />
      <StatusArticle
        title="Did you want to delete this account"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptas
      laborum aliquid vero quo assumenda harum error, mollitia alias soluta
      quia. Natus vitae repellat minima consequatur enim quidem architecto!
      Numquam?"
        status="danger"
      />
      <StatusArticle
        title="The image is too big for this operation"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptas
      laborum aliquid vero quo assumenda harum error, mollitia alias soluta
      quia. Natus vitae repellat minima consequatur enim quidem architecto!
      Numquam?"
        status="warning"
      />
      <StatusArticle
        title="Props in Heading is Same as Text"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptas
      laborum aliquid vero quo assumenda harum error, mollitia alias soluta
      quia. Natus vitae repellat minima consequatur enim quidem architecto!
      Numquam?"
        status="info"
      />
    )
}
`
