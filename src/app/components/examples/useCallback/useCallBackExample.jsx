import React, { useState, useRef, useEffect, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setDate] = useState({});
    const withOutCallback = useRef(0);
    const withCallback = useRef(0);
    const handleChange = ({ target }) => {
        setDate(prevstate => ({ ...prevstate, [target.name]: target.value }));
     };

    const validateWithOutCallBack = (data) => {
        console.log(data);
     };

    const validateWithCallBack = useCallback((data) => {
        console.log(data);
     }, []);

    useEffect(() => {
        validateWithOutCallBack(data);
        validateWithCallBack(data);
    }, [data]);

    useEffect(() => {
        withOutCallback.current++;
    }, [validateWithOutCallBack]);

    useEffect(() => {
        withCallback.current++;
    }, [validateWithCallBack]);
    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>render withoutCallback: {withOutCallback.current}</p>
            <p>render withCallback: {withCallback.current}</p>
            <label htmlFor="email" className="form-label">email</label>
            <input type="email" name="email" value={data.email || ""} className="form-control" id="email" onChange={handleChange}></input>
        </CardWrapper>
    );
};

export default UseCallBackExample;
