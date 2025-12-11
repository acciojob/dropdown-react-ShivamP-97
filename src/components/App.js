import React, { useState } from "react";
import "./../styles/App.css";

const states = [
  {
    name: "Madhya Pradesh",
    description:
      "Madhya Pradesh, a large state in central India, retains landmarks from eras throughout Indian history.",
    city: [
      {
        name: "Indore",
        description:
          "Indore is a city in west-central India. It’s known for the 7-story Rajwada Palace and the Lal Baag Palace, which date back to Indore’s 19th-century Holkar dynasty.",
        landmarks: [
          {
            name: "Mhow",
            description:
              "Dr. Ambedkar Nagar, commonly known as Mhow, is a cantonment in the Indore district in Madhya Pradesh state of India. It is located 23 kilometres south-west of Indore city, towards Mumbai on the old Mumbai-Agra Road.",
          },
          {
            name: "Dewas",
            description:
              "Dewas is a city in the Malwa region of the Indian state of Madhya Pradesh. The municipality was formerly the seat of two princely states during the British Raj, Dewas Junior state and Dewas Senior state, ruled by the Puar clan of Maratha.",
          },
        ],
      },
      {
        name: "Bhopal",
        description:
          "Bhopal is a city in the central Indian state of Madhya Pradesh. It's one of India’s greenest cities. There are two main lakes, the Upper Lake and the Lower Lake.",
        landmarks: [
          {
            name: "MANIT",
            description:
              "Maulana Azad National Institute of Technology Bhopal is a public technical university located in Bhopal, Madhya Pradesh, India.",
          },
          {
            name: "Berasia",
            description:
              "Berasia is a landmark and a nagar palika in Bhopal district in the state of Madhya Pradesh, India.",
          },
        ],
      },
    ],
  },
  {
    name: "Jharkhand",
    description:
      "Jharkhand is a state in eastern India. It's known for its waterfalls, the elegant Jain temples of Parasnath Hill and the elephants and tigers of Betla National Park.",
    city: [
      {
        name: "Dhanbad",
        description:
          "Dhanbad is the second-most populated city in the Indian state of Jharkhand.",
        landmarks: [
          {
            name: "IIT(ISM) Dhanbad",
            description:
              "Indian Institute of Technology (Indian School of Mines) Dhanbad is a public technical and research university located in Dhanbad, India.",
          },
        ],
      },
    ],
  },
];

function App() {
  const [selectedStateIndex, setSelectedStateIndex] = useState(0);
  const [selectedCityIndex, setSelectedCityIndex] = useState(0);
  const [selectedLandmarkIndex, setSelectedLandmarkIndex] = useState(0);

  const handleStateChange = (e) => {
    const stateIndex = parseInt(e.target.value);
    setSelectedStateIndex(stateIndex);
    setSelectedCityIndex(0); 
    setSelectedLandmarkIndex(0); 
  };

  const handleCityChange = (e) => {
    const cityIndex = parseInt(e.target.value);
    setSelectedCityIndex(cityIndex);
    setSelectedLandmarkIndex(0); 
  };

  const handleLandmarkChange = (e) => {
    const landmarkIndex = parseInt(e.target.value);
    setSelectedLandmarkIndex(landmarkIndex);
  };

  const selectedState = states[selectedStateIndex];
  const selectedCity = selectedState.city[selectedCityIndex];
  const selectedLandmark = selectedCity.landmarks[selectedLandmarkIndex];

  return (
    <div id="main">
      {/* State Dropdown */}
      <select id="state" value={selectedStateIndex} onChange={handleStateChange}>
        {states.map((state, index) => (
          <option key={index} value={index}>
            {state.name}
          </option>
        ))}
      </select>
      <div id="state-title">{selectedState.name}</div>
      <div id="state-description">{selectedState.description}</div>

      {/* City Dropdown */}
      <select id="city" value={selectedCityIndex} onChange={handleCityChange}>
        {selectedState.city.map((city, index) => (
          <option key={index} value={index}>
            {city.name}
          </option>
        ))}
      </select>
      <div id="city-title">{selectedCity.name}</div>
      <div id="city-description">{selectedCity.description}</div>

      {/* Landmark Dropdown */}
      <select
        id="landmark"
        value={selectedLandmarkIndex}
        onChange={handleLandmarkChange}
      >
        {selectedCity.landmarks.map((landmark, index) => (
          <option key={index} value={index}>
            {landmark.name}
          </option>
        ))}
      </select>
      <div id="landmark-title">{selectedLandmark.name}</div>
      <div id="landmark-description">{selectedLandmark.description}</div>
    </div>
  );
}

export default App;
