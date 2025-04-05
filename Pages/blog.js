import fetching from "../data/index.js";
let posts = [];

fetching("posts")
  .then((data) => {
    for (var i = 0; i < data.posts.length; i++) {
      posts.push(data.posts[i]);
    }
  })
  .catch((err) => alert(err));

export default function BlogPage() {
  return `
        <div class="blog-page">
        <section class="blog-title">
          <h2>Blog</h2>
        </section>
        <section class="blog-container">
        <div class="blog-posts">
          ${posts.map((post) => {
            return `
              <div class="blog-post">
              <div class="post-header">
                <a href="#" class="post-image-link">
                  <div class="date-badge">
                    <span class="day">${20 + post.id}</span>
                    <span class="month-year">Jan 2025</span>
                  </div>
                  <img
                    src=${post.image}
                    alt="Winter Dress Inspiration"
                    class="post-image"
                  />
                </a>
              </div>
                <div class="post-content">
                <a href="#/post/${post.id}" class="post-title-link">
                  <h2>${post.title}</h2>
                </a>
                <p class="post-excerpt">${post.description}</p>
                <p class="post-meta">
                  By&nbsp;Admin&nbsp;|&nbsp;StreetStyle&nbsp;,&nbsp;Fashion&nbsp;,Couple&nbsp;|&nbsp;8&nbsp;Comments
                  <a href="#/post/${post.id}" class="continue-reading"
                    >CONTINUE READING →</a
                  >
                </p>
              </div>
              </div>
            `;
          })}
          </div>

            <div class="sidebar">
              <div class="search-box sidebar-section">
                <input type="text" class="search-input" placeholder="Search" />
                <button class="search-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.414-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                    />
                  </svg>
                </button>
              </div>

              <div class="categories-section sidebar-section">
                <h2 class="sidebar-section-title">Categories</h2>
                <ul class="category-list">
                  <li class="category-list-item">
                    <a href="#" class="category-link">Fashion</a>
                  </li>
                  <li class="category-list-item">
                    <a href="#" class="category-link">Beauty</a>
                  </li>
                  <li class="category-list-item">
                    <a href="#" class="category-link">Street Style</a>
                  </li>
                  <li class="category-list-item">
                    <a href="#" class="category-link">Life Style</a>
                  </li>
                  <li class="category-list-item">
                    <a href="#" class="category-link">DIY & Crafts</a>
                  </li>
                </ul>
              </div>

              <div class="featured-products sidebar-section">
                <h2 class="sidebar-section-title">Featured Products</h2>
                <div
                  style="border: 1px solid #eee; padding: 10px; margin-bottom: 10px"
                >
                  <a
                    href="#"
                    style="display: block; text-decoration: none; color: inherit"
                  >
                    <img
                      src="./../imgs/blog/product-min-01.jpg"
                      alt="Product 1"
                      style="
                        width: 100px;
                        height: 120px;
                        display: block;
                        margin-bottom: 5px;
                      "
                    />
                    <p style="font-weight: bold; margin-bottom: 5px">
                      White Shirt With Pleat Detail Back
                    </p>
                    <p style="color: #777">$19.00</p>
                  </a>
                </div>

                <div
                  style="border: 1px solid #eee; padding: 10px; margin-bottom: 10px"
                >
                  <a
                    href="#"
                    style="display: block; text-decoration: none; color: inherit"
                  >
                    <img
                      src="./../imgs/blog/product-min-02.jpg"
                      alt="Product 1"
                      style="
                        width: 100px;
                        height: 120px;
                        display: block;
                        margin-bottom: 5px;
                      "
                    />
                    <p style="font-weight: bold; margin-bottom: 5px">
                      Converse All Star Hi Black Canvas
                    </p>
                    <p style="color: #777">$39.00</p>
                  </a>
                </div>

                <div
                  style="border: 1px solid #eee; padding: 10px; margin-bottom: 10px"
                >
                  <a
                    href="#"
                    style="display: block; text-decoration: none; color: inherit"
                  >
                    <img
                      src="./../imgs/blog/product-min-03.jpg"
                      alt="Product 1"
                      style="
                        width: 100px;
                        height: 120px;
                        display: block;
                        margin-bottom: 5px;
                      "
                    />
                    <p style="font-weight: bold; margin-bottom: 5px">
                      Nixon Porter Leather Watch In Tan
                    </p>
                    <p style="color: #777">$17.00</p>
                  </a>
                </div>
              </div>

              <div class="archive-section sidebar-section">
                <h2 class="sidebar-section-title">Archive</h2>
                <ul class="archive-list">
                  <li class="archive-list-item">
                    <a href="#" class="archive-link">July 2018</a>
                    <span class="archive-count">(9)</span>
                  </li>
                  <li class="archive-list-item">
                    <a href="#" class="archive-link">June 2018</a>
                    <span class="archive-count">(39)</span>
                  </li>
                  <li class="archive-list-item">
                    <a href="#" class="archive-link">May 2018</a>
                    <span class="archive-count">(29)</span>
                  </li>
                  <li class="archive-list-item">
                    <a href="#" class="archive-link">April 2018</a>
                    <span class="archive-count">(35)</span>
                  </li>
                  <li class="archive-list-item">
                    <a href="#" class="archive-link">March 2018</a>
                    <span class="archive-count">(22)</span>
                  </li>
                  <li class="archive-list-item">
                    <a href="#" class="archive-link">February 2018</a>
                    <span class="archive-count">(32)</span>
                  </li>
                  <li class="archive-list-item">
                    <a href="#" class="archive-link">January 2018</a>
                    <span class="archive-count">(21)</span>
                  </li>
                  <li class="archive-list-item">
                    <a href="#" class="archive-link">December 2017</a>
                    <span class="archive-count">(26)</span>
                  </li>
                </ul>
              </div>

              <div class="tags-section sidebar-section">
                <h2 class="sidebar-section-title">Tags</h2>
                <div class="tags-list">
                  <a href="#" class="tag-link">Fashion</a>
                  <a href="#" class="tag-link">Lifestyle</a>
                  <a href="#" class="tag-link">Denim</a>
                  <a href="#" class="tag-link">Streetstyle</a>
                  <a href="#" class="tag-link">Crafts</a>
                </div>
              </div>
            </div>
          </section>
        </section>
        <div class="pagination">
          <a href="#" class="pagination-button active">1</a>
          <a href="#" class="pagination-button">2</a>
        </div>
        </div>
        `;
}