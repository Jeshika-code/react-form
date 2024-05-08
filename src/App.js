import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserDetail from "./components/UserDetail";
import User from "./components/User";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<User/>} />
        <Route path="/user-detail" element={<UserDetail/>} />
      </Routes>
    </Router>
  );
}

export default App;
