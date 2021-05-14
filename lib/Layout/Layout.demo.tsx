import LayoutExample from './Layout.explame';
import React, {Fragment} from 'react';
import Demo from '../demo';


const LayoutDemo = () => {
  return (
    <Fragment>
      <Demo code={require('!!raw-loader!./Layout.explame.tsx').default}>
        <LayoutExample/>
      </Demo>
      </Fragment>
  );
};

export default LayoutDemo;