import React, { useState } from 'react'
import { CloudIcon } from '@heroicons/react/24/outline'

interface FileUploadProps {
  onFileUpload: (file: File) => void
}

const UploadCard = ({ onFileUpload }: FileUploadProps) => {
  const [preview, setPreview] = useState('')
  const [isDragOver, setIsDragOver] = useState(false)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = () => {
    setIsDragOver(false)
  }

  const handlePreview = (file: File) => {
    const reader = new FileReader()
    reader.onloadend = () => {
      setPreview(reader.result as string)
    }
    reader.readAsDataURL(file)
  }

  const handleFile = (file?: File) => {
    if (file) {
      handlePreview(file)
      onFileUpload(file)
      return
    }
    setPreview('')
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    handleFile(e.dataTransfer.files[0])
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFile(e.target.files?.[0])
  }

  const PreviewImage = () => {
    return (
      <div className="relative">
        <div
          className="flex transition-all delay-150 absolute w-full h-full hover:bg-gray-600 hover:bg-opacity-80 justify-center items-center 
        text-transparent hover:text-white cursor-pointer"
          onClick={() => setPreview('')}
        >
          <p className="text-xl font-bold">Click here to remove the image!</p>
        </div>
        <img src={preview} className="max-h-60 w-full object-cover" />
      </div>
    )
  }

  const DragAndDropImage = () => {
    return (
      <div className="flex flex-col items-center justify-center">
        <CloudIcon className="w-10 h-10 text-gray-400 mb-4" />
        <p className="text-lg font-semibold">
          Choose an image or drag & drop it here
        </p>
        <p className="text-gray-500 mb-4">Only image formats, up to 6MB</p>
        <label
          className="transition rounded-full bg-transparent border-2 min-w-20 text-lg active:translate-y-1 active:translate-x-1
    px-4 py-2 cursor-pointer border-primary text-primary hover:bg-primary hover:text-white"
        >
          <span>Browse Image</span>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
      </div>
    )
  }

  return (
    <div
      className={`border-2 border-dashed rounded-lg p-8 transition-colors ${
        isDragOver ? 'border-primary' : 'border-gray-300'
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {preview ? <PreviewImage /> : <DragAndDropImage />}
    </div>
  )
}

export default UploadCard
