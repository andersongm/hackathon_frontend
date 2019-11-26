import React from 'react';

import { Container } from './styles';

export default function Cursos() {
  return (
    <Container>
      <br/>
      <ul>
        <li>
          <div>
            <strong>Nodejs</strong>
            <p>Curso de Nodejs para iniciantes</p>
            <button type="submit">Iniciar</button>
          </div>
        </li>
        <li>
          <div>
            <strong>React</strong>
            <p>Curso de React para iniciantes</p>
            <button type="submit">Iniciar</button>
          </div>
        </li>
        <li>
          <div>
            <strong>React Native</strong>
            <p>Curso de React Native para iniciantes</p>
            <button type="submit">Iniciar</button>
          </div>
        </li>
        <li>
          <div>
            <strong>JavaScript</strong>
            <p>Curso de JavaScript para iniciantes</p>
            <button type="submit">Iniciar</button>
          </div>
        </li>
        <li>
          <div>
            <strong>Redux</strong>
            <p>Curso de Redux para iniciantes</p>
            <button type="submit">Iniciar</button>
          </div>
        </li>
        <li>
          <div>
            <strong>Adonis</strong>
            <p>Curso de Adonis para iniciantes</p>
            <button type="submit">Iniciar</button>
          </div>
        </li>
      </ul>
    </Container>
  );
}
