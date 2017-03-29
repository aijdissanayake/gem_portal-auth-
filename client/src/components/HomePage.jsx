import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';


const HomePage = () => (
  <Card className="container">
  <div>
  <Card className="container">
    <b><CardTitle title="Gem Portal" subtitle="Find your gemstone market" /></b>
  </Card>
  <img className="image" src = "gem.jpg"/>
  </div>
  </Card>
);

export default HomePage;