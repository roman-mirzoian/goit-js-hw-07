const items = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
  const title = item.querySelector('h2').textContent;
  const count = item.querySelectorAll('li').length;
  console.log(`${title}: ${count} items`);
});
