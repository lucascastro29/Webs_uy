import NavBar from "@/app/ui/layout/NavBar"
import Footer from "@/app/ui/layout/Footer"
export default function Page({
    children,
  }: {
    children: React.ReactNode
  }){


    return(<>
   <NavBar/>
   {children}
   <Footer/>
   </>
    )
}