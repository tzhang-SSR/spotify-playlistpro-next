const PlaylistTable = ({ playlistItems }: { playlistItems: any }) => {
  console.log({ playlistItems });
  return (
    <div>
      <div className="grid grid-cols-[20px_80px_minmax(500px,_1fr)_minmax(500px,_1fr)_1fr_1fr] px-2 py-3 gap-3 border-b-2">
        <div className="place-self-center">#</div>
        <div>TITLE</div>
        <div></div>
        <div>ALBUM</div>
        <div>DATE ADDED</div>
        <div>DURATION</div>
      </div>
      {playlistItems.map((item: any, index: number) => (
        <div
          className="grid grid-cols-[20px_80px_minmax(500px,_1fr)_minmax(500px,_1fr)_1fr_1fr] px-2 py-3 gap-3"
          key={item.added_at}
        >
          <div className="place-self-center">{index + 1}</div>
          <img
            src={item.track.album.images[2].url}
            alt={`${item.track.name} cover`}
          />
          <div className="pl-2">
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
      ))}
    </div>
  );
};

export default PlaylistTable;
