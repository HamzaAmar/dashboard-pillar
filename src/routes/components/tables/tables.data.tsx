import { Table } from '@components/composition'
import { Button } from '@components/core'
import { ArrowDown } from '@components/icons'

import type { TableProps } from '@components/composition/table'

export const NormalTableExample = (props: Omit<TableProps, 'children'>) => {
  return (
    <Table {...props}>
      <thead>
        <Table.Row type="head">
          <Table.Column as="th">ID</Table.Column>
          <Table.Column as="th">User</Table.Column>
          <Table.Column as="th">Followers</Table.Column>
          <Table.Column as="th">Following</Table.Column>
          <Table.Column as="th">Action</Table.Column>
        </Table.Row>
      </thead>
      <tbody>
        <Table.Row>
          <Table.Column weight="medium">#HE1234</Table.Column>
          <Table.Column>Samir Lamir</Table.Column>
          <Table.Column weight="medium">15.3K</Table.Column>
          <Table.Column weight="medium">1</Table.Column>
          <Table.Column>
            <Button iconPosition="end" icon={<ArrowDown direction="right" width={16} />} size="sm" variant="text">
              Accept
            </Button>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Column weight="medium">#HE12sd</Table.Column>
          <Table.Column>Kent Lempo</Table.Column>
          <Table.Column weight="medium">19.3K</Table.Column>
          <Table.Column weight="medium">190.9K</Table.Column>
          <Table.Column>
            <Button iconPosition="end" icon={<ArrowDown direction="right" width={16} />} size="sm" variant="text">
              Accept
            </Button>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Column weight="medium">#HE15434</Table.Column>
          <Table.Column>Ryan Dod</Table.Column>
          <Table.Column weight="medium">2.5K</Table.Column>
          <Table.Column weight="medium">20K</Table.Column>
          <Table.Column>
            <Button iconPosition="end" icon={<ArrowDown direction="right" width={16} />} size="sm" variant="text">
              Accept
            </Button>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Column weight="medium">#HE12s56</Table.Column>
          <Table.Column>Remix Run</Table.Column>
          <Table.Column weight="medium">20.5K</Table.Column>
          <Table.Column weight="medium">27.8K</Table.Column>
          <Table.Column>
            <Button iconPosition="end" icon={<ArrowDown direction="right" width={16} />} size="sm" variant="text">
              Accept
            </Button>
          </Table.Column>
        </Table.Row>
      </tbody>
    </Table>
  )
}

export const TableComp = `
const TableComp = (props: Omit<TableProps, 'children'>) => {
  return (
    <Table {...props}>
      <thead>
        <Table.Row type="head">
          <Table.Column as="th">ID</Table.Column>
          <Table.Column as="th">User</Table.Column>
          <Table.Column as="th">Followers</Table.Column>
          <Table.Column as="th">Following</Table.Column>
          <Table.Column as="th">Action</Table.Column>
        </Table.Row>
      </thead>
      <tbody>
      <Table.Row>
        <Table.Column weight="medium">#HE1234</Table.Column>
        <Table.Column>Samir Lamir</Table.Column>
        <Table.Column weight="medium">15.3K</Table.Column>
        <Table.Column weight="medium">1</Table.Column>
        <Table.Column>
          <Button
            iconPosition="end"
            icon={<ArrowDown direction="right" width={16} />}
            size="sm"
            variant="text"
          >
            Accept
          </Button>
        </Table.Column>
      </Table.Row>
      <Table.Row>
        <Table.Column weight="medium">#HE12sd</Table.Column>
        <Table.Column>Kent Lempo</Table.Column>
        <Table.Column weight="medium">19.3K</Table.Column>
        <Table.Column weight="medium">190.9K</Table.Column>
        <Table.Column>
          <Button
            iconPosition="end"
            icon={<ArrowDown direction="right" width={16} />}
            size="sm"
            variant="text"
          >
            Accept
          </Button>
        </Table.Column>
      </Table.Row>
      <Table.Row>
        <Table.Column weight="medium">#HE15434</Table.Column>
        <Table.Column>Ryan Dod</Table.Column>
        <Table.Column weight="medium">2.5K</Table.Column>
        <Table.Column weight="medium">20K</Table.Column>
        <Table.Column>
          <Button
            iconPosition="end"
            icon={<ArrowDown direction="right" width={16} />}
            size="sm"
            variant="text"
          >
            Accept
          </Button>
        </Table.Column>
      </Table.Row>
      <Table.Row>
        <Table.Column weight="medium">#HE12s56</Table.Column>
        <Table.Column>Remix Run</Table.Column>
        <Table.Column weight="medium">20.5K</Table.Column>
        <Table.Column weight="medium">27.8K</Table.Column>
        <Table.Column>
          <Button
            iconPosition="end"
            icon={<ArrowDown direction="right" width={16} />}
            size="sm"
            variant="text"
          >
            Accept
          </Button>
        </Table.Column>
      </Table.Row>
      </tbody>
    </Table>
  );
};
`
