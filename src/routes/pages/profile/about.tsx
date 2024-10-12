import { Chips, Flex, Grid, Heading, ProgressBar, Text, Timeline } from '@components/core'

const skills = ['React', 'Nextjs', 'Remix', 'Gatsby', 'CSS', 'HTML', 'Accessibility']
const languages = [
  { lang: 'French', progress: 75 },
  { lang: 'English', progress: 80 },
  { lang: 'Arabic', progress: 95 },
  { lang: 'Spanish', progress: 50 },
]

const info = [
  { title: 'Name', value: 'Hamza Miloud amar' },
  { title: 'Email', value: 'hamzamiloudamar' },
  { title: 'Phone', value: '+212-636-352-659' },
  { title: 'Address', value: 'Lorem ipsum dolor sit amet consectetur' },
  { title: 'Joined', value: '21 march 2018' },
  { title: 'Experience', value: '8 Years' },
  { title: 'Availability', value: 'FullTime (Remote)' },
]

export const Component = () => {
  return (
    <section aria-labelledby="about-page-id">
      <Heading as="h3" id="about-page-id" className="u_sr-only">
        About Page
      </Heading>
      <Grid columns="minmax(230px, 1fr) 2fr" className="sm_grid-one" gap="md">
        <div className="l_box l_flow-lg">
          <section aria-labelledby="user-detail" className="l_flow-sm">
            <Heading id="user-detail" as="h4" size="sm">
              Details
            </Heading>
            <ul className="l_flow-sm">
              {info.map(({ title, value }, index) => (
                <Flex as="li" gap="sm" key={index}>
                  <Text className="u_flex-1" as="span" size="xs" weight="medium">
                    {title}
                  </Text>
                  <Text className="u_flex-2" as="span" size="xs" color="slate" contrast="low">
                    {value}
                  </Text>
                </Flex>
              ))}
            </ul>
          </section>
          <section aria-labelledby="user-skills-id" className="l_flow-sm">
            <Heading id="user-skills-id" as="h4" size="sm">
              Skills
            </Heading>
            <Flex gap="sm" wrap>
              {skills.map((skill) => (
                <Chips key={skill}>{skill}</Chips>
              ))}
            </Flex>
          </section>
          <section aria-labelledby="user-language-id" className="l_flow-sm">
            <Heading id="user-language-id" as="h4" size="sm">
              Language
            </Heading>
            <div className="l_flow-sm">
              {languages.map(({ lang, progress }) => (
                <Grid columns="1fr 50px" items="center" gap="sm" key={lang}>
                  <Text as="span" size="xs" weight="medium">
                    {lang}
                  </Text>
                  <ProgressBar color="red" label="language Progress" value={progress} />
                </Grid>
              ))}
            </div>
          </section>
        </div>
        <section aria-labelledby="about-me-id" className="l_flow-lg l_box">
          <div>
            <Heading id="about-me-id" as="h4" size="sm">
              About Me
            </Heading>
            <Text size="xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt saepe aperiam iure ut dolore maxime
              consectetur, quidem pariatur qui at esse nam magnam dignissimos! Ab fugiat quasi voluptatem impedit saepe!
              Lorem ipsum dolor sit amet, consectetur. <br /> adipisicing elit. Sed alias, porro animi perferendis dolor
              accusantium provident ab itaque minus vel sint et delectus atque deleniti ullam fugit quia hic mollitia!
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic modi fugit cum sunt ex officiis rem
              voluptate, at ipsam doloribus explicabo cupiditate saepe aspernatur cumque molestiae impedit magnam
              ducimus illum?
            </Text>
          </div>
          <Timeline variant="dashed">
            <Timeline.Item>
              <Heading weight="medium" as="h3" size="xs">
                Senior Web Developer At Shopify
              </Heading>
              <Text size="xs" color="slate" contrast="low">
                25 March 2021 - Now
              </Text>
              <Text size="xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis facere est animi nam odio! Atque nisi
                obcaecati pariatur unde, nulla repudiandae esse fuga consequuntur sapiente totam distinctio nostrum nam
                eius.
              </Text>
            </Timeline.Item>
            <Timeline.Item>
              <article aria-labelledby="web-dev-chromatic">
                <Heading as="h5" id="web-dev-chromatic" weight="medium" size="xs">
                  Web Developer At Chromatic
                </Heading>
                <Text size="xs" color="slate" contrast="low">
                  25 Jan 2018 - 20 Mar 2021
                </Text>
                <Text size="xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis facere est animi nam odio! Atque nisi
                  obcaecati pariatur unde, nulla repudiandae esse fuga consequuntur sapiente totam distinctio nostrum
                  nam eius.
                </Text>
              </article>
            </Timeline.Item>
            <Timeline.Item>
              <article aria-labelledby="web-dev-ibm">
                <Heading as="h5" id="web-dev-ibm" weight="medium" size="xs">
                  Frontend Web developer At IBM
                </Heading>
                <Text size="xs" color="slate" contrast="low">
                  25 March 2013 - 10 Dec 2017
                </Text>
                <Text size="xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis facere est animi nam odio! Atque nisi
                  obcaecati pariatur unde, nulla repudiandae esse fuga consequuntur sapiente totam distinctio nostrum
                  nam eius.
                </Text>
              </article>
            </Timeline.Item>
            <Timeline.Item>
              <article aria-labelledby="web-dev-carlos-marcos">
                <Heading as="h5" id="web-dev-carlos-marcos" weight="medium" size="xs">
                  Frontend Web developer At Carlos Marcos
                </Heading>
                <Text size="xs" color="slate" contrast="low">
                  2009 - 2013
                </Text>
                <Text size="xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis facere est animi nam odio! Atque nisi
                  obcaecati pariatur unde, nulla repudiandae esse fuga consequuntur sapiente totam distinctio nostrum
                  nam eius.
                </Text>
              </article>
            </Timeline.Item>
          </Timeline>
        </section>
      </Grid>
    </section>
  )
}

Component.displayName = 'Profile About Page'
