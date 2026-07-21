export interface NewsItem {
  title: string;
  link: string;
  pubDate: string;
}

export async function fetchNews(): Promise<NewsItem[]> {
  return [
    {
      title: "OpenAI releases new AI model",
      link: "https://openai.com",
      pubDate: new Date().toISOString(),
    },
    {
      title: "Anthropic announces new features",
      link: "https://anthropic.com",
      pubDate: new Date().toISOString(),
    },
  ];
}