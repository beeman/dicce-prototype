import { CollectionV1 } from '@metaplex-foundation/mpl-core';
import { LucideSnowflake } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, Flex, Group, Image, Skeleton, Text, ThemeIcon } from '@mantine/core';
import { useAssetJson } from '../data-access/use-asset';
import classes from './admin-collection-ui-card.module.css';

export function AdminCollectionUiCard({ collection }: { collection: CollectionV1 }) {
  const { error, isPending, data: json } = useAssetJson(collection);

  return (
    <Link
      to={`./${collection.publicKey}`}
      style={{
        textDecoration: 'none',
      }}
    >
      <Skeleton visible={isPending} className={classes.cardContainer}>
        <Card shadow="sm" padding="lg" radius="md">
          <Card.Section>
            <Skeleton visible={!!error}>
              <Image src={json?.image} height={200} />
            </Skeleton>
          </Card.Section>
          <Group justify="space-between" mt="md">
            <Text fw={500}>{collection.name}</Text>
            <Flex>
              {collection.permanentFreezeDelegate?.frozen && (
                <ThemeIcon>
                  <LucideSnowflake />
                </ThemeIcon>
              )}
            </Flex>
          </Group>
        </Card>
      </Skeleton>
    </Link>
  );
}
