export const ratingLevel = `
import { Rating } from "@components/composite";

const RatingTest = ()=>{
    return(
      <RadioGroup direction="vertical" label="Rating" color="danger">
        <Rating rating={1} />
        <Rating rating={2} />
        <Rating rating={3} />
        <Rating rating={4} />
        <Rating rating={5} />
       </RadioGroup>
    )
}`

export const ratingLevelShowLabel = `
import { Rating } from "@components/composite";

const RatingTest = ()=>{
    return(
      <>
        <Rating rating={3} showLabel size="sm" />
        <Rating rating={3} showLabel />
        <Rating rating={3.4} showLabel size="lg" />
       </>
    )
}`

export const ratingSize = `
import { Rating } from "@components/composite";

const RatingTest = ()=>{
    return(
      <>
        <Rating rating={4} size="sm" />
        <Rating rating={4} />
        <Rating rating={4} size="lg" />
       </>
    )
}`

export const ratingColor = `
import { Rating } from "@components/composite";

const RatingTest = ()=>{
    return(
      <>
        <Rating color="danger" rating={4} />
        <Rating color="indigo" rating={4} />
        <Rating color="primary" rating={4} />
        <Rating color="purple" rating={4} />
        <Rating color="success" rating={4} />
        <Rating color="warning" rating={4} />
       </>
    )
}`

export const ratingType = `
import { Rating } from "@components/composite";

const RatingTest = ()=>{
    return(
      <>
        <Rating icon="heart" rating={4} color="danger" />
        <Rating rating={4} />
      </>
    )
}`
