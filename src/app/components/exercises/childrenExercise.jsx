import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const ChildrenExercise = () => {
    const BoxOfElements = ({ children }) => {
        let number = 0;
        console.log(children);
        return React.Children.map(children, child => {
            number++;
            console.log(number);
           return React.cloneElement(child, { ...child.props, number: number });
        });
    };

    BoxOfElements.propTypes = {
        children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    };

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>

            <BoxOfElements>
                <Component />
                <Component />
                <Component />
            </BoxOfElements>

        </CollapseWrapper>
    );
};

const Component = ({ number }) => {
    return <div>Компонент списка {number}</div>;
};
Component.propTypes = {
    number: PropTypes.number
};

export default ChildrenExercise;
