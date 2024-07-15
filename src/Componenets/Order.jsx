function Order() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center my-5 mx-4 sm:mx-14">
      <button className="bg-[#0796EF] p-2 text-white font-semibold text-sm px-3">
        ORDER ONLINE
      </button>
      <div className="bg-[#C5A059] sm:flex items-center justify-center text-white font-semibold">
        <div className="p-2 text-[10px] sm:w-1/3 sm:border-e-2   border-dotted m-2">Food may not be refunded. If your food was made incorrectly we will remake it for you.</div>
        <div className="p-2 text-[10px] sm:w-1/3 border-t-2 sm:border-t-0 sm:border-e-2   border-dotted m-2">18% service charge will be added to all checks over $100.</div>
        <div className="p-2 text-[10px] sm:w-1/3 border-t-2 sm:border-t-0 border-dotted m-2">Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of foodborne illness</div>
      </div>
    </div>
  );
}

export default Order;
