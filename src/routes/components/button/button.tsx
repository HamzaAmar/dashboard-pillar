import { Breadcrumb, Button, Flex, Grid, Heading, IconButton } from '@components/core'
import { Card, Facebook, Gmail, Heart, Message, Send, Twitter, User } from '@components/icons'
import { Preview } from '@components/section'
import * as docs from './button.docs'

export const Component = () => {
  return (
    <section aria-labelledby="button--page-id" className="l_flow-lg">
      <Flex items="center" wrap justify="between">
        <Heading as="h1" id="button--page-id" size="xs">
          Button Docs Page
        </Heading>
        <Breadcrumb size="sm">
          <Breadcrumb.Item link="../../..">Home</Breadcrumb.Item>
          <Breadcrumb.Item link="../..">Components</Breadcrumb.Item>
          <Breadcrumb.Item link="../">Base UI</Breadcrumb.Item>
          <Breadcrumb.Item link="./" current>
            Button
          </Breadcrumb.Item>
        </Breadcrumb>
      </Flex>
      <Grid columns="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="sm">
        <Preview
          title="Solid Variant Button"
          description="Show Button Color default Primary other values (warning,orange, danger, red,success, green,indigo , purple,yellow , slate  )"
          code={docs.solidButton}
        >
          <Flex wrap gap="md" items="center">
            <Button variant="solid">Update Profile</Button>
            <Button variant="solid" color="danger">
              Hey
            </Button>
            <Button variant="solid" color="warning">
              Add Cart
            </Button>
            <Button variant="solid" color="success">
              Review
            </Button>
            <Button variant="solid" color="indigo">
              Like
            </Button>
            <Button variant="solid" color="purple">
              Send
            </Button>
            <Button variant="solid" color="yellow">
              Yellow
            </Button>
            <Button variant="solid" color="slate">
              Slate
            </Button>
          </Flex>
        </Preview>

        <Preview
          title="Outline Variant Button"
          description="Show Button Color default Primary other values (warning,orange, danger, red,success, green,indigo , purple,yellow , slate  )"
          code={docs.outlineButton}
        >
          <Flex wrap gap="md" items="center">
            <Button variant="outline">Update Profile</Button>
            <Button variant="outline" color="danger">
              Hey
            </Button>
            <Button variant="outline" color="warning">
              Add Cart
            </Button>
            <Button variant="outline" color="success">
              Review
            </Button>
            <Button variant="outline" color="indigo">
              Like
            </Button>
            <Button variant="outline" color="purple">
              Send
            </Button>
            <Button variant="outline" color="yellow">
              Yellow
            </Button>
            <Button variant="outline" color="slate">
              Slate
            </Button>
          </Flex>
        </Preview>

        <Preview
          title="Soft Button Color"
          description="Show Button Color default Primary other values (warning,orange, danger, red,success, green,indigo , purple,yellow , slate  )"
          code={docs.softButton}
        >
          <Flex wrap gap="md" items="center">
            <Button variant="soft">Update Profile</Button>
            <Button variant="soft" color="danger">
              Hey
            </Button>
            <Button variant="soft" color="warning">
              Add Cart
            </Button>
            <Button variant="soft" color="success">
              Review
            </Button>
            <Button variant="soft" color="indigo">
              Like
            </Button>
            <Button variant="soft" color="purple">
              Send
            </Button>
            <Button variant="soft" color="yellow">
              Yellow
            </Button>
            <Button variant="soft" color="slate">
              Slate
            </Button>
          </Flex>
        </Preview>

        <Preview
          title="Text Button Color"
          description="Show Button Color default Primary other values (warning,orange, danger, red,success, green,indigo , purple,yellow , slate  )"
          code={docs.textButton}
        >
          <Flex wrap gap="md" items="center">
            <Button variant="text">Update Profile</Button>
            <Button variant="text" color="danger">
              Hey
            </Button>
            <Button variant="text" color="warning">
              Add Cart
            </Button>
            <Button variant="text" color="success">
              Review
            </Button>
            <Button variant="text" color="indigo">
              Like
            </Button>
            <Button variant="text" color="purple">
              Send
            </Button>
            <Button variant="text" color="yellow">
              Yellow
            </Button>
            <Button variant="text" color="slate">
              Slate
            </Button>
          </Flex>
        </Preview>

        <Grid gap="sm" rows="1fr 1fr">
          <Preview
            title="Link Button Color"
            description="Show Button Color default Primary other values (warning,orange, danger, red,success, green,indigo , purple,yellow , slate  )"
            code={docs.linkButton}
          >
            <Flex wrap gap="md" items="center">
              <Button variant="link">Update Profile</Button>
              <Button variant="link" color="danger">
                Hey
              </Button>
              <Button variant="link" color="warning">
                Add Cart
              </Button>
              <Button variant="link" color="success">
                Review
              </Button>
              <Button variant="link" color="indigo">
                Like
              </Button>
              <Button variant="link" color="purple">
                Send
              </Button>
              <Button variant="link" color="yellow">
                Yellow
              </Button>
              <Button variant="link" color="slate">
                Slate
              </Button>
            </Flex>
          </Preview>
          <Preview
            title="Icon Button"
            description="Show Buttons With Icon In different Direction default to Start others value is end"
            code={docs.buttonWithIcon}
          >
            <Flex wrap gap="md">
              <Button variant="solid" icon={<User width={20} />}>
                Update Profile
              </Button>
              <Button iconPosition="end" variant="solid" icon={<Send width={20} />} color="danger">
                Send
              </Button>
              <Button variant="solid" icon={<Card width={20} />} color="warning">
                Add Cart
              </Button>
              <Button iconPosition="end" variant="solid" icon={<Message width={20} />} color="success">
                Review
              </Button>
              <Button variant="solid" icon={<Heart width={20} />} color="indigo">
                Like
              </Button>
              <Button iconPosition="end" variant="solid" icon={<Send width={20} />} color="purple">
                Send
              </Button>
              <Button variant="solid" icon={<User width={20} />} color="yellow">
                Yellow
              </Button>
              <Button iconPosition="end" variant="solid" icon={<User width={20} />} color="slate">
                Slate
              </Button>

              <Button variant="solid" icon={<Gmail width={20} />} color="danger">
                Gmail
              </Button>

              <Button variant="solid" icon={<Facebook width={20} />} color="indigo">
                Facebook
              </Button>
              <Button variant="solid" icon={<Twitter width={20} />} color="indigo">
                Twitter
              </Button>
            </Flex>
          </Preview>
        </Grid>

        <Preview
          title="Fluid Button Color"
          description="Boolean value For fuild default is false"
          code={docs.fluidButton}
        >
          <Flex direction="column" gap="md">
            <Button fluid variant="solid">
              Update Profile
            </Button>
            <Button fluid variant="solid" color="danger">
              Hey
            </Button>
            <Button fluid variant="solid" color="warning">
              Add Cart
            </Button>
            <Button fluid variant="solid" color="success">
              Review
            </Button>
            <Button fluid variant="solid" color="indigo">
              Like
            </Button>
            <Button fluid variant="solid" color="purple">
              Send
            </Button>
            <Button fluid variant="solid" color="yellow">
              Yellow
            </Button>
            <Button fluid variant="solid" color="slate">
              Slate
            </Button>
          </Flex>
        </Preview>

        <Preview
          title="corner Button"
          description="Show Buttons Corners default to radius and other possible values (sharp, full)"
          code={docs.solidButton}
        >
          <Flex wrap gap="md">
            <Button variant="solid">Update Profile</Button>
            <Button variant="solid" corner="sharp">
              Update Profile
            </Button>
            <Button variant="solid" corner="2xs">
              Update Profile
            </Button>
            <Button variant="solid" corner="xs">
              Update Profile
            </Button>
            <Button variant="solid" corner="sm">
              Update Profile
            </Button>
            <Button variant="solid" corner="lg">
              Update Profile
            </Button>
            <Button variant="solid" corner="xl">
              Update Profile
            </Button>
            <Button variant="solid" corner="2xl">
              Update Profile
            </Button>
            <Button variant="solid" corner="full">
              Update Profile
            </Button>
          </Flex>
        </Preview>

        <Preview
          title="Size Button"
          description="Show Buttons Sizes default to md and other possible values (xs , sm, lg, xl)"
          code={docs.sizeButton}
        >
          <Flex wrap gap="md" items="center">
            <Button variant="solid" size="xs">
              Update Profile
            </Button>
            <Button variant="solid" size="sm">
              Update Profile
            </Button>
            <Button variant="solid">Update Profile</Button>
            <Button variant="solid" size="lg">
              Update Profile
            </Button>
            <Button variant="solid" size="xl">
              Update Profile
            </Button>
          </Flex>
        </Preview>

        <Preview
          title="Size Button width Icon"
          description="Show Buttons Sizes default to md and other possible values (xs , sm, lg, xl)"
          code={docs.sizeButtonIcon}
        >
          <Flex wrap gap="md" items="center">
            <Button variant="solid" icon={<User />} size="xs">
              Update Profile
            </Button>
            <Button variant="solid" icon={<User />} size="sm">
              Update Profile
            </Button>
            <Button variant="solid" icon={<User />}>
              Update Profile
            </Button>
            <Button variant="solid" icon={<User />} size="lg">
              Update Profile
            </Button>
            <Button variant="solid" icon={<User />} size="xl">
              Update Profile
            </Button>
          </Flex>
        </Preview>

        <Preview
          title="Disable and Loading Button"
          description="Show Buttons Sizes default to md and other possible values (xs , sm, lg, xl)"
          code={docs.buttonStatus}
        >
          <Flex wrap gap="md" items="center">
            <Button variant="solid" disabled icon={<User />} size="xs">
              Update Profile
            </Button>
            <Button variant="solid" state="loading" icon={<User />} size="sm">
              Update Profile
            </Button>
            <Button variant="solid" state="loading" iconPosition="end" icon={<User />}>
              Update Profile
            </Button>
          </Flex>
        </Preview>

        <Preview
          title="Icon Button Size"
          description="Show Buttons Sizes default to md and other possible values (xs , sm, lg, xl)"
          code={docs.iconButtonSize}
        >
          <Flex wrap gap="md" items="center">
            <IconButton icon={<User />} title="hello" size="xs" />
            <IconButton icon={<User />} title="hello" size="sm" />
            <IconButton icon={<User />} title="hello" />
            <IconButton icon={<User />} title="hello" size="lg" />
            <IconButton icon={<User />} title="hello" size="xl" />
          </Flex>
        </Preview>

        <Preview
          title="Solid Variant Button"
          description="Show Button Color default Primary other values (warning,orange, danger, red,success, green,indigo , purple,yellow , slate  )"
          code={docs.iconButtonSolid}
        >
          <Flex gap="md" items="center">
            <IconButton title="Hey" icon={<User />} variant="solid" color="danger" />
            <IconButton variant="solid" title="Add Cart" icon={<User />} color="warning" />
            <IconButton title="Review" icon={<User />} variant="solid" color="success" />
            <IconButton title="Like" icon={<User />} variant="solid" color="indigo" />
            <IconButton title="Send" icon={<User />} variant="solid" color="purple" />
            <IconButton title="Yellow" icon={<User />} variant="solid" color="yellow" />
            <IconButton title="Slate" icon={<User />} variant="solid" color="slate" />
          </Flex>
        </Preview>

        <Preview
          title="Outline Variant Button"
          description="Show Button Color default Primary other values (warning,orange, danger, red,success, green,indigo , purple,yellow , slate  )"
          code={docs.iconButtonOutline}
        >
          <Flex gap="md" items="center">
            <IconButton title="Hey" icon={<User />} variant="outline" color="danger" />
            <IconButton variant="outline" title="Add Cart" icon={<User />} color="warning" />
            <IconButton title="Review" icon={<User />} variant="outline" color="success" />
            <IconButton title="Like" icon={<User />} variant="outline" color="indigo" />
            <IconButton title="Send" icon={<User />} variant="outline" color="purple" />
            <IconButton title="Yellow" icon={<User />} variant="outline" color="yellow" />
            <IconButton title="Slate" icon={<User />} variant="outline" color="slate" />
          </Flex>
        </Preview>

        <Preview
          title="Soft Variant Button"
          description="Show Button Color default Primary other values (warning,orange, danger, red,success, green,indigo , purple,yellow , slate  )"
          code={docs.iconButtonSoft}
        >
          <Flex gap="md" items="center">
            <IconButton title="Hey" icon={<User />} variant="soft" color="danger" />
            <IconButton variant="soft" title="Add Cart" icon={<User />} color="warning" />
            <IconButton title="Review" icon={<User />} variant="soft" color="success" />
            <IconButton title="Like" icon={<User />} variant="soft" color="indigo" />
            <IconButton title="Send" icon={<User />} variant="soft" color="purple" />
            <IconButton title="Yellow" icon={<User />} variant="soft" color="yellow" />
            <IconButton title="Slate" icon={<User />} variant="soft" color="slate" />
          </Flex>
        </Preview>
        <Preview
          title="Solid Variant Button"
          description="Show Button Color default Primary other values (warning,orange, danger, red,success, green,indigo , purple,yellow , slate  )"
          code={docs.iconButtonDefault}
        >
          <Flex gap="md" items="center">
            <IconButton title="Hey" icon={<User />} color="danger" />
            <IconButton title="Add Cart" icon={<User />} color="warning" />
            <IconButton title="Review" icon={<User />} color="success" />
            <IconButton title="Like" icon={<User />} color="indigo" />
            <IconButton title="Send" icon={<User />} color="purple" />
            <IconButton title="Yellow" icon={<User />} color="yellow" />
            <IconButton title="Slate" icon={<User />} color="slate" />
          </Flex>
        </Preview>

        <Preview
          title="Icon Button Color"
          description="Show Buttons Sizes default to md and other possible values (xs , sm, lg, xl)"
          code={docs.iconButtonCorner}
        >
          <Flex wrap gap="md" items="center">
            <IconButton icon={<User />} title="hello" corner="sharp" />
            <IconButton icon={<User />} title="hello" corner="sm" />
            <IconButton icon={<User />} title="hello" corner="full" />
          </Flex>
        </Preview>
      </Grid>
    </section>
  )
}

Component.displayName = 'ButtonDocs'
