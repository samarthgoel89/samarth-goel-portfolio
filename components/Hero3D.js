"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

function StarField() {
  const ref = useRef();
  // Generate 5000 random points in a sphere
  const sphere = useMemo(() => random.inSphere(new Float32Array(5000 * 3), { radius: 1.5 }), []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...{}}>
        <PointMaterial
          transparent
          color="#8b5cf6" /* Brighter purple/blue mix for glow */
          size={0.006}
          sizeAttenuation={true}
          depthWrite={false}
          toneMapped={false}
        />
      </Points>
    </group>
  );
}

export default function Hero3D() {
  return (
    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <StarField />
        <EffectComposer>
          <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} intensity={2} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
