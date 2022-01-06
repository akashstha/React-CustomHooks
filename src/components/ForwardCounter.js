import { useState, useEffect } from "react";
import useCounter from "../hooks/use-counter";

import Card from "./Card";

const ForwardCounter = () => {
  const counter = useCounter();
  console.log("%c forward!!", "background: green;padding: 2px");
  return <Card>{counter}</Card>;
};

export default ForwardCounter;
