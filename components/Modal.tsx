import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { Cross2Icon } from "@radix-ui/react-icons";
import Link from "next/link";
type Props = {
  children: React.ReactNode;
  closeHref:string
};

const Modal = ({ children,closeHref }: Props) => {
  return (
    <AlertDialog defaultOpen>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex justify-end items-center">
            <Link href={closeHref} scroll={false}>
              <Cross2Icon height={30} width={30} />
            </Link>
          </div>
          <AlertDialogDescription>{children}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction>add to cart</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Modal;
