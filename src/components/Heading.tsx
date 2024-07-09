type HeadingProps = {
    children : string,
}
const Heading = (props:HeadingProps) => {
    return <h2 className="text-gray-500 font-bold">{props.children}</h2>
};

export default Heading;