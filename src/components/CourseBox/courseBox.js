import React from "react"

const CourseBox = props => {
  return (
    <article className="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200">
      <div className="relative w-full h-80 md:h-64 lg:h-44">
        <img
          src={props.course.image}
          alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div className="px-3 py-4">
        <div className="flex flex-wrap">
          <h1 className="flex-auto text-xl font-semibold">
            {props.course.title}
          </h1>
          <h3 className="text-sm text-gray-500 pb-2">
            <a
              className="bg-yellow-600 py-1 px-2 text-white rounded-lg"
              href="/course/1"
            >
              <span className="absolute inset-0"></span>
              {props.course.category}
            </a>
          </h3>
        </div>

        <div className="relative pt-1">
          <label className="text-sm ">
            {props.course.completion}% completato
          </label>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
            <div
              style={{ width: `${props.course.completion}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"
            ></div>
          </div>
        </div>
        <p className="text-sm text-gray-900 group-hover:text-indigo-600">
          {props.course.description}
        </p>
      </div>
    </article>
  )
}

export default CourseBox
