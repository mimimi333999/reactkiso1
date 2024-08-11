import React, { useEffect, useState } from "react";

const ThreadList = () => {
  const [threads, setThreads] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // APIからスレッドを取得する
    fetch("https://railway.bulletinboard.techtrain.dev/threads?offset=20")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setThreads(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []); // 初回レンダー時にのみ実行

  return (
    <div>
      <h2>スレッド一覧</h2>
      <ul>
        {threads.map((thread) => (
          <li key={thread.id}>{thread.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ThreadList;
