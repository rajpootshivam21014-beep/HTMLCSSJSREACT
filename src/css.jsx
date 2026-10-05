
import React from "react";
import "./App.css";

const Css = () => {
  const cssProperties = [
    {
      property: "color",
      name: "Text Color",
      use: "Text ka color change karne ke liye.",
      example: "color: red;",
    },
    {
      property: "background-color",
      name: "Background Color",
      use: "Element ka background color change karne ke liye.",
      example: "background-color: black;",
    },
    {
      property: "font-size",
      name: "Font Size",
      use: "Text ka size set karne ke liye.",
      example: "font-size: 20px;",
    },
    {
      property: "font-family",
      name: "Font Family",
      use: "Text ke liye font select karne ke liye.",
      example: "font-family: Arial, sans-serif;",
    },
    {
      property: "font-weight",
      name: "Font Weight",
      use: "Text ko bold ya normal karne ke liye.",
      example: "font-weight: bold;",
    },
    {
      property: "text-align",
      name: "Text Align",
      use: "Text ko left, center ya right align karne ke liye.",
      example: "text-align: center;",
    },
    {
      property: "text-decoration",
      name: "Text Decoration",
      use: "Text par underline ya other decoration dene ke liye.",
      example: "text-decoration: underline;",
    },
    {
      property: "margin",
      name: "Margin",
      use: "Element ke bahar space dene ke liye.",
      example: "margin: 20px;",
    },
    {
      property: "padding",
      name: "Padding",
      use: "Element ke andar space dene ke liye.",
      example: "padding: 20px;",
    },
    {
      property: "width",
      name: "Width",
      use: "Element ki width set karne ke liye.",
      example: "width: 300px;",
    },
    {
      property: "height",
      name: "Height",
      use: "Element ki height set karne ke liye.",
      example: "height: 200px;",
    },
    {
      property: "border",
      name: "Border",
      use: "Element ke around border lagane ke liye.",
      example: "border: 1px solid white;",
    },
    {
      property: "border-radius",
      name: "Border Radius",
      use: "Corners ko rounded banane ke liye.",
      example: "border-radius: 10px;",
    },
    {
      property: "display",
      name: "Display",
      use: "Element ka layout aur display behavior set karne ke liye.",
      example: "display: flex;",
    },
    {
      property: "position",
      name: "Position",
      use: "Element ki position control karne ke liye.",
      example: "position: relative;",
    },
    {
      property: "top",
      name: "Top",
      use: "Positioned element ko top se move karne ke liye.",
      example: "top: 20px;",
    },
    {
      property: "left",
      name: "Left",
      use: "Element ko left side se move karne ke liye.",
      example: "left: 10px;",
    },
    {
      property: "right",
      name: "Right",
      use: "Element ko right side se move karne ke liye.",
      example: "right: 10px;",
    },
    {
      property: "bottom",
      name: "Bottom",
      use: "Element ko bottom side se move karne ke liye.",
      example: "bottom: 10px;",
    },
    {
      property: "flex-direction",
      name: "Flex Direction",
      use: "Flex items ki direction set karne ke liye.",
      example: "flex-direction: column;",
    },
    {
      property: "justify-content",
      name: "Justify Content",
      use: "Flex items ko horizontal/main axis par align karne ke liye.",
      example: "justify-content: center;",
    },
    {
      property: "align-items",
      name: "Align Items",
      use: "Flex items ko cross axis par align karne ke liye.",
      example: "align-items: center;",
    },
    {
      property: "gap",
      name: "Gap",
      use: "Elements ke beech space dene ke liye.",
      example: "gap: 20px;",
    },
    {
      property: "box-shadow",
      name: "Box Shadow",
      use: "Element ke around shadow dene ke liye.",
      example: "box-shadow: 0 4px 10px rgba(0,0,0,0.3);",
    },
    {
      property: "opacity",
      name: "Opacity",
      use: "Element ki transparency set karne ke liye.",
      example: "opacity: 0.7;",
    },
    {
      property: "overflow",
      name: "Overflow",
      use: "Extra content ko control karne ke liye.",
      example: "overflow: hidden;",
    },
    {
      property: "cursor",
      name: "Cursor",
      use: "Mouse cursor ka style change karne ke liye.",
      example: "cursor: pointer;",
    },
    {
      property: "transition",
      name: "Transition",
      use: "CSS changes par smooth animation dene ke liye.",
      example: "transition: 0.3s ease;",
    },
    {
      property: "transform",
      name: "Transform",
      use: "Element ko move, rotate ya scale karne ke liye.",
      example: "transform: scale(1.1);",
    },
  ];

  return (
    <div className="css-page">
      <div className="css-hero">
        <h1>CSS Properties</h1>
        <p>Learn important CSS properties with simple examples.</p>
      </div>

      <div className="properties-container">
        {cssProperties.map((item, index) => (
          <div className="property-card" key={index}>
            <div className="property-number">#{index + 1}</div>

            <h2>{item.property}</h2>

            <h3>{item.name}</h3>

            <p>
              <strong>Use:</strong> {item.use}
            </p>

            <div className="example-box">
              <strong>Example:</strong>
              <code>{item.example}</code>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Css;
