import React, { useEffect, useState } from "react";
import { getAllTourData } from "../../ApiService/Api";
import Tour from "./Tour/Tour";
import Loader from "./Loader/Loader";

const Home = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTourData = async () => {
    try {
      const response = await getAllTourData();
      setLoading(false)
      setTours(response);
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchTourData();
    }, 1000);
  }, []);

  if(loading){
    return(
        <main>
        <Loader/>
    </main>
    )
  }

  const removeTour=(id)=>{
    const newTours=tours.filter((tour)=>tour.id !==id)
    setTours(newTours)
  }
  return (
    <section>
      {tours.length === 0 ? (
        <>
          <main>
            <div className="title">
              <h2>no tours left</h2>
              <button className="btn" onClick={() => fetchTourData()}>
                Refresh
              </button>
            </div>
          </main>
        </>
      ) : (
        <>
          <div className="title">
            <h2>Tour Application</h2>
            <div className="underline"></div>
          </div>
          <div>
            {tours.map((tour) => (
              <Tour key={tour.id} {...tour} removeTour={removeTour} />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Home;
