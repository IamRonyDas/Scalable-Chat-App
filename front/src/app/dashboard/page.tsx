import CreateChat from "@/components/chatGroup/CreateChat";
import DashNav from "@/components/dashboard/DashNav";
import React from "react";
import { authOptions, CustomSession } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import GroupChatCard from "@/components/chatGroup/GroupChatCard";
import { fetchChatGroups } from "@/fetch/groupFetch";

export default async function Dashboard() {
  const session: CustomSession | null = await getServerSession(authOptions);
  const groups: Array<GroupChatType> | [] = await fetchChatGroups(
    session?.user?.token!
  );

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Navbar */}
      <DashNav
        name={session?.user?.name!}
        image={session?.user?.image ?? undefined}
      />

      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex justify-end mt-10 mb-6">
          <CreateChat user={session?.user!} />
        </div>

        {/* Group cards */}
        {groups.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
            {groups.map((item, index) => (
              <GroupChatCard
                group={item}
                key={index}
                user={session?.user!}
              />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center py-20 text-muted-foreground">
            No chat groups yet. Create one to get started!
          </div>
        )}
      </div>
    </div>
  );
}
