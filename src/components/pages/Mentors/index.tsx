import { useId } from "react"
import AppBar from "@/src/components/organisms/AppBar"
import MentorSlide from "@/src/components/organisms/MentorSlide";
import CardMentor from "@/src/components/molecules/CardMentor"

const Task = () => {
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
          <MentorSlide
            title="Recent Mentors"
            swiperClass="recent-mentors-list"
          />
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-secondary-500 mb-[18px]">Mentors</h2>
          <div className="flex flex-wrap gap-8">
            {[1,2,3,4,5,6,7,8].map(() => (
              <CardMentor 
                name="Cika Febriana Putri"
                role="UI UX Design"
                task={40}
                rating={4.7}
                review={750}
                avatar="https://bit.ly/3QEIVsR"
                isFollowed={false}
                description="Hi, I'm Cika Febriana Putri. I'm an Android Developer at Google company . . ."
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Task