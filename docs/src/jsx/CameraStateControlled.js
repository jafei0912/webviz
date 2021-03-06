//  Copyright (c) 2018-present, GM Cruise LLC
//
//  This source code is licensed under the Apache License, Version 2.0,
//  found in the LICENSE file in the root directory of this source tree.
//  You may not use this file except in compliance with the License.

// #BEGIN EXAMPLE
import React, { useState } from "react";

import InputNumber from "./InputNumber";
import Worldview, { Axes, Grid, DEFAULT_CAMERA_STATE } from "regl-worldview";

// #BEGIN EDITABLE
function CameraStateControlled() {
  const [distance, setDistance] = useState(100);
  const [cameraState, setCameraState] = useState({ ...DEFAULT_CAMERA_STATE, distance });

  return (
    <Worldview
      cameraState={cameraState}
      onCameraStateChange={(newCamState) => {
        setCameraState(newCamState);
        setDistance(newCamState.distance);
      }}>
      <div
        style={{
          position: "absolute",
          border: "1px solid white",
          backgroundColor: "grey",
          top: 10,
          left: 10,
          padding: 10,
          display: "flex",
          flexDirection: "column",
        }}>
        <InputNumber
          label="distance"
          value={distance}
          min={0}
          max={400}
          step={1}
          onChange={(newDistance) => {
            setDistance(newDistance);
            setCameraState({ ...cameraState, distance: newDistance });
          }}
        />
      </div>
      <Grid />
      <Axes />
    </Worldview>
  );
}
// #END EXAMPLE

export default CameraStateControlled;
