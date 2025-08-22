import {Html,useProgress} from '@react-three/drei'
// import { progress } from 'framer-motion'

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
       <span className='canvas-load'></span>
       <p
         style={{
             fontSize:14,
             color:"#f1f1f1",
             fontWeight:800,
             marginTop:40

         }}
        >{progress.toFixed(2)}%</p>
    </Html>
  )
}

export default Loader


// import React from "react";
// import { Html } from "@react-three/drei";

// const Loader = () => {
//   return (
//     <Html center>
//       <div style={{ color: "white", fontSize: "16px" }}>
//         Loading...
//       </div>
//     </Html>
//   );
// };

// export default Loader;
