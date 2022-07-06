async function getDiscount(code) {
    console.log(code);
    const BASE_URL = `http://localhost:6868/couponcode?couponcode=${code}`
    const data = await fetch(BASE_URL)
    const discount = await data.json()
    return discount
}
export { getDiscount }

