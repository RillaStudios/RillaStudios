'use client';

import { Button, Card, Container, Grid, Text, Title } from "@mantine/core";
import classes from '../app/css/modules/HeroText.module.css';
import '@/app/css/home_page.css'
import { Dots } from "./components/dots/Dots";

export default function Home() {
  return (
      <>
        <section style={{ padding: '2rem 0' }}>
            <Container className={classes.wrapper} size={1400}>
                <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
                <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
                <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
                <Dots className={classes.dots} style={{ right: 0, top: 60 }} />
    
                <div className={classes.inner}>
                    <Title className={classes.title}>
                        Automated AI{' '}
                        <Text component="span" className={classes.highlight} inherit>
                        code reviews
                        </Text>{' '}
                        for any stack
                    </Title>
        
                    <Container p={0} size={600}>
                        <Text size="lg" c="dimmed" className={classes.description}>
                        Build more reliable software with AI companion. AI is also trained to detect lazy
                        developers who do nothing and just complain on Twitter.
                        </Text>
                    </Container>
        
                    <div className={classes.controls}>
                        <Button className={classes.control} size="md" variant="default" color="gray">
                        Book a demo
                        </Button>
                        <Button className={classes.control} size="md">
                        Purchase a license
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
        <section style={{ padding: '2rem 0' }}>
            <Container size={1400}>
                    <Grid>
                        <Grid.Col span={{ base: 12, lg: 4 }}>
                            <Card shadow="md" padding="lg" maw={600} mx={"auto"}>
                                <Title order={4}>Hello</Title>
                                <Text size="sm" c="dimmed" mt="xs">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur
                                    interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl
                                    est, ultrices nec congue eget, auctor vitae massa.
                                </Text>
                            </Card>
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, lg: 4 }}>
                            <Card shadow="md" padding="lg" maw={600} mx={"auto"}>
                                <Title order={4}>Hello</Title>
                                <Text size="sm" c="dimmed" mt="xs">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur
                                    interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl
                                    est, ultrices nec congue eget, auctor vitae massa.
                                </Text>
                            </Card>
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, lg: 4 }}>
                            <Card shadow="md" padding="lg" maw={600} mx={"auto"}>
                                <Title order={4}>Hello</Title>
                                <Text size="sm" c="dimmed" mt="xs">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur
                                    interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl
                                    est, ultrices nec congue eget, auctor vitae massa.
                                </Text>
                            </Card>
                        </Grid.Col>
                    </Grid>
            </Container>
        </section>
        <section className="ai_section">
          <Container size={1400}>
            <Title>
              Hello
            </Title>
            </Container>
        </section>
      </>
  );
}
