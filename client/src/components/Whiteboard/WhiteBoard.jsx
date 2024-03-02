import { useEffect, useState, useLayoutEffect } from "react";
import rough from "roughjs";
import PropTypes from 'prop-types'; // Add PropTypes import

//const roughGenerator = rough.generator();

const WhiteBoard = ({canvasRef, ctxRef, elements, setElements}) => {

   const [isDrawing, setIsDrawing] = useState(false);

  useEffect(()=>{
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctxRef.current = ctx;
  }, [canvasRef, ctxRef]);

  useLayoutEffect (()=>{
    if (elements && elements.length > 0) {
        const roughCanvas = rough.canvas(canvasRef.current);

        elements.forEach((element) => {
            roughCanvas.linearPath(element.path);
        });
    }
  }, [elements, canvasRef]);

  const handleMouseDown = (e) => {
    const {offsetX, offsetY} = e.nativeEvent;
    setElements((prevElements)=>[
      ...prevElements,
      {
        type: "pencil",
        offsetX,
        offsetY,
        path: [[offsetX, offsetY]],
        stroke: "black",
      }
    ]);

    setIsDrawing(true);
  };

  const handleMouseMove = (e) => {
    const {offsetX, offsetY} = e.nativeEvent;
    if(isDrawing){
      const{path} = elements[elements.length-1];
      const newPath = [...path, [offsetX, offsetY]];

      setElements((prevElements) => {
        prevElements.map((ele, index)=>{
          if(index === elements.length - 1){
            return {
              ...ele,
              path: newPath
            };
          }else{
            return ele;
          }
        });
      });
    }
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  return (
    <>
    {JSON.stringify(elements)}
    <canvas ref={canvasRef} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} className=" border border-dark h-100 w-100"></canvas>
    </>
  );
};

WhiteBoard.propTypes = {
    canvasRef: PropTypes.object.isRequired,
    ctxRef: PropTypes.object.isRequired,
    elements: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
        offsetX: PropTypes.number.isRequired,
        offsetY: PropTypes.number.isRequired,
        path: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
        stroke: PropTypes.string.isRequired,
    })).isRequired,
    setElements: PropTypes.func.isRequired,
};

export default WhiteBoard;
