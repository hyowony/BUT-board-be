///부가세 함수 익숙해지기 과제

//과제 요구사항 확인 

// 위의 부가세 가져오는 프로그램 함수로 바꾸기!

// const price = 10000 // 소비자가격
// const priceKrw = new Intl.NumberFormat('kr-KO', { style: 'currency', currency: 'KRW' }).format(price) + "원"
// let tax = price / 11 * 10
// tax = Math.round(tax)
// tax = new Intl.NumberFormat('kr-KO', { style: 'currency', currency: 'KRW' }).format(tax)
// tax = tax + "원"
// let originalPrice = price / 11
// originalPrice =  Math.round(originalPrice)
// originalPrice = new Intl.NumberFormat('kr-KO', { style: 'currency', currency: 'KRW' }).format(originalPrice)
// originalPrice = originalPrice + "원"

//부가세를 넣으면 원래 가격과 원화로 바꾸는 것을 보여주는 프로그램을 만들었다. 

// console.log(price)

// console.log(priceKrw)

// console.log(tax)

// console.log(originalPrice)

// const price2= 100000 // 소비자가격
// const priceKrw2 = new Intl.NumberFormat('kr-KO', { style: 'currency', currency: 'KRW' }).format(price2) + "원"
// let tax2 = price2 / 11 * 10
// tax2 = Math.round(tax2)
// tax2 = new Intl.NumberFormat('kr-KO', { style: 'currency', currency: 'KRW' }).format(tax2)
// tax2 = tax2 + "원"
// let originalPrice2 = price / 11
// originalPrice2 =  Math.round(originalPrice2)
// originalPrice2 = new Intl.NumberFormat('kr-KO', { style: 'currency', currency: 'KRW' }).format(originalPrice2)
// originalPrice2 = originalPrice2 + "원"

// console.log(price2)

// console.log(priceKrw2)

// console.log(tax2)

// console.log(originalPrice2)
// 비효율적이기 때문에 이 것을 기능으로 만들어야 한다. 함수로 빼면 된다. 그런데 어떻게 할 것인가? 가격만 넣으면 콘솔로그에 찍었던 것이 나오게끔 해야한다. 

// const currencyBycountry = {

// en: {
//   format : "en-US",
//   currency : "USD"
// },  
// kr: {
//   format : "kr-KO",
//   currency : "KRW"
// }


// }
// const Tprice 
// let countryCode = country | "kr"
// const cur = currencyBycountry[country]
// console.log(cur)

//이 함수를 사용해서 지역코드를 들어갈 수 있다. 
const currencyBycountry = {
  en: {
    format: "en-US", 
    currency:"USD"
  },
  kr: {
    format: "kr-KO",
    currency:"KRW"

  }
}

const priceTokrwFormat = (price,country) => {
  // 이 화살표함수는 프라이스와 컨트리를 두 개의 값(파라미터)을 가지고 놀 것이다. 
  const countryCode = country || "kr"
  console.log(countryCode)
  //제대로 안 찍혀서 한번 찍어봤다. 
  const cur = currencyBycountry[countryCode]
  //간편하게 cur로 줄였다. 
  // console.log(cur)
  const pricekrw = new Intl.NumberFormat(cur.format, { style: 'currency', currency: cur.currency}).format(price)

  let tax = price / 11 * 10
      tax = Math.round(tax)
      tax = new Intl.NumberFormat(cur.format, { style: 'currency', currency: cur.currency}).format(tax)
      // tax = tax + "원"

  let originalPrice = price / 11
      originalPrice =  Math.round(originalPrice)
      originalPrice = new Intl.NumberFormat(cur.format, { style: 'currency', currency: cur.currency}).format(originalPrice)
      // originalPrice = originalPrice + "원"

      return {
        priceKrw : pricekrw,
        tax : tax ,
        originalPrice : originalPrice
      }

}
// const price = 10000
// console.log(priceTokrwFormat(price))
// console.log(price)

// const price = 100000
// console.log(pricekformat(price))
// console.log(pricekformat(25000) , "kr"
console.log(priceTokrwFormat(100000,"kr"))
console.log(priceTokrwFormat(40000,"en"))
console.log(priceTokrwFormat(300000,"kr"))

//전체 뽑을 때 사용하는 함수 완성 

//함수에 익숙해져야 하는 이유는 많다 
//추가기능 연습해보기 
