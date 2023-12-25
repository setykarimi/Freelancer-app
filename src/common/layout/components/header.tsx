import useUser from "../../../services/use-user";

export default function Navbar() {
  const { data } = useUser();
  return <div className="bg-secondary-0 py-4 px-8">App header</div>;
}
