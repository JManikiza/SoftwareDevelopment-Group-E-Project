import { Main } from "govuk-react";
import { createContext } from "react";
//import React, { useState } from "react";

import MyBtn from "../Components/Temp/MyBtn";
import MyInput from "../Components/Temp/MyInput";


export const CurrentContext = createContext(null);

function Temp() {
  return (
    <>
      <Main>
        <MyInput />
        <br /><br />
        <MyBtn />
        <br /><br />
      </Main>
    </>
  );
}

export default Temp;
