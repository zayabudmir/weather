export const Ellipse = ({ size }) => {
  return (
    <div
      className="border-[2px] border-purple-400 opacity-[0.2] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      style={{ width: size, height: size }}
    ></div>
  );
};
