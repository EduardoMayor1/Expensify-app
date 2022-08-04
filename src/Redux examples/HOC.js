import React from "react";
import ReactDOM from "react-dom";

// Higher order component - a component that renders another component
const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>


)
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            <p>This is high authority Info Do not share</p>
            <WrappedComponent {...props} />
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)



ReactDOM.render(<AdminInfo info="there are the details" />, document.getElementById('app'))