// TODO: write your code here
/* import sum from './basic';

console.log('worked');

console.log(sum([1, 2])); */

export default function getSpecial(character) {
  const { special } = character;

  special.forEach((element) => {
    if (element.description === undefined) {
      element.description = 'Описание недоступно';
    }
  });

  return special;
}
