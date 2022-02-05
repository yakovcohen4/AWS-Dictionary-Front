import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../App';
import Definition from './Definition';
import { posList } from '../DataPOS';

function PartOfSpeech() {
  let [PartOfSpeech, setPartOfSpeech] = useState<string | null>(null);
  const [data, setData] = useState<null | any>(null);

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      const res = await axios.get(`${BASE_URL}/part-of-speech/${PartOfSpeech}`);
      console.log(res);
      if (res.status === 200) {
        if (res.data.definitions.length === 0) {
          throw new Error('no result of this word');
        }
        setData(res.data);
      }
      setPartOfSpeech(null);
    } catch (error) {
      console.log(error);
      // setPartOfSpeech(null);
    }
  };

  return (
    <div>
      <form role="navigation" className="primary-navigation">
        <h3 className="headers-h5" id="header-pos">
          Part Of Speech
        </h3>
        <button className="btn-search" onClick={e => handleSubmit(e)}>
          <i className="fas fa-search"></i>
        </button>
        <ul>
          <li>
            Choose Part Of Speech:
            <ul className="dropdown">
              {posList.map((part, i) => {
                return (
                  <li key={i}>
                    <a onClick={() => setPartOfSpeech(part.value)}>
                      {part.key}
                    </a>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
        <span className="part-result">{PartOfSpeech}</span>
      </form>
      {data && (
        <div>
          <div className="word-div">
            The random word: <span className="word">{data.word}</span>
          </div>
          <div className="item">
            <div className="item-pos">[{data.pos}]</div>
            <div className="item-definitions">
              {data.definitions.map((definition: string, index: number) => {
                return (
                  <Definition
                    key={index}
                    definition={definition}
                    // handleSubmit={handleSubmit}
                    setItems={setData}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PartOfSpeech;
