const airtableApiKey = "keyEqTijnaavQtYbr"; // this is not best practice and is just here for convenience sake for this project
const airtableBaseId = "appcDjjskefLIyJVY";
const airtableTableName = "tbl8r1smekKGfpewz";
const fields = ["Title", "PostMarkdown", "author", "date", "image", "likes"];

let loadedPosts = 0;

function loadPosts() {
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
      const records = data.records;
      const container = document.getElementById("airtable-data");

      const searchInput = document.getElementById("search-input");
      const searchTerm = searchInput.value.trim().toLowerCase();

      // Filter the records based on the search term
      const filteredRecords = records.filter((record) => {
        const title = record.fields.Title.toLowerCase();
        const author = record.fields.author.toLowerCase();
        const postmarkdown = record.fields.PostMarkdown.toLowerCase();

        return (
          title.includes(searchTerm) ||
          author.includes(searchTerm)
        );
      });

      // Display a message if no posts match the search term
      if (filteredRecords.length === 0) {
        container.innerHTML = '<div class="search_error"><p><i class="bi bi-search"></i>Unfortunately no post or author match your search</p></div>';
        loader.classList.add("hidden");
        loadMoreBtn.classList.add("hidden");
        return;
      }

      for (
        let i = loadedPosts;
        i < loadedPosts + 12 && i < filteredRecords.length;
        i++
      ) {
        const record = filteredRecords[i];
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
        `;
        container.innerHTML += html;
      }

      loadedPosts += 12;

      const postBtns = document.querySelectorAll(".postBtn");
      postBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const recordId = e.target.getAttribute("data-record-id");
          window.location.href = `/post.html?id=${recordId}`;
        });
      });

      if (loadedPosts >= filteredRecords.length) {
        loadMoreBtn.classList.add("hidden");
      } else {
        loadMoreBtn.classList.remove("hidden");
      }

      loader.classList.add("hidden");
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
      loadMoreBtn.classList.add("hidden");
    });
}

loadPosts();

const loadMoreBtn = document.getElementById("load-more-btn");

function handleLoadMoreClick() {
  loadPosts();
  loadMoreBtn.disabled = true;
  loadMoreBtn.classList.add("hidden");
}

loadMoreBtn.addEventListener("click", handleLoadMoreClick);

// Sorting functionality

function sortByLikes() {
  const container = document.getElementById("airtable-data");
  const cards = container.getElementsByClassName("blog_card");

  const cardsArray = Array.from(cards);

  cardsArray.sort((a, b) => {
    const likesA = parseInt(a.querySelector(".likes_card").textContent);
    const likesB = parseInt(b.querySelector(".likes_card").textContent);
    return likesB - likesA; // Sort in descending order
  });

  while (container.firstChild) {
    container.firstChild.remove();
  }

  cardsArray.forEach((card) => {
    container.appendChild(card);
  });
}

function sortNewToOld() {
  const container = document.getElementById("airtable-data");
  const cards = container.getElementsByClassName("blog_card");

  const cardsArray = Array.from(cards);

  cardsArray.sort((a, b) => {
    const dateA = new Date(
      a.querySelector(".blog_info p:nth-child(2)").textContent
    );
    const dateB = new Date(
      b.querySelector(".blog_info p:nth-child(2)").textContent
    );
    return dateB - dateA; // Sort in descending order
  });

  while (container.firstChild) {
    container.firstChild.remove();
  }

  cardsArray.forEach((card) => {
    container.appendChild(card);
  });
}

function sortOldToNew() {
  const container = document.getElementById("airtable-data");
  const cards = container.getElementsByClassName("blog_card");

  const cardsArray = Array.from(cards);

  cardsArray.sort((a, b) => {
    const dateA = new Date(
      a.querySelector(".blog_info p:nth-child(2)").textContent
    );
    const dateB = new Date(
      b.querySelector(".blog_info p:nth-child(2)").textContent
    );
    return dateA - dateB; // Sort in ascending order
  });

  while (container.firstChild) {
    container.firstChild.remove();
  }

  cardsArray.forEach((card) => {
    container.appendChild(card);
  });
}

const sortByLikesBtn = document.getElementById("sort-likes-btn");
const sortNewToOldBtn = document.getElementById("sort-new-btn");
const sortOldToNewBtn = document.getElementById("sort-old-btn");

sortByLikesBtn.addEventListener("click", sortByLikes);
sortNewToOldBtn.addEventListener("click", sortNewToOld);
sortOldToNewBtn.addEventListener("click", sortOldToNew);

const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", () => {
  loadedPosts = 0; 
  const container = document.getElementById("airtable-data");
  container.innerHTML = "";
  loadPosts(); 
});