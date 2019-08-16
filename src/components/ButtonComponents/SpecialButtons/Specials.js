import React from "react";


//import any components needed
import SpecialButton from './SpecialButton.js'
//Import your array data to from the provided data file
import {specials} from '../../../data.js';

const Specials = () => {
  // STEP 2 - add the imported data to state

  return (
    <div>
     
       {specials.map(specials => <SpecialButton text = {specials}/>)}
    </div>
  );
};
export default Specials