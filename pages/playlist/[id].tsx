import { useRouter } from "next/router";
import useSWR from "swr";
import { getAccessToken } from "../../lib/util";
import PlaylistTable from "../../components/PlaylistTable";

const Playlist = () => {
  const router = useRouter();
  const { id } = router.query;
  const accessToken = getAccessToken();

  const fetcher = (url: string) =>
    fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((r) => r.json());

  const { data, error } = useSWR(
    `https://api.spotify.com/v1/playlists/${id}`,
    fetcher
  );

  console.log({ data }, data?.tracks);
  // console.log({ error });

  if (!data) {
    return <div>loading</div>;
  }

  return (
    <div className="grid grid-cols-[250px_minmax(600px,_1fr)] h-screen">
      <div className="bg-green-500">kkk</div>
      {/* <div>{data.tracks.items}</div> */}
      <div>
        <div className="flex p-5 bg-gradient-to-b from-indigo-500 h-60">
          <img className="border-black w-52 h-52" src={data?.images[0]?.url} />
          <div className="p-3">
            <p className="font-bold mt-6">PUBLIC PLAYLIST</p>
            <h1 className="text-6xl font-bold">{data?.name}</h1>
          </div>
        </div>
        <div className="p-5">
          {data?.tracks?.items.length > 0 && (
            <PlaylistTable playlistItems={data.tracks.items} />
          )}
          {/* {data?.tracks &&
            data.tracks.items.map((item: any) => (
              <div
                className="grid grid-cols-[80px_minmax(500px,_1fr)_minmax(500px,_1fr)_1fr_1fr] py-3 gap-3"
                key={item.added_at}
              >
                <img
                  src={item.track.album.images[2].url}
                  alt={`${item.track.name} cover`}
                />
                <div className="pl-2 ">
                  <p className="truncate">{item.track.name}</p>
                  <p className="truncate">
                    {item.track.artists.map((artist: any, index: number) => (
                      <span className="pr-2" key={artist.id}>
                        {index === item.track.artists.length - 1
                          ? artist.name
                          : artist.name + ","}
                      </span>
                    ))}
                  </p>
                </div>
                <div className="truncate">{item.track.album.name}</div>
                <div>{item.added_at}</div>
                <div>{item.track.duration_ms}</div>
              </div>
            ))} */}
        </div>
      </div>
    </div>
  );
};

export default Playlist;
