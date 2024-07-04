import React, { useState } from "react";
import MessageGame from "./MessageGame";

const FormGame = () => {
  const [answers, setAnswers] = useState({
    name: "",
    gender: "",
    genderIdentify: "",
    species: "",
    location: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const regex = /^[A-Za-z]{3,}( [A-Za-z]+)?$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      answers.name.length >= 3 &&
      regex.test(answers.name) &&
      answers.gender &&
      answers.genderIdentify &&
      answers.location &&
      answers.location
    ) {
      setShow(true);
      setError(false);
    } else {
      setShow(false);
      setError(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <h2 className="text-center my-8 font-bold text-3xl">Quiz</h2>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Name:
          </label>
          <input
            type="text"
            value={answers.name}
            onChange={(e) => setAnswers({ ...answers, name: e.target.value })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
        <div>
          <p className="block mb-2 text-sm font-medium text-gray-900">
            Select your gender
          </p>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="gender1"
              name="gender"
              value="Male"
              checked={answers.gender === "Male"}
              onChange={(e) =>
                setAnswers({ ...answers, gender: e.target.value })
              }
              className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
            />
            <label
              htmlFor="gender1"
              className="block ms-2  text-sm font-medium text-gray-900"
            >
              Male
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="gender2"
              name="gender"
              value="Female"
              checked={answers.gender === "Female"}
              onChange={(e) =>
                setAnswers({ ...answers, gender: e.target.value })
              }
              className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
            />
            <label
              htmlFor="gender2"
              className="block ms-2  text-sm font-medium text-gray-900"
            >
              Female
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="gender3"
              name="gender"
              value="Other"
              checked={answers.gender === "Other"}
              onChange={(e) =>
                setAnswers({ ...answers, gender: e.target.value })
              }
              className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
            />
            <label
              htmlFor="gender3"
              className="block ms-2  text-sm font-medium text-gray-900"
            >
              Other
            </label>
          </div>
        </div>
        <div className="mb-5">
          <p className="block mb-2 text-sm font-medium text-gray-900">
            What gender do you identify with?{" "}
          </p>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="genderP1"
              name="genderPrefer"
              value="Male"
              checked={answers.genderIdentify === "Male"}
              onChange={(e) =>
                setAnswers({ ...answers, genderIdentify: e.target.value })
              }
              className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
            />
            <label
              htmlFor="genderP1"
              className="block ms-2  text-sm font-medium text-gray-900"
            >
              Male
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="genderP2"
              name="genderPrefer"
              value="Female"
              checked={answers.genderIdentify === "Female"}
              onChange={(e) =>
                setAnswers({ ...answers, genderIdentify: e.target.value })
              }
              className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
            />
            <label
              htmlFor="genderP2"
              className="block ms-2  text-sm font-medium text-gray-900"
            >
              Female
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="genderP3"
              name="genderPrefer"
              value="Genderless"
              checked={answers.genderIdentify === "Genderless"}
              onChange={(e) =>
                setAnswers({ ...answers, genderIdentify: e.target.value })
              }
              className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
            />
            <label
              htmlFor="genderP3"
              className="block ms-2  text-sm font-medium text-gray-900"
            >
              Genderless
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="genderP4"
              name="genderPrefer"
              value="Unknown"
              checked={answers.genderIdentify === "Unknown"}
              onChange={(e) =>
                setAnswers({ ...answers, genderIdentify: e.target.value })
              }
              className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
            />
            <label
              htmlFor="genderP4"
              className="block ms-2  text-sm font-medium text-gray-900"
            >
              Unknown
            </label>
          </div>
        </div>
        <div className="mb-5">
          <p className="block mb-2 text-sm font-medium text-gray-900">
            What species do you identify with?{" "}
          </p>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="species1"
              name="species"
              value="Human"
              checked={answers.species === "Human"}
              onChange={(e) =>
                setAnswers({ ...answers, species: e.target.value })
              }
              className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
            />
            <label
              htmlFor="species1"
              className="block ms-2  text-sm font-medium text-gray-900"
            >
              Human
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="species2"
              name="species"
              value="Alien"
              checked={answers.species === "Alien"}
              onChange={(e) =>
                setAnswers({ ...answers, species: e.target.value })
              }
              className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
            />
            <label
              htmlFor="species2"
              className="block ms-2  text-sm font-medium text-gray-900"
            >
              Alien
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="species3"
              name="species"
              value="Mythological Creature"
              checked={answers.species === "Mythological Creature"}
              onChange={(e) =>
                setAnswers({ ...answers, species: e.target.value })
              }
              className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
            />
            <label
              htmlFor="species3"
              className="block ms-2  text-sm font-medium text-gray-900"
            >
              Mythological Creature
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="species4"
              name="species"
              value="Humanoid"
              checked={answers.species === "Humanoid"}
              onChange={(e) =>
                setAnswers({ ...answers, species: e.target.value })
              }
              className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
            />
            <label
              htmlFor="species4"
              className="block ms-2  text-sm font-medium text-gray-900"
            >
              Humanoid
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="species5"
              name="species"
              value="Robot"
              checked={answers.species === "Robot"}
              onChange={(e) =>
                setAnswers({ ...answers, species: e.target.value })
              }
              className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
            />
            <label
              htmlFor="species5"
              className="block ms-2  text-sm font-medium text-gray-900"
            >
              Robot
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="species6"
              name="species"
              value="Disease"
              checked={answers.species === "Disease"}
              onChange={(e) =>
                setAnswers({ ...answers, species: e.target.value })
              }
              className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
            />
            <label
              htmlFor="species6"
              className="block ms-2  text-sm font-medium text-gray-900"
            >
              Disease
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="species7"
              name="species"
              value="Cronenberg"
              checked={answers.species === "Cronenberg"}
              onChange={(e) =>
                setAnswers({ ...answers, species: e.target.value })
              }
              className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
            />
            <label
              htmlFor="species7"
              className="block ms-2  text-sm font-medium text-gray-900"
            >
              Cronenberg
            </label>
          </div>
        </div>
        <div className="mb-5">
          <p className="block mb-2 text-sm font-medium text-gray-900">
            Which location is your favorite?{" "}
          </p>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="location1"
              name="location"
              value="Earth"
              checked={answers.location === "Earth"}
              onChange={(e) =>
                setAnswers({ ...answers, location: e.target.value })
              }
              className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
            />
            <label
              htmlFor="location1"
              className="block ms-2  text-sm font-medium text-gray-900"
            >
              Earth
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="location2"
              name="location"
              value="Out of the earth"
              checked={answers.location === "Out of the earth"}
              onChange={(e) =>
                setAnswers({ ...answers, location: e.target.value })
              }
              className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
            />
            <label
              htmlFor="location2"
              className="block ms-2  text-sm font-medium text-gray-900"
            >
              Out of the earth
            </label>
          </div>
        </div>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full mb-8 sm:w-auto px-5 py-2.5 text-center">
          Send Answers
        </button>
        {error && (
          <div
            className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50"
            role="alert"
          >
            <svg
              className="flex-shrink-0 inline w-4 h-4 me-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <div>
              <span className="font-medium">Error!</span> Please verify your information again.
            </div>
          </div>
        )}
        {show && <MessageGame answers={answers}/>}
      </form>
    </>
  );
};

export default FormGame;
