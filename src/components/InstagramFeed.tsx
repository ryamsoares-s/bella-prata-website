import Image from "next/image";

const posts = [
  {
    imageUrl: "/images/brinco.png",
    postUrl: "https://www.instagram.com/pratasbella1/p/DGv1JnEv1GO/",
  },
  {
    imageUrl: "/images/colar.png",
    postUrl: "https://www.instagram.com/pratasbella1/p/DIM8wSfvwQi/",
  },
  {
    imageUrl: "/images/pulseira.png",
    postUrl: "https://www.instagram.com/pratasbella1/p/DDiKlRSvmOo/",
  },
];

export function InstagramFeed() {
  return (
    <section className="instagram-section" id="instagram">
      <div className="container">
        <div className="instagram-header">
          <h2>Nossos Destaques</h2>
        </div>
        <div className="instagram-grid">
          {posts.map((post, index) => (
            <a
              href={post.postUrl}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-post"
            >
              <Image
                src={post.imageUrl}
                alt={`Postagem ${index + 1}`}
                width={400}
                height={400}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
