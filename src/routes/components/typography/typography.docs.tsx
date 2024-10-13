export const textSize = `
import { Text } from "@pillar-ui/core";

const TextSize = ()=>{
    return(
      <Text size="1">
        Test Your text is better than nothing here you can find all size
        that we have (3xs)
      </Text>
      <Text size="1">
        Test Your text is better than nothing here you can find all size
        that we have (2xs)
      </Text>
      <Text size="3">
        Test Your text is better than nothing here you can find all size
        that we have (xs)
      </Text>
      <Text size="4">
        Test Your text is better than nothing here you can find all size
        that we have (sm)
      </Text>
      <Text>
        Test Your text is better than nothing here you can find all size
        that we have (md)
      </Text>
      <Text size="6">
        Test Your text is better than nothing here you can find all size
        that we have (lg)
      </Text>
      <Text size="7">
        Test Your text is better than nothing here you can find all size
        that we have (xl)
      </Text>
      <Text size="8">
        Test Your text is better than nothing here you can find all size
        that we have (2xl)
      </Text>
      <Text size="9">
        Test Your text is better than nothing here you can find all size
        that we have (3xl)
      </Text>
    )
}`

export const textLineHeight = `
import { Text } from "@pillar-ui/core";

const TextLineHeight = ()=>{
    return(
      <Text size="6" leading="none">
        Test Your text is better than nothing here you can find all size
        that we have (lg)
      </Text>
      <Text size="7" leading="lg">
        Test Your text is better than nothing here you can find all size
        that we have Test Your text is better than nothing here you can find
        all size that we have (Large Leading)
      </Text>
      <Text size="8" leading="md">
        Test Your text is better than nothing here you can find all size
        that we have (2xl) (Medium Leading)
      </Text>
      <Text size="9" leading="sm">
        Test Your text is better than nothing here you can find all size
        that we have (Small Leading)
      </Text>
    )
}`

export const textTransform = `
import { Text } from "@pillar-ui/core";

const TextTransform = ()=>{
    return(
        <Text size="6" transform="uppercase">
            Test Your text is better than nothing here you can find all size
            that we have (lg)
        </Text>
        <Text size="7" transform="capitalize">
            Test Your text is better than nothing here you can find all size
            that we have Test Your text is better than nothing here you can find
            all size that we have (Large Leading)
        </Text>
        <Text size="8" transform="lowercase">
            Test Your text is better than nothing here you can find all size
            that we have (2xl) (Medium Leading)
        </Text>
    )
}`

export const textWeight = `
import { Text } from "@pillar-ui/core";

const TextWeight = ()=>{
    return(
      <>
        <Text weight="2">
          Test Your text is better than nothing here you can find all size
          that we have (thin)
        </Text>
        <Text weight="1">
          Test Your text is better than nothing here you can find all size
          that we have (extra-light)
        </Text>
        <Text weight="3">
          Test Your text is better than nothing here you can find all size
          that we have (light)
        </Text>
        <Text>
          Test Your text is better than nothing here you can find all size
          that we have (normal)
        </Text>
        <Text weight="5">
          Test Your text is better than nothing here you can find all size
          that we have (normal)
        </Text>
        <Text weight="7">
          Test Your text is better than nothing here you can find all size
          that we have (bold)
        </Text>
        <Text weight="8">
          Test Your text is better than nothing here you can find all size
          that we have (extra-bold)
        </Text>
        <Text weight="9">
          Test Your text is better than nothing here you can find all size
          that we have (black)
        </Text>
      </>

    )
}`

export const textDecoration = `
import { Text } from "@pillar-ui/core";

const TextDecoration = ()=>{
    return(
      <>
        <Text decoration="through">
          Test Your text is better than nothing here you can find all size that we
          have (line-through)
        </Text>
        <Text decoration="overline">
          Test Your text is better than nothing here you can find all size that we
          have Test Your text is better than nothing here you can find all size that
          we have (overline)
        </Text>
        <Text decoration="underline">
          Test Your text is better than nothing here you can find all size that we
          have (underline)
        </Text>
      </>

    )
}`

export const textTruncate = `
import { Text } from "@pillar-ui/core";

const TextTruncate = ()=>{
    return(
      <>
        <Text truncate="1" >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat
        voluptatum dolor voluptas itaque neque minima tenetur ipsam adipisci
        nam quo, vitae quia laboriosam deleniti libero tempore numquam, a
        odio. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Similique iste ad nemo, modi deserunt natus enim quidem rem sed
        veritatis dolorem possimus ex quisquam quia pariatur quas! Labore,
        iusto harum?
      </Text>
      <Text truncate="2" >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat
        voluptatum dolor voluptas itaque neque minima tenetur ipsam adipisci
        nam quo, vitae quia laboriosam deleniti libero tempore numquam, a
        odio. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Similique iste ad nemo, modi deserunt natus enim quidem rem sed
        veritatis dolorem possimus ex quisquam quia pariatur quas! Labore,
        iusto harum? Test Your text is better than nothing here you can find
        all size that we have
      </Text>
      <Text truncate="3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat
        voluptatum dolor voluptas itaque neque minima tenetur ipsam adipisci
        nam quo, vitae quia laboriosam deleniti libero tempore numquam, a
        odio. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Similique iste ad nemo, modi deserunt natus enim quidem rem sed
        veritatis dolorem possimus ex quisquam quia pariatur quas! Labore,
        iusto harum?
      </Text>
      <Text truncate="4" >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat
        voluptatum dolor voluptas itaque neque minima tenetur ipsam adipisci
        nam quo, vitae quia laboriosam deleniti libero tempore numquam, a
        odio. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Similique iste ad nemo, modi deserunt natus enim quidem rem sed
        veritatis dolorem possimus ex quisquam quia pariatur quas! Labore,
        iusto harum? ste ad nemo, modi deserunt natus enim quidem rem sed
        veritatis dolorem possimus ex quisquam quia pariatur quas! Labore,
        iusto harum?
      </Text>
      </>
    )
}`

export const textColor = `
import { Text } from "@pillar-ui/core";

const TextTruncate = ()=>{
    return(
      <>
        <Text color="i">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
        </Text>
        <Text color="i" low>
        Lorem ipsum dolor sit amet consectetur adipisicing elit
        </Text>
        
        <Text color="b">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
        </Text>
        <Text color="b" low>
        Lorem ipsum dolor sit amet consectetur adipisicing elit
        </Text>
        <Text color="se">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
        </Text>
        
        <Text color="se" low>
        Lorem ipsum dolor sit amet consectetur adipisicing elit
        </Text>
        <Text color="w">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
        </Text>
        <Text color="w" low>
        Lorem ipsum dolor sit amet consectetur adipisicing elit
        </Text>
        <Text color="d">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
        </Text>
        <Text color="d" low>
        Lorem ipsum dolor sit amet consectetur adipisicing elit
        </Text>
      </>
    )
}`
