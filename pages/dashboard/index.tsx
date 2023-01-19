import * as React from "react";
import { getProfileData, getAccessToken } from "../../lib/util";
import useSWR from "swr";
// import { accessToken } from "../../lib/util";
import Link from "next/link";

const Dashboard = () => {
  const accessToken = getAccessToken();
  const fetcher = (url: string) =>
    fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((r) => r.json());

  const { data: profileData, error } = useSWR(
    "https://api.spotify.com/v1/me",
    fetcher
  );
  const { data: playlistData, error: playlistError } = useSWR(
    "https://api.spotify.com/v1/me/playlists",
    fetcher
  );
  console.log({ playlistData });
  if (error || profileData?.error) return <div>failed to load</div>;

  return !profileData ? (
    <div>loading</div>
  ) : (
    <div className="grid grid-cols-[250px_minmax(600px,_1fr)] h-screen">
      <div className="bg-green-500">kkk</div>
      <div>
        <div className="flex p-5 bg-gradient-to-b from-indigo-500 h-60">
          <img
            className="border-solid border-2 rounded-full border-black w-52 h-52"
            src={profileData?.images[0]?.url}
          />
          <div className="p-3 flex flex-col items-stretch justify-between">
            <p className="font-bold mt-6">PROFILE</p>
            <h1 className="text-6xl font-bold">{profileData.display_name}</h1>
            <p className="font-semibold">
              {playlistData?.items.length} Public Playlists
            </p>
          </div>
        </div>
        <div className="flex flex-wrap p-5 gap-4">
          {playlistData?.items.map((item: any) => {
            return (
              <Link href={`/playlist/${item.id}`}>
                <div
                  className="bg-gray-400 hover:bg-gray-300 pt-3 pb-20 px-4 rounded-md"
                  key={item.id}
                >
                  {item?.images.length && (
                    <div className="w-48 h-48">
                      <img
                        src={item.images[0].url}
                        alt={`${item.name} cover`}
                        className="w-48 h-48"
                      />
                    </div>
                  )}
                  <div className="mt-3 text-lg font-bold">{item.name}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
