//  Json farmatda chukur clonlash
// const person = {
// 	firstName: "Ethan",
// 	lastName: "Arapov",
// 	hobbies: {
// 		sport: "Football",
// 		games:"UFC"
// 	}
// }

// const clone = JSON.parse(JSON.stringify(person))

// clone.hobbies.sport = "Box"

// console.log(clone);
// console.log(person);

////////////////////////////////////////

// current.json ni server deb faraz qilib undan malumot olish

// const sum = document.querySelector('#sum'),
// 	usd = document.querySelector('#usd')

// sum.addEventListener('input', () => {

// 	const request = new XMLHttpRequest()

// 	request.open('GET', './js/current.json')
//  Content-Type > biz yani json bn ishlayotganimizniaytishimiz kerak boladi  , yanni biz oladigon farmat jsondaligini aytdik
// 	request.setRequestHeader('Content-Type', 'application/json')
// 	request.send()

// 	request.addEventListener('load', () => {
// 		if (request.status === 200) {
// 			const data = JSON.parse(request.response)
// 			usd.value = (+sum.value / data.current.usd).toFixed(2)
// 		} else {
// 			usd.value = 'Something went wrong'
// 		}
// 	})
// })

///// Promise
// const statusFriend = "success"

// const request = new Promise((resolve, reject) => {
// 	if (statusFriend === "success") {
// 		resolve()  // resolve ishga tushsa bizi thennimiz ishga tushadi
// 	} else {
// 		reject()
// 	}
// })

// //  agar success boladigon bolsa
// request.then(() => {
// 	console.log("Dostim keldi");

// }).then(() => {
// 	console.log("Osh yeymiz ");

// 	// yoki reject ishga tushganda catch ishga tushadi
// }).catch(() => {
// 	console.log("dostim bahona qilib kelmadi");

// 	//finally nima bolishidan qattiy nazar tell qilib qoyish
// }).finally(() => {
// 	console.log("tell qilib qoyish ");

// })

////////------------------ 2chi versiya

// const friend = {
// 	status: 'success',
// 	// status"failar"
// }

// const request = new Promise((resolve, reject) => {
// 	if (friend.status === 'success') {
// 		//  objectga yangi property qoshib uni yuboramiz thenga
// 		friend.time = '12:00'
// 		resolve(friend)
// 	} else {
// 		friend.atmazka = 'Probka'
// 		reject(friend)
// 	}
// })

// resolve dagi malumot kelishi
// request
// 	.then(data => {
// 		console.log(data)
// 		data.place = 'Humo'
// 		return data
// 	})
// 	.then(data => {
// 		console.log(data)
// 	})
// 	.catch(err => {
// 		console.log(err)

// 		//finally nima bolishidan qattiy nazar tell qilib qoyish
// 	})
// 	.finally(() => {
// 		console.log('tell qilib qoyish ')
// 	})

///////---------

// const logger = time => {
// 	return new Promise(resolve => {
// 		setTimeout(() => {
// 			resolve()
// 		}, time)
// 	})
// }

// logger(1000).then(() => {
// 	console.log("1 second");

// })
// logger(2000).then(() => {
// 	console.log("2 second");

// })
//Promise  all funcsiyaga biz arrayni ichida biz promiselarni ozishimiz kerak boladi logger bizga promiseni qaytaradi
//all da arrani ichidagi xar bir  funcsiya bajarilib bolgandan keyin all all promise funcsiyamiz ishga tushadi
// Promise.all([logger(1000), logger(2000)]).then(() => {
// 	console.log('All promise was resolved')
// })

// // race esa arrayimizni birinchisi ishga tushganda rase ishga tushadi
// Promise.race([logger(1000)], logger(2000)).then(() => {
// 	console.log('All promise was resolved')
// })

