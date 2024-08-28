"use client"
import WaterWaveWrapper from "@/components/visualEffects/WaterWave";


export default function Home() {
  return (
    <WaterWaveWrapper imageUrl="" dropRadius="2" perturbance="3" resolution="2048">
      {
        () => <div className="h-screen"></div>
      }
    </WaterWaveWrapper>
  );
}
