export default function Card(props) {
  return (
    <div className="flex flex-col w-72 h-72 items-center mb-24 m-10  justify-around bg-slate-900 rounded-sm">
      <img
        className="object-cover w-72 h-48 rounded-sm"
        src={props.image}
        alt='img'
      />
      <h1 className="text-white text-3xl mb-5 mt-2">{props.nameFood}</h1>
      <h3 className="text-white text-2xl">{props.price}</h3>
      <button
        onClick={() => {
          props.orderHandler(props.nameFood,props.image,props.price,props.idd);
        }}
        className="hover:bg-orange-600 shadow-sm shadow-[#0000006d] transition-all bg-orange-500 text-white p-2 w-24  m-5 rounded-sm text-sm"
      >
        Order
      </button>
    </div>
  );
}
