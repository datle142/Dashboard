import { useState } from 'react'
import './App.css'
import {Dashboard} from './route/index'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Default from './pages/Default'
function App() {
  return (    
    <Router>
    <div className="App">
      <Routes>
        {Dashboard.map((r, i) => {
          let Layout = Default;
          let Page = r.component;
          return (
            <Route
              index={i}
              path={r.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </div>
  </Router>
    
  )
}

export default App
