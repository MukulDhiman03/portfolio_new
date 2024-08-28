
import { FC, ReactNode } from "react"
import WaterWave from 'react-water-wave';



interface WaterWavesWrapperProps {
    imageUrl: string;
    dropRadius: string;
    perturbance: string;
    resolution: string;
    children: () => ReactNode;
}


const WaterWaveWrapper: FC<WaterWavesWrapperProps> = ({ imageUrl, dropRadius, perturbance, resolution, children }) => {
    return (
        <WaterWave
            imageUrl={imageUrl}
            dropRadius={dropRadius}
            perturbance={perturbance}
            resolution={resolution}
        >
            {children}
        </WaterWave>
    )
}

export default WaterWaveWrapper;