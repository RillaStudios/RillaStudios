import styles from "./page.module.css";
import { Button, Group, Text} from '@mantine/core';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Group>
          <Button>Primary button</Button>
          <Button color="secondary">Blue button</Button>
        </Group>
        <Text>Just some text</Text>
        </main>
    </div>
  );
}
