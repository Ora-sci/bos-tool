import type { NetworkId } from '@/utils/types';

type NetworkComponents = {
  home: string;
  hello_near: string;
};

export const componentsByNetworkId: Record<NetworkId, NetworkComponents | undefined> = {
  testnet: {
    home: 'near-examples.testnet/widget/HelloNEAR',
    hello_near: 'near-examples.testnet/widget/HelloNEAR',
  },

  mainnet: {
    home: '',
    hello_near: ''
  },
};
