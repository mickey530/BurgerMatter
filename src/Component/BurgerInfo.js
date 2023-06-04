import propTypes from "prop-types";
import React, { useState, useEffect } from "react";
import infoStyle from "./style/Info.module.css";

function addComma(number) {
  return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function BurgerInfo({ img, kcal, price }) {
  return (
    <div className={infoStyle.comparison}>
      <div className={infoStyle.imgbox}>
        <img src={img} />
      </div>
      <ul>
        <li>
          <label>열량</label>
          <br />
          {addComma(kcal)} Kcal
        </li>
        <li>
          <label>가격</label>
          <br />₩ {addComma(price)}
        </li>
      </ul>
    </div>
  );
}

BurgerInfo.propTypes = {};

export default BurgerInfo;
