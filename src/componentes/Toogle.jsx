import PropTypes from "prop-types";
function Toogle(props) {
    const handleClick = (evt, tipo) => {
        evt.preventDefault();
        props.setToogle({ tipo });
    };

    return (
        <>
            <button onClick={(e) => handleClick(e, "previo")}>previo</button>
            <button onClick={(e) => handleClick(e, "siguiente")}>siguiente</button>
        </>

    )
}
Toogle.propTypes = {
    setToogle: PropTypes.func.isRequired
};

export default Toogle;