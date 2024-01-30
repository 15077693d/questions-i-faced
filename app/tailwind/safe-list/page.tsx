import React from "react";

export default function Page() {
  const colors = [
    "red",
    "yellow",
    "green",
    "orange",
  ];
  return (
    <form className="space-y-3 p-10">
      <p>Please select your favorite color:</p>
      {colors.map((color, i) => (
        <div key={`color_form_q1_${i}`}>
          <input
            type="radio"
            id={color}
            name="fav_color"
            value={color}
          />
          <label
            className={`text-${color}-200 ml-3`}
          >
            {color}
          </label>
        </div>
      ))}
    </form>
  );
}
