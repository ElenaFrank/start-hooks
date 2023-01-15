import React from "react";
import SmallTitle from "../../common/typografy/smallTitle";

const withLogin = (Component) => (props) => {
    const isLogin = localStorage.getItem("auth");
    return (
    <>
    {isLogin ? <Component {...props} /> : <SmallTitle>auth</SmallTitle>}
    </>
    );
};

export default withLogin;
// eslint-disable-next-line react/display-name
// const someFunc = (Component) => {
//     return otherFunc(props) {
//         ?isLogin ? < Component {props} : ""
//     }
// }
