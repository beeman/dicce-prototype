import { getCollectionV1GpaBuilder, Key } from '@metaplex-foundation/mpl-core';
import { useQuery } from '@tanstack/react-query';
import { useCluster } from '@/features/cluster/data-access/cluster-provider';
import { useUmi } from '@/features/solana/umi-provider';

export function useAdminCollectionList() {
  const { umi } = useUmi();
  const { cluster } = useCluster();

  return useQuery({
    queryKey: ['fetch-collections', cluster, umi.identity.publicKey],
    queryFn: async () => {
      try {
        return await getCollectionV1GpaBuilder(umi)
          .whereField('updateAuthority', umi.identity.publicKey)
          .whereField('key', Key.CollectionV1)
          .getDeserialized();
      } catch (err) {
        console.error('Error fetching collections', err);
        throw err;
      }
    },
  });
}
