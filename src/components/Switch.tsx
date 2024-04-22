import React, { useState } from "react";
import { useAppSelector } from "../redux/hooks/useAppSelector";
import { useDispatch } from "react-redux";
import { setThemeStatus } from "../redux/reducers/themeReducer";
import { FaMoon, FaSun } from "react-icons/fa";

interface SwitchProps {
  onChange: (isChecked: boolean) => void;
  defaultChecked?: boolean;
}

const Switch: React.FC<SwitchProps> = ({
  onChange,
  defaultChecked = false,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(defaultChecked);
  const theme = useAppSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handleChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onChange(newCheckedState);
    dispatch(setThemeStatus(newCheckedState));
  };

  return (
    <label className="flex items-center cursor-pointer absolute right-1 top-3">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={handleChange}
        />
        <div
          className={`block ${
            theme.status ? "bg-zinc-800" : "bg-slate-200"
          } w-14 h-8 rounded-full`}
        ></div>
        <div
          className={`absolute top-0 left-0 ${
            theme.status ? " bg-white text-zinc-800" : "bg-black text-slate-200"
          } w-8 h-8 rounded-full transition-transform transform ${
            isChecked ? "translate-x-full" : ""
          }  flex items-center justify-center`}
        >
          {theme.status ? <FaSun /> : <FaMoon />}
        </div>
      </div>
      <div
        className={`ml-3  font-medium text-xl ${
          theme.status ? " text-zinc-800" : " text-slate-200"
        }`}
      >
        {theme.status ? "Light" : "Dark"}
      </div>
    </label>
  );
};

export default Switch;
