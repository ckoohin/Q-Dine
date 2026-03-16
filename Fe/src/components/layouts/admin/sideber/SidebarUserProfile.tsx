"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  profile?: {
    fullName?: string;
    avatar?: string;
    role?: string;
  };
  isLoading?: boolean;
};

export default function UserProfile({ profile, isLoading }: Props) {
  if (isLoading) {
    return (
      <div className="flex items-center gap-3 pr-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[150px]" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <Avatar className="size-12">
        <AvatarImage
          src={`${process.env.NEXT_PUBLIC_API_URL}${profile?.avatar}`}
          alt={profile?.fullName}
        />
        <AvatarFallback>
          {profile?.fullName?.charAt(0).toUpperCase()}
        </AvatarFallback>
      </Avatar>

      <div>
        <p className="text-sm font-bold text-slate-800">
          {profile?.fullName}
        </p>

        <p className="text-[10px] text-savory-green font-bold uppercase tracking-wider">
          {profile?.role}
        </p>
      </div>
    </div>
  );
}