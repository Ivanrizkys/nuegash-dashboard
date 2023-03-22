import "swiper/css";
import { useState } from "react";
import Button from "@/src/components/atoms/Button"
import { SwiperSlide, Swiper } from "swiper/react";
import Select from "@/src/components/atoms/Select";
import SwiperClass from 'swiper/types/swiper-class';
import AppBar from "@/src/components/organisms/AppBar";
import Checkbox from "@/src/components/atoms/Checkbox";
import Toogle from "../../atoms/Toogle";

const Settings = () => {
  const [tab, setTab] = useState<number>(0)
  const [timezoneFormat, setTimezoneFormat] = useState<string>("")
  const [swiper, setSwiper] = useState<SwiperClass>()

  const handleTabClick = (tab: number) => {
    if (swiper) {
      swiper.slideTo(tab, 500)
    }
    setTab(tab)
  }

  const handleSlideChange = (e: SwiperClass) => {
    setTab(e.activeIndex)
  }

  return (
    <div className="xl:ml-[252px] bg-[#FAFAFA] min-h-screen">
      <nav className="bg-primary-0 p-8 w-full">
        <AppBar
          title="Settings"
          userImg={"/profile.png"}
          notificationActive={true}
        />
      </nav>
      <div className=" bg-primary-0 rounded-default m-8 p-8">
        <div className="text-sm font-medium text-secondary-500 border-solid border-b-[1px] border-b-[#F5F5F7]">
          <div className="flex gap-x-6">
            <div
              onClick={() => handleTabClick(0)}
              className="px-3 cursor-pointer"
            >
              <p>General</p>
            </div>
            <div
              onClick={() => handleTabClick(1)}
              className="px-3 cursor-pointer"
            >
              <p>Notification</p>
            </div>
          </div>
          <div
            className="mt-3 h-[2px] bg-primary-500 transition-all duration-500 relative"
            style={{
              width: tab === 0 ? "77.3px" : "102.95px",
              left: tab === 1 ? "101.3px" : "0",
            }}
          ></div>
        </div>

        <Swiper
          className="settings-page"
          onSwiper={setSwiper}
          onSlideChange={handleSlideChange}
        >
          <SwiperSlide key="1">
            <div className="text-secondary-500 mt-8">
              <p className="text-sm font-semibold mb-4">Language</p>
              <div className="w-full max-w-[400px]">
                <Select value="English">
                  <option value="english">English</option>
                  <option value="indonesia">Indonesia</option>
                </Select>
              </div>
              <p className="text-sm font-semibold mb-4 mt-8">Timezone</p>
              <div className="w-full max-w-[400px]">
                <Select value="English">
                  <option value="english">English</option>
                  <option value="indonesia">Indonesia</option>
                </Select>
              </div>
              <p className="text-sm font-semibold mb-4 mt-8">Timezone</p>
              <div className="flex items-center gap-x-8">
                <Checkbox name={"24hours"} onChange={setTimezoneFormat} value={timezoneFormat} />
                <Checkbox name={"12hours"} onChange={setTimezoneFormat} value={timezoneFormat} />
              </div>
            </div>
            <div className="mt-16">
              <Button type="submit">Save Changes</Button>
            </div> 
          </SwiperSlide>

          <SwiperSlide key="2">
            <div className="text-secondary-500 mt-8">
              <form>
                <div className="flex flex-col gap-y-6">
                  <Toogle label="Message" />
                  <Toogle label="Task Update" />
                  <Toogle label="Task Deadline" />
                  <Toogle label="Mentor Help" />
                </div>
                <div className="mt-16">
                  <Button type="submit">Save Changes</Button>
                </div>
              </form>
            </div>
          </SwiperSlide>
        </Swiper>
        
      </div>
    </div>
  );
};

export default Settings;
