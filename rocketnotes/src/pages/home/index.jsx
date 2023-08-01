import { FiPlus } from "react-icons/fi"
import { Container, Brand, Menu, Search, Content, NewNote} from "./styles";


import { Header } from "../../components/header"
import { Input } from "../../components/input";
import { Section } from "../../components/section"
import { Note } from "../../components/note"

import { ButtonText } from "../../components/buttonText"




export function Home () {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

    <Header/>

    <Menu>
      <li> <ButtonText title="TODOS" $isActive/> </li>
      <li> <ButtonText title="react" /> </li>
      <li> <ButtonText title="node"/> </li>
    </Menu>


    <Search>
      <Input placeholder="Pesquiser pelo título"/>
    </Search>

    <Content>
      <Section title="minhas notas">
        <Note data={{
        title: "React", 
        tags: [
         {id: "1", name: "react"},
         {id: "2", name: "Rocketseat"}]
      }}
      />
      </Section>

    </Content>


    <NewNote to="/new">
    <FiPlus/>
    Criar nota
    </NewNote>


    </Container>
  )
}