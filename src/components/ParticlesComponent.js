// import React, { useEffect, useMemo, useState } from "react";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadSlim } from "@tsparticles/slim";

// const ParticlesComponent = () => {
//   const [init, setInit] = useState(false);

//   useEffect(() => {
//     initParticlesEngine(async (engine) => {
//       await loadSlim(engine);
//     }).then(() => {
//       setInit(true);
//     });
//   }, []);

//   const particlesLoaded = (container) => {
//     console.log(container);
//   };

//   const options = useMemo(
//     () => ({
//       background: {
//         color: {
//           value: "#F", // Fixed missing # symbol
//         },
//         opacity:0
//       },
//       fpsLimit: 120,
//       interactivity: {
//         events: {
//           onClick: {
//             enable: true,
//             mode: "repulse",
//           },
//           onHover: {
//             enable: true,
//             mode: "grab",
//           },
//         },
//         modes: {
//           push: {
//             distance: 100,
//             duration: 5,
//           },
//           grab: {
//             distance: 150,
//           },
//         },
//       },
//       particles: {
//         color: {
//           value: "######",
//           size: "1px"
//         },
//         links: {
//           color: "#808080",
//           distance: 95,
//           enable: true,
//           opacity: 1,
//           width: 1,
//         },
//         move: {
//           direction: "none",
//           enable: true,
//           outModes: {
//             default: "bounce",
//           },
//           random: true,
//           speed: 3,
//           straight: false,
//         },
//         number: {
//           density: {
//             enable: true,
//           },
//           value: 300,
//         },
//         opacity: {
//           value: 1,
//         },
//         shape: {
//           type: "hexagon",
//         },
//         size: {
//           value: { min: 1, max: 3 },
//         },
//       },
//       detectRetina: true,
//     }),
//     []
//   );

//   return <Particles id="particles-bg" init={particlesLoaded} options={options} />;
// };

// export default ParticlesComponent;
