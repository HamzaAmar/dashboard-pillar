import { Breadcrumb, BreadcrumbItem, Button, Flex, Grid, Heading, IconButton } from '@pillar-ui/core'
import { Card, Facebook, Gmail, Heart, Message, Send, Twitter, User } from '@components/icons'
import { Preview } from '@components/section'
import * as docs from './button.docs'

export const Component = () => {
  return (
    <section aria-labelledby="button--page-id" className="l_flow-lg">
      <Flex items="center" wrap justify="between">
        <Heading as="h1" id="button--page-id" size="3">
          Button Docs Page
        </Heading>
        <Breadcrumb size="4">
          <BreadcrumbItem link="../../..">Home</BreadcrumbItem>
          <BreadcrumbItem link="../..">Components</BreadcrumbItem>
          <BreadcrumbItem link="../">Base UI</BreadcrumbItem>
          <BreadcrumbItem link="./" current>
            Button
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Grid grid="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="4">
        <Preview
          title="Solid Variant Button"
          description="Show Button Color default Primary other values (warning,orange, danger, red,success, green,indigo , purple,yellow , slate  )"
          code={docs.solidButton}
        >
          <Flex wrap gap="5" items="center">
            <Button variant="solid">Update Profile</Button>
            <Button variant="solid" color="d">
              Hey
            </Button>
            <Button variant="solid" color="w">
              Add Cart
            </Button>
            <Button variant="solid" color="su">
              Review
            </Button>
            <Button variant="solid" color="i">
              Like
            </Button>
            <Button variant="solid" color="se">
              Send
            </Button>

            <Button variant="solid" color="b">
              Slate
            </Button>
          </Flex>
        </Preview>

        <Preview
          title="Outline Variant Button"
          description="Show Button Color default Primary other values (warning,orange, danger, red,success, green,indigo , purple,yellow , slate  )"
          code={docs.outlineButton}
        >
          <Flex wrap gap="5" items="center">
            <Button variant="outline">Update Profile</Button>
            <Button variant="outline" color="d">
              Hey
            </Button>
            <Button variant="outline" color="w">
              Add Cart
            </Button>
            <Button variant="outline" color="su">
              Review
            </Button>
            <Button variant="outline" color="i">
              Like
            </Button>
            <Button variant="outline" color="se">
              Send
            </Button>

            <Button variant="outline" color="b">
              Slate
            </Button>
          </Flex>
        </Preview>

        <Preview
          title="Soft Button Color"
          description="Show Button Color default Primary other values (warning,orange, danger, red,success, green,indigo , purple,yellow , slate  )"
          code={docs.softButton}
        >
          <Flex wrap gap="5" items="center">
            <Button variant="soft">Update Profile</Button>
            <Button variant="soft" color="d">
              Hey
            </Button>
            <Button variant="soft" color="w">
              Add Cart
            </Button>
            <Button variant="soft" color="su">
              Review
            </Button>
            <Button variant="soft" color="i">
              Like
            </Button>
            <Button variant="soft" color="se">
              Send
            </Button>

            <Button variant="soft" color="b">
              Slate
            </Button>
          </Flex>
        </Preview>

        <Preview
          title="Text Button Color"
          description="Show Button Color default Primary other values (warning,orange, danger, red,success, green,indigo , purple,yellow , slate  )"
          code={docs.textButton}
        >
          <Flex wrap gap="5" items="center">
            <Button variant="text">Update Profile</Button>
            <Button variant="text" color="d">
              Hey
            </Button>
            <Button variant="text" color="w">
              Add Cart
            </Button>
            <Button variant="text" color="su">
              Review
            </Button>
            <Button variant="text" color="i">
              Like
            </Button>
            <Button variant="text" color="se">
              Send
            </Button>

            <Button variant="text" color="b">
              Slate
            </Button>
          </Flex>
        </Preview>

        <Grid gap="4" grid="x 1fr 1fr">
          <Preview
            title="Link Button Color"
            description="Show Button Color default Primary other values (warning,orange, danger, red,success, green,indigo , purple,yellow , slate  )"
            code={docs.linkButton}
          >
            <Flex wrap gap="5" items="center">
              <Button variant="link">Update Profile</Button>
              <Button variant="link" color="d">
                Hey
              </Button>
              <Button variant="link" color="w">
                Add Cart
              </Button>
              <Button variant="link" color="su">
                Review
              </Button>
              <Button variant="link" color="i">
                Like
              </Button>
              <Button variant="link" color="se">
                Send
              </Button>

              <Button variant="link" color="b">
                Slate
              </Button>
            </Flex>
          </Preview>
          <Preview
            title="Icon Button"
            description="Show Buttons With Icon In different Direction default to Start others value is end"
            code={docs.buttonWithIcon}
          >
            <Flex wrap gap="5">
              <Button variant="solid" icon={<User width={20} />}>
                Update Profile
              </Button>
              <Button iconPosition="end" variant="solid" icon={<Send width={20} />} color="d">
                Send
              </Button>
              <Button variant="solid" icon={<Card width={20} />} color="w">
                Add Cart
              </Button>
              <Button iconPosition="end" variant="solid" icon={<Message width={20} />} color="su">
                Review
              </Button>
              <Button variant="solid" icon={<Heart width={20} />} color="i">
                Like
              </Button>
              <Button iconPosition="end" variant="solid" icon={<Send width={20} />} color="se">
                Send
              </Button>

              <Button iconPosition="end" variant="solid" icon={<User width={20} />} color="b">
                Slate
              </Button>

              <Button variant="solid" icon={<Gmail width={20} />} color="d">
                Gmail
              </Button>

              <Button variant="solid" icon={<Facebook width={20} />} color="i">
                Facebook
              </Button>
              <Button variant="solid" icon={<Twitter width={20} />} color="i">
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
          <Flex direction="col" gap="5">
            <Button fluid variant="solid">
              Update Profile
            </Button>
            <Button fluid variant="solid" color="d">
              Hey
            </Button>
            <Button fluid variant="solid" color="w">
              Add Cart
            </Button>
            <Button fluid variant="solid" color="su">
              Review
            </Button>
            <Button fluid variant="solid" color="i">
              Like
            </Button>
            <Button fluid variant="solid" color="se">
              Send
            </Button>

            <Button fluid variant="solid" color="b">
              Slate
            </Button>
          </Flex>
        </Preview>

        <Preview
          title="corner Button"
          description="Show Buttons Corners default to radius and other possible values (sharp, full)"
          code={docs.solidButton}
        >
          <Flex wrap gap="5">
            <Button variant="solid">Update Profile</Button>
            <Button variant="solid" corner="0">
              Update Profile
            </Button>
            <Button variant="solid" corner="1">
              Update Profile
            </Button>
            <Button variant="solid" corner="2">
              Update Profile
            </Button>
            <Button variant="solid" corner="3">
              Update Profile
            </Button>
            <Button variant="solid" corner="5">
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
          <Flex wrap gap="5" items="center">
            <Button variant="solid" size="3">
              Update Profile
            </Button>
            <Button variant="solid" size="4">
              Update Profile
            </Button>
            <Button variant="solid">Update Profile</Button>
            <Button variant="solid" size="6">
              Update Profile
            </Button>
            <Button variant="solid" size="7">
              Update Profile
            </Button>
          </Flex>
        </Preview>

        <Preview
          title="Size Button width Icon"
          description="Show Buttons Sizes default to md and other possible values (xs , sm, lg, xl)"
          code={docs.sizeButtonIcon}
        >
          <Flex wrap gap="5" items="center">
            <Button variant="solid" icon={<User />} size="3">
              Update Profile
            </Button>
            <Button variant="solid" icon={<User />} size="4">
              Update Profile
            </Button>
            <Button variant="solid" icon={<User />}>
              Update Profile
            </Button>
            <Button variant="solid" icon={<User />} size="6">
              Update Profile
            </Button>
            <Button variant="solid" icon={<User />} size="7">
              Update Profile
            </Button>
          </Flex>
        </Preview>

        <Preview
          title="Disable and Loading Button"
          description="Show Buttons Sizes default to md and other possible values (xs , sm, lg, xl)"
          code={docs.buttonStatus}
        >
          <Flex wrap gap="5" items="center">
            <Button variant="solid" disabled icon={<User />} size="3">
              Update Profile
            </Button>
            <Button variant="solid" state="loading" icon={<User />} size="4">
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
          <Flex wrap gap="5" items="center">
            <IconButton icon={<User />} title="hello" size="3" />
            <IconButton icon={<User />} title="hello" size="4" />
            <IconButton icon={<User />} title="hello" />
            <IconButton icon={<User />} title="hello" size="6" />
            <IconButton icon={<User />} title="hello" size="7" />
          </Flex>
        </Preview>

        <Preview
          title="Solid Variant Button"
          description="Show Button Color default Primary other values (warning,orange, danger, red,success, green,indigo , purple,yellow , slate  )"
          code={docs.iconButtonSolid}
        >
          <Flex gap="5" items="center">
            <IconButton title="Hey" icon={<User />} variant="solid" color="d" />
            <IconButton variant="solid" title="Add Cart" icon={<User />} color="w" />
            <IconButton title="Review" icon={<User />} variant="solid" color="su" />
            <IconButton title="Like" icon={<User />} variant="solid" color="i" />
            <IconButton title="Send" icon={<User />} variant="solid" color="se" />
            <IconButton title="Slate" icon={<User />} variant="solid" color="b" />
          </Flex>
        </Preview>

        <Preview
          title="Outline Variant Button"
          description="Show Button Color default Primary other values (warning,orange, danger, red,success, green,indigo , purple,yellow , slate  )"
          code={docs.iconButtonOutline}
        >
          <Flex gap="5" items="center">
            <IconButton title="Hey" icon={<User />} variant="outline" color="d" />
            <IconButton variant="outline" title="Add Cart" icon={<User />} color="w" />
            <IconButton title="Review" icon={<User />} variant="outline" color="su" />
            <IconButton title="Like" icon={<User />} variant="outline" color="i" />
            <IconButton title="Send" icon={<User />} variant="outline" color="se" />
            <IconButton title="Slate" icon={<User />} variant="outline" color="b" />
          </Flex>
        </Preview>

        <Preview
          title="Soft Variant Button"
          description="Show Button Color default Primary other values (warning,orange, danger, red,success, green,indigo , purple,yellow , slate  )"
          code={docs.iconButtonSoft}
        >
          <Flex gap="5" items="center">
            <IconButton title="Hey" icon={<User />} variant="soft" color="d" />
            <IconButton variant="soft" title="Add Cart" icon={<User />} color="w" />
            <IconButton title="Review" icon={<User />} variant="soft" color="su" />
            <IconButton title="Like" icon={<User />} variant="soft" color="i" />
            <IconButton title="Send" icon={<User />} variant="soft" color="se" />
            <IconButton title="Slate" icon={<User />} variant="soft" color="b" />
          </Flex>
        </Preview>
        <Preview
          title="Solid Variant Button"
          description="Show Button Color default Primary other values (warning,orange, danger, red,success, green,indigo , purple,yellow , slate  )"
          code={docs.iconButtonDefault}
        >
          <Flex gap="5" items="center">
            <IconButton title="Hey" icon={<User />} color="d" />
            <IconButton title="Add Cart" icon={<User />} color="w" />
            <IconButton title="Review" icon={<User />} color="su" />
            <IconButton title="Like" icon={<User />} color="i" />
            <IconButton title="Send" icon={<User />} color="se" />
            <IconButton title="Slate" icon={<User />} color="b" />
          </Flex>
        </Preview>

        <Preview
          title="Icon Button Color"
          description="Show Buttons Sizes default to md and other possible values (xs , sm, lg, xl)"
          code={docs.iconButtonCorner}
        >
          <Flex wrap gap="5" items="center">
            <IconButton icon={<User />} title="hello" corner="0" />
            <IconButton icon={<User />} title="hello" corner="3" />
            <IconButton icon={<User />} title="hello" corner="full" />
          </Flex>
        </Preview>
      </Grid>
    </section>
  )
}

Component.displayName = 'ButtonDocs'
