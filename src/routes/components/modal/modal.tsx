import {
  Button,
  Flex,
  Heading,
  IconButton,
  Input,
  FormController,
  InputPassword,
  Grid,
  Breadcrumb,
} from '@components/core'

import { CustomAlertDialog, AlertDialog, Dialog } from '@components/composition'
import { CircleRefresh, Cross, Facebook, Trash } from '@components/icons'
import { Preview } from '@components/section'
import useBoolean from '@hooks/useBoolean'
import * as docs from './modal.docs'

const Modal = () => {
  const { state, handleToggle, handleFalse } = useBoolean(false)
  return (
    <section aria-labelledby="modal--page-id" className="l_flow-lg">
      <Flex items="center" wrap justify="between">
        <Heading as="h1" id="modal--page-id" size="xs">
          Modal Docs Page
        </Heading>
        <Breadcrumb size="sm">
          <Breadcrumb.Item link="../../..">Home</Breadcrumb.Item>
          <Breadcrumb.Item link="../..">Components</Breadcrumb.Item>
          <Breadcrumb.Item link="../">Composite</Breadcrumb.Item>
          <Breadcrumb.Item link="./" current>
            Modal
          </Breadcrumb.Item>
        </Breadcrumb>
      </Flex>
      <Grid columns="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="sm">
        <Preview title="Simple Alert Dialog" description="Show alert only with message Props" code={docs.customDialog}>
          <Flex wrap gap="md" items="center">
            <CustomAlertDialog
              trigger={<Button>Hello</Button>}
              description="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
            />
          </Flex>
        </Preview>

        <Preview title="Custom Alert Dialog" description="Show alert only with message Props" code={docs.alertDialog}>
          <Flex wrap gap="md" items="center">
            <AlertDialog open={state} onOpenChange={handleToggle} trigger={<Button>Delete User</Button>}>
              <Flex justify="between">
                <AlertDialog.Title>Delete User</AlertDialog.Title>
                <IconButton onClick={handleFalse} title="close alert Dialog" icon={<Cross />} />
              </Flex>
              <AlertDialog.Description>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat repellat tempore modi praesentium iure!
                Deleniti fuga dolorum, ipsum ut pariatur ullam eos, qui laudantium possimus accusamus deserunt labore
                eaque doloribus.
              </AlertDialog.Description>

              <Flex justify="end" gap="sm">
                <AlertDialog.CancelButton icon={<CircleRefresh width="16" />} color="indigo">
                  Cancel
                </AlertDialog.CancelButton>
                <AlertDialog.ActionButton icon={<Trash width="16" />}>Delete User Account</AlertDialog.ActionButton>
              </Flex>
            </AlertDialog>
          </Flex>
        </Preview>
        <Preview title="Custom Alert Dialog" description="Show alert only with message Props" code={docs.defaultDialog}>
          <Flex wrap gap="md" items="center">
            <Dialog
              title="Create your account"
              trigger={
                <Button icon={<Facebook />} variant="solid" color="indigo">
                  Facebook
                </Button>
              }
            >
              <FormController label="email" required>
                <Input type="email" />
              </FormController>

              <FormController
                hint="the password need to contain upper and lower case letter and special Characters ( @ , &) to make it strong"
                label="Password"
                required
              >
                <InputPassword />
              </FormController>

              <Button size="lg" fluid icon={<Facebook />} variant="solid" color="indigo">
                Connect With Facebook
              </Button>
            </Dialog>
            <Dialog
              title="Create your account"
              trigger={<Button color="indigo">More Info</Button>}
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolor exercitationem error voluptatum iusto sapiente odio repellat pariatur saepe fugiat maxime distinctio voluptas beatae delectus culpa quos obcaecati magni illo.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, natus. Assumenda tempora quae, laboriosam dignissimos sed dolore, sapiente dolorum facilis quaerat adipisci eos enim numquam voluptatibus voluptatem unde quisquam sint? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolor exercitationem error voluptatum iusto sapiente odio repellat pariatur saepe fugiat maxime distinctio voluptas beatae delectus culpa quos obcaecati magni illo.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, natus. Assumenda tempora quae, laboriosam dignissimos sed dolore, sapiente dolorum facilis quaerat adipisci eos enim numquam voluptatibus voluptatem unde quisquam sint?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolor exercitationem error voluptatum iusto sapiente odio repellat pariatur saepe fugiat maxime distinctio voluptas beatae delectus culpa quos obcaecati magni illo.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, natus. Assumenda tempora quae, laboriosam dignissimos sed dolore, sapiente dolorum facilis quaerat adipisci eos enim numquam voluptatibus voluptatem unde quisquam sint?  voluptas beatae delectus culpa quos obcaecati magni illo.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, natus. Assumenda tempora quae, laboriosam dignissimos sed dolore, sapiente dolorum facilis quaerat adipisci eos enim numquam voluptatibus voluptatem unde quisquam sint? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolor exercitationem error voluptatum iusto sapiente odio repellat pariatur saepe fugiat maxime distinctio voluptas beatae delectus culpa quos obcaecati magni illo.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, natus. Assumenda tempora quae, laboriosam dignissimos sed dolore, sapiente dolorum facilis quaerat adipisci eos enim numquam voluptatibus voluptatem unde quisquam sint?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolor exercitationem error voluptatum iusto sapiente odio repellat pariatur saepe fugiat maxime distinctio voluptas beatae delectus culpa quos obcaecati magni illo.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, natus. Assumenda tempora quae, laboriosam dignissimos sed dolore, sapiente dolorum facilis quaerat adipisci eos enim numquam voluptatibus voluptatem unde quisquam sint?  "
            />
          </Flex>
        </Preview>
      </Grid>
    </section>
  )
}

export default Modal
