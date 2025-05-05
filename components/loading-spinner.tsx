export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="w-12 h-12 border-4 border-white/10 border-t-orange-500 rounded-full animate-spin" />
    </div>
  )
}
