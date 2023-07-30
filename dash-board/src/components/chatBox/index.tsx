import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import { ResponsiveContainer, LineChart, Line, Tooltip } from 'recharts';
import { types } from 'util';
type ChatProps = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chatData: object[];
};

const ChatBox = (props: ChatProps) => {
  console.log('props2', props);

  return (
    <div className="chatBox">
      <div className="boxInfo">
        <div className="title">
          <div className="icon">{props.icon}</div>
          <div className="topTitle">{props.title}</div>
        </div>
        <h1>{props.number}</h1>
        <Link to={'/'} style={{ color: props.color }}>
          view all
        </Link>
      </div>
      <div className="chatInfo">
        <div className="chat">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chatData}>
              <Tooltip
                cursor={false}
                contentStyle={{
                  backgroundColor: 'transparent',
                  border: 'none',
                }}
                labelStyle={{ display: 'none' }}
                position={{ x: 10, y: 60 }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="text">
          <div
            className="percentage"
            style={{ color: props.percentage < 0 ? 'tomato' : 'green' }}
          >
            {props.percentage}%
          </div>
          <div className="duration">month</div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
