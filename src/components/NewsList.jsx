import { useEffect, useState } from "react";
import { newsBaseURL } from "../utils/helper";
import axios from "axios";
import { Button } from "antd";
import NewsCard from "../components/NewsCard";

// import NewsCard from "./components/NewsCard";

const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;

function NewsList({ category }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getNews = async () => {
    const options = {
      params: {
        category: category,
        language: "en",
        country: "ng",
        sort: "top",
        page: "1",
        limit: "20",
      },
      headers: {
        "X-RapidAPI-Key": NEWS_API_KEY,

        "X-RapidAPI-Host": "newsi-api.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.get(`${newsBaseURL}/category`, options);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  if (loading) {
    return <div className="loader"></div>;
  }
  console.log(data);
  return (
    <>
      <div className="App">
        {data.map((item) => (
          <NewsCard {...item} />
        ))}

        <Button type="primary">Button</Button>
      </div>
    </>
  );
}

export default NewsList;
