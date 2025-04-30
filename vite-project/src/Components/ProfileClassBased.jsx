import React from "react";

class ProfileClassBased extends React.Component {
  constructor(props) {
    console.log("constructor");
    super();
    this.props = props;
    this.state = {
      count: 0,
      count1: 10,
    };
  }

  componentDidMount() {
    console.log("component mounted");
  }

  componentDidUpdate(prevProps, prevStates) {
    if (this.count == prevStates.count) {
      console.log("count updated");
    }
    console.log("component is re-rendered as props are changing");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    console.log("render");
    function updateCount() {
      this.setState({ count: this.state.count + 1 });
    }

    return (
      <>
        {console.log("jsx class based")}
        <h1>Profile Class Based Components</h1>
        <p>{this.props.name}</p>
        <p>Count: {this.state.count}</p>
        <p>Count1: {this.state.count1}</p>
        <button
          className="border bg-amber-200"
          onClick={updateCount.bind(this)}
        >
          Update
        </button>
      </>
    );
  }
}

export default ProfileClassBased;
