import PageHero from "../components/PageHero";
import { getNewsArticle } from "../data/newsData";
import NewsPage from "./NewsPage";

export default function NewsArticlePage({ slug }: { slug: string }) {
  const article = getNewsArticle(slug);

  if (!article) return <NewsPage />;

  return (
    <>
      <PageHero
        eyebrow={article.category}
        title={article.title}
        description={article.excerpt}
        aside={
          <dl className="page-fact-list">
            <div><dt>Published</dt><dd><time dateTime={article.publishedAt}>{article.displayDate}</time></dd></div>
            <div><dt>Category</dt><dd>{article.category}</dd></div>
            <div><dt>Source</dt><dd>{article.sourceLabel}</dd></div>
          </dl>
        }
      />

      <section className="section section-white">
        <div className="container article-layout">
          <article className="article-body">
            {article.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}

            {article.sourceUrl ? (
              <div className="article-source">
                <span>Source reference</span>
                <a href={article.sourceUrl} target="_blank" rel="noreferrer">{article.sourceLabel} ↗</a>
              </div>
            ) : null}
          </article>

          <aside className="article-aside">
            <strong>Apuk Youth Union in Juba</strong>
            <p>Together for Peace, Unity and Development.</p>
            <a className="text-link" href="/?page=news">← Back to News & Updates</a>
          </aside>
        </div>
      </section>
    </>
  );
}
