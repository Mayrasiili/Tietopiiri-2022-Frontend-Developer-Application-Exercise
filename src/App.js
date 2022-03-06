import React from "react";
import 'antd/dist/antd.css';
import './App.css';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Link, Routes, Route } from "react-router-dom";
import Targetdetail from "./pages/Targetdetail";
import Targetlist from "./pages/Targetlist";


export default function App() {
    const [targetdata,setTargetdata]= React.useState (false);
    const [errorstate, setErrorstate]= React.useState (false);
    React.useEffect (()=>{
        fetch('https://test.tpfons.fi/tpdemo/ext/back/api/v1-0000/donation/targets')
          .then(response => response.json())
          .then(data => setTargetdata(data.giftTargets))
          .catch(e => setErrorstate(true));
    },[])
  return (
    <div>
      <h1 id="appHeader">Tietopiiri 2022 Frontend Developer Application Exercise</h1>
      {errorstate && <div id="errorstateList"> <ExclamationCircleOutlined style={{ fontSize: 200, color: "#ff3061"}} /> <p id="errorstateListText"> We're sorry, an error has occurred </p>
      </div>}
      {(errorstate===false && targetdata) &&
        <Routes>
          <Route path="Target/:targetId" element={<Targetdetail data={targetdata} />} />
          <Route path="/" element={ <Targetlist data={targetdata} /> } />
        </Routes>
        }
        {(errorstate ===false && !targetdata) && <div id="appLoader"> <Spin indicator={<LoadingOutlined style={{ fontSize: 80 }} spin />} /> <p id="appLoaderText"> Loading page, please wait </p> </div>}
    </div>
  );
}
