import React from 'react'
import CustomButton from './CustomButton'
import { useSnapshot } from 'valtio'
import state from '../store'


const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <div className="filepicker-container font-bold">

      <div className="flex-1 flex flex-col">
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className='filepicker-label'>
          Upload File
        </label>

        <p className='mt-2 truncate text-gray-700 text-xs'>
          {file === '' ? "No file selected" : file.name}
        </p>
      </div>

      <div className=' flex-nowrap grid gap-3 font-bold'>
        <CustomButton
          title="Logo"
          type="outline"
          handleClick={()=> readFile('logo')}
          customStyles='text-xs'
        />
        <CustomButton
          title="Full"
          type="filled"
          handleClick={()=> readFile('full')}
          customStyles='text-xs'
        />
      </div>

    </div>
  )
}

export default FilePicker