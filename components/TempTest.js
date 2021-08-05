import useIsTouchDevice from './hooks/useIsTouchDevice'

export default function TempTest() {
  const isTouchDevice = useIsTouchDevice();

  return (
    <div className="font-tdsans text-xl">
      {isTouchDevice ? <p>Touch</p> : <p>Desktop</p>}
    </div>
  );
}