import { Text, Title } from '@mantine/core'
import classes from './home-ui-welcome.module.css'

export function HomeUiWelcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        <Text inherit variant="gradient" component="span" gradient={{ from: 'green', to: 'grape' }}>
          Welcome to DICCE
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        DICCE is a Work in Progress! 🍀
      </Text>
    </>
  )
}
