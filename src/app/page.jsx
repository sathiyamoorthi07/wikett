import React from "react";
import Cricket from "./cricket/page";
import Cricard from "./cricket/Cricard";
import Cricustomer from "./cricket/cricustomer";
import Card from "./cricket/Card";
import Cricfooter from "./cricket/Cricfooter";
function page() {
  return (
    <div>
      <Cricket />
      <Card />
      <Cricard />
      <Cricustomer />
      <Cricfooter />
    </div>
  );
}

export default page;
