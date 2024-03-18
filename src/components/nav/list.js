import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SendIcon from "@mui/icons-material/Send";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import InstagramIcon from "@mui/icons-material/Instagram";

export const list = [
  {
    id: "1",
    icon: <HomeIcon></HomeIcon>,
    name: "Home",
    link: '/'
  },
  {
    id: "2",
    icon: <SearchIcon></SearchIcon>,
    key: "2",
    name: "Search",
  },
  {
    id: "3",
    icon: <ExploreIcon></ExploreIcon>,
    name: "Explore",
    link: '/Explore'
  },
  {
    id: "4",
    icon: <SendIcon></SendIcon>,
    name: "Messages",
    link: '/Messages'
  },
  {
    id: "5",
    key: "5",
    icon: <FavoriteBorderIcon></FavoriteBorderIcon>,
    name: "Notifications",
  },
  {
    id: "6",
    icon: <InsertEmoticonIcon></InsertEmoticonIcon>,
    name: "Profile",
    link: '/Profile'

  },
];

export const list__key = [
  {
    id: "0",
    icon: <InstagramIcon></InstagramIcon>,
    link: '/'
  },
  {
    id: "1",
    name: "Home",
    icon: <HomeIcon></HomeIcon>,
    link: '/'
  },
  {
    id: "2",
    name: "Search",
    icon: <SearchIcon></SearchIcon>,
    key: "2",
  },
  {
    id: "3",
    name: "Explore",
    icon: <ExploreIcon></ExploreIcon>,
    link: '/Explore'
  },
  {
    id: "4",
    name: "Messages",
    icon: <SendIcon></SendIcon>,
    link: '/Messages'
  },
  {
    id: "5",
    key: "5",
    name: "Notifications",
    icon: <FavoriteBorderIcon></FavoriteBorderIcon>,
  },
  {
    id: "6",
    name: "Profile",
    icon: <InsertEmoticonIcon></InsertEmoticonIcon>,
    link: '/Profile'
  },
];

export const api = [
  {
    id: '1',
    name: 'Ung Chấn Vinh',
  },
  {
    id: '2',
    name: 'Ung Chấn Vinh2',
  }
]
