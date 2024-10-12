import { Drawer } from '@components/composition'
import { CustomRadio, Flex, IconButton, RadioGroup, Text } from '@components/core'
import { Setting } from '@components/icons'
import useBoolean from '@hooks/useBoolean'
import useSettings from '@hooks/useSettings/useSettings'

const Settings = () => {
  const { state, handleToggle } = useBoolean(false)
  const { state: settings, changeMode, changePrimary } = useSettings()
  return (
    <Drawer
      title="Page Customize"
      size="sm"
      position="right"
      trigger={
        <IconButton
          color="slate"
          variant="solid"
          corner="sharp"
          className="settings--button"
          onClick={handleToggle}
          title="Page Customize"
          icon={<Setting width="20" className="settings--button-icon" />}
        />
      }
      open={state}
    >
      <section className="settings--content">
        <div className="l_flow-md">
          <article className="l_flow-md">
            <div>
              <Text weight="medium"> Color Scheme</Text>
              <Text color="slate" contrast="low" size="xs">
                Choose Your Prefered Light Mode
              </Text>
            </div>
            <RadioGroup showLabel={false} label="Choose Your Prefered Light Mode" name="mode-color" direction="row">
              <CustomRadio
                className="customize--white-color-text"
                label="Light"
                size="sm"
                defaultChecked={settings.mode === 'light'}
                onChange={changeMode('light')}
              >
                <div className="customize--primary-color-box customize--white-color-box" />
              </CustomRadio>

              <CustomRadio
                defaultChecked={settings.mode === 'dark'}
                label="Dark"
                size="sm"
                onChange={changeMode('dark')}
              >
                <div className="customize--primary-color-box  customize--black-color-box" />
              </CustomRadio>
            </RadioGroup>
          </article>
          <article className="l_flow-md">
            <div>
              <Text weight="medium"> Primary Color</Text>
              <Text color="slate" contrast="low" size="xs">
                Choose the preferred Primary color you want
              </Text>
            </div>
            <RadioGroup label="Choose the preferred Primary color you want" name="primary-color" direction="row">
              <CustomRadio
                defaultChecked={settings.primary === 'green'}
                onChange={changePrimary('green')}
                label="Success"
                size="sm"
                color="success"
                className="preferred-color--radio"
              >
                <div className="customize--primary-color-box"></div>
              </CustomRadio>
              <CustomRadio
                defaultChecked={settings.primary === 'red'}
                onChange={changePrimary('red')}
                label="Danger"
                size="sm"
                color="danger"
                className="preferred-color--radio"
              >
                <div className="customize--primary-color-box"></div>
              </CustomRadio>
              <CustomRadio
                defaultChecked={settings.primary === 'orange'}
                onChange={changePrimary('orange')}
                label="Warning"
                size="sm"
                color="warning"
                className="preferred-color--radio"
              >
                <div className="customize--primary-color-box"></div>
              </CustomRadio>
              <CustomRadio
                defaultChecked={settings.primary === 'mint'}
                onChange={changePrimary('mint')}
                label="Mint"
                size="sm"
                color="indigo"
                className="preferred-color--radio"
              >
                <div className="customize--primary-color-box"></div>
              </CustomRadio>
              <CustomRadio
                defaultChecked={settings.primary === 'indigo'}
                onChange={changePrimary('indigo')}
                label="Indigo"
                size="sm"
                color="indigo"
                className="preferred-color--radio"
              >
                <div className="customize--primary-color-box"></div>
              </CustomRadio>
              <CustomRadio
                defaultChecked={settings.primary === 'purple'}
                onChange={changePrimary('purple')}
                label="Purple"
                size="sm"
                color="purple"
                className="preferred-color--radio"
              >
                <div className="customize--primary-color-box"></div>
              </CustomRadio>
            </RadioGroup>
          </article>
        </div>
      </section>
    </Drawer>
  )
}

export default Settings
