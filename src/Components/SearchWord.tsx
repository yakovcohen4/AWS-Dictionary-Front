import React, { useRef, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../App';
import Definition from './Definition';
import { posList } from '../DataPOS';

function SearchWord() {
  const [word, setWord] = useState<null | string>(null);
  const [Items, setItems] = useState<null | any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  let [PartOfSpeech, setPartOfSpeech] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value);
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement> | React.FormEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    setLoading(true);
    console.log(word);
    try {
      const res = await axios.get(
        `${BASE_URL}/${word!.replace(/[^a-zA-Z ]/g, '')}`
      );
      console.log(res);
      if (res.status === 200) {
        if (res.data.Items.length === 0) {
          throw new Error('no result of this word');
          // throw { status: 404, message: 'no result of this word' };
        }
        setItems(res.data.Items);
      }
    } catch (error) {
      console.log(error);
      // setLoading(false);
    }
    setLoading(false);

    // setWord(null);
  };

  const handleClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      const res = await axios.get(`${BASE_URL}/${word}/${PartOfSpeech}`);
      console.log(res);
      if (res.status === 200) {
        if (res.data.Items.length === 0) {
          throw new Error('no result of this word');
          // throw { status: 404, message: 'no result of this word' };
        }
        setItems(res.data.Items);
      }
    } catch (error) {
      console.log(error);
    }

    // setWord(null);
  };

  return (
    <form id={'form-word'} onSubmit={e => handleSubmit(e)}>
      <h5 className="headers-h5">Search Word</h5>
      {/* <button onClick={e => handleSubmit(e)} className="btn-search">
        <i className="fas fa-search"></i>
      </button> */}
      <div className="search-box">
        <input
          type="text"
          className="input-search"
          placeholder="Type to Search..."
          value={word ? word : ''}
          onChange={e => handleChange(e)}
        ></input>
        <ul className="choose-pos">
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
      </div>

      <button className="search-both" onClick={e => handleClick(e)}>
        search both
      </button>

      {loading && <h2 className="animate">Loading</h2>}
      {Items &&
        Items.map((item: any) => {
          return (
            <div key={item.pos} className="item">
              <div className="item-pos">[{item.pos}]</div>
              <div className="item-definitions">
                {item.definitions.map((definition: string, index: number) => {
                  return (
                    <Definition
                      key={index}
                      definition={definition}
                      // handleSubmit={handleSubmit}
                      setItems={setItems}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
    </form>
  );
}

export default SearchWord;
