
import React from "react";
import "./jaat.css";

const Jaat = () => {
  const jsTopics = [
    {
      topic: "Variable",
      name: "let, const, var",
      use: "Data ko store karne ke liye variables use hote hain.",
      example: 'let name = "Shivam";',
    },
    {
      topic: "Data Types",
      name: "String, Number, Boolean",
      use: "Different types ke data ko represent karne ke liye.",
      example: 'let age = 22;\nlet name = "Shivam";',
    },
    {
      topic: "Function",
      name: "Reusable Code",
      use: "Code ko reusable banane ke liye function use hota hai.",
      example:
        "function greet() {\n  console.log(\"Hello\");\n}",
    },
    {
      topic: "Arrow Function",
      name: "Short Function Syntax",
      use: "Function ko short syntax me likhne ke liye.",
      example:
        'const add = (a, b) => a + b;',
    },
    {
      topic: "Array",
      name: "Collection of Values",
      use: "Multiple values ko ek variable me store karne ke liye.",
      example:
        'const fruits = ["Apple", "Mango", "Banana"];',
    },
    {
      topic: "Object",
      name: "Key-Value Data",
      use: "Related data ko key-value format me store karne ke liye.",
      example:
        'const user = {\n  name: "Shivam",\n  age: 22\n};',
    },
    {
      topic: "map()",
      name: "Array Method",
      use: "Array ke har item par operation perform karne ke liye.",
      example:
        "users.map(user => user.name);",
    },
    {
      topic: "filter()",
      name: "Filter Array",
      use: "Condition ke basis par array se data filter karne ke liye.",
      example:
        "users.filter(user => user.age > 18);",
    },
    {
      topic: "reduce()",
      name: "Reduce Array",
      use: "Array ke values ko ek single result me convert karne ke liye.",
      example:
        "numbers.reduce((sum, n) => sum + n, 0);",
    },
    {
      topic: "if / else",
      name: "Conditional Statement",
      use: "Condition ke according code execute karne ke liye.",
      example:
        'if (age >= 18) {\n  console.log("Adult");\n} else {\n  console.log("Minor");\n}',
    },
    {
      topic: "for Loop",
      name: "Loop",
      use: "Same code ko multiple times execute karne ke liye.",
      example:
        "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    },
    {
      topic: "DOM",
      name: "Document Object Model",
      use: "HTML elements ko JavaScript se access aur change karne ke liye.",
      example:
        'document.getElementById("title");',
    },
    {
      topic: "addEventListener",
      name: "Event Handling",
      use: "User ke actions jaise click ko handle karne ke liye.",
      example:
        'button.addEventListener("click", () => {\n  alert("Clicked");\n});',
    },
    {
      topic: "Template Literal",
      name: "Backtick String",
      use: "String ke andar variables ko easily use karne ke liye.",
      example:
        'const message = `Hello ${name}`;',
    },
    {
      topic: "Destructuring",
      name: "Object / Array Destructuring",
      use: "Object ya array se values easily nikalne ke liye.",
      example:
        'const { name, age } = user;',
    },
    {
      topic: "Spread Operator",
      name: "Spread Syntax",
      use: "Array ya object ki values ko expand/copy karne ke liye.",
      example:
        "const newArray = [...oldArray, 4];",
    },
    {
      topic: "Promise",
      name: "Asynchronous Operation",
      use: "Async operations ko handle karne ke liye.",
      example:
        'const promise = new Promise((resolve) => {\n  resolve("Success");\n});',
    },
    {
      topic: "async / await",
      name: "Async JavaScript",
      use: "Promises ko easy way me handle karne ke liye.",
      example:
        "const getData = async () => {\n  const res = await fetch(url);\n};",
    },
    {
      topic: "Fetch API",
      name: "API Request",
      use: "Server ya API se data receive karne ke liye.",
      example:
        'fetch("https://api.example.com/users")\n  .then(res => res.json());',
    },
    {
      topic: "localStorage",
      name: "Browser Storage",
      use: "Browser me data permanently store karne ke liye.",
      example:
        'localStorage.setItem("name", "Shivam");',
    },
  ];

  return (
    <div className="js-page">
      <div className="js-hero">
        <h1>JavaScript Concepts</h1>
        <p>
          Learn important JavaScript concepts with simple examples.
        </p>
      </div>

      <div className="js-topics-container">
        {jsTopics.map((item, index) => (
          <div className="js-topic-card" key={index}>
            <div className="js-topic-number">
              #{index + 1}
            </div>

            <h2>{item.topic}</h2>

            <h3>{item.name}</h3>

            <p>
              <strong>Use:</strong> {item.use}
            </p>

            <div className="js-example-box">
              <strong>Example:</strong>
              <code>{item.example}</code>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jaat;

