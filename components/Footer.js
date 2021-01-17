export default function Footer() {
  return (
    <div className="font-tdspace text-blue-500 text-lg px-8 w-full py-6 flex justify-between items-end">
      <p>tushardate@gmail.com</p>
      <p className="mx-5">|</p>
      <p>720-292-0384</p>
      <p className="ml-auto">{`©${new Date().getFullYear()} Tushar Date`}</p>
    </div>
  );
}
