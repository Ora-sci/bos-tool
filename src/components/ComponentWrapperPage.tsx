import { useEffect } from 'react';

import { VmComponent } from '@/components/vm/VmComponent';
import { useCurrentComponentStore } from '@/stores/current-component';
import { MetaTags } from './MetaTags';
import styled from 'styled-components';
import { useBosLoaderInitializer } from '@/hooks/useBosLoaderInitializer';
import { useBosComponents } from '@/hooks/useBosComponents';
import { useHashUrlBackwardsCompatibility } from '@/hooks/useHashUrlBackwardsCompatibility';
import dynamic from 'next/dynamic';
const VmInitializer = dynamic(() => import('../components/vm/VmInitializer'), {
  ssr: false,
});
type Props = {
  componentProps?: Record<string, unknown>;
  src?: string;
  meta?: {
    title: string;
    description: string;
  };
};

const Wrapper = styled.div`
  padding: 1rem;
`;

const components = useBosComponents();
export function ComponentWrapperPage(props: Props) {
  useBosLoaderInitializer();
  useHashUrlBackwardsCompatibility();
  console.log(components)
  return (
    <>
      <VmInitializer />
      <Wrapper><VmComponent src={components.home} props={props.componentProps} /></Wrapper>

    </>
  );
}
