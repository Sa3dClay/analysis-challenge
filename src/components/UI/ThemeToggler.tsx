import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreStateType } from "../../store";
import { uiDataActions } from "../../store/ui.slice";

const ThemeToggler = () => {
  const dispatch = useDispatch();
  const uiData = useSelector((state: StoreStateType) => state.uiData);

  const toggleThemeHandler = () => {
    dispatch(uiDataActions.toggleTheme());
  };

  return (
    <>
      <button className="fixed top-2 right-4" onClick={toggleThemeHandler}>
        {!uiData.darkTheme && (
          <span className="material-symbols-outlined text-4xl text-gray-800">
            toggle_on
          </span>
        )}
        {uiData.darkTheme && (
          <span className="material-symbols-outlined text-4xl text-gray-200">
            toggle_off
          </span>
        )}
      </button>
    </>
  );
};

export default ThemeToggler;
