import ButtonExample from './button.explame';
import React, {Fragment} from 'react';
import Demo from '../demo';


const ButtonDemo = () => {
  return (
    <Fragment>
      <Demo code={require('!!raw-loader!./button.explame.tsx').default}>
        <ButtonExample/>
      </Demo>
      </Fragment>
  );
};

export default ButtonDemo;