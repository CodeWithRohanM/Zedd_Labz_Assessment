import React, { useRef } from "react";

const QuestionFive = () => {

    const divRef = useRef(null);

    const handleScrollIntoView = () => {
        divRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return <>

    <h1 className="text-5xl font-bold">Question 5</h1>

        <div className="flex flex-row justify-center w-screen h-screen bg-blue-400">
            <button onClick={handleScrollIntoView} className="bg-red-500 p-2 rounded-md hover:cursor-pointer h-fit">Click into Enter Another Component</button>

        </div>

        <hr></hr>

        <div ref={divRef} style={{ overflow: 'scroll' }} className="flex flex-row justify-center w-screen h-screen bg-blue-400">
            <p className="text-3xl font-bold p-12">You have enetered the other component.</p>
        </div>


    </>
};

export default QuestionFive;