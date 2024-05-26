// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
  return (
    <>
    <div id="slider">
      <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
      <SwiperSlide>
        <p>Stelr is a cross-border lending and payments platform that enables seamless connections and transactions for international funding, borrowing, and payments.
          Securing funding, processing payments or sending/receiving money in developing countries and emerging markets can be challenging due to various reasons such as limited access to capital, regulatory constraints, economic instability, and a lack of established financial infrastructure. SMBs/SMEs and Startups are less likely to be able to obtain bank loans than large firms; instead, they rely on internal/personal funds, or cash from friends and family, to launch and initially run their ventures. </p>
      </SwiperSlide>
      <SwiperSlide>
        <b>Access to Viable Funding/Payment Solutions </b>
        <p> We bring you the best solutions to secure funding and make cross-country/international payments with the utilization of our innovative software and platform.</p>
      </SwiperSlide>
      <SwiperSlide>
        <b>Low Transactional Fees and Interest Rates </b>
        <p>Our competitive fees and rate structures allow us to offer our clients the best deals on the services they are looking to fulfill.</p>
      </SwiperSlide>
      <SwiperSlide><b>Fast and Seamless Processing From Start to Finish</b>
        <p>Our platform allows users to decrease the overall start-to-finish time it takes to complete these traditionally long and grueling processes when completed through other service providers.</p>
      </SwiperSlide>
      <SwiperSlide><b>Transparency and Fairness</b>
        <p>Here at Stelr, transparency and fairness are some of our core beliefs. We believe in providing the most competitive offerings to our clients all while providing transparency and fairness throughout the process.</p>
      </SwiperSlide>
      <SwiperSlide><b>Financial Empowerment</b>
        <p>Whether you’re looking to invest in the next big opportunity, send/receive payments, or build and grow your organization, Stelr allows you to make those big financial decisions with ease through the use of our innovative financial software. Our platform allows you to have confidence knowing you chose the right platform to execute these services through.</p>
      </SwiperSlide>
      <SwiperSlide><b>Community Engagement</b>
        <p>We provide an actively engaged community of clients with like minded goals they are looking to accomplish and provide an environment that fosters growth, inclusion, and empowerment to our users.</p>
      </SwiperSlide>
      <SwiperSlide><b>Risk Mitigation</b>
        <p>We work diligently to bring you the most viable options that are best suited for you as an investor or company, based off of metrics that allow us to curate a bespoke selection for you, all while mitigating the risk that is associated with the lending/borrowing and payment processes.</p>
      </SwiperSlide>
      <SwiperSlide><b>Exceptional End-to-End User Experience</b>
        <p>Clients can make investments, send and receive payments, and seek to expand into new international territories with Stelr’s easy to use all-in-one platform. Engaging in these services has never been made this easy until Stelr.</p>
      </SwiperSlide>
      </Swiper>
    </div>
    </>
  );
}