export const customDialog = `
import {CustomAlertDialog} from '@components/composite'
    function CustomDialog(){
        return(
          <CustomAlertDialog
            trigger={<Button>Hello</Button>}
            description="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
          /> 
        )
    } 
`

export const alertDialog = `
import { AlertDialog } from '@components/composite'
import { Flex, Button, IconButton } from '@pillar-ui/core'
import { Cross, CircleRefresh, Trash } from '@components/icons'
import useBoolean from "@hooks/useBoolean";



function CustomDialog(){
    const { state, handleToggle, handleFalse } = useBoolean(false);

    return(
        <AlertDialog
         open={state}
         onOpenChange={handleToggle}
         trigger={<Button>Delete User</Button>}
        >
            <Flex justify="between">
                <AlertDialog.Title>Delete User</AlertDialog.Title>
                <IconButton
                onClick={handleFalse}
                title="close alert Dialog"
                icon={<Cross />}
                />
            </Flex>
            <AlertDialog.Description>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
                repellat tempore modi praesentium iure! Deleniti fuga dolorum,
                ipsum ut pariatur ullam eos, qui laudantium possimus accusamus
                deserunt labore eaque doloribus.
            </AlertDialog.Description>

            <Flex justify="end" gap="4">
                <AlertDialog.CancelButton
                icon={<CircleRefresh width="16" />}
                color="i"
                >
                Cancel
                </AlertDialog.CancelButton>
                <AlertDialog.ActionButton icon={<Trash width="16" />}>
                Delete User Account
                </AlertDialog.ActionButton>
            </Flex>
        </AlertDialog>
        )
    } 
`

export const defaultDialog = `
import { Dialog } from '@components/composite'
import { Flex, Button, IconButton ,InputPassword, Input , FormController } from '@pillar-ui/core'
import { Cross, CircleRefresh, Trash, Facebook } from '@components/icons'
import useBoolean from "@hooks/useBoolean";



function CustomDialog(){
    const { state, handleToggle, handleFalse } = useBoolean(false);

    return(
        <Dialog
            title="Create your account"
            trigger={
            <Button icon={<Facebook />} variant="solid" color="i"> Facebook </Button>}
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
            
            <Button
              size="6"
              fluid
              icon={<Facebook />}
              variant="solid"
              color="i"
            >
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
        )
    } 
`
