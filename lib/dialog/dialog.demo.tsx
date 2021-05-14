import DialogExample from './dialog.explame';
import React, {Fragment} from 'react';
import Demo from '../demo';


const DialogDemo = () => {
  return (
    <Fragment>
      <Demo code={require('!!raw-loader!./dialog.explame.tsx').default}>
        <DialogExample/>
      </Demo>
      </Fragment>
  );
};

export default DialogDemo;