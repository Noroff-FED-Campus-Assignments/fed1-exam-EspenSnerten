const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const postId = params.get("id");
const airtableApiKey = "keyEqTijnaavQtYbr"; // this is not best practice and is just here for convenience sake for this project
const airtableBaseId = "appcDjjskefLIyJVY";
const airtableTableName = "tbl8r1smekKGfpewz";
const fields = ["Title", "PostMarkdown", "author", "date", "image", "likes"];

const apiUrl = `https://api.airtable.com/v0/${airtableBaseId}/${airtableTableName}/${postId}`;

const loader = document.getElementById("loader");
loader.style.display = "block";

fetch(apiUrl, {
  headers: {
    Authorization: `Bearer ${airtableApiKey}`,
  },
})
  .then((response) => response.json())
  .then((data) => {
    try {
      loader.style.display = "none";

      console.log(data);
      const container = document.getElementById("post-container");
      const title = data.fields.Title;
      const postmarkdown = data.fields.PostMarkdown;
      const author = data.fields.author;
      const date = data.fields.date;
      const image = data.fields.image
        ? `<img src="${data.fields.image[0].url}" class="image-modal-trigger">`
        : "";
      let likes = data.fields.likes;

      const pageTitle = document.querySelector("title");
      pageTitle.innerText = title;

      const html = `
            <div class="blog_post">
              ${image}
              <div class="blog_post_info">
                <div class="blog_info_wrapper">
                  <p><i class="bi bi-person icon_hidden"></i><span>Author:</span> ${author}</p>
                  <p><i class="bi bi-calendar3 icon_hidden"></i><span>Published on:</span> ${date}</p>
                </div>
                <div class="likes" id="likesContainer"><p>${likes}</p> <button id="likeBtn"><i class="bi bi-heart"></i></button></div>
              </div>
              <h2 class="title">${title}</h2>
              <div class="post_text">
                <p>${postmarkdown}</p>
              </div>
            </div>
          `;
      container.innerHTML += html;

      const imageModalTriggers = document.getElementsByClassName(
        "image-modal-trigger"
      );
      for (let i = 0; i < imageModalTriggers.length; i++) {
        const trigger = imageModalTriggers[i];
        trigger.addEventListener("click", () => {
          const imageUrl = trigger.getAttribute("src");
          const modal = createImageModal(imageUrl);
          document.body.appendChild(modal);
        });
      }

      const likeBtn = document.getElementById("likeBtn");
      likeBtn.addEventListener("click", () => {
        likes++;
        document.getElementById(
          "likesContainer"
        ).innerHTML = `${likes} <button id="likeBtn"><i class="bi bi-heart"></i></button>`;

        const updateData = {
          fields: {
            likes: likes,
          },
        };
        fetch(apiUrl, {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${airtableApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateData),
        })
          .then((response) => response.json())
          .then((updatedRecord) => {
            console.log("Like count updated:", updatedRecord);
          })
          .catch((error) => {
            console.error("Error updating like count:", error);
          });
      });
    } catch (error) {
      loader.style.display = "none";
      const errorContainer = document.getElementById("error-container");
      const backBtn = document.getElementById("back");
      const errorMessage = `
            <div class="error_message">
              <p> 
                <i class="bi bi-emoji-frown"></i>
                &nbsp;Looks like something went wrong. Please try again later.
              </p>
            </div>
          `;
      backBtn.classList.add("hidden");
      errorContainer.innerHTML = errorMessage;
      console.error(error);
    }
  })
  .catch((error) => {
    loader.style.display = "none";
    console.error(error);
  });

function createImageModal(imageUrl) {
  const modal = document.createElement("div");
  modal.classList.add("image-modal");
  modal.innerHTML = `
        <div class="image-modal-content">
          <span class="image-modal-close">&times;</span>
          <img src="${imageUrl}" class="image-modal-image">
        </div>
      `;

  const closeModal = () => modal.remove();

  modal.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("image-modal") ||
      event.target.classList.contains("image-modal-close")
    ) {
      closeModal();
    }
  });

  return modal;
}
