import { useState } from "react";
import WhiteBoard from "../../components/Whiteboard/WhiteBoard";

const RoomPage = () => {
    const [tool, setTool] = useState("pencil");
    const [color, setColor] = useState("black");

    return (
        <div className="row">
            <h1 className="text-center py-4">White Board Web App{" "} <span className="text-primary">[Users Online: 0]</span></h1>
            <div className="col-md-12 mx-auto gap-3 px-5 mb-3 d-flex align-items-center justify-content-center">
                <div className="d-flex col-md-2 justify-content-center gap-1">
                    <div className="d-flex gap-1">
                        <input type="radio" id="pencil" name="tool" value="pencil" checked={tool==="pencil"} onChange={(e) => setTool(e.target.value)} />
                        <label htmlFor="pencil">Pencil</label>
                    </div>
                    <div className="d-flex gap-1">
                        <input type="radio" id="line" name={tool} value="line" checked={tool==="line"} onChange={(e) => setTool(e.target.value)} />
                        <label htmlFor="line">Line</label>
                    </div>
                    <div className="d-flex gap-1">
                        <input type="radio" id="rect" name={tool} value="rect" checked={tool==="rect"} onChange={(e) => setTool(e.target.value)} />
                        <label htmlFor="rect">Rectangle</label>
                    </div>
                </div>
                <div className="col-md-3 mx-auto">
                    <div className="d-flex align-items-center mx-auto">
                        <label htmlFor="color">Select Color</label>
                        <input type="color" id="color" className="mt-1 ms-3" value={color} onChange={(e) => setColor(e.target.value)} />
                    </div>
                </div>
                <div className="col-md-3 d-flex gap-2">
                    <button className="btn btn-outline-primary mt-1 ">Undo</button>
                    <button className="btn btn-outline-primary mt-1 ">Redo</button>
                </div>
                <div className="col-md-4">
                    <button className="btn btn-danger">Clear Canvas</button>
                </div>
            </div>
            <div className="col-md-10 mx-auto mt-4 canvas-box">
                <WhiteBoard/>
            </div>
        </div>
    )
}

export default RoomPage;