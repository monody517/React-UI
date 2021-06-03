import AffixExample from './Affix.example'
import React, {Fragment} from 'react';
import Demo from '../demo';

const AffixDemo = () => {
    return (
      <Fragment>
        <Demo code={require('!!raw-loader!./Affix.example.tsx').default}>
          <AffixExample/>
        </Demo>
        </Fragment>
    );
  };
  
  export default AffixDemo;