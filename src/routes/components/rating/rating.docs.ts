export const ratingLevel = `
import { Rating } from "@components/composite";

const RatingTest = ()=>{
    return(
      <RadioGroup direction="vertical" label="Rating" color="d">
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
        <Rating rating={3} showLabel size="4" />
        <Rating rating={3} showLabel />
        <Rating rating={3.4} showLabel size="6" />
       </>
    )
}`

export const ratingSize = `
import { Rating } from "@components/composite";

const RatingTest = ()=>{
    return(
      <>
        <Rating rating={4} size="4" />
        <Rating rating={4} />
        <Rating rating={4} size="6" />
       </>
    )
}`

export const ratingColor = `
import { Rating } from "@components/composite";

const RatingTest = ()=>{
    return(
      <>
        <Rating color="d" rating={4} />
        <Rating color="i" rating={4} />
        <Rating color="p" rating={4} />
        <Rating color="se" rating={4} />
        <Rating color="su" rating={4} />
        <Rating color="w" rating={4} />
       </>
    )
}`

export const ratingType = `
import { Rating } from "@components/composite";

const RatingTest = ()=>{
    return(
      <>
        <Rating icon="heart" rating={4} color="d" />
        <Rating rating={4} />
      </>
    )
}`
