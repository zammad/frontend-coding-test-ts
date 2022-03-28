<script lang="ts" setup>
import LaunchCard from '../components/LaunchCard.vue'
import Loader from '../components/Loader.vue'
import { useQuery, useResult } from '@vue/apollo-composable'
import { GET_PAST_LAUNCHES_INFO } from '../graphql'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
// const { loading, error, result } = useQuery(GET_PAST_LAUNCHES_INFO)
// const pastLaunches = useResult(result, [], (result) => result.launchesPast)
const pastLaunches = [ { mission_name: 'Starlink-15 (v1.0)', launch_site: { site_name_long: 'Cape Canaveral Air Force Station Space Launch Complex 40', }, links: { article_link: null, video_link: 'https://youtu.be/J442-ti-Dhg', flickr_images: [], }, launch_date_local: '2020-10-24T11:31:00-04:00', launch_success: true, details: null, id: '109', launch_year: '2020', }, { mission_name: 'Sentinel-6 Michael Freilich', launch_site: { site_name_long: 'Vandenberg Air Force Base Space Launch Complex 4E', }, links: { article_link: 'https://spaceflightnow.com/2020/11/21/international-satellite-launches-to-extend-measurements-of-sea-level-rise/', video_link: 'https://youtu.be/aVFPzTDCihQ', flickr_images: [ 'https://live.staticflickr.com/65535/50630802488_8cc373728e_o.jpg', 'https://live.staticflickr.com/65535/50631642722_3af8131c6f_o.jpg', 'https://live.staticflickr.com/65535/50631544171_66bd43eaa9_o.jpg', 'https://live.staticflickr.com/65535/50631543966_e8035d5cca_o.jpg', 'https://live.staticflickr.com/65535/50631643257_c214ceee7b_o.jpg', 'https://live.staticflickr.com/65535/50631643917_cb7db291d0_o.jpg', ], }, launch_date_local: '2020-11-21T09:17:00-08:00', launch_success: true, details: 'SpaceX will launch Sentinel-6 Michael Freilich into low Earth orbit for NASA, NOAA, ESA, and the European Organization for the Exploitation of Meteorological Satellites aboard a Falcon 9 from SLC-4E, Vandenberg Air Force Station. Sentinel-6(A) is an ocean observation satellite providing radar ocean surface altimetry data and also atmospheric temperature profiles as a secondary mission. The booster for this mission is will land at LZ-4.', id: '108', launch_year: '2020', }, { mission_name: 'Crew-1', launch_site: { site_name_long: 'Kennedy Space Center Historic Launch Complex 39A', }, links: { article_link: 'https://spaceflightnow.com/2020/11/16/astronauts-ride-spacex-crew-capsule-in-landmark-launch-for-commercial-spaceflight/', video_link: 'https://youtu.be/bnChQbxLkkI', flickr_images: [ 'https://live.staticflickr.com/65535/50618376646_8f52c31fc4_o.jpg', 'https://live.staticflickr.com/65535/50618376731_43ddaab1b8_o.jpg', 'https://live.staticflickr.com/65535/50618376671_ba4e60af7c_o.jpg', 'https://live.staticflickr.com/65535/50618376351_ecfdee4ab2_o.jpg', 'https://live.staticflickr.com/65535/50618727917_01e579c4d9_o.jpg', 'https://live.staticflickr.com/65535/50618355216_2872d1fe98_o.jpg', 'https://live.staticflickr.com/65535/50618354801_ff3e722884_o.jpg', 'https://live.staticflickr.com/65535/50618463487_41642939a4_o.jpg', 'https://live.staticflickr.com/65535/50617619613_5630422345_o.jpg', 'https://live.staticflickr.com/65535/50617619668_d680d7319c_o.jpg', 'https://live.staticflickr.com/65535/50617625523_a7484e0abf_o.jpg', 'https://live.staticflickr.com/65535/50618469202_fa86f88ab3_o.jpg', 'https://live.staticflickr.com/65535/50617625183_8554412cee_o.jpg', 'https://live.staticflickr.com/65535/50618470472_fb8e6507d7_o.jpg', 'https://live.staticflickr.com/65535/50617626838_c0c71de1f7_o.jpg', 'https://live.staticflickr.com/65535/50617626738_aa3997aaea_o.jpg', 'https://live.staticflickr.com/65535/50617626408_fb0bba0f89_o.jpg', ], }, launch_date_local: '2020-11-15T19:27:00-05:00', launch_success: true, details: "SpaceX will launch the first operational mission of its Crew Dragon vehicle as part of NASA's Commercial Crew Transportation Capability Program (CCtCap), carrying 3 NASA astronauts and 1 JAXA astronaut to the International Space Station. This mission will be the second crewed flight to launch from the United States since the end of the Space Shuttle program in 2011.", id: '107', launch_year: '2020', }, { mission_name: 'GPS III SV04 (Sacagawea)', launch_site: { site_name_long: 'Cape Canaveral Air Force Station Space Launch Complex 40', }, links: { article_link: 'https://spaceflightnow.com/2020/11/06/spacex-launches-gps-navigation-satellite-from-cape-canaveral/', video_link: 'https://youtu.be/wufXF5YKR1M', flickr_images: [], }, launch_date_local: '2020-11-05T18:24:00-05:00', launch_success: true, details: 'SpaceX will launch GPS Block III Space Vehicle 04 from SLC-40, Cape Canaveral AFS aboard a Falcon 9. GPS III is owned and operated by the US Air Force and produced by Lockheed Martin. This will be the fourth GPS III satellite launched and the third launched by SpaceX. The satellite will be delivered into a MEO transfer orbit. The booster for this mission will land on an ASDS.', id: '106', launch_year: '2020', }, { mission_name: 'Starlink-14 (v1.0)', launch_site: { site_name_long: 'Cape Canaveral Air Force Station Space Launch Complex 40', }, links: { article_link: 'https://spaceflightnow.com/2020/10/24/spacex-adds-another-60-satellites-to-starlink-network/', video_link: 'https://youtu.be/2gbVgTxLgN0', flickr_images: [], }, launch_date_local: '2020-10-24T11:31:00-04:00', launch_success: true, details: 'This mission will launch the fourteenth batch of operational Starlink satellites, which are expected to be version 1.0, from SLC-40, Kennedy Space Center. It is the fifteenth Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude of 550 km. The booster for this mission is expected to land on JRTI.', id: '105', launch_year: '2020', }, { mission_name: 'Starlink-13 (v1.0)', launch_site: { site_name_long: 'Kennedy Space Center Historic Launch Complex 39A', }, links: { article_link: 'https://spaceflightnow.com/2020/10/18/spacex-launches-another-batch-of-starlink-satellites/', video_link: 'https://youtu.be/UM8CDDAmp98', flickr_images: [ 'https://live.staticflickr.com/65535/50500804918_eb1187e1b2_o.jpg', 'https://live.staticflickr.com/65535/50501674637_f16f528728_o.jpg', 'https://live.staticflickr.com/65535/50501515611_2a3753bed1_o.jpg', 'https://live.staticflickr.com/65535/50501674632_0d5276b1b5_o.jpg', ], }, launch_date_local: '2020-10-18T08:25:00-04:00', launch_success: true, details: 'This mission will launch the thirteenth batch of operational Starlink satellites, which are expected to be version 1.0, from LC-39A, Kennedy Space Center. It is the fourteenth Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude of 550 km. The booster for this mission is expected to land on an ASDS.', id: '104', launch_year: '2020', }, { mission_name: 'Starlink-12 (v1.0)', launch_site: { site_name_long: 'Kennedy Space Center Historic Launch Complex 39A', }, links: { article_link: null, video_link: 'https://youtu.be/8O8Z2yPyTnc', flickr_images: [ 'https://live.staticflickr.com/65535/50428228397_6151927733_o.jpg', 'https://live.staticflickr.com/65535/50427359318_67b3397892_o.jpg', 'https://live.staticflickr.com/65535/50428050591_36defbe958_o.jpg', ], }, launch_date_local: '2020-10-06T07:29:00-04:00', launch_success: null, details: 'This mission will launch the twelfth batch of operational Starlink satellites, which are expected to be version 1.0, from SLC-40, Cape Canaveral Air Force Station. It is the thirteenth Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude of 550 km. The booster for this mission is expected to land on an ASDS.', id: '103', launch_year: '2020', }, { mission_name: 'Starlink-11 (v1.0)', launch_site: { site_name_long: 'Kennedy Space Center Historic Launch Complex 39A', }, links: { article_link: null, video_link: 'https://youtu.be/_j4xR7LMCGY', flickr_images: [], }, launch_date_local: '2020-09-03T08:46:00-04:00', launch_success: true, details: "The 11th operational batch of Starlink satellites (12th overall) will lift off from LC-39A at Kennedy Space Center, Florida on a Falcon 9 rocket. In the weeks following deployment the Starlink satellites will use onboard ion thrusters to reach their operational altitude of 550 km. This is the third batch of Starlink satellites which all feature visors intended to reduce their visibility from Earth. Falcon 9's first stage will attempt to land on a drone ship approximately 628 km downrange, its sixth landing overall, and a ships is in place to attempt the recovery of both payload fairing halves.", id: '102', launch_year: '2020', }, { mission_name: 'SAOCOM 1B, GNOMES-1, Tyvak-0172', launch_site: { site_name_long: 'Cape Canaveral Air Force Station Space Launch Complex 40', }, links: { article_link: 'https://spaceflightnow.com/2020/08/31/spacex-launches-first-polar-orbit-mission-from-florida-in-decades/', video_link: 'https://youtu.be/P-gLOsDjE3E', flickr_images: [ 'https://live.staticflickr.com/65535/50291453997_aa715950e7_o.jpg', 'https://live.staticflickr.com/65535/50291306296_85b6ff12a2_o.jpg', 'https://live.staticflickr.com/65535/50291306061_2f9e350a85_o.jpg', 'https://live.staticflickr.com/65535/50291306216_4fd44c261e_o.jpg', 'https://live.staticflickr.com/65535/50291306346_136d3dce7b_o.jpg', ], }, launch_date_local: '2020-08-30T19:18:00-04:00', launch_success: true, details: "SpaceX's Falcon 9 will launch the second of the two satellite SAOCOM 1 satellites into a sun-synchronous polar orbit from SLC-40, Cape Canaveral AFS. SAOCOM 1B is a synthetic aperture radar Earth observation satellite to support disaster management. The SAOCOM spacecraft are operated by CONAE, the Argentinian National Space Activities Commission, and are built by INVAP. This mission is also expected to include rideshare payloads Sequoia, and GNOMES-1. This will be the first polar launch from the Space Coast in 60 years. The launch azimuth will be southward and the booster will land at LZ-1.", id: '101', launch_year: '2020', }, { mission_name: 'Starlink-10 (v1.0) & SkySat 19-21', launch_site: { site_name_long: 'Cape Canaveral Air Force Station Space Launch Complex 40', }, links: { article_link: 'https://spaceflightnow.com/2020/08/18/spacex-adds-more-satellites-to-ever-growing-starlink-network/', video_link: 'https://youtu.be/jTMJK7wb0rM', flickr_images: [ 'https://live.staticflickr.com/65535/50241845831_9a7412e81d_o.jpg', 'https://live.staticflickr.com/65535/50242057637_ea4f98d517_o.jpg', 'https://live.staticflickr.com/65535/50242057682_6084977bf7_o.jpg', 'https://live.staticflickr.com/65535/50242057677_e96fbd46e6_o.jpg', ], }, launch_date_local: '2020-08-18T10:31:00-04:00', launch_success: true, details: 'This mission will launch the tenth batch of operational Starlink satellites, which are expected to be version 1.0, from LC-39A, Kennedy Space Center. It is the eleventh Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude of 550 km. This mission is includes rideshare payloads, SkySats 19-21, on top of the Starlink stack. The booster for this mission is expected to land on an ASDS.', id: '100', launch_year: '2020', }, ] 
const modules = [Navigation, Pagination]
const swiperOptions = {
  breakpoints: {
    300: {
      slidesPerView: 1
    },
    500: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },
    900: {
      slidesPerView: 4,
    },
  },
}
</script>
<template>
  <div class="body h-screen">
    <header class="h-2/6"></header>
    <!-- <Loader v-if="loading" /> -->
    <main class="mx-auto w-full md:max-w-5xl h-4/6 px-3 sm:px-0">
      <swiper
        class="swiper w-full h-72"
        :modules="modules"
        :slides-per-view="4"
        :centeredSlides="true"
        :spaceBetween="30"
        :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }"
        :loop="true"
        :pagination="{ type: 'fraction' }"
        slide-active-class="active"
        :breakpoints="swiperOptions.breakpoints"
      >
        <div
          class="parallax-slider-navigation absolute top-1/2 z-40 inset-x-1 sm:inset-x-0 m-auto flex justify-between h-0"
        >
          <div
            class="h-10 sm:h-96 w-10 sm:w-20 rounded-full sm:rounded-none nav-indicator prevArrow"
          >
            <span class="active:animate-ping"> &blacktriangleleft; </span>
          </div>
          <div
            class="h-10 sm:h-96 w-10 sm:w-20 rounded-full sm:rounded-none nav-indicator nextArrow"
          >
            <span class="active:animate-ping"> &blacktriangleright; </span>
          </div>
        </div>
        <SwiperSlide
          class="launch-card"
          v-for="(launch, i) in pastLaunches"
          :key="i"
        >
          <LaunchCard :launchDetails="launch" />
        </SwiperSlide>
      </swiper>
    </main>
  </div>
</template>
<style scoped>
.swiper {
  padding-bottom: 30px;
  height: 330px;
}
.swiper-slide {
  height: 300px;
}
.swiper-pagination-fraction {
  bottom: 0;
}
.nav-indicator {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  color: #ffffff;
  cursor: pointer;
  position: relative;
  transform: translateY(-50%);
  background: rgba(2, 44, 71, 0.863);
}
</style>
