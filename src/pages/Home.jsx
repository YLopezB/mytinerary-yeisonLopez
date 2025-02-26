import React from "react";
import Welcome from "../components/Welcome";
import Carousel from "../components/Carousel";

const places = [
  {
    url: "https://cheznonoborabora.com/en/static.cheznonoborabora.com/images/chez-nono-bora-bora-lodge-accommodations/villa/north-villa/gallery/north-villa-gazebo-bora-bora-matira-beach.jpg",
    name: "Bora Bora Island",
    likes: 33
  },
  {
    url: "https://www.southluangwasafaris.com/wp-content/uploads/2018/04/livadv_2013-03-207.x89638.jpg",
    name: "Zambia",
    likes: 28
  },
  {
    url: "https://i.im.ge/2022/09/06/OZ78aa.veligandu-island-beach-of-the-maldives-795x360.jpg",
    name: "Maldives Islands",
    likes: 28
  },
  {
    url: "https://i.im.ge/2022/08/31/OERMl1.salahCitadelCairoCity.png",
    name: "Cairo Citadel",
    likes: 26
  },
  {
    url: "https://d18sx48tl6nre5.cloudfront.net/webp_md_28ddbaa5efa991d343efc7c1d602432d.webp",
    name: "Bali",
    likes: 25
  },
  {
    url: "https://www.meteorologiaenred.com/wp-content/uploads/2020/04/Vistas-del-monte.jpg",
    name: "Honshu Island",
    likes: 11
  },
  {
    url: "https://tipsparatuviaje.com/wp-content/uploads/2019/08/torre-de-pisa-italia.jpg",
    name: "Italy",
    likes: 33
  },
  {
    url: "https://www.lavanguardia.com/files/og_thumbnail/uploads/2016/05/20/5fa2cb6b6c307.jpeg",
    name: "India",
    likes: 15
  },
  {
    url: "https://th.bing.com/th/id/R.3fe09316ac458b47d59e9ef42ffc2585?rik=VIAxSlAJE41IQw&riu=http%3a%2f%2fi.imgur.com%2fmoJvKIQ.jpg&ehk=M8JFaXo40MFs1KsIddMq9Pr%2bxzlzv%2f%2bG7WvJF9c2bso%3d&risl=&pid=ImgRaw&r=0",
    name: "France",
    likes: 33
  },
  {
    url: "https://images.memphistours.com/large/30b8e4334ce5733c4357d030cc2effae.jpg",
    name: "Greece",
    likes: 23
  },
  {
    url: "https://cdn.inteligenciaviajera.com/wp-content/uploads/2020/04/lugares-tur%C3%ADsticos-que-visitar.jpg",
    name: "Mexico",
    likes: 37
  },
  {
    url: "https://s3-us-west-2.amazonaws.com/denomades/blog/wp-content/uploads/2018/03/05170947/can%CC%83oOKOK-1024x809.jpg",
    name: "Colombia",
    likes: 43
  }
];

export default function Home() {

  return (
    <div>
      <Welcome />
      <Carousel places={places} />
    </div>
  );
}

