export const defaultPagination = `
import { Pagination } from '@components/composition'

function PaginationTest(){
  return(
    <Pagination title="hello" count={10} current={1} />
  )
}
`
export const VariantPagination = `
import { Pagination } from '@components/composition'

function PaginationTest(){
  return(
    <Pagination color="slate" title="hello" count={10} current={1} />
    <Pagination color="slate" variant="soft" title="hello" count={10} current={1} />
    <Pagination color="slate" variant="solid" title="hello" count={10} current={1} />
  )
}
`

export const CornerPagination = `
import { Pagination } from '@components/composition'

function PaginationTest(){
  return(
    <Pagination corner="sharp" title="hello" count={10} current={1} />
    <Pagination corner="2xs" title="hello" count={10} current={1} />
    <Pagination corner="xs" title="hello" count={10} current={1} />
    <Pagination corner="sm" title="hello" count={10} current={1} />
    <Pagination corner="lg" title="hello" count={10} current={1} />
    <Pagination corner="xl" title="hello" count={10} current={1} />
    <Pagination corner="2xl" title="hello" count={10} current={1} />
    <Pagination corner="full" title="hello" count={10} current={1} />
  )
}
`

export const SizePagination = `
import { Pagination } from '@components/composition'

function PaginationTest(){
  return(
    <Pagination size="xs" title="hello" count={10} current={1} />
    <Pagination size="sm" title="hello" count={10} current={1} />
    <Pagination size="md" title="hello" count={10} current={1} />
    <Pagination size="lg" title="hello" count={10} current={1} />
    <Pagination size="xl" title="hello" count={10} current={1} />
  )
}
`

export const ColorPagination = `
import { Pagination } from '@components/composition'

function PaginationTest(){
  return(
    <Pagination color="slate" title="hello" count={10} current={1} />
    <Pagination color="red" title="hello" count={10} current={1} />
    <Pagination color="green" title="hello" count={10} current={1} />
    <Pagination color="yellow" title="hello" count={10} current={1} />
    <Pagination color="purple" title="hello" count={10} current={1} />
    <Pagination color="orange" title="hello" count={10} current={1} />
    <Pagination color="indigo" title="hello" count={10} current={1} />
    <Pagination color="mint" title="hello" count={10} current={1} />
  )
}
`
