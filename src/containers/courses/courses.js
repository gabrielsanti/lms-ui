import React from "react"
import Logo from "../../images/headerlogo.png"
import Slider from "../../components/slider/slider"
import CourseBox from "../../components/CourseBox/courseBox"

const Courses = () => {
  // Images
  const sliderImages = [
    "https://i.imgur.com/Gu5Cznz.jpg",
    "https://i.imgur.com/idjXzVQ.jpg",
    "https://i.imgur.com/8DYumaY.jpg",
    "https://i.imgur.com/8IuucQZ.jpg",
  ]

  const courses = [
    {
      title: "Course Title",
      category: "Categoria 4",
      completion: 30,
      description:
        "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
      image:
        "https://cdn.pixabay.com/photo/2021/07/24/01/42/zebra-dove-6488440_960_720.jpg",
    },
    {
      title: "Course 2",
      category: "Categoria 1",
      completion: 90,
      description:
        "Lorem Ipsum is simply dummy text of the printing and<br>typesetting industry.",
      image:
        "https://cdn.pixabay.com/photo/2021/09/08/20/45/bird-6607863_960_720.jpg.jpg",
    },
    {
      title: "Course 3",
      category: "Categoria 1",
      completion: 90,
      description:
        "Lorem Ipsum is simply dummy text of the printing and<br>typesetting industry.",
      image:
        "https://cdn.pixabay.com/photo/2021/08/03/11/01/stairs-6519085_960_720.jpg",
    },
    {
      title: "Course 3",
      category: "Categoria 2",
      completion: 75,
      description:
        "Lorem Ipsum is simply dummy text of the printing and<br>typesetting industry.",
      image:
        "https://cdn.pixabay.com/photo/2021/09/12/17/43/parrot-feathers-6619082_960_720.jpg",
    },
    {
      title: "Course 3",
      category: "Categoria 1",
      completion: 0,
      description:
        "Lorem Ipsum is simply dummy text of the printing and<br>typesetting industry.",
      image:
        "https://cdn.pixabay.com/photo/2021/10/27/03/37/road-6745746_960_720.jpg",
    },
  ]

  const courseBoxes = courses.map(course => <CourseBox course={course} />)
  return (
    <div>
      <header className=" bg-white w-full flex justify-between items-center mx-auto px-8 h-20 shadow-xl sticky top-0 z-50">
        <div className="inline-flex">
          <a className="_o6689fn" href="/">
            <img src={Logo} alt="SkillaHub" style={{ maxWidth: "10rem" }} />
          </a>
        </div>
        {/* end logo */}

        {/* search bar */}
        <div className="hidden sm:block flex-shrink flex-grow-0 justify-start px-2">
          <div className="inline-block">
            <div className="inline-flex items-center max-w-full">
              <button
                className="flex items-center flex-grow-0 flex-shrink pl-2 relative w-60 border rounded-full px-1  py-1"
                type="button"
              >
                <div className="block flex-grow flex-shrink overflow-hidden">
                  Start your search
                </div>
                <div className="flex items-center justify-center relative  h-8 w-8 rounded-full">
                  <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    style={{
                      display: "block",
                      fill: "none",
                      height: "12px",
                      width: "12px",
                      stroke: "currentcolor",
                      strokeWidth: "5.33333",
                      overflow: "visible",
                    }}
                  >
                    <g fill="none">
                      <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
                    </g>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
        {/* end search bar */}

        {/* login */}
        <div className="flex-initial">
          <div className="flex justify-end items-center relative">
            <div className="flex mr-4 items-center">
              <div className="block relative">
                <button
                  type="button"
                  className="inline-block py-2 px-3 hover:bg-gray-200 rounded-full relative "
                >
                  <div className="flex items-center h-5">
                    <div className="_xpkakx">
                      <svg
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                        style={{
                          display: "block",
                          height: "16px",
                          width: "16px",
                          fill: "currentcolor",
                        }}
                      >
                        <path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z"></path>
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            <div className="block">
              <div className="inline relative">
                <button
                  type="button"
                  className="inline-flex items-center relative px-2 border rounded-full hover:shadow-lg"
                >
                  <div className="pl-1">
                    <svg
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      style={{
                        display: "block",
                        fill: "none",
                        height: "16px",
                        width: "16px",
                        stroke: "currentcolor",
                        strokeWidth: 3,
                        overflow: "visible",
                      }}
                    >
                      <g fill="none" fill-rule="nonzero">
                        <path d="m2 16h28"></path>
                        <path d="m2 24h28"></path>
                        <path d="m2 8h28"></path>
                      </g>
                    </svg>
                  </div>

                  <div className="block flex-grow-0 flex-shrink-0 h-10 w-12 pl-5">
                    <svg
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      style={{
                        display: "block",
                        height: "100%",
                        width: "100%",
                        fill: "currentcolor",
                      }}
                    >
                      <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* end login */}
      </header>
      <section>
        <Slider images={sliderImages} />
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mt-12 mb-12">
        <article>
          <h2 className="text-2xl font-extrabold text-gray-900">OUR COURSES</h2>
          <section className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
            {courseBoxes}
          </section>
        </article>
      </section>
      <footer className="w-full justify-center align-items-center flex bg-gray-500  h-16 align-middle justify-items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="58"
          height="15"
          viewBox="0 0 96 30"
          id="logo"
          className="flex h-auto"
          fill="white"
        >
          <g transform="translate(0 -28.335)">
            <g transform="translate(0 28.335)">
              <path
                d="M511.543,118.24v19.5H505v-19.5Z"
                transform="translate(-461.37 -108.442)"
              ></path>
              <path
                d="M625.74,0h6.541V29.3H625.74Z"
                transform="translate(-571.678)"
              ></path>
              <path
                d="M746.44,40h6.541V65.925H746.44Z"
                transform="translate(-681.95 -36.626)"
              ></path>
              <path
                d="M864.362,112.21a7.756,7.756,0,0,1,5.895,2.261v-1.737h6.5v19.5h-6.5v-1.817a7.91,7.91,0,0,1-5.895,2.3c-5.57,0-9.365-4.562-9.365-10.3S858.8,112.21,864.362,112.21Zm1.615,5.651a4.23,4.23,0,0,0-4.36,4.562c0,2.706,1.655,4.6,4.36,4.6s4.36-1.9,4.36-4.6a4.227,4.227,0,0,0-4.359-4.56Z"
                transform="translate(-780.76 -102.921)"
              ></path>
              <path
                d="M11.122,117.713a2.285,2.285,0,0,0-2.566-1.883c-1.625,0-1.868.751-1.868,1.2,0,.994,1.6,1.378,3.445,1.824a15.5,15.5,0,0,1,4.753,1.715,5.291,5.291,0,0,1,2.539,4.694,5.645,5.645,0,0,1-2.251,4.526,9.7,9.7,0,0,1-6.019,1.778c-4.658,0-8.227-2.31-9.149-5.755L0,125.792l6.347-1.506.021.209A2.452,2.452,0,0,0,9.083,126.5c1.242,0,2.044-.5,2.044-1.27,0-.964-1.33-1.323-3.5-1.829a15.416,15.416,0,0,1-4.733-1.663,5.068,5.068,0,0,1-2.468-4.6,5.775,5.775,0,0,1,2.184-4.543,9.57,9.57,0,0,1,6.121-1.861,9.212,9.212,0,0,1,6.1,1.968,7.117,7.117,0,0,1,2.229,3.584.089.089,0,0,1,.005.02Z"
                transform="translate(0 -101.565)"
              ></path>
              <path
                d="M239.828,57.694v8.378H233.29V40.16h6.538V56.9l6.263-10.191h7.578l-5.529,8.461,6.336,10.9H246.97l-4.68-8.381Z"
                transform="translate(-213.038 -36.773)"
              ></path>
            </g>
          </g>
        </svg>
      </footer>
    </div>
  )
}

export default Courses
