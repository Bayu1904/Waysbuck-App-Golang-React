import React from "react";

import Header from "../components/Header";
import HeroBanner from "../components/Hero-Banner";
import List from "../components/ListCard";
import { DataBoba } from "../API/DummyAPI";

export default function LandingPage() {
  return (
    <div>
      <Header />
      <HeroBanner />
      <List boba={DataBoba} />
    </div>
  );
}
