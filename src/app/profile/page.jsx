"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Card, Chip } from "@heroui/react";
import React from "react";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  if (isPending) return <div className="flex justify-center p-10 font-bold">Loading...</div>;

  return (
    <div className="flex justify-center items-center py-12 px-4 bg-gradient-to-br from-gray-50 to-gray-100 min-h-[80vh]">
      <Card className="w-full max-w-md border-none shadow-2xl bg-white/80 backdrop-blur-lg rounded-3xl">
        
        {/* Use standard Tailwind for spacing if Card.Header still complains */}
        <div className="relative flex flex-col gap-3 items-center pb-0 pt-10 px-6">
          <div className="relative">
            <Avatar
              src={user?.image}
              className="w-24 h-24 text-large"
              // REMOVED isBordered to stop the console error
              // Used ring classes instead for the same visual effect
              classNames={{
                base: "ring-4 ring-offset-2 ring-blue-500",
              }}
              showFallback
              name={user?.name?.[0]}
            />
            <span className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-4 border-white rounded-full z-10"></span>
          </div>
          
          <div className="text-center mt-2">
            <h2 className="text-2xl font-extrabold text-gray-800 tracking-tight">
              {user?.name}
            </h2>
            <p className="text-blue-600 font-medium text-sm">
              @{user?.name?.toLowerCase().replace(/\s/g, '_')}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center p-8">
          <Chip color="success" variant="flat" size="sm" className="mb-4">
            Active Member
          </Chip>
          
          <div className="flex flex-col gap-1 mb-6 text-center">
            <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest">Email Address</p>
            <p className="text-gray-700 font-semibold">{user?.email}</p>
          </div>

          <div className="h-[1px] w-full bg-gray-200/60 my-4" />

          <div className="flex justify-around w-full py-2">
            <div className="text-center">
              <p className="font-bold text-lg text-gray-800">12</p>
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Creations</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-lg text-gray-800">450</p>
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Followers</p>
            </div>
          </div>

          <Button 
            className="w-full mt-8 bg-black text-white shadow-xl font-bold py-6" 
            radius="full"
          >
            Edit Profile
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ProfilePage;