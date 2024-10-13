export const progressBarColor = `
import { ProgressBar } from '@pillar-ui/core'
    function ProgressBarTest(){
        return(
          <>
            <ProgressBar size="3" value={90} label="hello" />
            <ProgressBar size="4" label="Hello" value={50} />
            <ProgressBar size="5" label="Hello" value={50} />
            <ProgressBar size="6" label="Hello" value={50} />
            <ProgressBar size="7" label="Hello" value={50} />
          </>
        )
    } 
`

export const progressBarSize = `
import { ProgressBar } from '@pillar-ui/core'
    function ProgressBarTest(){
        return(
          <>
            <ProgressBar color="d" value={90} label="hello" />
            <ProgressBar color="su" label="Hello" value={50} />
            <ProgressBar color="se" label="Hello" value={50} />
            <ProgressBar color="i" label="Hello" value={50} />
            <ProgressBar color="w" label="Hello" value={50} />
            <ProgressBar color="b" label="Hello" value={50} />
          </>
        )
    } 
`

export const progressBarValue = `
import { ProgressBar } from '@pillar-ui/core'
    function ProgressBarTest(){
        return(
          <>
            <ProgressBar value={10} label="hello" />
            <ProgressBar label="Hello" value={30} />
            <ProgressBar label="Hello" value={50} />
            <ProgressBar label="Hello" value={70} />
            <ProgressBar label="Hello" value={90} />
            <ProgressBar label="Hello" value={100} />
          
        )
    } 
`
export const ProgressBarShowValue = `
import { ProgressBar } from '@pillar-ui/core'
    function ProgressBarTest(){
        return(
          <>
            <ProgressBar showValue value={10} label="hello" />
            <ProgressBar showValue label="Hello" value={30} />
            <ProgressBar showValue label="Hello" value={50} />
            <ProgressBar showValue label="Hello" value={70} />
            <ProgressBar showValue label="Hello" value={90} />
            <ProgressBar showValue label="Hello" value={100} />
          </>
        )
    } 
`

export const ProgressBarStack = `
import { ProgressBarStack } from '@pillar-ui/core'
function ProgressBarTest(){
  return(
    <>
      <Flex direction="col" gap="5">
        <ProgressBarStack size="3" label="Nice to meet you">
          <ProgressBarStackItem label="hello" color="d" value={30}>
            <button>CSS 30</button>
          </ProgressBarStackItem>
          <ProgressBarStackItem label="hello" color="su" value={15}>
            <button>HTML 15%</button>
          </ProgressBarStackItem>
          <ProgressBarStackItem label="hello" color="se" value={25}>
            <button>React 25%</button>
          </ProgressBarStackItem>
          <ProgressBarStackItem label="hello" color="i" value={15}>
            <button>Node 15%</button>
          </ProgressBarStackItem>
          <ProgressBarStackItem label="hello" color="w" value={15}>
            <button>SCSS 15%</button>
          </ProgressBarStackItem>
        </ProgressBarStack>
        <ProgressBarStack size="4" label="Nice to meet you">
          <ProgressBarStackItem label="hello" color="d" value={30}>
            <button>CSS 30</button>
          </ProgressBarStackItem>
          <ProgressBarStackItem label="hello" color="su" value={15}>
            <button>HTML 15%</button>
          </ProgressBarStackItem>
          <ProgressBarStackItem label="hello" color="se" value={25}>
            <button>React 25%</button>
          </ProgressBarStackItem>
          <ProgressBarStackItem label="hello" color="i" value={15}>
            <button>Node 15%</button>
          </ProgressBarStackItem>
          <ProgressBarStackItem label="hello" color="w" value={15}>
            <button>SCSS 15%</button>
          </ProgressBarStackItem>
        </ProgressBarStack>
      
        <ProgressBarStack size="5" label="Nice to meet you">
          <ProgressBarStackItem label="hello" color="d" value={30}>
            <button>CSS 30</button>
          </ProgressBarStackItem>
          <ProgressBarStackItem label="hello" color="su" value={15}>
            <button>HTML 15%</button>
          </ProgressBarStackItem>
          <ProgressBarStackItem label="hello" color="se" value={25}>
            <button>React 25%</button>
          </ProgressBarStackItem>
          <ProgressBarStackItem label="hello" color="i" value={15}>
            <button>Node 15%</button>
          </ProgressBarStackItem>
          <ProgressBarStackItem label="hello" color="w" value={15}>
            <button>SCSS 15%</button>
          </ProgressBarStackItem>
        </ProgressBarStack>
        <ProgressBarStack size="6" label="Nice to meet you">
          <ProgressBarStackItem label="hello" color="d" value={30}>
            <button>CSS 30</button>
          </ProgressBarStackItem>
          <ProgressBarStackItem label="hello" color="su" value={15}>
            <button>HTML 15%</button>
          </ProgressBarStackItem>
          <ProgressBarStackItem label="hello" color="se" value={25}>
            <button>React 25%</button>
          </ProgressBarStackItem>
          <ProgressBarStackItem label="hello" color="i" value={15}>
            <button>Node 15%</button>
          </ProgressBarStackItem>
          <ProgressBarStackItem label="hello" color="w" value={15}>
            <button>SCSS 15%</button>
          </ProgressBarStackItem>
        </ProgressBarStack>
        <ProgressBarStack size="7" label="Nice to meet you">
          <ProgressBarStackItem label="hello" color="d" value={30}>
            <button>CSS 30</button>
          </ProgressBarStackItem>
          <ProgressBarStackItem label="hello" color="su" value={15}>
            <button>HTML 15%</button>
          </ProgressBarStackItem>
          <ProgressBarStackItem label="hello" color="se" value={25}>
            <button>React 25%</button>
          </ProgressBarStackItem>
          <ProgressBarStackItem label="hello" color="i" value={15}>
            <button>Node 15%</button>
          </ProgressBarStackItem>
          <ProgressBarStackItem label="hello" color="w" value={15}>
            <button>SCSS 15%</button>
          </ProgressBarStackItem>
        </ProgressBarStack>
    </Flex>
  </>
  )
} 
`

