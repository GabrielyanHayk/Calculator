let calcContainer = document.createElement('div');
calcContainer.id = 'CalcContainer';

const Row_Size = 5;
const Colom_Size = 4;

document.body.append(calcContainer);

const calc_sqreen = document.createElement('input');
calc_sqreen.setAttribute('readonly', 'readonly')
calc_sqreen.id = 'CalcSqreen';
calcContainer.append(calc_sqreen);

for(let i = 0; i < Row_Size; i++) {
	let calc_row = document.createElement('div');
	calcContainer.append(calc_row);
	calc_row.classList.add('calc_row');

	for(let j = 0; j < Colom_Size; j++) {
		const calc_slot = document.createElement('button');
		calc_row.append(calc_slot);

		calc_slot.innerText = arr[i][j][0];
		calc_slot.value = arr[i][j][1];
		calc_slot.id = arr[i][j][2];
		calc_slot.title = arr[i][j][3];

		calc_sqreen.value += this.value;
		calc_slot.addEventListener('click', function() {
			alert(calc_slot.value)
		})
	}
}

