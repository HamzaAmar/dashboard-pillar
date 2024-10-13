import { Chips, Flex, Grid, Heading, ProgressBar, Text, Timeline, TimelineItem } from '@pillar-ui/core'

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
      <Grid grid="minmax(230px, 1fr) 2fr" className="sm_grid-one" gap="5">
        <div className="l_box l_flow-lg">
          <section aria-labelledby="user-detail" className="l_flow-sm">
            <Heading id="user-detail" as="h4" size="4">
              Details
            </Heading>
            <ul className="l_flow-sm">
              {info.map(({ title, value }, index) => (
                <Flex as="li" gap="4" key={index}>
                  <Text className="u_flex-1" as="span" size="3" weight="5">
                    {title}
                  </Text>
                  <Text className="u_flex-2" as="span" size="3" color="b" low>
                    {value}
                  </Text>
                </Flex>
              ))}
            </ul>
          </section>
          <section aria-labelledby="user-skills-id" className="l_flow-sm">
            <Heading id="user-skills-id" as="h4" size="4">
              Skills
            </Heading>
            <Flex gap="4" wrap>
              {skills.map((skill) => (
                <Chips key={skill}>{skill}</Chips>
              ))}
            </Flex>
          </section>
          <section aria-labelledby="user-language-id" className="l_flow-sm">
            <Heading id="user-language-id" as="h4" size="4">
              Language
            </Heading>
            <div className="l_flow-sm">
              {languages.map(({ lang, progress }) => (
                <Grid grid="1fr 50px" items="center" gap="4" key={lang}>
                  <Text as="span" size="3" weight="5">
                    {lang}
                  </Text>
                  <ProgressBar color="d" label="language Progress" value={progress} />
                </Grid>
              ))}
            </div>
          </section>
        </div>
        <section aria-labelledby="about-me-id" className="l_flow-lg l_box">
          <div>
            <Heading id="about-me-id" as="h4" size="4">
              About Me
            </Heading>
            <Text size="3">
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
            <TimelineItem>
              <Heading weight="5" as="h3" size="3">
                Senior Web Developer At Shopify
              </Heading>
              <Text size="3" color="b" low>
                25 March 2021 - Now
              </Text>
              <Text size="3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis facere est animi nam odio! Atque nisi
                obcaecati pariatur unde, nulla repudiandae esse fuga consequuntur sapiente totam distinctio nostrum nam
                eius.
              </Text>
            </TimelineItem>
            <TimelineItem>
              <article aria-labelledby="web-dev-chromatic">
                <Heading as="h5" id="web-dev-chromatic" weight="5" size="3">
                  Web Developer At Chromatic
                </Heading>
                <Text size="3" color="b" low>
                  25 Jan 2018 - 20 Mar 2021
                </Text>
                <Text size="3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis facere est animi nam odio! Atque nisi
                  obcaecati pariatur unde, nulla repudiandae esse fuga consequuntur sapiente totam distinctio nostrum
                  nam eius.
                </Text>
              </article>
            </TimelineItem>
            <TimelineItem>
              <article aria-labelledby="web-dev-ibm">
                <Heading as="h5" id="web-dev-ibm" weight="5" size="3">
                  Frontend Web developer At IBM
                </Heading>
                <Text size="3" color="b" low>
                  25 March 2013 - 10 Dec 2017
                </Text>
                <Text size="3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis facere est animi nam odio! Atque nisi
                  obcaecati pariatur unde, nulla repudiandae esse fuga consequuntur sapiente totam distinctio nostrum
                  nam eius.
                </Text>
              </article>
            </TimelineItem>
            <TimelineItem>
              <article aria-labelledby="web-dev-carlos-marcos">
                <Heading as="h5" id="web-dev-carlos-marcos" weight="5" size="3">
                  Frontend Web developer At Carlos Marcos
                </Heading>
                <Text size="3" color="b" low>
                  2009 - 2013
                </Text>
                <Text size="3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis facere est animi nam odio! Atque nisi
                  obcaecati pariatur unde, nulla repudiandae esse fuga consequuntur sapiente totam distinctio nostrum
                  nam eius.
                </Text>
              </article>
            </TimelineItem>
          </Timeline>
        </section>
      </Grid>
    </section>
  )
}

Component.displayName = 'Profile About Page'
