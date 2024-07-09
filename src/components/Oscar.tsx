import { ReactNode } from "react";

type OscarsProps = {
    children: ReactNode
}
const Oscar = (props:OscarsProps) => {
    return <div>{props.children}</div>
};

export default Oscar;