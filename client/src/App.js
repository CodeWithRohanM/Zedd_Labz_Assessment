import React from "react";
import ClassComponent from "./Components/ClassComponent";
import QuestionTwo from "./Components/QuestionTwo";
import QuestionThree from "./Components/QuestionThree";
import QuestionFive from "./Components/QuestionFive";
import QuestionSix from "./Components/QuestionSix";
import FunctionalComponent from "./Components/FunctionalComponent.tsx";
import QuestionFour from "./Components/QuestionFour";

const App = () => {
  return <>

    <section className="flex flex-col w-screen h-screen bg-blue-400">

      <h1 className="text-5xl font-bold">Question 1</h1>

      <ClassComponent />

      <hr></hr>

        <FunctionalComponent />

    </section>



    <hr className="border border-black w-full"></hr>


    <section className="flex flex-col w-screen h-screen bg-blue-400">
      <h1 className="text-5xl font-bold">Question 2</h1>
      <QuestionTwo />
    </section>

    <hr className="border border-black w-full"></hr>


    <section className="flex flex-col w-screen h-screen bg-blue-400">
      <h1 className="text-5xl font-bold">Question 3</h1>
      <QuestionThree />
    </section>

    <section className="flex flex-col w-screen h-screen bg-blue-400">
      <h1 className="text-5xl font-bold">Question 4</h1>
      <QuestionFour />
    </section>

    <hr className="border border-black w-full"></hr>

    <QuestionFive />

    <hr className="border border-black w-full"></hr>


    <section className="flex flex-col  w-screen h-screen bg-blue-400">
      <h1 className="text-5xl font-bold">Question 6</h1>
      <QuestionSix />
    </section>



  </>
};

export default App;