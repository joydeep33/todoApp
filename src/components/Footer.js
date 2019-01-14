import React, { Component } from "react";
import { View, Button } from "react-native";
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from "../actions/actionTypes";

const Footer = ({ setVisibilityFilter }) => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <Button
      onPress={() => {
        setVisibilityFilter(SHOW_ALL);
      }}
      style={{
        marginLeft: 4
      }}
      title="All"
    />
    <Button
      onPress={() => {
        setVisibilityFilter(SHOW_COMPLETED);
      }}
      style={{
        marginLeft: 4
      }}
      title="Completed"
    />
    <Button
      onPress={() => {
        setVisibilityFilter(SHOW_ACTIVE);
      }}
      style={{
        marginLeft: 4
      }}
      title="Active"
    />
  </View>
);
export default Footer;
