import { CSSProperties } from "react";

type containertype = {
    Twd: string,
    styles: CSSProperties
}

const Container = (props:containertype) => {
    return (
        <div style={props.styles} className={props.Twd}>
            Text content goes here
        </div>
    );
};

export default Container;