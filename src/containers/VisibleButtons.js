import { connect } from "react-redux";
import { setVisibilityFilter } from "../actions";
import Footer from "../components/Footer";

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  setVisibilityFilter: filter => dispatch(setVisibilityFilter(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
