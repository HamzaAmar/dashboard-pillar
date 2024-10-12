export const progressBarColor = `
import { ProgressBar } from '@components/core'
    function ProgressBarTest(){
        return(
          <>
            <ProgressBar size="xs" value={90} label="hello" />
            <ProgressBar size="sm" label="Hello" value={50} />
            <ProgressBar size="md" label="Hello" value={50} />
            <ProgressBar size="lg" label="Hello" value={50} />
            <ProgressBar size="xl" label="Hello" value={50} />
          </>
        )
    } 
`

export const progressBarSize = `
import { ProgressBar } from '@components/core'
    function ProgressBarTest(){
        return(
          <>
            <ProgressBar color="danger" value={90} label="hello" />
            <ProgressBar color="success" label="Hello" value={50} />
            <ProgressBar color="mint" label="Hello" value={50} />
            <ProgressBar color="yellow" label="Hello" value={50} />
            <ProgressBar color="purple" label="Hello" value={50} />
            <ProgressBar color="indigo" label="Hello" value={50} />
            <ProgressBar color="warning" label="Hello" value={50} />
            <ProgressBar color="slate" label="Hello" value={50} />
          </>
        )
    } 
`

export const progressBarValue = `
import { ProgressBar } from '@components/core'
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
import { ProgressBar } from '@components/core'
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
import { ProgressBarStack } from '@components/core'
function ProgressBarTest(){
  return(
    <>
      <Flex direction="column" gap="md">
        <ProgressBarStack size="xs" label="Nice to meet you">
          <ProgressBarStack.Item label="hello" color="danger" value={30}>
            <button>CSS 30</button>
          </ProgressBarStack.Item>
          <ProgressBarStack.Item label="hello" color="success" value={15}>
            <button>HTML 15%</button>
          </ProgressBarStack.Item>
          <ProgressBarStack.Item label="hello" color="purple" value={25}>
            <button>React 25%</button>
          </ProgressBarStack.Item>
          <ProgressBarStack.Item label="hello" color="indigo" value={15}>
            <button>Node 15%</button>
          </ProgressBarStack.Item>
          <ProgressBarStack.Item label="hello" color="warning" value={15}>
            <button>SCSS 15%</button>
          </ProgressBarStack.Item>
        </ProgressBarStack>
        <ProgressBarStack size="sm" label="Nice to meet you">
          <ProgressBarStack.Item label="hello" color="danger" value={30}>
            <button>CSS 30</button>
          </ProgressBarStack.Item>
          <ProgressBarStack.Item label="hello" color="success" value={15}>
            <button>HTML 15%</button>
          </ProgressBarStack.Item>
          <ProgressBarStack.Item label="hello" color="purple" value={25}>
            <button>React 25%</button>
          </ProgressBarStack.Item>
          <ProgressBarStack.Item label="hello" color="indigo" value={15}>
            <button>Node 15%</button>
          </ProgressBarStack.Item>
          <ProgressBarStack.Item label="hello" color="warning" value={15}>
            <button>SCSS 15%</button>
          </ProgressBarStack.Item>
        </ProgressBarStack>
      
        <ProgressBarStack size="md" label="Nice to meet you">
          <ProgressBarStack.Item label="hello" color="danger" value={30}>
            <button>CSS 30</button>
          </ProgressBarStack.Item>
          <ProgressBarStack.Item label="hello" color="success" value={15}>
            <button>HTML 15%</button>
          </ProgressBarStack.Item>
          <ProgressBarStack.Item label="hello" color="purple" value={25}>
            <button>React 25%</button>
          </ProgressBarStack.Item>
          <ProgressBarStack.Item label="hello" color="indigo" value={15}>
            <button>Node 15%</button>
          </ProgressBarStack.Item>
          <ProgressBarStack.Item label="hello" color="warning" value={15}>
            <button>SCSS 15%</button>
          </ProgressBarStack.Item>
        </ProgressBarStack>
        <ProgressBarStack size="lg" label="Nice to meet you">
          <ProgressBarStack.Item label="hello" color="danger" value={30}>
            <button>CSS 30</button>
          </ProgressBarStack.Item>
          <ProgressBarStack.Item label="hello" color="success" value={15}>
            <button>HTML 15%</button>
          </ProgressBarStack.Item>
          <ProgressBarStack.Item label="hello" color="purple" value={25}>
            <button>React 25%</button>
          </ProgressBarStack.Item>
          <ProgressBarStack.Item label="hello" color="indigo" value={15}>
            <button>Node 15%</button>
          </ProgressBarStack.Item>
          <ProgressBarStack.Item label="hello" color="warning" value={15}>
            <button>SCSS 15%</button>
          </ProgressBarStack.Item>
        </ProgressBarStack>
        <ProgressBarStack size="xl" label="Nice to meet you">
          <ProgressBarStack.Item label="hello" color="danger" value={30}>
            <button>CSS 30</button>
          </ProgressBarStack.Item>
          <ProgressBarStack.Item label="hello" color="success" value={15}>
            <button>HTML 15%</button>
          </ProgressBarStack.Item>
          <ProgressBarStack.Item label="hello" color="purple" value={25}>
            <button>React 25%</button>
          </ProgressBarStack.Item>
          <ProgressBarStack.Item label="hello" color="indigo" value={15}>
            <button>Node 15%</button>
          </ProgressBarStack.Item>
          <ProgressBarStack.Item label="hello" color="warning" value={15}>
            <button>SCSS 15%</button>
          </ProgressBarStack.Item>
        </ProgressBarStack>
    </Flex>
  </>
  )
} 
`

export const progressCircleColor = `
import { ProgressCircle } from '@components/core'
    function ProgressCircleTest(){
        return(
          <>
            <ProgressCircle size="xs" value={90} label="hello" />
            <ProgressCircle size="sm" label="Hello" value={50} />
            <ProgressCircle size="md" label="Hello" value={50} />
            <ProgressCircle size="lg" label="Hello" value={50} />
            <ProgressCircle size="xl" label="Hello" value={50} />
          </>
        )
    } 
`

export const progressCircleSize = `
import { ProgressCircle } from '@components/core'
    function ProgressCircleTest(){
        return(
          <>
            <ProgressCircle color="danger" value={90} label="hello" />
            <ProgressCircle color="success" label="Hello" value={50} />
            <ProgressCircle color="mint" label="Hello" value={50} />
            <ProgressCircle color="yellow" label="Hello" value={50} />
            <ProgressCircle color="purple" label="Hello" value={50} />
            <ProgressCircle color="indigo" label="Hello" value={50} />
            <ProgressCircle color="warning" label="Hello" value={50} />
            <ProgressCircle color="slate" label="Hello" value={50} />
          </>
        )
    } 
`

export const progressCircleValue = `
import { ProgressCircle } from '@components/core'
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
import { ProgressCircle } from '@components/core'
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
