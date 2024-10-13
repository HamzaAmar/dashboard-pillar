import { Button, TableColumn, TableProps, TableRow, Table } from '@pillar-ui/core'
import { ArrowDown } from '@components/icons'

export const NormalTableExample = (props: Omit<TableProps, 'children'>) => {
  return (
    <Table {...props}>
      <thead>
        <TableRow type="head">
          <TableColumn as="th">ID</TableColumn>
          <TableColumn as="th">User</TableColumn>
          <TableColumn as="th">Followers</TableColumn>
          <TableColumn as="th">Following</TableColumn>
          <TableColumn as="th">Action</TableColumn>
        </TableRow>
      </thead>
      <tbody>
        <TableRow>
          <TableColumn weight="medium">#HE1234</TableColumn>
          <TableColumn>Samir Lamir</TableColumn>
          <TableColumn weight="medium">15.3K</TableColumn>
          <TableColumn weight="medium">1</TableColumn>
          <TableColumn>
            <Button iconPosition="end" icon={<ArrowDown direction="right" width={16} />} size="4" variant="text">
              Accept
            </Button>
          </TableColumn>
        </TableRow>
        <TableRow>
          <TableColumn weight="medium">#HE12sd</TableColumn>
          <TableColumn>Kent Lempo</TableColumn>
          <TableColumn weight="medium">19.3K</TableColumn>
          <TableColumn weight="medium">190.9K</TableColumn>
          <TableColumn>
            <Button iconPosition="end" icon={<ArrowDown direction="right" width={16} />} size="4" variant="text">
              Accept
            </Button>
          </TableColumn>
        </TableRow>
        <TableRow>
          <TableColumn weight="medium">#HE15434</TableColumn>
          <TableColumn>Ryan Dod</TableColumn>
          <TableColumn weight="medium">2.5K</TableColumn>
          <TableColumn weight="medium">20K</TableColumn>
          <TableColumn>
            <Button iconPosition="end" icon={<ArrowDown direction="right" width={16} />} size="4" variant="text">
              Accept
            </Button>
          </TableColumn>
        </TableRow>
        <TableRow>
          <TableColumn weight="medium">#HE12s56</TableColumn>
          <TableColumn>Remix Run</TableColumn>
          <TableColumn weight="medium">20.5K</TableColumn>
          <TableColumn weight="medium">27.8K</TableColumn>
          <TableColumn>
            <Button iconPosition="end" icon={<ArrowDown direction="right" width={16} />} size="4" variant="text">
              Accept
            </Button>
          </TableColumn>
        </TableRow>
      </tbody>
    </Table>
  )
}

export const TableComp = `
const TableComp = (props: Omit<TableProps, 'children'>) => {
  return (
    <Table {...props}>
      <thead>
        <TableRow type="head">
          <TableColumn  as="th">ID</TableColumn >
          <TableColumn  as="th">User</TableColumn >
          <TableColumn  as="th">Followers</TableColumn >
          <TableColumn  as="th">Following</TableColumn >
          <TableColumn  as="th">Action</TableColumn >
        </TableRow>
      </thead>
      <tbody>
      <TableRow>
        <TableColumn  weight="medium">#HE1234</TableColumn >
        <TableColumn >Samir Lamir</TableColumn >
        <TableColumn  weight="medium">15.3K</TableColumn >
        <TableColumn  weight="medium">1</TableColumn >
        <TableColumn >
          <Button
            iconPosition="end"
            icon={<ArrowDown direction="right" width={16} />}
            size="4"
            variant="text"
          >
            Accept
          </Button>
        </TableColumn >
      </TableRow>
      <TableRow>
        <TableColumn  weight="medium">#HE12sd</TableColumn >
        <TableColumn >Kent Lempo</TableColumn >
        <TableColumn  weight="medium">19.3K</TableColumn >
        <TableColumn  weight="medium">190.9K</TableColumn >
        <TableColumn >
          <Button
            iconPosition="end"
            icon={<ArrowDown direction="right" width={16} />}
            size="4"
            variant="text"
          >
            Accept
          </Button>
        </TableColumn >
      </TableRow>
      <TableRow>
        <TableColumn  weight="medium">#HE15434</TableColumn >
        <TableColumn >Ryan Dod</TableColumn >
        <TableColumn  weight="medium">2.5K</TableColumn >
        <TableColumn  weight="medium">20K</TableColumn >
        <TableColumn >
          <Button
            iconPosition="end"
            icon={<ArrowDown direction="right" width={16} />}
            size="4"
            variant="text"
          >
            Accept
          </Button>
        </TableColumn >
      </TableRow>
      <TableRow>
        <TableColumn  weight="medium">#HE12s56</TableColumn >
        <TableColumn >Remix Run</TableColumn >
        <TableColumn  weight="medium">20.5K</TableColumn >
        <TableColumn  weight="medium">27.8K</TableColumn >
        <TableColumn >
          <Button
            iconPosition="end"
            icon={<ArrowDown direction="right" width={16} />}
            size="4"
            variant="text"
          >
            Accept
          </Button>
        </TableColumn >
      </TableRow>
      </tbody>
    </Table>
  );
};
`
