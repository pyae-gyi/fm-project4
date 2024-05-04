import iconReaction from "../assets/images/icon-reaction.svg";
import iconMemory from "../assets/images/icon-memory.svg";
import iconVerbal from "../assets/images/icon-verbal.svg";
import iconVisual from "../assets/images/icon-visual.svg";
import LilBox from "./LilBox";
function App() {
  return (
    <div className="md:flex md:items-center md:justify-center h-screen ">
      <div className="container max-w-[800px] flex flex-col text-white md:flex-row ">
        <div className="md:relative md:-right-4 flex-1 bg-blue-500 flex flex-col items-center rounded-b-[30px] md:rounded-[30px] space-y-5 p-5 md:p-9 text-center">
          <p className="font-bold text-gray-200">Your result</p>
          <div className="w-[10.5rem] aspect-square bg-gradient-to-b from-blue-950  to-[rgba(30, 58, 138, 0.2)] bg-opacity-30 rounded-full flex items-center justify-center">
            <div className="text-center space-y-2">
              <p className="text-7xl font-extrabold">76</p>
              <p className="text-gray-200">of 100</p>
            </div>
          </div>
          <div className="text-center space-y-1">
            <p className=" font-bold text-2xl">Great</p>
            <p className=" text-gray-200 font-normal text-sm">
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </div>
        <div className="flex-1 space-y-5 p-5 md:p-9 md:pr-6 md:rounded-r-[30px] md:shadow-xl">
          <p className="text-blue-950 font-bold">Summary</p>
          <div className=" space-y-4">
            <LilBox iconLocation={iconReaction} label="Reaction" score="80" />
            <LilBox iconLocation={iconMemory} label="Memory" score="92" />
            <LilBox iconLocation={iconVerbal} label="Verbal" score="61" />
            <LilBox iconLocation={iconVisual} label="Visual" score="72" />
          </div>
          <button className="bg-blue-950 w-full text-white py-3 rounded-full font-bold">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
