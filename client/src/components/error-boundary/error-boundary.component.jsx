import React from "react";
import {ErrorImageContainer, ErrorImageOverlay, ErrorImageText} from "./error-boundary.styles";

class ErrorBoundary extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      hasErrored: false
    }
  }
  static getDerivedStateFromError(error) {
    return {
      hasErrored: true
    }
  }
  componentDidCatch(error, errorInfo) {
    console.log(error);
  }

  render() {
    if(this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/lKJiT77.png'/>
          <ErrorImageText>Sorry</ErrorImageText>
        </ErrorImageOverlay>
      );
    }
    else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
