import fetching from "../data/index.js";
let newPost = {};

let pathParts = window.location.hash.split("/");
let postId = pathParts[pathParts.length - 1];

fetching("posts")
  .then((data) => {
    const posts = data.posts;
    const post = posts.find((post) => post.id == postId);
    newPost = { ...post };
  })
  .catch((err) => alert(err));

export default function PostPage() {
  return `
    <div class="post-page">
      <div class="breadcrumb">
        <a href="#" class="breadcrumb-link">Home</a>
        <span class="breadcrumb-separator">&gt;</span>
        <a href="#/blog" class="breadcrumb-link">Blog</a>
        <span class="breadcrumb-separator">&gt;</span>
        <span class="breadcrumb-current"
          >${newPost ? newPost.title : " "}</span
        >
      </div>
      <section class="blog-container">
        <div class="blog-post">
          <div class="post">
            <div class="post-header">
              <a class="post-image-link">
                <div class="date-badge">
                  <span class="day">${newPost ? (20 + newPost.id): " " }</span>
                  <span class="month-year">Jan 2018</span>
                </div>
                <img
                  src="${newPost ? newPost.image : " "}"
                  alt="${newPost ? newPost.title: " "}"
                  class="post-image"
                />
              </a>
            </div>
            <div class="post-content">
              <a class="post-title-link">
                <h2>${newPost ? newPost.title : " "}</h2>
              </a>
              <p class="post-excerpt">
                ${newPost ? newPost.description : " "}
              </p>
              <p class="post-meta">
                By&nbsp;Admin&nbsp;|&nbsp;StreetStyle&nbsp;,&nbsp;Fashion&nbsp;,Couple&nbsp;|&nbsp;8&nbsp;Comments
              </p>
            </div>
          </div>

          <div class="comment-section">
            <div class="tags-area">
              <h3>Tags</h3>
              <div class="tags-list">
                <a href="#" class="tag-link">Streetstyle</a>
                <a href="#" class="tag-link">Crafts</a>
              </div>
            </div>

            <div class="leave-comment-area">
              <h3>LEAVE A COMMENT</h3>
              <p>
                Your email address will not be published. Required fields are
                marked *
              </p>
              <form class="comment-form">
                <div class="form-group">
                  <label for="comment">Comment <span>*</span></label>
                  <textarea
                    id="comment"
                    name="comment"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="name">Name <span>*</span></label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div class="form-group">
                  <label for="email">Email <span>*</span></label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div class="form-group">
                  <label for="website">Website</label>
                  <input type="url" id="website" name="website" />
                </div>
                <button type="submit" class="post-comment-button">
                  POST COMMENT
                </button>
              </form>
            </div>
          </div>
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
    </div>
    `;
}
