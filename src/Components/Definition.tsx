import axios from 'axios';
import { MouseEvent } from 'react';
import { FullDefinitions } from '../@types/@types';
import { BASE_URL } from '../App';

function Definitions({ definition, setItems }: FullDefinitions) {
  const searchByClick = async (
    e: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>
  ) => {
    const word = (e.target as HTMLSpanElement).innerHTML;
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
  };

  const definitionArr = definition.split(' ');
  return (
    <div className="one-definition">
      {definitionArr.map(definition => {
        return (
          <span
            onClick={e => {
              searchByClick(e);
            }}
          >
            {definition + ' '}
          </span>
        );
      })}
      <hr />
    </div>
  );
}

export default Definitions;