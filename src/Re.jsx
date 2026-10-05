
import React from "react";
import "./App.css";

const Re = () => {
  const reactTopics = [
    {
      topic: "JSX",
      name: "JavaScript XML",
      use: "JavaScript ke andar HTML jaisa syntax likhne ke liye.",
      example: "const element = <h1>Hello React</h1>;",
    },
    {
      topic: "Component",
      name: "React Component",
      use: "Website ko reusable parts me divide karne ke liye.",
      example: "const Home = () => {\n  return <h1>Home Page</h1>;\n};",
    },
    {
      topic: "Props",
      name: "Properties",
      use: "Parent component se child component me data bhejne ke liye.",
      example: "<User name=\"Shivam\" />",
    },
    {
      topic: "useState",
      name: "State Hook",
      use: "Component ke andar data ko store aur update karne ke liye.",
      example:
        "const [count, setCount] = useState(0);",
    },
    {
      topic: "useEffect",
      name: "Effect Hook",
      use: "API call, data fetch aur side effects handle karne ke liye.",
      example:
        "useEffect(() => {\n  console.log(\"Component Loaded\");\n}, []);",
    },
    {
      topic: "useContext",
      name: "Context Hook",
      use: "Multiple components ke beech data share karne ke liye.",
      example: "const value = useContext(MyContext);",
    },
    {
      topic: "Event Handling",
      name: "Events",
      use: "Button click aur user actions ko handle karne ke liye.",
      example: "<button onClick={handleClick}>Click Me</button>",
    },
    {
      topic: "Conditional Rendering",
      name: "Condition",
      use: "Condition ke according different UI show karne ke liye.",
      example: "{isLogin ? <Home /> : <Login />}",
    },
    {
      topic: "List Rendering",
      name: "Map Method",
      use: "Array ke data ko multiple elements me display karne ke liye.",
      example: "{users.map(user => <p>{user.name}</p>)}",
    },
    {
      topic: "Form",
      name: "React Form",
      use: "User se input data lene aur manage karne ke liye.",
      example:
        "<input value={name} onChange={(e) => setName(e.target.value)} />",
    },
    {
      topic: "React Router",
      name: "Routing",
      use: "React website me different pages aur URLs create karne ke liye.",
      example:
        "<Route path=\"/about\" element={<About />} />",
    },
    {
      topic: "Link",
      name: "Navigation",
      use: "Page reload ke bina ek route se dusre route par jane ke liye.",
      example: "<Link to=\"/about\">About</Link>",
    },
    {
      topic: "Fragment",
      name: "React Fragment",
      use: "Extra HTML element add kiye bina multiple elements return karne ke liye.",
      example:
        "<>\n  <h1>Hello</h1>\n  <p>React</p>\n</>",
    },
    {
      topic: "Key",
      name: "List Key",
      use: "List items ko unique identify karne ke liye.",
      example:
        "{users.map(user => <p key={user.id}>{user.name}</p>)}",
    },
    {
      topic: "API",
      name: "Fetch Data",
      use: "Server ya API se data lene ke liye.",
      example:
        "fetch(\"https://api.example.com/users\")\n  .then(res => res.json());",
    },
    {
      topic: "useRef",
      name: "Ref Hook",
      use: "DOM element ko directly access karne ya value store karne ke liye.",
      example:
        "const inputRef = useRef();",
    },
    {
      topic: "useMemo",
      name: "Memoization Hook",
      use: "Expensive calculation ko unnecessary repeat hone se bachane ke liye.",
      example:
        "const result = useMemo(() => calculate(), [value]);",
    },
    {
      topic: "useCallback",
      name: "Callback Hook",
      use: "Function ko unnecessarily recreate hone se bachane ke liye.",
      example:
        "const handleClick = useCallback(() => {}, []);",
    },
    {
      topic: "React State",
      name: "State Management",
      use: "Component ke changing data ko manage karne ke liye.",
      example:
        "const [name, setName] = useState(\"Shivam\");",
    },
    {
      topic: "Reusable Component",
      name: "Reusability",
      use: "Same component ko website ke different parts me reuse karne ke liye.",
      example:
        "<Button text=\"Login\" />\n<Button text=\"Signup\" />",
    },
  ];

  return (
    <div className="css-page">
      <div className="css-hero">
        <h1>React Concepts</h1>
        <p>
          Learn important React concepts with simple examples.
        </p>
      </div>

      <div className="properties-container">
        {reactTopics.map((item, index) => (
          <div className="property-card" key={index}>
            <div className="property-number">
              #{index + 1}
            </div>

            <h2>{item.topic}</h2>

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

export default Re;
