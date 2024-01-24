import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import LineChartComponent from './components/LineChart';
import PieChartComponent from './components/PieChart';
import TableChart from './components/TableChart';

// Create a new QueryClient instance
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="main">
        <div className="side-menu">
          <section className="logo">
            <img src="./assets/Briefcase.png" alt="logo" />
            <img src="./assets/StatBoard.png" alt="logo" />
          </section>
          <section className="side-buttons">
            <button className="btn">
              <img src="./assets/Circled Menu.png" alt="Menu-logo" />Dashboard
            </button>
            <button className="btn active">
              <img src="./assets/Support.png" alt="Support-logo" />Support
            </button>
            <button className="btn active">
              <img src="./assets/Puzzle.png" alt="Puzzle-logo" />Plugin
            </button>
            <button className="btn active">
              <img src="./assets/Help.png" alt="Help-logo" />Help
            </button>
          </section>
          <section className="log-out">
            <button className="logout-btn">
              Logout
              <img src="./assets/Shutdown.png" alt="logo" />
            </button>
          </section>
        </div>
        <div className="Dashboard">
          <section className="profile">
            <h1>
              Good Morning ! <span>&#127774;</span>
            </h1>
            <div className="card">
              <div className="text">
                <h1>John Doe</h1>
                <p>John@doe.com</p>
              </div>
              <img src="./assets/Rectangle 10.png" alt="profile-card" />
            </div>
          </section>
          <section className="Graphs">
            <div className='graphs'>
              <div className='graphdata'>
                <LineChartComponent />
              </div>
              <div className='piechart'>
                <PieChartComponent />
              </div>
            </div>
          </section>
          <section className='Data'>
            <div>
              <TableChart />
            </div>
            <div className='ceo-card'>
              <img src='./assets/Media.png' alt='ceo'></img>
              <h1>John Doe</h1>
              <p>Ceo</p>
              <div>
                <img src='./assets/facebook.png' alt='icon'></img>
                <img src='./assets/instagram.png' alt='icon'></img>
                <img src='./assets/twitter.png' alt='icon'></img>
              </div>
            </div>
          </section>
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default App;
