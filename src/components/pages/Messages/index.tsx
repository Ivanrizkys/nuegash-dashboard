import AppBar from "@/src/components/organisms/AppBar";
import PrivateRoute from "@/src/components/atoms/PrivateRoute";

const Messages = () => {
  return (
    <PrivateRoute>
      <div className="xl:ml-[252px] bg-[#FAFAFA] min-h-screen flex flex-col">
        <nav className="bg-primary-0 p-8 w-full">
          <AppBar
            title="Message"
            userImg={"/profile.png"}
            notificationActive={true}
            placeholder="Search Mentors"
          />
        </nav>
        <div className="flex justify-center items-center flex-grow">
          <p className="text-4xl font-semibold text-secondary-500">
            Coming Soon :)
          </p>
        </div>
      </div>
    </PrivateRoute>
  );
};

export default Messages;
