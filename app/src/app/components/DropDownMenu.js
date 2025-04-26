export const DropDownMenu = ({ className, cityName, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-[519px] h-[56px] flex gap-4 items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <g opacity="0.2">
          <path
            d="M20 3.33334C13.55 3.33334 8.33334 8.55001 8.33334 15C8.33334 23.75 20 36.6667 20 36.6667C20 36.6667 31.6667 23.75 31.6667 15C31.6667 8.55001 26.45 3.33334 20 3.33334ZM11.6667 15C11.6667 10.4 15.4 6.66668 20 6.66668C24.6 6.66668 28.3333 10.4 28.3333 15C28.3333 19.8 23.5333 26.9833 20 31.4667C16.5333 27.0167 11.6667 19.75 11.6667 15Z"
            fill="black"
          />
          <path
            d="M20 19.1667C22.3012 19.1667 24.1667 17.3012 24.1667 15C24.1667 12.6988 22.3012 10.8333 20 10.8333C17.6988 10.8333 15.8333 12.6988 15.8333 15C15.8333 17.3012 17.6988 19.1667 20 19.1667Z"
            fill="black"
          />
        </g>
      </svg>
      <p className="text-black text-[28px] font-bold">{cityName}</p>
    </div>
  );
};
