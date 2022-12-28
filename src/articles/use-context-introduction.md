# Introduction to React's `useContext` Hook

# /test/path/to/image.png

# 12,27,2022

React's `useContext` hook is a way to consume context within a functional component. It allows you to access the value of a context object within a component tree without the need to pass props down manually at every level.

```jsx
import { useContext } from 'react';

const MyComponent = () => {
  const contextValue = useContext(MyContext);
  return <div>{contextValue}</div>;
};
```

## When to Use `useContext`

`useContext` is particularly useful when you have a deeply nested component tree and you want to pass a value from the top-level component down to a leaf component, without the intermediate components needing to know about the value.

![useContext illustration](https://i.imgur.com/EKbkGcA.png)

In this example, the leaf component `Leaf` needs to access the context value `theme`, which is provided by the top-level component `Root`. Instead of passing the `theme` value down through `A`, `B`, and `C`, the leaf component can use `useContext` to directly access the value.

Copy code

```jsx
const Leaf = () => {
  const theme = useContext(ThemeContext);
  return (
    <div style={{ background: theme.background, color: theme.text }}>Leaf</div>
  );
};
```

## Creating a Context

To use `useContext`, you first need to create a context object using `React.createContext`.

Copy code

```jsx
import React from 'react';
export const MyContext = React.createContext();
export const MyProvider = ({ children }) => {
  const value = 'some value';
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};
```

The `MyProvider` component is used to provide the context value to the component tree. It should wrap the root of the tree, and the value can be updated using the `value` prop on the `Provider` component.

Copy code

```jsx
import { MyProvider } from './MyContext';
const App = () => (
  <MyProvider>
    {' '}
    <MyComponent />{' '}
  </MyProvider>
);
```

## Adding a Default Value

You can also specify a default value for the context using the `defaultValue` prop when creating the context object.

Copy code

```jsx
export const MyContext = React.createContext({ some: 'default value' });
```

This default value will be used if a `Provider` is not present in the component tree. This can be useful for testing or in cases where the context value is optional.

Copy code

```jsx
const MyComponent = () => {
  const contextValue = useContext(MyContext);
  return <div>{contextValue.some}</div>;
};
```

## Conclusion

`useContext` is a powerful tool for consuming context within a functional component. It allows you to avoid the prop drilling that can occur when passing values down through a deeply nested component tree. Just be sure to wrap your root component with a `Provider` to provide the context value.

> "`useContext` is a hook that lets you access the value of a context
