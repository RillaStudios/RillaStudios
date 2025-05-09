'use client';

import { Container, Card, Grid, Text, Title } from "@mantine/core";

export default function RillaServiceSection() {
    return (
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
    );
}