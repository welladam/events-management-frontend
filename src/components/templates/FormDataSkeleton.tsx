const FormDataSkeleton = () => {
  return (
    <div className="flex flex-col gap-12 xl:w-3/5 animate-pulse">
      <div className="w-full h-48 bg-gray-300 rounded-lg"></div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-32">
        <div className="w-full lg:w-1/2 h-10 bg-gray-300 rounded"></div>
        <div className="w-full lg:w-1/2 h-10 bg-gray-300 rounded"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-32">
        <div className="w-full lg:w-1/2 h-10 bg-gray-300 rounded"></div>
        <div className="w-full lg:w-1/2 h-10 bg-gray-300 rounded"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-32">
        <div className="w-full lg:w-1/2 h-10 bg-gray-300 rounded"></div>
        <div className="w-full lg:w-1/2 h-10 bg-gray-300 rounded"></div>
      </div>

      <div className="flex justify-center lg:justify-start gap-8 mt-10">
        <div className="w-32 h-12 bg-gray-300 rounded"></div>
        <div className="w-32 h-12 bg-gray-300 rounded"></div>
      </div>
    </div>
  )
}

export default FormDataSkeleton
