import AppBar from "@/src/components/organisms/AppBar";
import CardMentorLoader from "@/src/components/molecules/CardMentor/loader";
import MentorSlideLoader from "@/src/components/organisms/MentorSlide/loader";

const MentorsLoader = () => {
  return (
    <>
      <nav className="bg-primary-0 p-8 w-full">
        <AppBar
          title="Explore Mentors"
          userImg={"/profile.png"}
          notificationActive={true}
          withSearch={true}
          placeholder="Search Mentors"
        />
      </nav>
      <div className="p-8">
        <section>
          <MentorSlideLoader
            title="Recent Mentors"
            swiperClass="recent-mentors-list-loader"
          />
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-secondary-500 mb-[18px]">
            Mentors
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(352px,_1fr))] gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((val) => (
              <CardMentorLoader key={val} autoWidth withDescription />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default MentorsLoader;
