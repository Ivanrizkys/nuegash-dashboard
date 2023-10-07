import { useSuspenseQuery } from "@apollo/client";
import AppBar from "@/src/components/organisms/AppBar";
import { GET_MENTORS_DATA } from "@/src/service/query";
import CardMentor from "@/src/components/molecules/CardMentor";
import MentorSlide from "@/src/components/organisms/MentorSlide";

const MentorsContent = () => {
  const { data } = useSuspenseQuery(GET_MENTORS_DATA);

  return (
    <div className="xl:ml-[252px] bg-[#FAFAFA] min-h-screen">
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
                id: mentor?.node?.id as string,
                name: mentor?.node?.name ?? "",
                role: mentor?.node?.role ?? "",
                avatar: mentor?.node?.image ?? "",
                rating: mentor?.node?.rating as number,
                task: mentor?.node?.total_task ?? 0,
                review: mentor?.node?.total_review ?? 0,
                isFollowed: mentor?.node?.is_followed ?? false,
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
                  name={mentor?.node?.name ?? ""}
                  role={mentor?.node?.role ?? ""}
                  task={mentor?.node?.total_task ?? 0}
                  rating={mentor?.node?.rating as number}
                  review={mentor?.node?.total_review ?? 0}
                  avatar={mentor?.node?.image ?? ""}
                  isFollowed={mentor?.node?.is_followed ?? false}
                  description={mentor?.node?.description ?? ""}
                />
              ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MentorsContent;
