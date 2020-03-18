	const myheadings = document.querySelectorAll('.content-body-label');

observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      console.log(entry);
      console.log('in the view');
    } else {
      console.log('out of view');
    }
  });
});

myheadings.forEach(heading => {
  observer.observe(heading);
});
