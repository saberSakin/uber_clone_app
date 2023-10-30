import { Profiler, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import mapboxgl from "mapbox-gl";
import Link from "next/Link";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2FiZXJ0b290aDkxNTMiLCJhIjoiY2xvZDlqYncyMDVhdDJxcDl1MjExZ2xiZCJ9.UcJ5o-jece5CN3ud748fJg";

export default function Home() {
  return (
    <Wrapper>
      <Map id="map">Map</Map>
      <ActionItems>
        {}
        <Header>
          <UberLogo src="https://logos-download.com/wp-content/uploads/2017/11/Uber_Logo_2018.png" />
          <Profile>
            <Name>Saber Sakin</Name>
            <UserImage src="https://avatars.githubusercontent.com/u/88105549?v=4" />
          </Profile>
        </Header>
        <ActionButtons>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_896,h_504/f_auto,q_auto/products/carousel/UberX.png" />
              Ride
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImage src="/logos/w.png" />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="/logos/r.png" />
            Reserve
          </ActionButton>
        </ActionButtons>
        <InputButton>Where to?</InputButton>
        {}
        {}
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
flex flex-col h-screen
`;

const ActionItems = tw.div`
flex-1 p-4
`;

const Header = tw.div`
flex justify-between items-center
`;
const UberLogo = tw.img`
h-28 px-8 py-8
`;
const Profile = tw.div`
flex items-center
`;
const Name = tw.div`
mr-4 w-20 text-sm
`;
const UserImage = tw.img`
h-12 w-12 rounded-full border-gray-200 p-px
`;
const ActionButtons = tw.div`
flex
`;
const ActionButton = tw.div`
flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg hover:scale-105 transition text-xl
`;
const ActionButtonImage = tw.img`
h-3/5`;
const InputButton = tw.div`
h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8 rounded-lg hover:scale-105 transition 
`;
