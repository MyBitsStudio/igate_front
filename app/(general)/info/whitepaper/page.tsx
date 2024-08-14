"use client"

import { useState } from "react"
import { whiteSections } from "@/data/whitepaper"
import { FiCalendar, FiFileText, FiUser } from "react-icons/fi"

export function WhitePaper() {
  const [activeSection, setActiveSection] = useState("")

  const handleSectionClick = (id: string) => {
    setActiveSection(activeSection === id ? "" : id)
    const sectionElement = document.getElementById(id)
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex flex-col gap-4 p-4 md:flex-row">
      <div className="w-full rounded-lg bg-gray-800 p-4 md:w-1/4 lg:w-1/4">
        {whiteSections.map((section) => (
          <div key={section.id}>
            {section.title.includes("<g>") ? (
              <h3 className="text-green-500">
                <FiFileText className="mr-2 inline" />
                {section.title.replace("<g>", "").replace("</g>", "")}
              </h3>
            ) : section.title.includes("<y>") ? (
              <h3 className="text-yellow-500">
                <FiFileText className="mr-2 inline" />
                {section.title.replace("<y>", "").replace("</y>", "")}
              </h3>
            ) : section.title.includes("<r>") ? (
              <h3 className="text-red-500">
                <FiFileText className="mr-2 inline" />
                {section.title.replace("<r>", "").replace("</r>", "")}
              </h3>
            ) : (
              <h3 className="text-blue-500">
                <FiFileText className="mr-2 inline" />
                {section.title}
              </h3>
            )}
            <ul>
              {section.sections.map((item) => (
                <li
                  key={item.id}
                  className={`cursor-pointer p-2 ${
                    activeSection === item.id ? "bg-blue-200" : ""
                  }`}
                  onClick={() => handleSectionClick(item.id)}
                >
                  <FiFileText className="mr-2 inline" /> {item.title}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="w-full rounded-lg bg-gray-800 p-4 md:w-1/2 lg:w-1/2">
        <div className="mt-4">
          {whiteSections.map((section) =>
            section.sections.map((item) => (
              <div
                key={item.id}
                id={item.id}
                className={`${activeSection === item.id ? "block" : "hidden"}`}
              >
                {item.title.includes("<g>") ? (
                  <h2 className="mb-2 text-2xl font-bold text-green-500">
                    {item.title.replace("<g>", "").replace("</g>", "")}
                  </h2>
                ) : item.title.includes("<y>") ? (
                  <h2 className="mb-2 text-2xl font-bold text-yellow-500">
                    {item.title.replace("<y>", "").replace("</y>", "")}
                  </h2>
                ) : item.title.includes("<r>") ? (
                  <h2 className="mb-2 text-2xl font-bold text-red-500">
                    {item.title.replace("<r>", "").replace("</r>", "")}
                  </h2>
                ) : (
                  <h2 className="mb-2 text-2xl font-bold text-blue-500">
                    {item.title}
                  </h2>
                )}
                <br />
                <hr />
                <br />

                {item.content.map((paragraph, index) => (
                  <div key={index}>
                    {paragraph.includes("<g>") ? (
                      <p key={index} className="text-green-400">
                        {paragraph.includes("<b>") ? (
                          <b>
                            {paragraph
                              .replace("<b>", "")
                              .replace("</b>", "")
                              .replace("<g>", "")
                              .replace("</g>", "")}
                          </b>
                        ) : (
                          <>
                            {paragraph.replace("<g>", "").replace("</g>", "")}
                          </>
                        )}
                        <br />
                        <br />
                      </p>
                    ) : paragraph.includes("<y>") ? (
                      <p key={index} className="text-yellow-400">
                        {paragraph.includes("<b>") ? (
                          <b>
                            {paragraph
                              .replace("<b>", "")
                              .replace("</b>", "")
                              .replace("<y>", "")
                              .replace("</y>", "")}
                          </b>
                        ) : (
                          <>
                            {paragraph.replace("<y>", "").replace("</y>", "")}
                          </>
                        )}
                        <br />
                        <br />
                      </p>
                    ) : paragraph.includes("<r>") ? (
                      <p key={index} className="text-red-400">
                        {paragraph.includes("<b>") ? (
                          <b>
                            {paragraph
                              .replace("<b>", "")
                              .replace("</b>", "")
                              .replace("<r>", "")
                              .replace("</r>", "")}
                          </b>
                        ) : (
                          <>
                            {paragraph.replace("<r>", "").replace("</r>", "")}
                          </>
                        )}
                        <br />
                        <br />
                      </p>
                    ) : (
                      <p key={index} className="text-gray-400">
                        {paragraph.includes("<b>") ? (
                          <b>
                            {paragraph.replace("<b>", "").replace("</b>", "")}
                          </b>
                        ) : (
                          <>{paragraph}</>
                        )}
                        <br />
                        <br />
                      </p>
                    )}
                  </div>
                ))}
              </div>
            ))
          )}
        </div>
      </div>
      <div className="w-full rounded-lg bg-gray-800 p-4 md:w-1/4 lg:w-1/4">
        <h2 className="text-lg font-semibold">WhitePaper Info</h2>
        <br />
        <hr />
        <p>
          <FiUser className="mr-2 inline" />
          Author: Quantum (Founder)
        </p>
        <br />
        <hr />
        <p>
          <FiCalendar className="mr-2 inline" />
          Last Updated: 14th July 2024
        </p>
      </div>
    </div>
  )
}

export default WhitePaper
