import data from '../../data-language.json';

function getData() {
  const newData = data.map((e) => {
    if (e.className === 'key letter') {
      if (e.key) {
        e.key = e.key.toLowerCase();
      }
      if (e.keyRU) {
        e.keyRU = e.keyRU.toLowerCase();
      }
    }
    return e;
  });

  return newData;
}

export default getData;
