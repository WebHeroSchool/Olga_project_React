import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import InputItem from '../InputItem/InputItem';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import styles from './App.module.css';

class App extends React.Component {
  state = {
    items: [
      {
        value: 'Пройти модуль React',
        isDone: false
      },
      {
        value: 'Погулять с собакой',
        isDone: true
      },
      {
        value: 'Приготовить ужин',
        isDone: true
      }
    ]
  };

  render() {
    return (
      <div className={styles.wrap}>
        <Card>
          <CardContent>
            <h1 className={styles.title}>
              Важные дела:
            </h1>
  	        <InputItem/>
  	        <ItemList items={this.state.items} />
  	        <Footer count={3} />
          </CardContent>
        </Card>
      </div>
    );
  }
};

export default App;
