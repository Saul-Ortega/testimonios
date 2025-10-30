import './App.css'
import { hombre1, hombre2, mujer1, mujer2 } from './assets/index.js'
import Testimonio from './components/Testimonio.jsx'

function App() {
  const testimonios = [
    {
      id: 0,
      imageUrl: mujer1,
      name: "Carla Marrero",
      country: "Suecia",
      profession: "Ingeniera en Softgan",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum quia eligendi culpa! Modi nesciunt cupiditate voluptates quod officiis voluptatum, tempora placeat velit quaerat blanditiis expedita ex quibusdam, facilis alias dicta?",
    },
    {
      id: 1,
      imageUrl: hombre1,
      name: "Roberto Aguiar",
      country: "España",
      profession: "Fontanero en Tuberías Pepe",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum quia eligendi culpa! Modi nesciunt cupiditate voluptates quod officiis voluptatum, tempora placeat velit quaerat blanditiis expedita ex quibusdam, facilis alias dicta?",
    },
    {
      id: 2,
      imageUrl: mujer2,
      name: "Cristina Kirchner",
      country: "Argentina",
      profession: "Astronauta en la NASA",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum quia eligendi culpa! Modi nesciunt cupiditate voluptates quod officiis voluptatum, tempora placeat velit quaerat blanditiis expedita ex quibusdam, facilis alias dicta?",
    },
    {
      id: 3,
      imageUrl: hombre2,
      name: "Javier Milei",
      country: "Italia",
      profession: "Leñador en QuitaArboles, S.A.",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum quia eligendi culpa! Modi nesciunt cupiditate voluptates quod officiis voluptatum, tempora placeat velit quaerat blanditiis expedita ex quibusdam, facilis alias dicta?",
    },
  ]

  return (
    <>
      {testimonios.map( testimonio => (
        <Testimonio 
          imageUrl={testimonio.imageUrl}
          name={testimonio.name}
          country={testimonio.country}
          profession={testimonio.profession}
          description={testimonio.description}
        />
      ))}
    </>
  )
}

export default App
