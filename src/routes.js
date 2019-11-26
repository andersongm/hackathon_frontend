import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Cursos from './pages/Cursos';
import Vagas from './pages/Vagas';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/cursos" component={Cursos} />
            <Route path="/vagas" component={Vagas} />
        </BrowserRouter>
    );
}