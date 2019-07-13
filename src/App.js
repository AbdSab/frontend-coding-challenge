import React from 'react';
import "./style.scss";
import Layout from './pages/Layout';
import ReposPage from './pages/ReposPage';

function App() {
  return (
    <Layout>
      <ReposPage />
    </Layout>
  );
}

export default App;
