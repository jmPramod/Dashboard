import React from 'react';
import './home.scss';
import FirstTopBox from '../../components/TopBox';
import ChatBox from '../../components/chatBox';
import { barChatBoxRevenue, chatBoxData } from '../../data';
import BarChatBox from '../../components/BarChatBox';
import PieChartBox from '../../components/PieChartBox';
const Home = () => {
  return (
    <div className="home">
      <div className="box1 box">
        <FirstTopBox />
      </div>
      <div className="box2 box">
        <ChatBox {...chatBoxData} />
      </div>
      <div className="box3 box">
        <ChatBox {...chatBoxData} />
      </div>
      <div className="box4 box">
        <PieChartBox />
      </div>
      <div className="box5 box">
        <ChatBox {...chatBoxData} />
      </div>
      <div className="box6 box">
        <ChatBox {...chatBoxData} />
      </div>
      <div className="box7 box">7</div>
      <div className="box8 box">
        <BarChatBox {...barChatBoxRevenue} />
      </div>
      <div className="box9 box">
        {' '}
        <BarChatBox {...barChatBoxRevenue} />
      </div>
    </div>
  );
};

export default Home;
