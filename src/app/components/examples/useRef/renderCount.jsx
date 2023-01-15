import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const RenderCountExample = () => {
    const renderCount = useRef(0);
    const [otherState, setOtherState] = useState(false);

    const toggleStateOther = () => {
        setOtherState(!otherState);
    };

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    });
    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <Divider />
            <p>{renderCount.current}</p>
            <button className="btn btn-primary" onClick={toggleStateOther}>Toggle</button>
        </CardWrapper>
    );
};

export default RenderCountExample;
