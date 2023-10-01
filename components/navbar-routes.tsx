"use client";

import { UserButton } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";

const NavbarRoutes = () => {
  const pathname = usePathname();
  const router = useRouter();

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isplayerPage = pathname?.includes("/player");

  return (
    <div className="flex gap-x-2 ml-auto">
      {isTeacherPage || isplayerPage ? (
        <Link href="/">
          <Button size="sm" variant={"ghost"}>
            <LogOut className="h-4 w-4 mr-2" />
            Quitter
          </Button>
        </Link>
      ) : (
        <Link href={"teacher/courses"}>
          <Button size="sm" variant={"ghost"}>
            Mode formateur
          </Button>
        </Link>
      )}
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default NavbarRoutes;
