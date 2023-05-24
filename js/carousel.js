const airtableApiKey = "keyEqTijnaavQtYbr"; // this is not best practice and is just here for convenience sake for this project
const airtableBaseId = "appcDjjskefLIyJVY";
const airtableTableName = "tbl8r1smekKGfpewz";
const fields = ["Title", "PostMarkdown", "author", "date", "image", "likes"];

let loadedPosts = 0;
let allPosts = [];

function loadAllPosts() {
  const loader = document.getElementById("loader");
  loader.classList.remove("hidden");

  fetch(
    `https://api.airtable.com/v0/${airtableBaseId}/${airtableTableName}?sort%5B0%5D%5Bfield%5D=date&sort%5B0%5D%5Bdirection%5D=desc`,
    {
      headers: {
        Authorization: `Bearer ${airtableApiKey}`,
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      allPosts = data.records;

      loader.classList.add("hidden");

      loadPosts();
    })
    .catch((error) => {
      const errorContainer = document.getElementById("error-container");
      const errorMessage = `
        <div class="error_message">
          <i class="bi bi-emoji-frown"></i>
          &nbsp; 
          <p>Looks like something went wrong. Please try again later.</p>
        </div>
      `;
      errorContainer.innerHTML = errorMessage;
      loader.classList.add("hidden");
    });
}

function loadPosts() {
  const carouselContainer = document.getElementById("carousel-container");
  carouselContainer.innerHTML = "";

  const records = allPosts;
  const totalPosts = records.length;
  const startIndex = loadedPosts;
  const endIndex = Math.min(startIndex + 3, totalPosts);

  for (let i = startIndex; i < endIndex; i++) {
    const record = records[i];
    const title = record.fields.Title;
    const postmarkdown = record.fields.PostMarkdown;
    const author = record.fields.author;
    const date = record.fields.date;
    const image = record.fields.image
      ? `<img src="${record.fields.image[0].url}">`
      : "";
    const likes = record.fields.likes;
    const recordId = record.id;
    const html = `
      <div class="carousel_slide">
        <div class="blog_card">
          ${image}
          <div class="blog_info">
            <p><i class="bi bi-person"></i> ${author}</p>
            <p><i class="bi bi-calendar3"></i> ${date}</p>
            <p class="likes_card">${likes} <i class="bi bi-heart"></i></p>
          </div>
          <h2>${title}</h2>
          <div class="blog_text">
            <p>${postmarkdown}</p>
          </div>
          <button class="postBtn" data-record-id="${recordId}">Read more</button>
        </div>
      </div>
    `;
    carouselContainer.innerHTML += html;
  }

  loadedPosts = endIndex;

  const carouselNextBtn = document.getElementById("carousel-next-btn");
  if (loadedPosts >= totalPosts) {
    carouselNextBtn.disabled = true;
    carouselNextBtn.classList.add("hidden");
  } else {
    carouselNextBtn.disabled = false;
    carouselNextBtn.addEventListener("click", handleNextSlideClick);
    carouselNextBtn.classList.remove("hidden");
  }

  const carouselPrevBtn = document.getElementById("carousel-prev-btn");
  carouselPrevBtn.disabled = loadedPosts <= 3;
  carouselPrevBtn.addEventListener("click", handlePrevSlideClick);
  carouselPrevBtn.classList.remove("hidden");

  const postBtns = document.querySelectorAll(".postBtn");
  postBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const recordId = e.target.getAttribute("data-record-id");
      window.location.href = `/post.html?id=${recordId}`;
    });
  });
}

function handleNextSlideClick() {
  loadPosts();

  const carouselPrevBtn = document.getElementById("carousel-prev-btn");
  carouselPrevBtn.disabled = false;
}

function handlePrevSlideClick() {
  loadedPosts -= 6;
  if (loadedPosts < 0) loadedPosts = 0;

  loadPosts();

  const carouselNextBtn = document.getElementById("carousel-next-btn");
  carouselNextBtn.disabled = false;
}

loadAllPosts();
