function SecondryButton({ title }) {
  return (
    <button className="bg-[#F3F3F3] border-2 border-[#D5D5D5] py-[6px] w-[240px] rounded-md my-2 sm:w-[160px] md:w-[200px] lg:w-[240px]">
      <p className="text-[#8F8F8F] text-lg font-medium">{title}</p>
    </button>
  );
}

export default SecondryButton;
