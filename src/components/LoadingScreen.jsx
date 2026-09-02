const LoadingScreen = () => (
  <div className="flex h-[70vh] items-center justify-center bg-offWhite">
    <div className="text-center">
      <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-lightGreen border-t-emerald" />
      <p className="mt-4 font-medium text-forest">Loading Garden Public School...</p>
    </div>
  </div>
)

export default LoadingScreen
