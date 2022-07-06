async function goToPayment(cart) {
    const requestBody = {
        couponcode: cart.code,
        amount: cart.subTotal,
        products: cart.items
    }
    const BASE_URL = `http://localhost:6868/pay`
    const data = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody),
    })
    const result = await data.json()
    console.log({ result });
}
export { goToPayment }