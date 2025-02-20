import { Drawer } from '@components/composition'
import { CustomRadio, IconButton, Paper, RadioGroup, Text } from '@pillar-ui/core'
import { Settings } from '@pillar-ui/icons'
import useBoolean from '@hooks/useBoolean'

const SettingsComp = () => {
  const { state, handleToggle } = useBoolean(false)
  return (
    <Drawer
      title="Page Customize"
      size="5"
      position="right"
      trigger={
        <IconButton
          variant="text"
          size="4"
          color="b"
          onClick={handleToggle}
          title="Page Customize"
          icon={<Settings width="20" />}
        />
      }
      open={state}
    >
      <section className="settings--content">
        <Paper flow="7">
          <Paper flow="7" as="article">
            <div>
              <Text weight="5"> Color Scheme</Text>
              <Text color="b" low size="3">
                Choose Your Prefered Light Mode
              </Text>
            </div>
            <RadioGroup legend="Choose Your Prefered Light Mode" name="mode-color" direction="row">
              <CustomRadio size="4">
                <Text size="4" weight="5">
                  Light
                </Text>
              </CustomRadio>

              <CustomRadio size="4">
                <Text size="4" weight="5">
                  Dark
                </Text>
              </CustomRadio>
            </RadioGroup>
          </Paper>
          <Paper flow="7" as="article">
            <div>
              <Text weight="5"> Primary Color</Text>
              <Text color="b" low size="3">
                Choose the preferred Primary color you want
              </Text>
            </div>

            <RadioGroup legend="Choose Your Prefered Light Mode" name="mode-color" direction="row">
              <CustomRadio size="4">
                <Text size="4" weight="5">
                  Blue
                </Text>
              </CustomRadio>

              <CustomRadio size="4">
                <Text size="4" weight="5">
                  Red
                </Text>
              </CustomRadio>
              <CustomRadio size="4">
                <Text size="4" weight="5">
                  Green
                </Text>
              </CustomRadio>
            </RadioGroup>
          </Paper>
        </Paper>
      </section>
    </Drawer>
  )
}

export default SettingsComp
