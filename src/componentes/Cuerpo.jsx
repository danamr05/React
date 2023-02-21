import Pins from "./Pins";

function Cuerpo (props) {
    return (
        <main>
            <Pins pins={props.pins}/>
        </main>
    )
}
export default Cuerpo;