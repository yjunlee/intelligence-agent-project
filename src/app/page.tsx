type NewsItem = {
  title: string;
  link: string;
  pubDate: string;
};

async function getNews() {
  const res = await fetch("http://localhost:3000/api/news", {
    cache: "no-store",
  });

  return res.json();
}

export default async function Home() {
  const news = await getNews();

  return (
    <main style={{ padding: "40px" }}>
      <h1>AI News</h1>

      {news.data.map((item: NewsItem) => (
        <div
          key={item.link}
          style={{
            marginBottom: "20px",
            borderBottom: "1px solid #ddd",
            paddingBottom: "10px",
          }}
        >
          <h2>{item.title}</h2>

          <p>{item.pubDate}</p>

          <a href={item.link} target="_blank">
            기사 보기
          </a>
        </div>
      ))}
    </main>
  );
}