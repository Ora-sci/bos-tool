import { VmComponent } from '@/components/vm/VmComponent';
import { useBosLoaderInitializer } from '@/hooks/useBosLoaderInitializer';
import { useHashUrlBackwardsCompatibility } from '@/hooks/useHashUrlBackwardsCompatibility';
import dynamic from 'next/dynamic';
const VmInitializer = dynamic(() => import('../components/vm/VmInitializer'), {
    ssr: false,
});

type Props = {
    componentProps?: Record<string, unknown>;
    src: string;
};

export function GetBOSComponent(props: Props) {
    useBosLoaderInitializer();
    useHashUrlBackwardsCompatibility();
    return (
        <>
            <VmInitializer />
            <VmComponent src={props.src} props={props.componentProps} />
        </>
    );
}
