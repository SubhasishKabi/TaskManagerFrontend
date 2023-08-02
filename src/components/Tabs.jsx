import React from "react";
import { TABS } from "../redux/actions/type";
import { useDispatch } from "react-redux";
import { changeTab } from "../redux/actions/actions";

const Tabs = ({ currentTab }) => {
  const dispatch = useDispatch();
  return TABS.map((tab) => (
    <button
      className={tab === currentTab ? "button selected" : "button"}
      onClick={() => dispatch(changeTab(tab))}
    >
      {tab}
    </button>
  ));
};

export default Tabs;
