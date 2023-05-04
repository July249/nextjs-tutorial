export default function Cart() {
  let product = [
    { name: '토마토', price: '$100', quantity: 1 },
    { name: '파스타', price: '$10', quantity: 3 },
    { name: '코코넛', price: '$200', quantity: 2 },
  ];
  return (
    <div>
      <h4 className='title'>Cart</h4>
      {product.map((item, index) => (
        <CartItem key={index} name={item.name} price={item.price} quantity={item.quantity} />
      ))}
      <Banner company='현대' />
      <Banner company='롯데' />
      <Banner company='삼성' />
    </div>
  );
}

// 큰 페이지는 Server Component로 만들어야 한다.
// 자바스크립트 기능이 들어가는 Component는 Client Component로 만들어야 한다.
function CartItem({ name, price, quantity }) {
  return (
    <div className='cart-item'>
      <p>{name}</p>
      <p>{price}</p>
      <p>{quantity}개</p>
    </div>
  );
}

function Banner({ company }) {
  return <h4>{company}카드 결제 행사중</h4>;
}
