export const accordionVariant = `
import { Accordion } from '@components/composition'
import { Plus } from '@components/icon'

function AccordionStories(){
    return(
        <Accordion variant="contained">
            <Accordion.Item value="hello">
            <Accordion.Trigger icon={<Plus width={16} />}>
                SHow More Info
            </Accordion.Trigger>
            <Accordion.Content>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Rerum natus voluptas optio dolorem esse autem maxime magni
                omnis aliquid at. Ipsa vero tempore ipsum libero ad ex
                obcaecati, non autem.
            </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="nice">
            <Accordion.Trigger icon={<Plus width={16} />}>
                Help You here
            </Accordion.Trigger>
            <Accordion.Content>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Rerum natus voluptas optio dolorem esse autem maxime magni
                omnis aliquid at. Ipsa vero tempore ipsum libero ad ex
                obcaecati, non autem.
            </Accordion.Content>
            </Accordion.Item>
        </Accordion>
        <Accordion variant="filled">
            <Accordion.Item value="hello">
            <Accordion.Trigger icon={<Plus width={16} />}>
                SHow More Info
            </Accordion.Trigger>
            <Accordion.Content>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Rerum natus voluptas optio dolorem esse autem maxime magni
                omnis aliquid at. Ipsa vero tempore ipsum libero ad ex
                obcaecati, non autem.
            </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="nice">
            <Accordion.Trigger icon={<Plus width={16} />}>
                Help You here
            </Accordion.Trigger>
            <Accordion.Content>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Rerum natus voluptas optio dolorem esse autem maxime magni
                omnis aliquid at. Ipsa vero tempore ipsum libero ad ex
                obcaecati, non autem.
            </Accordion.Content>
            </Accordion.Item>
        </Accordion>
        <Accordion variant="separate">
            <Accordion.Item value="hello">
            <Accordion.Trigger icon={<Plus width={16} />}>
                SHow More Info
            </Accordion.Trigger>
            <Accordion.Content>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Rerum natus voluptas optio dolorem esse autem maxime magni
                omnis aliquid at. Ipsa vero tempore ipsum libero ad ex
                obcaecati, non autem.
            </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="nice">
            <Accordion.Trigger icon={<Plus width={16} />}>
                Help You here
            </Accordion.Trigger>
            <Accordion.Content>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Rerum natus voluptas optio dolorem esse autem maxime magni
                omnis aliquid at. Ipsa vero tempore ipsum libero ad ex
                obcaecati, non autem.
            </Accordion.Content>
            </Accordion.Item>
        </Accordion>
        <Accordion>
            <Accordion.Item value="hello">
            <Accordion.Trigger icon={<Plus width={16} />}>
                SHow More Info
            </Accordion.Trigger>
            <Accordion.Content>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Rerum natus voluptas optio dolorem esse autem maxime magni
                omnis aliquid at. Ipsa vero tempore ipsum libero ad ex
                obcaecati, non autem.
            </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="nice">
            <Accordion.Trigger icon={<Plus width={16} />}>
                Help You here
            </Accordion.Trigger>
            <Accordion.Content>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Rerum natus voluptas optio dolorem esse autem maxime magni
                omnis aliquid at. Ipsa vero tempore ipsum libero ad ex
                obcaecati, non autem.
            </Accordion.Content>
            </Accordion.Item>
        </Accordion>
    )
}
`

export const accordionCustomIcon = `
import { Accordion } from '@components/composition'
import { Plus } from '@components/icon'

function AccordionStories(){
    return(
        <Accordion>
            <Accordion.Item value="hello">
            <Accordion.Trigger icon={<Plus width={16} />}>
                SHow More Info
            </Accordion.Trigger>
            <Accordion.Content>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum natus
                voluptas optio dolorem esse autem maxime magni omnis aliquid at. Ipsa vero
                tempore ipsum libero ad ex obcaecati, non autem.
            </Accordion.Content>
            </Accordion.Item>
        <Accordion.Item value="nice">
            <Accordion.Trigger icon={<Plus width={16} />}>
                Help You here
            </Accordion.Trigger>
            <Accordion.Content>
                {" "}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum natus
                voluptas optio dolorem esse autem maxime magni omnis aliquid at. Ipsa vero
                tempore ipsum libero ad ex obcaecati, non autem.
            </Accordion.Content>
            </Accordion.Item>
        </Accordion>
    )
}
`
