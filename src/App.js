import Card from './components/Card'

function App() {
  return (
    
    
    <div className="wrapper clear">
      <div  style={{display: 'none'}} className="overlay">
        <div className="calculator">
          <h2>Калькулятор доставки</h2>
          
        </div>
      </div>
      


      <header className='d-flex justify-between align-center p-20'>
        <div className="d-flex align-center">
        <img width={60} height={60} src="/img/logo.png" alt="logo" />
        <div className='title'>
          <h3 className='text-uppercase'>Twelve Store</h3>
          <p className='opacity-5'>Твой путь начинается здесь</p>
        </div>
        </div>
        <ul>
          <li>
            <img width={60} height={60} src="./img/calc.png" alt="" />
          </li>
          
        </ul>
      </header>
      <div className="content"> 
      <div className='d-flex align-center justify-between mb-40'>
      <h1 className="">Все кроссовки </h1>
      <div className='search-block d-flex'>
        <img src="/img/search.svg" alt="Search" />
        <input placeholder='Поиск...' />
      </div>
      </div>
      <div className="d-flex">
      <Card />
      <div cаlassName="card">
        <div className="favorite">
        <img src="img/btn-notfav.svg" alt="fav" />
        </div>
        <img width={133} height={112} src="./img/sample.jpg" alt="Sneakers" />
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className='d-flex justify-between align-center'>
          <div className='d-flex flex-column'>
            <span>Цена:</span>
            <b>12 999 руб.</b>
          </div>
          <button className='button'>
            <img width={11} height={11} src="./img/btn-notadd.svg" alt="" />
          </button>
        </div>
        

      </div>
      <div className="card">
        <img width={133} height={112} src="./img/sample.jpg" alt="Sneakers" />
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className='d-flex justify-between align-center'>
          <div className='d-flex flex-column'>
            <span>Цена:</span>
            <b>12 999 руб.</b>
          </div>
          <button className='button'>
            <img width={11} height={11} src="../img/btn-notadd.svg" alt="" />
          </button>
        </div>
      </div>
      <div className="card">
        <img width={133} height={112} src="./img/sample.jpg" alt="Sneakers" />
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className='d-flex justify-between align-center'>
          <div className='d-flex flex-column'>
            <span>Цена:</span>
            <b>12 999 руб.</b>
          </div>
          <button className='button'>
            <img width={11} height={11} src="./img/btn-notadd.svg" alt="" />
          </button>
        </div>
        

      </div>
      </div>


      </div>
    </div>
  );
}

export default App;
