import React, { useState,useReducer } from "react";
import "./../styles/App.css";


const states = [
  {
    name: "Madhya Pradesh",
    description: "Madhya Pradesh, a large state in central India, retains landmarks from eras throughout Indian history.",
    city: [
      {
        name: "Indore",
        description: "Indore is a city in west-central India. It's known for the 7-story Rajwada Palace and the Lal Baag Palace, which date back to Indore's 19th-century Holkar dynasty.",
        landmarks: [
          {
            name: "Mhow",
            description: "Dr. Ambedkar Nagar, commonly known as Mhow, is a cantonment in the Indore district in Madhya Pradesh state of India. It is located 23 kilometres south-west of Indore city, towards Mumbai on the old Mumbai-Agra Road.",
          },
          {
            name: "Dewas",
            description: "Dewas is a city in the Malwa region of the Indian state of Madhya Pradesh. The municipality was formerly the seat of two princely states during the British Raj, Dewas Junior state and Dewas Senior state, ruled by the Puar clan of Maratha.",
          },
        ],
      },
      {
        name: "Bhopal",
        description: "Bhopal is a city in the central Indian state of Madhya Pradesh. It's one of India's greenest city. There are two main lakes, the Upper Lake and the Lower Lake.",
        landmarks: [
          {
            name: "MANIT",
            description: "Maulana Azad National Institute of Technology Bhopal is a public technical university located in Bhopal, Madhya Pradesh, India.",
          },
          {
            name: "Berasia",
            description: "Berasia is a landmark and a nagar palika in Bhopal district in the state of Madhya Pradesh, India.",
          },
        ],
      },
      {
        name: "Gwalior",
        description: "Gwalior is a city in the central Indian state of Madhya Pradesh. It's known for its palaces and temples, including the Sas Bahu Ka Mandir intricately carved Hindu temple.",
        landmarks: [
          {
            name: "Ajaypur",
            description: "Little less known city Ajaypur.",
          },
        ],
      },
    ],
  },
  {
    name: "Jharkhand",
    description: "Jharkhand is a state in eastern India. It's known for its waterfalls, the elegant Jain temples of Parasnath Hill and the elephants and tigers of Betla National Park.",
    city: [
      {
        name: "Dhanbad",
        description: "Dhanbad is the second-most populated city in the Indian state of Jharkhand. It ranks as the 33rd largest city in India and is the 42nd largest million-plus urban agglomeration in India.",
        landmarks: [
          {
            name: "IIT(ISM) Dhanbad",
            description: "Indian Institute of Technology (Indian School of Mines) Dhanbad is a public technical and research university located in Dhanbad, India.",
          },
          {
            name: "Hirapur",
            description: "Hirapur is a census landmark in Balaghat district in the Indian state of Madhya Pradesh.",
          },
        ],
      },
      {
        name: "Wasseypur",
        description: "Wasseypur is a neighbourhood in the city of Dhanbad in Dhanbad Sadar subdivision of Dhanbad district in the state of Jharkhand in India.",
        landmarks: [
          {
            name: "Pandey muhalla",
            description: "Located behind the dhanbad junction is must visit place.",
          },
          {
            name: "MPI Hall",
            description: "Space for everyone.",
          },
        ],
      },
      {
        name: "Hazaribagh",
        description: "Hazaribagh is a city and a municipal corporation in Hazaribagh district in the Indian state of Jharkhand. It is the divisional headquarters of North Chotanagpur division.",
        landmarks: [
          {
            name: "Shaheed Nirmal Mahto Park",
            description: "Famous for its giant dinosaur structure.",
          },
          {
            name: "Gandhi Maidan",
            description: "Ideal for conduction major events.",
          },
        ],
      },
    ],
  },
  {
    name: "Assam",
    description: "Assam is a state in northeastern India known for its wildlife, archeological sites and tea plantations.",
    city: [
      {
        name: "Guwahati",
        description: "Guwahati is a sprawling city beside the Brahmaputra River in the northeast Indian state of Assam. It’s known for holy sites like the hilltop Kamakhya Temple.",
        landmarks: [
          {
            name: "Ganesh Guri",
            description: "Famous because of PVR city center.",
          },
          {
            name: "Kalyani Nagar",
            description: "Located near famous Lakshmi Nagar.",
          },
        ],
      },
      {
        name: "Dimapur",
        description: "Dimapur is a city in Nagaland, India. It is the most populous city of Nagaland and also the most densely populated city in the state with an estimated population of about 250,000.",
        landmarks: [
          {
            name: "City Tower",
            description: "Giant Tower standing by the road since history.",
          },
          {
            name: "Sunday Market",
            description: "Famous for its weekend Sale on all items.",
          },
        ],
      },
      {
        name: "Tezpur",
        description: "Tezpur is a landmark and urban agglomeration in Sonitpur district, Assam state, India. It is located on the banks of the river Brahmaputra.",
        landmarks: [
          {
            name: "Bamuni Hills",
            description: "Best location for photoshoots.",
          },
          {
            name: "Bhujkhowa Bazar",
            description: "Central Market for Tezpur.",
          },
        ],
      },
    ],
  },
  {
    name: "Bihar",
    description: "Bihar is a state in East India, bordering Nepal. It is divided by the River Ganges, which floods its fertile plains.",
    city: [
      {
        name: "Patna",
        description: "Patna is an ancient city that sprawls along the south bank of the Ganges River in Bihar, northeast India.",
        landmarks: [
          {
            name: "Sonpur",
            description: "Sonpur is a city and sub-division in the Indian state of Bihar, situated on the banks of the River Gandak and Ganges River in the Saran District.",
          },
          {
            name: "Maner",
            description: "Maner also spelled Maner or Maner Sharif, is a satellite landmark in Patna Metropolitan Region.",
          },
        ],
      },
      {
        name: "Gaya",
        description: "Gaya is a holy city beside the Falgu River, in the northeast Indian state of Bihar.",
        landmarks: [
          {
            name: "Bakraur",
            description: "Bakraur, sometimes called Bakrour, is a village located slightly east of Bodh Gaya.",
          },
          {
            name: "Barachatti",
            description: "Barachatti is a block in the Gaya district of Bihar, India.",
          },
        ],
      },
      {
        name: "Darbhanga",
        description: "Darbhanga is a city and Municipal Corporation in the Indian state of Bihar.",
        landmarks: [
          {
            name: "Singhwara",
            description: "Famous for its Groundnut Market.",
          },
          {
            name: "Jale",
            description: "Famous for its roasted seeds market.",
          },
        ],
      },
    ],
  },
];



function App() {
  // Default to the first State, City, and Landmark
  const [selectedStateIndex, setSelectedStateIndex] = useState(0);
  const [selectedCityIndex, setSelectedCityIndex] = useState(0);
  const [selectedLandmarkIndex, setSelectedLandmarkIndex] = useState(0);

  const handleStateChange = (e) => {
    const stateIndex = parseInt(e.target.value);
    setSelectedStateIndex(stateIndex);
    setSelectedCityIndex(0); // reset city
    setSelectedLandmarkIndex(0); // reset landmark
  };

  const handleCityChange = (e) => {
    const cityIndex = parseInt(e.target.value);
    setSelectedCityIndex(cityIndex);
    setSelectedLandmarkIndex(0); // reset landmark
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
