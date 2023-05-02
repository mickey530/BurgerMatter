import propTypes from "prop-types";
import React, { useState, useEffect } from "react";
import infoStyle from "./style/Info.module.css";

function BurgerInfo() {
  return (
    <div className={infoStyle.comparison}>
      <ul>
        <li>가격</li>
        <li>칼로리</li>
      </ul>
    </div>
  );
}

BurgerInfo.propTypes = {};

export default BurgerInfo;
