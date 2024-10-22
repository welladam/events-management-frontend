const CardSkeleton = () => {
  return (
    <div className="animate-pulse flex flex-col rounded-3xl w-full lg:max-w-[400px] 2xl:max-w-[500px] bg-gray-200">
      <div className="w-full h-[200px] bg-gray-300 rounded-t-3xl"></div>
      <div className="flex gap-6 px-6 py-8">
        <div className="flex flex-col text-center justify-between gap-4">
          <div>
            <div className="w-10 h-4 bg-gray-300 rounded mb-2"></div>
            <div className="w-12 h-8 bg-gray-300 rounded"></div>
          </div>
          <div>
            <div className="w-12 h-4 bg-gray-300 rounded mb-2"></div>
            <div className="w-16 h-8 bg-gray-300 rounded"></div>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="w-3/4 h-6 bg-gray-300 rounded"></div>
          <div className="w-full h-4 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  )
}

export default CardSkeleton
