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
                avatar="https://s3-alpha-sig.figma.com/img/375b/7a9f/c6fd3f7edcc62885c94d899223b36b74?Expires=1665964800&Signature=MnnXB4ropFHUfqzfdAhNs9Q95rdgamLgBsoi4gn9-9ET5oTP8hwQ94ylrVOO0ILJQe4DfpV5cpJmTgQmnoU4Pxqu8KTVJFgyo5BHkxsLatVN1r2~CxWwtRhC~-~ty8nuqz~QfkkyTrhB~chuuB4HwL-pDPbv-kc~JfqAbQ8zoyZQqYfe~pcem2FPDbHF5iwclbHQzuV~Ulj0E3MWLBJujhN2erlr26JvdWs~C1Hn4C42apIGMEUN~1qD46MmBs0KnK1tspWS6gkwCPODSN-Z6ZUNfvoDuj5lVTBM026KtKXfsfY~B~mtEsFv7Q6pQ80iO1tLcGCELIUKbW34jQ3PDQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
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