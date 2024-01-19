const iPhone = document.querySelector('.iPhone')

const samsung = document.querySelector('.samsung')

iPhone.addEventListener('click', function (event) {
	let clickTarget = event.target

	let activeButton = iPhone.querySelector('.active')

	let priceItem = iPhone.querySelector('.price')

	let buyButton = iPhone.querySelector('.buy__button')

	let currentPrice

	let activeButtonColor = iPhone.querySelector('.active-border')

	if (
		clickTarget.classList.contains('color-btn') &&
		!clickTarget.classList.contains('active-border')
	) {
		clickTarget.classList.add('active-border')

		activeButtonColor.classList.remove('active-border')
	}

	if (
		clickTarget.classList.contains('btn') &&
		!clickTarget.classList.contains('active')
	) {
		clickTarget.classList.add('active')

		activeButton.classList.remove('active')
	}

	currentPrice = clickTarget.getAttribute('data-size')

	if (currentPrice === 'medium') {
		priceItem.textContent = 'Цена 80 000р.'
	}
	if (currentPrice === 'large') {
		priceItem.textContent = 'Цена 100 000р.'
	}

	buyButton.onclick = function () {
		let confirmBuy = prompt('Введите адрес:')
		if (confirmBuy === '') {
			alert('Вы незаполнили поле с адресом!')
			return confirmBuy
		}
		alert(`Товар заказан!`)
	}
})
samsung.addEventListener('click', function (event) {
	let clickTarget = event.target

	let activeButton = samsung.querySelector('.active')

	let buyButton = samsung.querySelector('.buy__button')

	let priceItem = samsung.querySelector('.price')

	let currentPrice

	let activeButtonColor = samsung.querySelector('.active-border')

	if (
		clickTarget.classList.contains('color-btn') &&
		!clickTarget.classList.contains('active-border')
	) {
		clickTarget.classList.add('active-border')

		activeButtonColor.classList.remove('active-border')
	}

	if (
		clickTarget.classList.contains('btn') &&
		!clickTarget.classList.contains('active')
	) {
		clickTarget.classList.add('active')

		activeButton.classList.remove('active')
	}

	currentPrice = clickTarget.getAttribute('data-size')

	if (currentPrice === 'medium') {
		priceItem.textContent = 'Цена 40 000р.'
	}
	if (currentPrice === 'large') {
		priceItem.textContent = 'Цена 80 000р.'
	}

	buyButton.onclick = function () {
		let confirmBuy = prompt('Введите адрес:')
		if (confirmBuy === '') {
			alert('Вы незаполнили поле с адресом!')
			return confirmBuy
		}
		alert(`Товар заказан!`)
	}
})
