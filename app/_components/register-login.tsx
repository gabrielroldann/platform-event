// "use client";

// import { Button } from "./ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
// } from "./ui/dialog";
// import { Input } from "./ui/input";
// import { Label } from "./ui/label";
// import { Separator } from "./ui/separator";
// import Image from "next/image";
// import iconGoogle from "../../public/iconGoogle.svg";
// import iconGoogle2 from "../../public/iconGoogle2.svg";
// import { signIn } from "next-auth/react";
// import { useState } from "react";
// import { Eye, EyeOff } from "lucide-react";
// import { sign } from "crypto";
// import Login from "../login/_components/login";
// import Register from "../login/_components/register";

// interface AuthDialogProps {
//   open: boolean;
//   setOpen: (open: boolean) => void;
// }

// const AuthDialog = ({ open, setOpen }: AuthDialogProps) => {
//   const [dialog, setDialog] = useState<boolean>(true);
//   const [animation, setAnimation] = useState(
//     "animate__animated animate__fadeInLeft"
//   );

//   const handleDialog = () => {
//     setAnimation("animate__animated animate__fadeOutRight");

//     setTimeout(() => {
//       setAnimation("animate__animated animate__fadeInLeft");
//       setDialog(!dialog);
//     }, 500);
//   };

//   return (
//     <Dialog open={open} onOpenChange={setOpen}>
//       <DialogContent className="w-9/12 max-h-[600px] overflow-hidden">
//         {dialog ? (
//           <Login changeDialog={handleDialog} animation={animation} />
//         ) : (
//           <Register
//             setOpen={setOpen}
//             changeDialog={handleDialog}
//             animation={animation}
//           />
//         )}
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default AuthDialog;
