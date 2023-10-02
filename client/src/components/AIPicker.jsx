import React from 'react'

import CustomButton from './CustomButton';

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit}) => {
  return (
    <div className='ml-3 flex flex-col gap-2 absolute left-full h-52 glassmorphism rounded'>
      <textarea
        className='mx-2 mt-2 rounded bg-transparent text-sm border border-gray-400 p-2 h-52 flex-1 outline-none'
        placeholder='Ask AI...'
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <div className='flex flex-wrap gap-2 mx-2 mb-2'>
        {generatingImg ? (
          <CustomButton
            type="outline"
            title="Asking AI..."
            customStyles='text-xs'
          />
        ) : (
          <>
            <CustomButton
              type="outline"
              title="AI Logo"
              handleClick={() => handleSubmit('logo')}
              customStyles='text-xs'
            />

            <CustomButton
              type="filled"
              title="AI Full"
              handleClick={() => handleSubmit('full')}
              customStyles='text-xs'
            />
          </>
        )}
      </div>
    </div>

    
  )
}

export default AIPicker