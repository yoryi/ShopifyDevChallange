const tabs_2 = document.querySelectorAll('.tab2');
const tabContents_2 = document.querySelectorAll('.content2');

tabs_2.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    tabContents_2.forEach((content) => content.classList.add('hidden'));
    tabContents_2[index].classList.remove('hidden');
  });
});