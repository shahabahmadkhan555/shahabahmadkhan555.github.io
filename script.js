<script>
const modal = document.getElementById('project-modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalGithub = document.getElementById('modal-github');
const closeModal = document.querySelector('.close-modal');

document.querySelectorAll("[data-open-modal]").forEach(item => {
  item.addEventListener("click", () => {
    const li = item.closest(".project-item");

    modalImg.src = item.querySelector("img").src;
    modalTitle.textContent = li.dataset.title;
    modalDesc.textContent = li.dataset.desc;
    modalGithub.href = li.dataset.github;

    modal.style.display = "flex";
  });
});

closeModal.onclick = () => modal.style.display = "none";
modal.onclick = (e) => { if (e.target === modal) modal.style.display = "none" };
</script>
