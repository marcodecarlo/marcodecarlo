const Grid = ({
  children,
  x,
}: {
  children: React.ReactNode;
  x: "full" | "aside";
}) => {
  return (
    <div
      className={`${
        x === "full"
          ? "z-10 !col-start-1 !col-end-[-1] grid auto-cols-[min(400px,80%)] grid-flow-col gap-5 overflow-x-auto bg-gray-900 shadow-[0_0_30px_20px] shadow-gray-900 [color-scheme:dark] xl:px-4"
          : ""
      } ${x === "aside" ? "relative xl:!col-start-2" : ""}`}
    >
      {x === "aside" ? (
        <div className="relative xl:absolute xl:top-0 xl:left-0 xl:right-0">
          {children}
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default Grid;
