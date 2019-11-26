import React from 'react';

import { Container } from './styles';

export default function Vagas() {
  return (
    <Container>
      <br/>
      <ul>
        <li>
          <div>
            <strong>Dev Frontend</strong>
            <p>Estágio na empresa ABC. Conhecimentos em HTML, CSS e React</p>
            <button type="submit">Candidatar</button>
          </div>
        </li>
        <li>
          <div>
            <strong>Dev Backend</strong>
            <p>Conhecimentos em Nodejs, Sequelize e Express</p>
            <button type="submit">Candidatar</button>
          </div>
        </li>
        <li>
          <div>
            <strong>React Native</strong>
            <p>Curso de React Native para iniciantes</p>
            <button type="submit">Iniciar</button>
          </div>
        </li>
      </ul>
    </Container>
  );
}
