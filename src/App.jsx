import Categories from './components/Categories/Categories'
import Header from './components/Header/Header'
import Sort from './components/Sort/Sort';
import PizzasBlock from './components/PizzasBlock/PizzasBlock';

import './scss/app.scss'

function App() {
  return (
    <div class="wrapper">
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
            <PizzasBlock title="Чизбургер-пицца" price={395} />
            <PizzasBlock title="Мексиканская" price={495} />
            <PizzasBlock title="Острая с колбасой" price={265} />
            <PizzasBlock title="4 сыра" price={695} />
            <PizzasBlock title="Море соблазна" price={345} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App