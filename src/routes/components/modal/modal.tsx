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
  BreadcrumbItem,
} from '@pillar-ui/core'

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
        <Heading as="h1" id="modal--page-id" size="3">
          Modal Docs Page
        </Heading>
        <Breadcrumb size="4">
          <BreadcrumbItem link="../../..">Home</BreadcrumbItem>
          <BreadcrumbItem link="../..">Components</BreadcrumbItem>
          <BreadcrumbItem link="../">Composite</BreadcrumbItem>
          <BreadcrumbItem link="./" current>
            Modal
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Grid grid="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="4">
        <Preview title="Simple Alert Dialog" description="Show alert only with message Props" code={docs.customDialog}>
          <Flex wrap gap="5" items="center">
            <CustomAlertDialog
              trigger={<Button>Hello</Button>}
              description="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
            />
          </Flex>
        </Preview>

        <Preview title="Custom Alert Dialog" description="Show alert only with message Props" code={docs.alertDialog}>
          <Flex wrap gap="5" items="center">
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

              <Flex justify="end" gap="4">
                <AlertDialog.CancelButton icon={<CircleRefresh width="16" />} color="i">
                  Cancel
                </AlertDialog.CancelButton>
                <AlertDialog.ActionButton icon={<Trash width="16" />}>Delete User Account</AlertDialog.ActionButton>
              </Flex>
            </AlertDialog>
          </Flex>
        </Preview>
        <Preview title="Custom Alert Dialog" description="Show alert only with message Props" code={docs.defaultDialog}>
          <Flex wrap gap="5" items="center">
            <Dialog
              title="Create your account"
              trigger={
                <Button icon={<Facebook />} variant="solid" color="i">
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

              <Button size="6" fluid icon={<Facebook />} variant="solid" color="i">
                Connect With Facebook
              </Button>
            </Dialog>
            <Dialog
              title="Create your account"
              trigger={<Button color="i">More Info</Button>}
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
