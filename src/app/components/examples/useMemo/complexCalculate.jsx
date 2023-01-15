import React, { useState, useEffect, useMemo } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

function factorial(n) {
      return n ? n * factorial(n - 1) : 1;
}
function runFactorial(n) {
    console.log("ran factorial");
    return factorial(n);
}

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);
    const [otherState, setOtherState] = useState(false);

    const colorButton = otherState ? "primary" : "secondary";

    useEffect(() => {
        console.log("render color");
    }, [colorButton]);
    const fact = useMemo(() => runFactorial(value), [value]);

    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <p>Value: {value}</p>
                <p>result fact: {fact}</p>
                <button
                    className="btn btn-primary mx-2"
                    onClick={() => setValue(prevstate => prevstate + 10)}
                >
                    +
                </button>
                <button
                    className="btn btn-primary mx-2"
                    onClick={() => setValue(prevstate => prevstate - 10)}
                >
                    -
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button className={"btn ms-md-2 btn-" + colorButton} onClick={() => setOtherState(!otherState)}>
                    color
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
