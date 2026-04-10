import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Dashboard from './pages/Dashboard/Dashboard';
import Layout from './Layout/Layout';
import Calendar from './pages/Calendar/Calendar';
import UsersData from './pages/UsersData/UsersData';
// import KanbanBoard from './pages/KanbanBoard/KanbanBoard';


function App() {

  return (
    <div id="dashboard">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>

            <Route path='dashboard' element={<Dashboard />} />

            <Route path='calendar' element={<Calendar />} />

            <Route
              path='kanban-board'
            // element={<KanbanBoard />}
            // element={ }
            />

            <Route
              path='users'
              element={<UsersData />}
            />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
