import useUser from "@/hooks/authentication/use-user";

export default function Avatar() {
  const { user } = useUser();

  return (
    <div className="flex items-center gap-x-2">
      <img
        className="w-7 h-7 rounded-full object-cover object-left"
        src="/user.jpg"
        alt="user-account"
      />
      <span className="text-secondary-700 font-bold text-sm">
        {user?.name} عزیز، خوش آمدید
      </span>
    </div>
  );
}
