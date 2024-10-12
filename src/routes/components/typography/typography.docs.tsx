export const textSize = `
import { Text } from "@components/core";

const TextSize = ()=>{
    return(
      <Text size="3xs">
        Test Your text is better than nothing here you can find all size
        that we have (3xs)
      </Text>
      <Text size="2xs">
        Test Your text is better than nothing here you can find all size
        that we have (2xs)
      </Text>
      <Text size="xs">
        Test Your text is better than nothing here you can find all size
        that we have (xs)
      </Text>
      <Text size="sm">
        Test Your text is better than nothing here you can find all size
        that we have (sm)
      </Text>
      <Text>
        Test Your text is better than nothing here you can find all size
        that we have (md)
      </Text>
      <Text size="lg">
        Test Your text is better than nothing here you can find all size
        that we have (lg)
      </Text>
      <Text size="xl">
        Test Your text is better than nothing here you can find all size
        that we have (xl)
      </Text>
      <Text size="2xl">
        Test Your text is better than nothing here you can find all size
        that we have (2xl)
      </Text>
      <Text size="3xl">
        Test Your text is better than nothing here you can find all size
        that we have (3xl)
      </Text>
    )
}`

export const textLineHeight = `
import { Text } from "@components/core";

const TextLineHeight = ()=>{
    return(
      <Text size="lg" leading="none">
        Test Your text is better than nothing here you can find all size
        that we have (lg)
      </Text>
      <Text size="xl" leading="lg">
        Test Your text is better than nothing here you can find all size
        that we have Test Your text is better than nothing here you can find
        all size that we have (Large Leading)
      </Text>
      <Text size="2xl" leading="md">
        Test Your text is better than nothing here you can find all size
        that we have (2xl) (Medium Leading)
      </Text>
      <Text size="3xl" leading="sm">
        Test Your text is better than nothing here you can find all size
        that we have (Small Leading)
      </Text>
    )
}`

export const textTransform = `
import { Text } from "@components/core";

const TextTransform = ()=>{
    return(
        <Text size="lg" transform="uppercase">
            Test Your text is better than nothing here you can find all size
            that we have (lg)
        </Text>
        <Text size="xl" transform="capitalize">
            Test Your text is better than nothing here you can find all size
            that we have Test Your text is better than nothing here you can find
            all size that we have (Large Leading)
        </Text>
        <Text size="2xl" transform="lowercase">
            Test Your text is better than nothing here you can find all size
            that we have (2xl) (Medium Leading)
        </Text>
    )
}`

export const textWeight = `
import { Text } from "@components/core";

const TextWeight = ()=>{
    return(
      <>
        <Text weight="thin">
          Test Your text is better than nothing here you can find all size
          that we have (thin)
        </Text>
        <Text weight="extra-light">
          Test Your text is better than nothing here you can find all size
          that we have (extra-light)
        </Text>
        <Text weight="light">
          Test Your text is better than nothing here you can find all size
          that we have (light)
        </Text>
        <Text>
          Test Your text is better than nothing here you can find all size
          that we have (normal)
        </Text>
        <Text weight="medium">
          Test Your text is better than nothing here you can find all size
          that we have (normal)
        </Text>
        <Text weight="bold">
          Test Your text is better than nothing here you can find all size
          that we have (bold)
        </Text>
        <Text weight="extra-bold">
          Test Your text is better than nothing here you can find all size
          that we have (extra-bold)
        </Text>
        <Text weight="black">
          Test Your text is better than nothing here you can find all size
          that we have (black)
        </Text>
      </>

    )
}`

export const textDecoration = `
import { Text } from "@components/core";

const TextDecoration = ()=>{
    return(
      <>
        <Text decoration="line-through">
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
import { Text } from "@components/core";

const TextTruncate = ()=>{
    return(
      <>
        <Text truncate="multiline" numberLine={1}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat
        voluptatum dolor voluptas itaque neque minima tenetur ipsam adipisci
        nam quo, vitae quia laboriosam deleniti libero tempore numquam, a
        odio. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Similique iste ad nemo, modi deserunt natus enim quidem rem sed
        veritatis dolorem possimus ex quisquam quia pariatur quas! Labore,
        iusto harum?
      </Text>
      <Text truncate="multiline" numberLine={2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat
        voluptatum dolor voluptas itaque neque minima tenetur ipsam adipisci
        nam quo, vitae quia laboriosam deleniti libero tempore numquam, a
        odio. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Similique iste ad nemo, modi deserunt natus enim quidem rem sed
        veritatis dolorem possimus ex quisquam quia pariatur quas! Labore,
        iusto harum? Test Your text is better than nothing here you can find
        all size that we have
      </Text>
      <Text truncate="multiline" numberLine={3}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat
        voluptatum dolor voluptas itaque neque minima tenetur ipsam adipisci
        nam quo, vitae quia laboriosam deleniti libero tempore numquam, a
        odio. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Similique iste ad nemo, modi deserunt natus enim quidem rem sed
        veritatis dolorem possimus ex quisquam quia pariatur quas! Labore,
        iusto harum?
      </Text>
      <Text truncate="multiline" numberLine={4}>
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
import { Text } from "@components/core";

const TextTruncate = ()=>{
    return(
      <>
        <Text color="indigo">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
        </Text>
        <Text color="indigo" contrast="low">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
        </Text>
        
        <Text color="slate">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
        </Text>
        <Text color="slate" contrast="low">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
        </Text>
        <Text color="purple">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
        </Text>
        
        <Text color="purple" contrast="low">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
        </Text>
        <Text color="orange">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
        </Text>
        <Text color="orange" contrast="low">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
        </Text>
        <Text color="red">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
        </Text>
        <Text color="red" contrast="low">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
        </Text>
      </>
    )
}`
