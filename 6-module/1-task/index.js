/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.data = rows;
    this.template = '';
    this.render()
  }

  render() {
    this.elem = document.createElement('TABLE');
    this.elem.insertAdjacentHTML("beforeend", ` <thead>
      <tr>
        <th>Имя</th>
        <th>Возраст</th>
        <th>Зарплата</th>
        <th>Город</th>
        <th></th>
      </tr>
      </thead>`);
    this.elem.addEventListener('click', event => {
      const isButton = event.target.nodeName === 'BUTTON';
      if (isButton) {
        event.target.closest('tr').remove();
      }
    });
      for (const { name, age, salary, city } of this.data) {
				this.template += `
          <tr>
            <td>${name}</td>
            <td>${age}</td>
            <td>${salary}</td>
            <td>${city}</td>
            <td><button>X</button></td>
          </tr>
				`
			}
      this.elem.insertAdjacentHTML('beforeend', this.template);
      return this.elem;
  }
}
