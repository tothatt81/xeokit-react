import React from 'react';
import { xktModel } from '../models';
import { XKTViewer } from 'xeokit-react';

const Highlighting = () => (
  <XKTViewer
    canvasID="xkt-canvas"
    width={600}
    height={600}
    models={[xktModel]}
  />
);

export default Highlighting;
