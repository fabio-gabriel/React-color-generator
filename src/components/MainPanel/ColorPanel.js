import ColorProvider from "../../contexts/ColorContext";
import Card from "./Card";
import ActionButton from "./ActionButton";
import ColorsHistory from "./ColorsHistory";
import "../../App.css";
import { memo } from "react";

function ColorPanel() {
  return (
    <ColorProvider>
      <div className="panel">
        <Card />
        <ActionButton />
      </div>
      <div className="colors-list">
        <ColorsHistory />
      </div>
    </ColorProvider>
  );
}

export default memo(ColorPanel);
