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
    <Pagination color="b" title="hello" count={10} current={1} />
    <Pagination color="b" variant="soft" title="hello" count={10} current={1} />
    <Pagination color="b" variant="solid" title="hello" count={10} current={1} />
  )
}
`

export const CornerPagination = `
import { Pagination } from '@components/composition'

function PaginationTest(){
  return(
    <Pagination corner="0" title="hello" count={10} current={1} />
    <Pagination corner="1" title="hello" count={10} current={1} />
    <Pagination corner="2" title="hello" count={10} current={1} />
    <Pagination corner="3" title="hello" count={10} current={1} />
    <Pagination corner="5" title="hello" count={10} current={1} />
    <Pagination corner="full" title="hello" count={10} current={1} />
  )
}
`

export const SizePagination = `
import { Pagination } from '@components/composition'

function PaginationTest(){
  return(
    <Pagination size="3" title="hello" count={10} current={1} />
    <Pagination size="4" title="hello" count={10} current={1} />
    <Pagination size="5" title="hello" count={10} current={1} />
    <Pagination size="6" title="hello" count={10} current={1} />
    <Pagination size="7" title="hello" count={10} current={1} />
  )
}
`

export const ColorPagination = `
import { Pagination } from '@components/composition'

function PaginationTest(){
  return(
    <Pagination color="b" title="hello" count={10} current={1} />
    <Pagination color="d" title="hello" count={10} current={1} />
    <Pagination color="su" title="hello" count={10} current={1} />
    <Pagination color="yellow" title="hello" count={10} current={1} />
    <Pagination color="se" title="hello" count={10} current={1} />
    <Pagination color="w" title="hello" count={10} current={1} />
    <Pagination color="i" title="hello" count={10} current={1} />
    <Pagination color="mint" title="hello" count={10} current={1} />
  )
}
`
