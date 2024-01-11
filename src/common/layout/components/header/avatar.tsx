import useUser from "@hook/use-user";

export default function Avatar() {
    const {user} = useUser()
    
  return (
    <div className="flex items-center gap-x-2">
      <img
        className="w-7 h-7 rounded-full object-cover object-left"
        src="/user.jpg"
        alt="user-account"
      />
      <span>{user?.name}</span>
    </div>
  );
}
