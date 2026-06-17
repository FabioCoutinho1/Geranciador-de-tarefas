const GlobalLoading = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div
      className="pointer-events-none fixed left-1/2 top-8 z-50 -translate-x-1/2"
      role="status"
      aria-live="polite"
      aria-label="Carregando"
    >
      <div className="rounded-full bg-stone-950/75 p-3 shadow-xl shadow-stone-950/30 backdrop-blur-sm">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-white/25 border-t-blue-300" />
      </div>
      <span className="sr-only">Carregando...</span>
    </div>
  );
};

export default GlobalLoading;
