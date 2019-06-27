const gallery = document.querySelector('.gallery');
const galleryMobile = document.querySelector('.galleryMobile');
const overlay = document.querySelector('.overlay');
const overlayImage = overlay.querySelector('img');
const overlayClose = overlay.querySelector('.close');

function generateHTML([h, v]) {
    return `
    <div class="item h${h} v${v}">
      <img src="gallery/${randomNumber(13)}.jpg">
      <div class="item__overlay">
        <button>View 👁</button>
      </div>
    </div>
  `;
}

function randomNumber(limit) {
    return Math.floor(Math.random() * limit) + 1;
}
const digits = Array.from({
    length: 80
}, () => [randomNumber(4), randomNumber(4)]).concat([
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1]
]);
const html = digits.map(generateHTML).join('');
gallery.innerHTML = html;
galleryMobile.innerHTML = html;

function getImage(e) {
    const src = e.currentTarget.querySelector('img').src;
    overlayImage.src = src;
    overlay.classList.add('open');
}

function closeImage() {
    overlay.classList.remove('open');
}

overlayClose.addEventListener('click', closeImage)

const items = document.querySelectorAll('.item');
items.forEach(item => item.addEventListener('click', getImage));