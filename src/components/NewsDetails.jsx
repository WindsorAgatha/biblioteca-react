import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function NewsDetails() {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setNotFound(false);
    setError(null);

    fetch(`http://localhost:5032/api/News/${id}`)
      .then((res) => {
        if (!res.ok) {
          if (res.status === 404) throw new Error("NOT_FOUND");
          throw new Error(`HTTP ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (!mounted) return;
        setNews(data || null);
      })
      .catch((err) => {
        if (!mounted) return;
        if (err.message === "NOT_FOUND") setNotFound(true);
        else setError(err.message || "Erro ao carregar notícia");
        setNews(null);
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [id]);

  const formatDate = (iso) => {
    try {
      return new Date(iso).toLocaleString();
    } catch {
      return iso;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <span className="text-gray-600">Carregando notícia...</span>
      </div>
    );
  }

  if (notFound || !news) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-2xl font-bold text-red-600 mb-2">Notícia não encontrada</h1>
        {error && <p className="text-sm text-red-500">{error}</p>}
        <Link to="/noticias" className="mt-4 text-blue-600 hover:underline">
          Voltar às notícias
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-white shadow rounded-lg p-6 my-6 font-sans">
      <h1 className="text-2xl font-semibold mb-2">{news.title}</h1>
      <div className="text-sm text-gray-500 mb-4">
        {formatDate(news.publishedAt)} {news.authorName ? `· ${news.authorName}` : ""}
      </div>

      {news.image && (
        <div className="mb-4">
          <img src={news.image} alt={news.title} className="w-full h-auto rounded-md object-cover" />
        </div>
      )}

      <div className="prose max-w-none text-gray-800 whitespace-pre-line mb-6">
        {news.content}
      </div>

      <div className="text-sm text-gray-700 space-y-1 mb-4">
        <div>
          <span className="font-medium">ID: </span>
          <span>{news.id}</span>
        </div>
        <div>
          <span className="font-medium">Author ID: </span>
          <span>{news.authorId ?? "N/A"}</span>
        </div>
        <div>
          <span className="font-medium">Published At: </span>
          <span>{formatDate(news.publishedAt)}</span>
        </div>
      </div>

      <div className="flex gap-3">
        
        <Link to="/noticias" className="text-sm text-gray-600 hover:underline">
          Voltar às notícias
        </Link>
      </div>
    </div>
  );
}