// biz asosan GET,POST,PUT,DELETE,PATCH lardan foydalanamiz
//  GET ->Serverdan malumot olish
//  POST > Serverga malumot yuborish
//  PUT > Serverdagi malumotni ozgartirish un ishlatiladi, malumotlar bazasini ozgartirish
//  PATCH bu PUT NI bratishkasi yani farqi PUT bittagina malumotni ozgartiradigon bolsa PATCH malumotlarni xammasini ozgartiradi

////////// ------------------
// biz asosan GET,POST,PUT,DELETE,PATCH lardan foydalanamiz
//  GET ->Serverdan malumot olish
//  POST > Serverga malumot yuborish
//  PUT > Serverdagi malumotni ozgartirish un ishlatiladi, malumotlar bazasini ozgartirish
//  PATCH bu PUT NI bratishkasi yani farqi PUT bittagina malumotni ozgartiradigon bolsa PATCH malumotlarni xammasini ozgartiradi

// window.addEventListener('DOMContentLoaded', () => {
// 	// fetch promiseni ustiga qurilgan metod boladi
// 	fetch('https://jsonplaceholder.typicode.com/posts', {
// 		method: 'GET',
// 		// headersga object ochamiz
// 		headers: {
// 			//Content-Type yozishdan sabab biz json farmatga ozgartirib olish un
// 			'Content-Type': 'application/json',
// 		},
// 		// thenda malumotimiz qabul qilinadi yanni response qabul qilinadi
// 	})
// 		.then(response => {
// 			// console.log(response)
// 			// object farmatga ozgartirib olamiz
// 			return response.json()
// 		})
// 		.then(data => {
// 			console.log(data)

// 			//  error bolganda reject degan funcsiyamiz ishga tushdi
// 		})
// 		.catch(err => {
// 			console.log(err)
// 			// error bolmasaham error bolsaham ishga tushadi
// 		})
// 		.finally(() => {
// 			console.log('Finally')
// 		})
// })

// fatch urldan kelayotgan malumotni resolverni parametiriga responseni beradi
//  resolve(response)
// va biz bu responseni jsondan foydalanuvchi farmatga ogirib olyapmiz yanni object farmatga
// response.json()
//va osha objectni foydalanuvchiga kirsatamiz
// data

////////// ---------------------
const postWrapper = document.querySelector('.posts')
//  GET METHOD
const OUR_URL = 'https://jsonplaceholder.typicode.com/posts'
window.addEventListener('DOMContentLoaded', () => {
	fetch(OUR_URL, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
	})
		.then(response => response.json())
		.then(data => {
			data.forEach((item, index) => {
				const post = document.createElement('div')
				post.classList.add('post')
				post.innerHTML += `
  <h4> <b>${index + 1}.</b> ${item.title}</h4>
			<p>${item.body}</p>
			`
				postWrapper.append(post)
			})
		})
		.catch(err => {
			const errorEl = document.createElement('div')
			errorEl.classList.add('error')
			errorEl.textContent = 'Somthing went wrong'
			postWrapper.append(errorEl)
		})

	// METHOD POST
	const form = document.querySelector('form')
	form.addEventListener('submit', event => {
		event.preventDefault()
		const formData = new FormData(form)
		// console.log(formData)
		const object = {}
		formData.forEach((value, key) => {
			object[key] = value
		})
		console.log(object) // bu yerda objectni key bn vakuesini oldim
		const json = JSON.stringify(object)
		// console.log(json)
		fetch(OUR_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			// jsonni yuborish un body kerak/ bodyga jsonni yuboramiz yanni serverimizni body qismiga
			body: json,
		})
			.then(res => res.json())
			.then(data => {
				console.log('data', data)

				form.reset()
				const post = document.createElement('div')
				post.classList.add('post')
				post.innerHTML += `
  <h4> <b>${data.id}.</b> ${data.title}</h4>
			<p>${data.body}</p>
			`
				postWrapper.append(post)
			})
			.catch(err => {
				console.log(err)
			})
	})
})
