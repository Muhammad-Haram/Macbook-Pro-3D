import { Canvas } from "@react-three/fiber";
import React from "react";
import "./style.css";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import MacBook from "./MacBook";
import AboutUs from "./Components/AboutUs";

const App = () => {
  return (
    <>
      <div className="w-full h-screen">
        <div className="navbar flex gap-10 line absolute top-0 left-1/2 -translate-x-1/2 pt-10 pb-3 text-white">
          {[
            "iPhone",
            "iPad",
            "services",
            "ios",
            "mac",
            "products",
            "iPhone",
            "iPad",
            "services",
            "ios",
            "mac",
            "products",
          ].map((e) => {
            return (
              <a href="" className="text-white font-[400] text-sm">
                {e}
              </a>
            );
          })}
        </div>

        <div className="absolute flex flex-col items-center text-white top-32 left-1/2 -translate-x-1/2">
          <h1 className="masked text-7xl tracking-tighter font-[700]">
            macbook pro.
          </h1>
          <h5>Oh so pro !</h5>
          <p className="text-center w-3/4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis voluptas veritatis nobis sunt.
          </p>
        </div>

        <Canvas camera={{ fov: 20, position: [0, -10, 150] }}>
          <OrbitControls enableZoom={false} />
          <Environment
            files={[
              "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
            ]}
          />

          <ScrollControls pages={3}>
            <MacBook />
          </ScrollControls>
        </Canvas>
      </div>

      <AboutUs />
    </>
  );
};

export default App;