export const progressCircleColor = `
import { ProgressCircle } from '@pillar-ui/core'
    function ProgressCircleTest(){
        return(
          <>
            <ProgressCircle size="3" value={90} label="hello" />
            <ProgressCircle size="4" label="Hello" value={50} />
            <ProgressCircle size="5" label="Hello" value={50} />
            <ProgressCircle size="6" label="Hello" value={50} />
            <ProgressCircle size="7" label="Hello" value={50} />
          </>
        )
    } 
`

export const progressCircleSize = `
import { ProgressCircle } from '@pillar-ui/core'
    function ProgressCircleTest(){
        return(
          <>
            <ProgressCircle color="d" value={90} label="hello" />
            <ProgressCircle color="su" label="Hello" value={50} />
            <ProgressCircle color="mint" label="Hello" value={50} />
            <ProgressCircle color="yellow" label="Hello" value={50} />
            <ProgressCircle color="se" label="Hello" value={50} />
            <ProgressCircle color="i" label="Hello" value={50} />
            <ProgressCircle color="w" label="Hello" value={50} />
            <ProgressCircle color="b" label="Hello" value={50} />
          </>
        )
    } 
`

export const progressCircleValue = `
import { ProgressCircle } from '@pillar-ui/core'
    function ProgressCircleTest(){
        return(
          <>
            <ProgressCircle value={10} label="hello" />
            <ProgressCircle label="Hello" value={30} />
            <ProgressCircle label="Hello" value={50} />
            <ProgressCircle label="Hello" value={70} />
            <ProgressCircle label="Hello" value={90} />
            <ProgressCircle label="Hello" value={100} />
          
        )
    } 
`
export const progressCircleShowValue = `
import { ProgressCircle } from '@pillar-ui/core'
    function ProgressCircleTest(){
        return(
          <>
            <ProgressCircle showValue value={10} label="hello" />
            <ProgressCircle showValue label="Hello" value={30} />
            <ProgressCircle showValue label="Hello" value={50} />
            <ProgressCircle showValue label="Hello" value={70} />
            <ProgressCircle showValue label="Hello" value={90} />
            <ProgressCircle showValue label="Hello" value={100} />
          </>
        )
    } 
`
