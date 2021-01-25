//Import Images
import deadEnd from "./img/neons/pexels-aleksandar-pasaric-1820770.jpg";
import love from "./img/neons/pexels-joshua-teichroew-1476635.jpg";
import veltex from "./img/neons/pexels-brett-sayles-1264939.jpg";
import orient from "./img/neons/pexels-ba-phi-1710995.jpg";
import neonGirl from "./img/neons/pexels-alex-powell-1769340.jpg";

export const MovieState = () => {
  return [
    {
      title: "Orient express",
      mainImg: orient,
      secondaryImg: orient,
      url: "/work/orient",
      awards: [
        {
          title: "Location",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "How we made it",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Photographer",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "The neon Girl",
      mainImg: neonGirl,
      secondaryImg: neonGirl,
      url: "/work/neongirl",
      awards: [
        {
          title: "Location",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "How we made it",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Photographer",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "The Veltex",
      mainImg: veltex,
      secondaryImg: veltex,
      url: "/work/the-veltex",
      awards: [
        {
          title: "Location",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "How we made it",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Photographer",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "Dead End",
      mainImg: deadEnd,
      url: "/work/deadend",
      secondaryImg: deadEnd,
      awards: [
        {
          title: "Location",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "How we made it",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Photographer",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "Love Taste",
      mainImg: love,
      url: "/work/love",
      secondaryImg: love,
      awards: [
        {
          title: "Location",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "How we made it",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Photographer",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
  ];
};
