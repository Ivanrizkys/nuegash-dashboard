import { useSuspenseQuery } from "@apollo/client";
import AppBar from "@/src/components/organisms/AppBar";
import { GET_MENTORS_DATA } from "@/src/service/query";
import CardMentor from "@/src/components/molecules/CardMentor";
import MentorSlide from "@/src/components/organisms/MentorSlide";

const MentorsContent = () => {
  const { data } = useSuspenseQuery(GET_MENTORS_DATA);

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
          {data?.recentMentors && (
            <MentorSlide
              title="Recent Mentors"
              swiperClass="recent-mentors-list"
              mentors={data?.recentMentors?.edges.map((mentor) => ({
                id: mentor?.node?.id,
                name: mentor?.node?.name,
                role: mentor?.node?.role,
                avatar: mentor?.node?.image,
                rating: mentor?.node?.rating,
                task: mentor?.node?.total_task,
                review: mentor?.node?.total_review,
                isFollowed: mentor?.node?.is_followed,
              }))}
            />
          )}
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-secondary-500 mb-[18px]">
            Mentors
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(352px,_1fr))] gap-8">
            {data?.mentors &&
              data?.mentors?.edges.map((mentor) => (
                <CardMentor
                  key={mentor?.node?.id}
                  name={mentor?.node?.name}
                  role={mentor?.node?.role}
                  task={mentor?.node?.total_task}
                  rating={mentor?.node?.rating}
                  review={mentor?.node?.total_review}
                  avatar={mentor?.node?.image}
                  isFollowed={mentor?.node?.is_followed}
                  description={mentor?.node?.description}
                />
              ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default MentorsContent;
