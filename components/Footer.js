export default function Footer() {
  return (
    <div className="bg-gray-900 text-white font-tdspace text-lg px-6 w-full py-6 flex justify-between items-end">
      <p>tushardate@gmail.com</p>
      <p className="mx-5">|</p>
      <p>720-292-0384</p>
      <p className="ml-auto">{`©${new Date().getFullYear()} Tushar Date`}</p>
    </div>
  );
}
