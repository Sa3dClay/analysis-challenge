import React, { useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreStateType } from "../../store";
import { uiDataActions } from "../../store/ui.slice";

const ThemeToggler = () => {
  const dispatch = useDispatch();
  const [iconText, setIconText] = useState("");
  const uiData = useSelector((state: StoreStateType) => state.uiData);

  useLayoutEffect(() => {
    uiData.darkTheme ? setIconText("toggle_off") : setIconText("toggle_on");
  }, [uiData.darkTheme]);

  const toggleThemeHandler = () => {
    dispatch(uiDataActions.toggleTheme());
  };

  return (
    <>
      <button className="fixed top-2 right-4" onClick={toggleThemeHandler}>
        <span
          className={`material-symbols-outlined text-4xl ${
            uiData.darkTheme ? "text-gray-200" : "text-gray-800"
          }`}
        >
          {iconText}
        </span>
      </button>
    </>
  );
};

export default ThemeToggler;
