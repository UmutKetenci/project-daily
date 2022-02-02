import "./App.css";
import useFetch from "./utils/useFetch";
import Person from "./components/Person";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

function App() {
  const { data, loading } = useFetch(
    "https://api.github.com/users/john-smilga/followers?per_page=100"
  );
  const [page, setPage] = useState(0);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    if (loading) return;
    setPeople(data[page]);
  }, [loading, page]);
  return (
    <section className="section center">
      <div className="section-title">
        <h1>Pagination</h1>
      </div>
      <main className="following-people">
        {people
          ? people.map((person) => {
              return <Person key={person.id} {...person}></Person>;
            })
          : "Loading..."}
        {loading ? (
          ""
        ) : (
          <div className="btn-container">
            {data.map((item, index) => {
              return (
                <button
                  onClick={() => {
                    setPage(index);
                  }}
                  key={index}
                  className="page-btn"
                >
                  {index}
                </button>
              );
            })}
          </div>
        )}
      </main>
    </section>
  );
}

export default App;
