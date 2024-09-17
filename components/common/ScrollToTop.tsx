"use client";
const ScrollToTop = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      className="text-sm text-green-200/30 hover:text-green-200/70"
      onClick={() => {
        window.scrollTo({ top: 0 });
      }}
    >
      {children}
    </button>
  );
};

export default ScrollToTop;
