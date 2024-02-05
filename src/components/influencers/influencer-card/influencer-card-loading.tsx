export const InfluencerCardLoading = () => {
  return (
    <>
      <div
        role="status"
        className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center"
      >
        <div className="flex items-center justify-center h-48 bg-gray-200 rounded-[30%] border-[0.5px] sm:w-72 dark:bg-gray-600"></div>
        <div className="w-full space-y-6">
          <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-36 mb-4"></div>
          <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[180px] mb-2.5"></div>
          {/* <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div> */}
          <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[260px] mb-2.5"></div>
          <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[260px] mb-2.5"></div>
          <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[260px] mb-2.5"></div>
          <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[260px]"></div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
      <hr className="mt-5 border-[0.5px] border-gray-200 mb-[25px]"></hr>
    </>
  );
};
