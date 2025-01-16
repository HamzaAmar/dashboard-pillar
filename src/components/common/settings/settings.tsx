import { Drawer } from '@components/composition'
import { IconButton, Paper, Text } from '@pillar-ui/core'
import { Setting } from '@components/icons'
import useBoolean from '@hooks/useBoolean'

const Settings = () => {
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
          icon={<Setting width="20" />}
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
            {/* <RadioGroup showLabel={false} label="Choose Your Prefered Light Mode" name="mode-color" direction="row">
              <CustomRadio
                className="customize--white-color-text"
                label="Light"
                size="4"
                defaultChecked={settings.mode === 'light'}
                onChange={changeMode('light')}
              >
                <div className="customize--primary-color-box customize--white-color-box" />
              </CustomRadio>

              <CustomRadio
                defaultChecked={settings.mode === 'dark'}
                label="Dark"
                size="4"
                onChange={changeMode('dark')}
              >
                <div className="customize--primary-color-box  customize--black-color-box" />
              </CustomRadio>
            </RadioGroup> */}
          </Paper>
          <Paper flow="7" as="article">
            <div>
              <Text weight="5"> Primary Color</Text>
              <Text color="b" low size="3">
                Choose the preferred Primary color you want
              </Text>
            </div>
            {/* <RadioGroup label="Choose the preferred Primary color you want" name="primary-color" direction="row">
              <CustomRadio
                defaultChecked={settings.primary === 'green'}
                onChange={changePrimary('green')}
                label="Success"
                size="4"
                color="su"
                className="preferred-color--radio"
              >
                <div className="customize--primary-color-box"></div>
              </CustomRadio>
              <CustomRadio
                defaultChecked={settings.primary === 'red'}
                onChange={changePrimary('red')}
                label="Danger"
                size="4"
                color="d"
                className="preferred-color--radio"
              >
                <div className="customize--primary-color-box"></div>
              </CustomRadio>
              <CustomRadio
                defaultChecked={settings.primary === 'orange'}
                onChange={changePrimary('orange')}
                label="Warning"
                size="4"
                color="w"
                className="preferred-color--radio"
              >
                <div className="customize--primary-color-box"></div>
              </CustomRadio>
              <CustomRadio
                defaultChecked={settings.primary === 'mint'}
                onChange={changePrimary('mint')}
                label="Mint"
                size="4"
                color="i"
                className="preferred-color--radio"
              >
                <div className="customize--primary-color-box"></div>
              </CustomRadio>
              <CustomRadio
                defaultChecked={settings.primary === 'indigo'}
                onChange={changePrimary('indigo')}
                label="Indigo"
                size="4"
                color="i"
                className="preferred-color--radio"
              >
                <div className="customize--primary-color-box"></div>
              </CustomRadio>
              <CustomRadio
                defaultChecked={settings.primary === 'purple'}
                onChange={changePrimary('purple')}
                label="Purple"
                size="4"
                color="se"
                className="preferred-color--radio"
              >
                <div className="customize--primary-color-box"></div>
              </CustomRadio>
            </RadioGroup> */}
          </Paper>
        </Paper>
      </section>
    </Drawer>
  )
}

export default Settings
