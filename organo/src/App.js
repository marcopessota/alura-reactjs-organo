import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {

  const teams = [
    {label: "Programação", id: 1, "primaryColor": "#57C278", "secondaryColor" : "#D9F7E9"},
    {label: "Front End", id: 2, "primaryColor": "#82CFFA", "secondaryColor" : "#E8F8FF"},
    {label: "Data Science", id: 3, "primaryColor": "#A6D157", "secondaryColor" : "#F0F8E2"},
    {label: "Devops", id: 4, "primaryColor": "#E06B69", "secondaryColor" : "#FDE7E8"},
    {label: "UX e Design", id: 5, "primaryColor": "#DB6EBF", "secondaryColor" : "#FAE9F5"},
    {label: "Mobile", id: 6, "primaryColor": "#FFBA05", "secondaryColor" : "#FFF5D9"},
    {label: "Inovação e Gestão", id: 7, "primaryColor": "#FF8A29", "secondaryColor" : "#FFEEDF"}
  ]


  let [colaborators, setColaborator] = useState([])

  const onAddColaborator = (newColaborator) => {
    setColaborator([...colaborators, newColaborator])
  };

  return (
    <div className="App">
      <Banner />
      <Form teams={teams} onAddColaborator={newColaborator => onAddColaborator(newColaborator)} />
      {teams.map(team => <Team 
        key={team.id} 
        colaborators={colaborators.filter(colaborator => colaborator.team == team.id)} 
        title={team.label} 
        primaryColor={team.primaryColor} 
        secondaryColor={team.secondaryColor} />)}
        <Footer />
    </div>
  );
}

export default App;
