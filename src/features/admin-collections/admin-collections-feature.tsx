import { Center, Loader, SimpleGrid, Text } from '@mantine/core';
import { useAdminCollectionList } from './data-access/use-admin-collection-list';
import { AdminCollectionUiCard } from './ui/admin-collection-ui-card';

export function AdminCollectionsFeature() {
  const { error, isPending, data: collections } = useAdminCollectionList();
  return (
    <div>
      <Text size="lg">Your Core Collections</Text>
      {isPending ? (
        <Center h="20vh">
          <Loader />
        </Center>
      ) : error ? (
        <Center h="20vh" ta="center">
          <Text>There was an error fetching your Core collections.</Text>
        </Center>
      ) : collections?.length ? (
        <SimpleGrid
          cols={{
            base: 1,
            sm: 2,
            lg: 5,
            xl: 6,
          }}
        >
          {collections?.map((collection) => (
            <AdminCollectionUiCard collection={collection} key={collection.publicKey} />
          ))}
        </SimpleGrid>
      ) : (
        <Center h="20vh" ta="center">
          <Text>You don&apos;t have any Core collections.</Text>
        </Center>
      )}
    </div>
  );
}
