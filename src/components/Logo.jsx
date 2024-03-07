import { RiFireFill } from "react-icons/ri";

function Logo() {
  return (
    <div className="flex items-center justify-center p-3">
      <div className="w-10 h-10 flex items-center justify-center text-2xl">
        <RiFireFill className="fill-white" />
      </div>
    </div>
  );
}

export default Logo;
