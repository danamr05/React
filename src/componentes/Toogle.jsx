function Toogle (props) {
    const handleClick = (evt) => {
        evt.preventDefault(); 

        props.setToogle (!props.toogle);
    };
    return ( 
    <button onClick={handleClick}> {props.toogle ? "Dark" : "Light"}</button>
    ) 
}

export default Toogle; 