import React from "react";

export default function Technologies() {
  const Techs = [
    {
      link: "https://developer.android.com/",
      image: "https://io.google/2022/app/images/android-logo.svg",
    },
    {
      link: "https://chromeos.dev/en",
      image: "https://io.google/2022/app/images/chrome-logo.svg",
    },
    {
      link: "https://firebase.google.com/",
      image: "https://io.google/2022/app/images/firebase-logo.svg",
    },
    {
      link: "https://flutter.dev/",
      image: "https://io.google/2022/app/images/flutter-logo.svg",
    },
    {
      link: "https://developers.google.com/assistant",
      image: "https://io.google/2022/app/images/googleassistant-logo.svg",
    },
    {
      link: "https://cloud.google.com/",
      image: "https://io.google/2022/app/images/googlecloud-logo.svg",
    },
    {
      link: "https://developers.google.com/maps",
      image: "https://io.google/2022/app/images/googlemaps-logo.svg",
    },
    {
      link: "https://www.tensorflow.org/",
      image: "https://io.google/2022/app/images/machinelearning-logo.svg",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="mb-12 mt-12">
        <p className="google-font text-3xl lg:text-4xl text-dark">
          Technologies to be focused
        </p>
      </div>
      {Techs.reduce(
        (rows, key, index) =>
          (index % 4 == 0
            ? rows.push([key])
            : rows[rows.length - 1].push(key)) && rows,
        []
      ).map((row, rowIndex) => (
        <div className="flex justify-center mb-10 px-5 lg:px-0" key={rowIndex}>
          {row.map((item, index) => (
            <a
              className="text-inherit hover:text-primary transition-all mx-5"
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
            >
              <img src={item.image} alt="tech logo" />
            </a>
          ))}
        </div>
      ))}
    </div>
  );
}
