export default function Footer() {
  return (
    <div className="font-tdsans text-sm md:text-lg px-4 md:px-8 w-full pb-2 md:pb-6 text-center md:text-left md:flex justify-between items-end">
      <a className="hover:text-gray-500" href="mailto:tushardate@gmail.com">tushardate@gmail.com</a>
      <p className="hidden md:inline mx-5">|</p>
      <a className="hover:text-gray-500" href="tel:+1-720-292-0384">720-292-0384</a>
      <p className="md:ml-auto">{`©${new Date().getFullYear()} Tushar Date`}</p>
    </div>
  );
}