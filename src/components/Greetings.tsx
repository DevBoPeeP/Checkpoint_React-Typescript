// Greeting.tsx
import React from "react";

// Define the interface for the props
interface GreetingProps {
  name: string; // 'name' should be of type string
}

// Functional component definition using TypeScript
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
