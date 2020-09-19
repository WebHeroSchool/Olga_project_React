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
        isDone: false,
        id: 1
      },
      {
        value: 'Погулять с собакой',
        isDone: true,
        id: 2
      },
      {
        value: 'Приготовить ужин',
        isDone: true,
        id: 3
      } 
    ],
    count: 6
  };

  onClickDone = (id) => {
    const newItemList = this.state.items.map((item) => {
      const newItem = { ...item };

      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }

      return newItem;
    });

    this.setState({ items: newItemList });
  };
  
  onClickDelete = (id) => {
     const removeItem = this.state.items.filter((item) => item.id !== id);
     this.setState({ items: removeItem});
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
  	        <ItemList
              items={this.state.items}
              onClickDone={this.onClickDone}
              onClickDelete={this.onClickDelete}
             />
  	        <Footer count={this.state.count} />
          </CardContent>
        </Card>
      </div>
    );
  }
};

export default App;
