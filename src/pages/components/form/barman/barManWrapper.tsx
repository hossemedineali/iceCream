import { useState } from 'react';

import React, { useCallback, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import Quagga from '@ericblade/quagga2';


const BarManWrapper = () => {

    const [val, setVal] = useState<string>('');
   
    
  return (
    <div className=" h-screen pt-4">
      <div className="h-64 max-h-[80vh] w-full border">

      </div>
    </div>
  );
};

export default BarManWrapper;
