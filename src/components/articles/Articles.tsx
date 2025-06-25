import './articles.css';
import { Element } from 'react-scroll';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa';
import placeholderImage from '../../assets/article-placeholder.svg';

// Define the interface for WordPress article data
interface WordPressArticle {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date: string;
  link: string;
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      media_details?: {
        sizes: {
          medium?: {
            source_url: string;
          };
          thumbnail?: {
            source_url: string;
          };
        };
      };
    }>;
  };
}

const Articles = () => {
  const [articles, setArticles] = useState<WordPressArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          'https://blogs.snehasish-chakraborty.com/wp-json/wp/v2/posts',
          {
            params: {
              _embed: 'wp:featuredmedia',
              _fields: [
                'id',
                'title',
                'excerpt',
                'date',
                'link',
                'featured_media',
                '_links',
                '_embedded',
              ].join(','),
              per_page: 6,
            },
          }
        );
        setArticles(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching articles:', err);
        setError('Failed to load articles. Please try again later.');
        setLoading(false);
      }
    };

    fetchArticles().catch((err) =>
      console.error('Failed to fetch articles:', err)
    );
  }, []);

  // Format date to a more readable format
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Get the optimized image URL from WordPress
  const getOptimizedImageUrl = (article: WordPressArticle): string => {
    const featuredMedia = article._embedded?.['wp:featuredmedia']?.[0];
    return (
      featuredMedia?.media_details?.sizes?.medium?.source_url ||
      featuredMedia?.media_details?.sizes?.thumbnail?.source_url ||
      featuredMedia?.source_url ||
      placeholderImage
    );
  };

  // Handle image load complete
  const handleImageLoad = (articleId: number) => {
    setLoadedImages((prev) => new Set(prev).add(articleId));
  };

  // Handle card click to open article
  const handleCardClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <Element name="article" className="articles-section">
      <div className="section-container">
        <h2 className="articles-title">Latest Articles</h2>
        <p className="articles-subtitle">
          Explore my latest thoughts, tutorials, and insights on technology,
          development, and more.
        </p>

        {loading ? (
          <div className="articles-loading">Loading articles...</div>
        ) : error ? (
          <div className="articles-error">{error}</div>
        ) : (
          <div className="articles-container">
            {articles.map((article) => (
              <div
                key={article.id}
                className="article-card"
                role="link"
                tabIndex="0"
                onClick={() => handleCardClick(article.link)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleCardClick(article.link);
                  }
                }}
              >
                <div className="article-image-container">
                  {/* Placeholder SVG */}
                  <img
                    src={placeholderImage}
                    alt="placeholder"
                    className={`article-image-placeholder ${
                      loadedImages.has(article.id) ? 'loaded' : ''
                    }`}
                  />
                  {/* Actual article image */}
                  <img
                    src={getOptimizedImageUrl(article)}
                    alt={article.title.rendered}
                    className={`article-image-main ${
                      loadedImages.has(article.id) ? 'loaded' : ''
                    }`}
                    loading="lazy"
                    onLoad={() => handleImageLoad(article.id)}
                  />
                  {/* Overlay for hover effect */}
                  <div className="article-image-overlay"></div>
                </div>
                <div className="article-content">
                  <h3
                    className="article-title"
                    dangerouslySetInnerHTML={{ __html: article.title.rendered }}
                  />
                  <div
                    className="article-excerpt"
                    dangerouslySetInnerHTML={{
                      __html: article.excerpt.rendered,
                    }}
                  />
                  <div className="article-meta">
                    <div className="article-date">
                      <FaCalendarAlt className="mr-1" />
                      {formatDate(article.date)}
                    </div>
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="article-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Read More
                      <FaExternalLinkAlt className="article-link-icon" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Element>
  );
};

export default Articles;
