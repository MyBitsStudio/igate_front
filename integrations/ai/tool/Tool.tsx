"use client"

import { ReactNode, useState } from "react"
import { HashLoader } from "react-spinners"

import { useUser } from "@/lib/hooks/use-user"
import { Card, CardContent } from "@/components/ui/card"
import {PopUpConfirm} from "@/actions/ai/components/PopUpConfirm";
import {OpenToolStream} from "@/actions/ai/api/ask";

const svg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="100"
    height="100"
    fill="#009688"
    className="h-8 w-8 rounded-full"
  >
    <circle cx="50" cy="50" r="20" fill="#009688" />
    <circle cx="50" cy="40" r="2" fill="#fff" />
    <rect x="47" y="45" width="6" height="10" fill="#fff" />
    <circle cx="50" cy="65" r="3" fill="#009688" />
    <circle cx="45" cy="45" r="3" fill="#fff" />
    <circle cx="55" cy="45" r="3" fill="#fff" />
    <circle cx="45" cy="45" r="1" fill="#000" />
    <circle cx="55" cy="45" r="1" fill="#000" />
    <line x1="50" y1="30" x2="40" y2="20" stroke="#009688" strokeWidth="2" />
    <line x1="50" y1="30" x2="60" y2="20" stroke="#009688" strokeWidth="2" />
  </svg>
)

export function ToolFormIP({ cost = "" }) {
  const [prompt, setPrompt] = useState<string>("")
  const [response, setResponse] = useState<any>(
    "Hello! I am the IP Address Tool. Please enter an IP Address to get started."
  )
  const [loading, setLoading] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    setLoading(true)
    setIsOpen(true)
  }

  const submit = async () => {
    setIsOpen(false)
    const message = {
      params: {
        ipaddress: prompt,
      },
      project: "995a2927d27d-48d4-8e6c-068dff49b033",
    }

    const response = await OpenToolStream(message)

    setResponse(response)

    setLoading(false)
  }

  const close = () => {
    setIsOpen(false)
    setLoading(false)
  }

  return (
    <>
      <Card>
        <CardContent>
          <PopUpConfirm
            isOpen={isOpen}
            title={"Confirm Using Tool"}
            content={`This tool costs : ${cost}. Make sure you have enough in your account to pay for it.`}
            confirmText={"Confirm"}
            cancelText={"Cancel"}
            otherText={"Check Balance"}
            onConfirm={submit}
            onCancel={close}
            onOther={() => setIsOpen(false)}
          />
          <div className="space-y-4">
            <div className="flex items-start">
              {svg}
              <div className="ml-3 rounded-lg bg-gray-100 p-3">
                {loading ? (
                  <HashLoader />
                ) : (
                  <p className="text-sm text-gray-800">{response}</p>
                )}
              </div>
            </div>
          </div>
          <div className="m-6">
            <form className="mb-4">
              <div className="mb-6">
                <label
                  htmlFor="ip"
                  className="mb-2 block text-sm text-gray-100 dark:text-gray-400"
                >
                  IP Address
                </label>
                <input
                  type="text"
                  name="ip"
                  id="ip"
                  placeholder="192.168.0.1"
                  onChange={(e) => {
                    setPrompt(e.target.value)
                  }}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder:text-gray-300' focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-gray-500 dark:focus:ring-gray-900"
                />
              </div>
              <div className="mb-6">
                {loading ? (
                  <button
                    type="button"
                    className="w-full rounded-md bg-teal-500 px-3 py-4 text-white duration-100 ease-in-out hover:bg-teal-600 focus:outline-none"
                  >
                    Loading . . .
                  </button>
                ) : (
                  <button
                    type="button"
                    className="w-full rounded-md bg-teal-500 px-3 py-4 text-white duration-100 ease-in-out hover:bg-teal-600 focus:outline-none"
                    onClick={(event) => {
                      handleSubmit(event)
                    }}
                  >
                    Send Off
                  </button>
                )}
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export function AITool({
  name,
  description,
  cost,
  children,
}: {
  name: string
  description: string
  cost: string
  children: ReactNode
}) {
  const user = useUser()

  if (!user.user) {
    return (
      <Card>
        <CardContent>
          <div className="m-6 text-center">
            <h1 className="text-3xl font-semibold text-gray-100">
              Please Login to use this tool
            </h1>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardContent>
        <div className="m-6 text-center">
          <h1 className="text-3xl font-semibold text-gray-100">{name}</h1>
          <p className="text-gray-200">{description}</p>
        </div>
        <div className="m-6">{children}</div>
        <div className="mb-8 flex flex-row justify-center">
          <span className="absolute bg-gray-800 px-4 text-gray-100">
            Cost : {cost}
          </span>
          <div className="mt-3 h-px w-full bg-gray-200"></div>
        </div>
        <div className="mb-8 flex flex-row justify-center">
          <div className="m-6 text-center">
            <h1 className="text-3xl font-semibold text-gray-100">DISCLAIMER</h1>
            <p className="text-gray-200">
              This tool is for educational purposes only. Do not use this tool
              for malicious purposes.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
