import { Box, Container } from "@mui/material";
import Logo from "../../../public/img/logo.png"
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
    const navdetails=[
        {
            id:1,
            name:"Features",
            link:"/features",
            
        },
        {
            id:2,
            name:"Resources",
            link:"/resources",  
        },
        {
            id:3,
            name:"Company",
            link:"/companey",  
        },
        {
            id:4,
            name:"Contact us",
            link:"/contact",  
        },
        
    ]
    
    return(
        <Box>
            <Container>
            <Box display={"flex"} justifyContent={"center"} mt={5}>
            <Box  bgcolor={"#0F0F0F"} height={"46px"} borderRadius={"16px"} padding={"5px"} width={"576px"}>
                <Box display={"flex"}  alignItems={"center"} gap={3}>

                <Box>
                    <Image src={Logo} width={61} height={34} alt="logo"/>
                </Box>
                <Box display={"flex"} gap={3} color={"white"} fontSize={"14px"} fontWeight={"400"} lineHeight={"18.2px"}>
                {
                    navdetails.map((item)=>(
                        <Link key={item.id} href={item.link}>
                            {item.name}
                        </Link>
                    ))
                }
</Box>
<button
style={{
    backgroundColor:"white",
    width:"118px",
    height:"32px",
    borderRadius:"12px",
    color:"#0F0F0F",
    fontWeight:"500",
    fontSize:"14px",
    display:"flex",
    justifyContent:"Center",
    alignItems:"center"

}}
>
Download App
</button>
            </Box>
            </Box>
            </Box>
            </Container>
        </Box>
        
    )
}