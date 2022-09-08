import { ReactNode } from "react"

interface LayoutProps {
    children: ReactNode
}

const Layout = ({children}: LayoutProps) => {
    return (
        <div className="">{children}</div>
    )
}

export default Layout