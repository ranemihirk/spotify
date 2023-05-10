import { useOutletContext } from 'react-router';
import Playlist from "./Playlist";
import TopNav from "./Core/TopNav";

type HomeProps = {
	isLargeScreen: boolean;
};

export default function Home(): JSX.Element {
    const { isLargeScreen } = useOutletContext<HomeProps>();
  return (
    <div>
        {/* Top Nav */}
      <TopNav isSearch={false} />
      {/* Playlist */}
      <Playlist
        title={"Focus"}
        number={isLargeScreen ? 6 : 2}
        isLargeScreen={isLargeScreen}
      />
      <Playlist
        title={"Spotify Playlists"}
        number={isLargeScreen ? 6 : 2}
        isLargeScreen={isLargeScreen}
      />
      <Playlist
        title={"Sleep"}
        number={isLargeScreen ? 2 : 1}
        isLargeScreen={isLargeScreen}
      />
      <Playlist
        title={"Sound of India"}
        number={isLargeScreen ? 6 : 2}
        isLargeScreen={isLargeScreen}
      />
    </div>
  );
}
