import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const PrevStateExample = () => {
    const prevState = useRef("");
    const [otherState, setOtherState] = useState("false");

    const toggleStateOther = () => {
        setOtherState(prevState => prevState === "false" ? "true" : "false");
    };

    useEffect(() => {
        prevState.current = otherState;
    }, [otherState]);
    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <Divider />
            <p>prev state: {prevState.current}</p>
            <p>other State: {otherState}</p>
            <button className="btn btn-primary" onClick={toggleStateOther}>Toggle</button>
        </CardWrapper>
    );
};

export default PrevStateExample;
