import React, { useEffect, useState } from "react";

const ThreadList = () => {
  const [threads, setThreads] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // APIからスレッドを取得する
    fetch("https://railway.bulletinboard.techtrain.dev/threads?offset=20")
      .then((response) => response.json())
      .then((data) => setThreads(data))
      .catch((error) => setError(error));
  }, []); // 初回レンダー時にのみ実行

  return (
    <div>
      <header>
        <h1>掲示板</h1>
        <a href="#">スレッドを立てる</a>
      </header>
      <h2>新着スレッド</h2>
      <ul>
        {threads.map((thread) => (
          <li key={thread.id}>{thread.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ThreadList;
