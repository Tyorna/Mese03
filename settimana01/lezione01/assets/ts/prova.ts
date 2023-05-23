var giocatore3: number =Math.floor(Math.random() * (100-1) + 1);
var giocatore4: number = Math.floor(Math.random() * (100-1) + 1);
var estratto2: number = Math.floor(Math.random() * (100-1) + 1);

window.addEventListener('load', function () {
	console.log( `Giocatore1: ${giocatore3}`);
	console.log( `Giocatore2: ${giocatore4}`);
	console.log( `Numero estratto: ${estratto2}`);
    switch (true) {
		case giocatore3 === estratto2:
			console.log('Il giocatore 1 ha indovinato!');
			break;

		case giocatore4 === estratto2:
			console.log('Il giocatore 2 ha indovinato!');
			break;

		case Math.abs(estratto2 - giocatore3) < Math.abs(estratto2 - giocatore4):
			console.log(
				'Nessuno ha vinto ma il giocatore 1 si è avvicinato di più');
			break;

		case Math.abs(estratto2 - giocatore4) < Math.abs(estratto2 - giocatore3):
			console.log(
				'Nessuno ha vinto ma il giocatore 2 si è avvicinato di più');
			break;

		default:
			console.log('Pareggio!');
			break;
        }
});
