import Check from "@/src/assets/icons/Check"
import Clock from "@/src/assets/icons/Clock"
import People from "@/src/assets/icons/People"
import Button from "@/src/components/atoms/Button"
import {useDropzone} from 'react-dropzone'
import { useCallback } from "react"
import FileSubmission from "@/src/assets/icons/FileSubmission"
import { DropzoneContainer } from "./custom"
import VideoPlayer from "../../molecules/VideoPlayer"

const TaskDetail = () => {
  const onDrop = useCallback((aceptedFiles: File[]) => {
    console.log("ini halan mas")
    console.log(aceptedFiles)
  }, [])
  
  const { getRootProps, getInputProps, fileRejections, isDragAccept, isDragReject, isFocused, acceptedFiles } = useDropzone({
    maxSize: 5000000,
    onDrop,
  })
  
  return (
      <div className="flex flex-col min-[850px]:flex-row gap-x-6 gap-y-6 min-[900px]:gap-x-8 p-6 min-[900px]:p-8">
        <div className="w-full min-[850px]:w-8/12 bg-primary-0 rounded-default">
          <VideoPlayer src="https://www.youtube.com/watch?v=f3nfVH1QiRA" />
          <div className="p-6 text-secondary-500">
            <h2 className="font-semibold text-[32px]">Creating Awesome Mobile Apps</h2>
            <div className="flex items-center my-4 text-sm font-medium">
              <p className="text-secondary-400">UI UX Design .Apps Design</p>
              <div className="h-[28px] w-[1px] bg-[#DFDFDF] mx-[10px] rounded-[20px]"></div>
              <p className="text-[#04A4F4] cursor-pointer">+Get Mentors</p>
            </div>
            <div className="flex items-center gap-x-5 font-medium text-sm">
              <div className="flex items-center gap-x-[5px]">
                <People />
                <p>200 Students Involved</p>
              </div>
              <div className="flex items-center gap-x-[5px]">
                <Clock variant="small" />
                <p>1 Hour</p>
              </div>
            </div>
            <h3 className="text-2xl font-semibold mt-[31px] mb-4">Description</h3>
            <p className="text-sm">Follow the video tutorial above. Understand how to use each tool in the Figma application. Also learn how to make a good and correct design. Starting from spacing, typography, content, and many other design hierarchies. Then try to make it yourself with your imagination and inspiration.</p>
            <h3 className="text-2xl font-semibold mt-6 mb-4">Essence of Assessment</h3>
            <div className="flex flex-col gap-y-5">
              <div className="flex items-center gap-x-[10px]">
                <Check />
                <p className="text-secondary-500 text-sm">Understanding the tools in Figma</p>
              </div>
              <div className="flex items-center gap-x-[10px]">
                <Check />
                <p className="text-secondary-500 text-sm">Understand the basics of making designs</p>
              </div>
              <div className="flex items-center gap-x-[10px]">
                <Check />
                <p className="text-secondary-500 text-sm">Designing a mobile application using figma</p>
              </div>
              <div className="flex items-center gap-x-[10px]">
                <Check />
                <p className="text-secondary-500 text-sm">Presenting the design flow</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full min-[850px]:w-4/12 bg-primary-0 rounded-default p-6 text-secondary-500">
          <h4 className="text-sm font-semibold mb-6">Assigned Assignments</h4>
          <h2 className="text-2xl font-semibold mb-3">Creating Awesome Mobile Apps</h2>
          <p className="text-sm font-medium text-secondary-400">UIUX Design .Apps Design</p>
          <h4 className="font-semibold text-xl mt-6 mb-5">Detail Student</h4>
          <div className="flex flex-col gap-y-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-secondary-400">Student's name</p>
              <p className="text-sm font-semibold">Skylar Dias</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-secondary-400">Student's class</p>
              <p className="text-sm font-semibold">MIPA 2</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-secondary-400">Student's number</p>
              <p className="text-sm font-semibold">10</p>
            </div>
          </div>
          <h4 className="font-semibold text-xl mt-6 mb-5">File Task</h4>
          <div className="flex flex-col gap-y-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-secondary-400">Last modified</p>
              <p className="text-sm font-semibold">1 July 2022</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-secondary-400">File Submission</p>
              <p className="text-sm font-semibold"></p>
            </div>
          </div>
          <div className="mt-4">
            <DropzoneContainer 
              {...getRootProps({isFocused, isDragAccept, isDragReject, isError: fileRejections.length > 0})}
            >
              <input {...getInputProps()} />
              <FileSubmission variant={fileRejections.length > 0 ? "error" : "success"} />
            </DropzoneContainer>
            {fileRejections.length > 0 && fileRejections.map(({file, errors}) => (
                errors.map(err => (
                  <p key={err.code} className="text-error-500 text-xs mt-[12px]">{err.message}</p>
                ))
            ))}
            {acceptedFiles.length > 0 &&
              <ul className="">
                {acceptedFiles.map((file) => (
                  <li className="text-primary-500 text-xs mt-[5px] flex items-center gap-x-2">
                    <div className="w-[4px] h-[4px] rounded-full bg-primary-500"></div>
                    <p>{file.name}</p>
                  </li>
                ))}
              </ul>
            }
            <p className="text-secondary-400 text-xs mt-[12px]">*drag or browser from device</p>
          </div>
          <div className="mt-[60px]">
            <Button type="submit" buttonFull>Submit</Button>
          </div>
        </div>
      </div>
  )
}

export default TaskDetail