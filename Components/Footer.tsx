import React from "react"

const footer = () => {
  return (
    <>
      <footer className="fixed bottom-0 w-full">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="110%"
          height="100%"
          viewBox="0 0 1600 900"
        >
          <defs>
            <linearGradient id="bg" x2="0%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: "rgba(53, 127, 242, 0.6)" }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "rgba(38, 89, 190, 0.06)" }}
              />
            </linearGradient>
          </defs>
          <path
            fill="url(#bg)"
            d="M-363.852,502.589c0,0,236.988-41.997,505.475,0 s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              dur="8s"
              calcMode="spline"
              values="270 230; -334 180; 270 230"
              keyTimes="0; .5; 1"
              keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
              repeatCount="indefinite"
            />
          </path>

          <text
            x="20%"
            y="85%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="black"
            style={{ fontSize: "24px", fontWeight: "bold" }}
          >
            Contact Us
          </text>
          <text
            x="20%"
            y="89%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="black"
          >
            Email: info@example.com
          </text>
          <text
            x="20%"
            y="92%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="black"
          >
            Phone: (123) 456-7890
          </text>
          <text
            x="20%"
            y="95%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="black"
          >
            123 Main St, City, Country
          </text>

          <text
            x="40%"
            y="90%"
            dominantBaseline="middle"
            textAnchor="start"
            fill="black"
            style={{ fontSize: "20px", fontWeight: "500" }}
          >
            About Us
          </text>
          <text
            x="50%"
            y="90%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="black"
            style={{ fontSize: "20px", fontWeight: "500" }}
          >
            Services
          </text>
          <text
            x="60%"
            y="90%"
            dominantBaseline="middle"
            textAnchor="end"
            fill="black"
            style={{ fontSize: "20px", fontWeight: "500" }}
          >
            <a href="/blog">Blog</a>
          </text>
        </svg>
      </footer>
    </>
  )
}
export default footer
