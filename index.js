const addAnimations = document.querySelectorAll(".animate-element");

const config = {
  threshold: 0.4
};

observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-post");
    }
  });
}, config);

addAnimations.forEach(addAnimation => {
  observer.observe(addAnimation);
});

const blogs = [{}];

function createNewPost(asset, postedOn, blogTitle, postUrl) {
  this.asset = asset;
  this.postedDate = postedOn;
  this.title = blogTitle;
  this.ctaLink = postUrl;
}
