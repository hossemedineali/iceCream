import { useState } from 'react';

import React, { useCallback, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import Quagga from '@ericblade/quagga2';
import BarManStep1 from './barManStep1';
import { useBarMan } from '~/store/store';
import BarManStep2 from './barManStep2';


const BarManWrapper = () => {

    const {step}=useBarMan()
   
    
  return (
    <div className=" h-screen pt-4">
     
    {step==1&&<BarManStep1/>}
    {step==2&&<BarManStep2/>}
     
    </div>
  );
};

export default BarManWrapper;
