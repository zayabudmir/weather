import { MdSearch } from "react-icons/md";

export const SearchField = ({ className }) => {
  return (
    <div
      className={
        `flex gap-4 px-6 py-4 rounded-[48px] items-center bg-white ` + className
      }
    >
      <MdSearch size={48} />
      <input
        type="text"
        placeholder="Search"
        className="w-[455px] h-[44px] text-black text-[32px] font-bold outline-none"
      ></input>
    </div>
  );
};
