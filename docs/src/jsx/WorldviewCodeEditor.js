//  Copyright (c) 2018-present, GM Cruise LLC
//
//  This source code is licensed under the Apache License, Version 2.0,
//  found in the LICENSE file in the root directory of this source tree.
//  You may not use this file except in compliance with the License.

import polygonGenerator from "polygon-generator";
import React, { useState, useEffect } from "react";
import seedrandom from "seedrandom";
import styled from "styled-components";

import CameraStateInfo from "./CameraStateInfo";
import CodeEditor from "./CodeEditor";
import InputNumber from "./InputNumber";
import LineControls from "./LineControls";
import useRange from "./useRange";
import Worldview, {
  Command,
  Arrows,
  Cones,
  Cubes,
  Cylinders,
  Grid,
  Lines,
  Points,
  Spheres,
  Triangles,
  Axes,
  FilledPolygons,
  Overlay,
  Text,
  DEFAULT_CAMERA_STATE,
  withPose,
  getCSSColor,
} from "regl-worldview";

export const scope = {
  getCSSColor,
  useRange,
  useState,
  useEffect,
  Worldview,
  seedrandom,

  polygonGenerator,
  styled,
  DEFAULT_CAMERA_STATE,
  CameraStateInfo,
  LineControls,
  InputNumber,

  Command,
  Arrows,
  Cones,
  Cubes,
  Cylinders,
  Grid,
  Lines,
  Points,
  Spheres,
  Triangles,
  Axes,
  FilledPolygons,
  Overlay,
  Text,
  withPose,
};

export default function WorldviewCodeEditor({ scope: customScope = {}, ...rest }) {
  return <CodeEditor scope={{ ...customScope, ...scope }} {...rest} />;
}
