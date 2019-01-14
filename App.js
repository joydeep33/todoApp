import React, { Component } from "react";
import TodoApp from "./src/TodoApp";
import { persistor, store } from "./src/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <TodoApp />
        </PersistGate>
      </Provider>
    );
  }
}
