import IconExample from './icons.explame';
import React, {Fragment} from 'react';
import Demo from '../demo';


const IconDemo = () => {
  return (
    <Fragment>
      <Demo code={require('!!raw-loader!./icons.explame.tsx').default}>
        <IconExample/>
      </Demo>
      </Fragment>
  );
};

export default IconDemo;