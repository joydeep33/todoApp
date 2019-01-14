// import React, { Component } from "react";
// import {
//   View,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   Button
// } from "react-native";
// import { connect } from "react-redux";
// import { addTodos } from "../actions";
// let len = Math.random();
// class AddTodo extends Component {
//   state = {
//     text: ""
//   };

//   addTodo = (text, len) => {
//     this.props.dispatch(addTodos(text, len));
//     this.setState({ text: "" });
//   };

//   render() {
//     return (
//       <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
//         <TextInput
//           onChangeText={text =>
//             this.setState({
//               text
//             })
//           }
//           value={this.state.text}
//           placeholder="Add your Tasks"
//           style={{
//             borderWidth: 1,
//             borderColor: "#f2f2e1",
//             backgroundColor: "#eaeaea",
//             height: 50,
//             flex: 1,
//             padding: 5
//           }}
//         />
//         <TouchableOpacity>
//           <View
//             style={{
//               height: 50,
//               backgroundColor: "#eaeaea",
//               alignItems: "center",
//               justifyContent: "center"
//             }}
//           >
//             <Button
//               title="Add Task"
//               color="green"
//               onPress={() => this.addTodo(this.state.text, len++)}
//             />
//           </View>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }
// export default connect()(AddTodo);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });

import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text
} from "react-native";
import { connect } from "react-redux";
import { addTodos } from "../actions";

const submit = (values, dispatch) => {
  return dispatch(addTodos(values.task));
};
const renderInput = ({ input: { onChange } }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder="Add new task"
      onChangeText={onChange}
    />
  );
};

const Form = props => {
  const { handleSubmit } = props;
  return (
    <View style={styles.container}>
      <Field name="task" component={renderInput} />
      <TouchableOpacity onPress={handleSubmit(submit)}>
        <Text style={styles.button}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default connect()(
  reduxForm({
    form: "test"
  })(Form)
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    color: "white",
    height: 30,
    lineHeight: 30,
    marginTop: 10,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  container: { padding: 20 },
  input: {
    borderColor: "black",
    borderWidth: 1,
    height: 37,
    alignItems: "center",
    justifyContent: "center"
  }
});
