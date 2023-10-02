import React from 'react';
import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';
import state from '../store';

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className='absolute left-full ml-4'>
      <SketchPicker
        color = {snap.color}
        disableAlpha
        onChange={(color) => state.color = color.hex}
        presetColors={[
          '#D1F4C9','#7a66ee','#F5F5DC','#DACAC4','#F7C9B6','#DAE7DD'
        ]}
      />
    </div>
  )
}

export default ColorPicker