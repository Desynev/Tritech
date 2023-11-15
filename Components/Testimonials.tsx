import Image from "next/image"
import React from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import BG_PIC from "../public/trypic1.jpg"

function Testimonials() {
  const testimonialsData = [
    {
      clientName: "John Doe",
      clientCompany: "ABC Inc.",
      testimonial:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, alias ex tempore consequuntur delectus mollitia!",
      rating: 4,
      clientimg:
        "https://images.pexels.com/photos/1697912/pexels-photo-1697912.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      clientName: "Jane Smith",
      clientCompany: "XYZ Corporation",
      testimonial:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, alias ex tempore consequuntur delectus mollitia!",
      rating: 4,
      clientimg:
        "https://images.pexels.com/photos/1697912/pexels-photo-1697912.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      clientName: "David Johnson",
      clientCompany: "MYN Industries",
      testimonial:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, alias ex tempore consequuntur delectus mollitia!",
      rating: 2,
      clientimg:
        "https://images.pexels.com/photos/1697912/pexels-photo-1697912.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      clientName: "Alice Johnson",
      clientCompany: "ABC Inc.",
      testimonial:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, alias ex tempore consequuntur delectus mollitia!",
      rating: 5,
      clientimg:
        "https://images.pexels.com/photos/1697912/pexels-photo-1697912.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      clientName: "Eve Johnson",
      clientCompany: "XYZ Corporation",
      testimonial:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, alias ex tempore consequuntur delectus mollitia!",
      rating: 3,
      clientimg:
        "https://images.pexels.com/photos/1697912/pexels-photo-1697912.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      clientName: "Eve fernandz",
      clientCompany: "XYZ Corporation",
      testimonial:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, alias ex tempore consequuntur delectus mollitia!",
      rating: 3,
      clientimg:
        "https://images.pexels.com/photos/1697912/pexels-photo-1697912.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      clientName: "alen hales",
      clientCompany: "XYZ Corporation",
      testimonial:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, alias ex tempore consequuntur delectus mollitia!",
      rating: 3,
      clientimg:
        "https://images.pexels.com/photos/1697912/pexels-photo-1697912.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      clientName: "joseph senpy",
      clientCompany: "XYZ Corporation",
      testimonial:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, alias ex tempore consequuntur delectus mollitia!",
      rating: 3,
      clientimg:
        "https://images.pexels.com/photos/1697912/pexels-photo-1697912.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      clientName: "Will marcos",
      clientCompany: "XYZ Corporation",
      testimonial:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, alias ex tempore consequuntur delectus mollitia!",
      rating: 3,
      clientimg:
        "https://images.pexels.com/photos/1697912/pexels-photo-1697912.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ]

  const groupedTestimonials = []
  for (let i = 0; i < testimonialsData.length; i += 2) {
    groupedTestimonials.push(testimonialsData.slice(i, i + 2))
  }

  return (
    <div className="my-10 bg-blue-950">
      <div className="  relative mx-auto py-8">
        {/* Background Image */}
        <Image
          className="absolute inset-0 h-full w-full object-cover opacity-80"
          src={BG_PIC}
          alt=""
        />

        {/* Overlay Div */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content */}
        <h2 className="relative z-10 mb-8 text-center text-3xl font-semibold text-white">
          Testimonials
        </h2>
        <div className="container relative z-10 flex-row flex-wrap">
          <Carousel
            showArrows={true}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            showThumbs={false}
            interval={1500}
          >
            {groupedTestimonials.map((testimonialsGroup, index) => (
              <div key={index}>
                <div className="flex flex-wrap  justify-center">
                  {testimonialsGroup.map((testimonial, subIndex) => (
                    <div
                      key={subIndex}
                      className="box-border w-full transform cursor-default rounded-3xl p-4 shadow-white transition-transform hover:scale-105 hover:shadow-lg md:w-1/3"
                    >
                      {/* Upper part */}
                      <div className="to bg-gradient-to-r from-blue-950 to-blue-400 p-4">
                        <div>
                          <Image
                            src="/Send.png"
                            className="mx-auto h-11"
                            alt="quote"
                            width={60}
                            height={60}
                          />
                        </div>
                        <div>
                          <p className="line-clamp-4 cursor-default text-center text-yellow-100">
                            {testimonial.testimonial}
                          </p>
                        </div>
                        <div className="flex items-center justify-center">
                          <div className="text-4xl text-yellow-400" id="stars">
                            {Array.from({ length: 5 }, (_, starIndex) => (
                              <span
                                key={starIndex}
                                className={`text-xl ${
                                  starIndex < testimonial.rating
                                    ? "text-yellow-400"
                                    : "text-gray-400"
                                } cursor-default`}
                              >
                                &#9733;
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* lowerpart */}
                      <div className="mb-10 flex bg-blue-950 p-3 md:p-5 lg:p-5">
                        <div className="flex items-center justify-center">
                          <div className="h-20 w-20 overflow-hidden rounded-full">
                            <Image
                              width={20}
                              src={"/Send.png"}
                              alt="Loading img"
                              height={20}
                              className="h-full w-full transform cursor-default transition-transform hover:scale-125"
                            />
                          </div>
                        </div>
                        <div className="ml-4 cursor-default text-center">
                          <h5 className="text-lg font-semibold text-white">
                            {testimonial.clientName}
                          </h5>
                          <p className="cursor-default text-white">
                            {testimonial.clientCompany}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
