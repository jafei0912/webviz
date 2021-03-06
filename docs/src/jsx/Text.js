//  Copyright (c) 2018-present, GM Cruise LLC
//
//  This source code is licensed under the Apache License, Version 2.0,
//  found in the LICENSE file in the root directory of this source tree.
//  You may not use this file except in compliance with the License.

// #BEGIN EXAMPLE
import React from "react";

import Worldview, { Text, Axes } from "regl-worldview";

// #BEGIN EDITABLE
function TextDemo() {
  const labelMarker = {
    name: "randomName",
    text: "HELLO",
    color: { r: 1, g: 1, b: 1, a: 1 },
    pose: {
      orientation: { x: 0, y: 0, z: 0, w: 1 },
      position: { x: 10, y: 10, z: 1 },
    },
    scale: { x: 1, y: 1, z: 1 },
  };

  return (
    <Worldview>
      <Text>{[labelMarker]}</Text>
      <Axes />
    </Worldview>
  );
}
// #END EXAMPLE

export default TextDemo;
