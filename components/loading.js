import SomeImage from "../assets/bars.svg";

export default function loading() {
  return (
    <div className="flex flex-wrap">
      <img className=" w-40 h-40 mx-auto" src={SomeImage} alt="loader" />
    </div>
  );
}
