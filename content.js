function hideShorts() {
  const shortsSections = document.querySelectorAll('ytd-reel-shelf-renderer, ytd-rich-section-renderer');
  shortsSections.forEach(el => el.style.display = 'none');

  const miniSidebarShorts = Array.from(document.querySelectorAll('a.yt-simple-endpoint.style-scope.ytd-mini-guide-entry-renderer'))
    .filter(el => el.title?.trim().toLowerCase() === 'shorts');
  miniSidebarShorts.forEach(el => el.style.display = 'none');

  const mainSidebarShorts = Array.from(document.querySelectorAll('a.yt-simple-endpoint.style-scope.ytd-guide-entry-renderer'))
    .filter(el => el.title?.trim().toLowerCase() === 'shorts');
  mainSidebarShorts.forEach(el => el.style.display = 'none');
}

hideShorts();

const observer = new MutationObserver(hideShorts);
observer.observe(document.body, { childList: true, subtree: true });
