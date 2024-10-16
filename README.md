# Comments on Changes Made

## Props Interface for Greeting Component:

We created an interface GreetingProps to define the type of props expected by the Greeting component. This makes it clear that name must be a string.

## Functional Component Declaration:

We used React.FC to specify that Greeting is a functional component, which also allows for type checking of props.

## State Interface for Counter Component:

We defined CounterState to specify the structure of the state in the Counter component, ensuring count is a number.

## Class Component and State Initialization:

In the Counter class, we specified Component<{}, CounterState> to indicate that this component does not take any props and has a state of type CounterState.
We used TypeScript's state initialization syntax to declare and initialize the state.

## Method Annotation:

The increment method remains the same, but now it benefits from TypeScript's type checking, ensuring that it only modifies state as defined.
