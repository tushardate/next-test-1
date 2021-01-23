export default function Footer() {
  return (
    <div className="font-tdspace text-sm md:text-lg px-4 md:px-8 w-full py-2 md:py-6 text-center md:text-left md:flex justify-between items-end">
      <p>tushardate@gmail.com</p>
      <p className="hidden md:inline mx-5">|</p>
      <p>720-292-0384</p>
      <p className="md:ml-auto">{`©${new Date().getFullYear()} Tushar Date`}</p>
    </div>
  );
}
