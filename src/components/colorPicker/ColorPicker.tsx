import { useEffect, useState } from "react";

import "./ColorPicker.css";

function ColorPicker({
  onColorChange,
}: {
  onColorChange: (color: string) => void;
}) {
  const [color, setColor] = useState("#FFFFFF"); // Default color

  useEffect(() => {
    onColorChange(color);
  }, [color]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };

  return (
    <input
      type="color"
      id="colorPicker"
      value={color}
      onChange={handleChange}
      alt="Color Picker"
    />
  );
}

export default ColorPicker;
