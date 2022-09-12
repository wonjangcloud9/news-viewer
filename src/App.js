import { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  const KEY = process.env.REACT_APP_NEWS_API_KEY;
  const onClick = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr&category=technology&apiKey=${KEY}`,
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
}

export default App;
