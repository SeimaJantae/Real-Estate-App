import React from "react";
import SideBar from "../../../components/nav/SideBar";
import AdForm from "../../../components/forms/AdForm";

const SellLand = () => {
  return (
    <div className="container-lg">
      <h5 className="pt-2">Sell Land</h5>
      <SideBar></SideBar>
      <div className="contrainer-lg mt-2">
        <AdForm action="Sell" type="Land" />
      </div>
    </div>
  );
};

export default SellLand;
