interface PopUpProps {
  isOpen: boolean
  title: string
  content: string
  image?: string
  confirmText?: string
  cancelText?: string
  otherText?: string
  onConfirm?: () => void
  onCancel?: () => void
  onOpen?: () => void
  onOther?: () => void
}

export const PopUpConfirm = (props: PopUpProps) => {
  if (!props.isOpen) return null

  if (props.onOpen) props.onOpen()

  return (
    <div className="flex min-h-screen items-end justify-center text-center sm:block">
      <div className="bg-gray-500 bg-opacity/75 transition-opacity"></div>
      <span className="hidden sm:inline-block sm:h-screen sm:align-middle"></span>
      <div
        className="inline-block overflow-hidden rounded-lg bg-gray-900 text-left align-bottom shadow-2xl transition-all
        sm:my-8 sm:w-full sm:max-w-xl sm:align-middle"
      >
        <div className="relative mx-auto w-full max-w-7xl items-center md:px-12 lg:px-24">
          <div className="grid grid-cols-1">
            <div className="mx-auto my-4 max-w-lg bg-gray-900">
              <div className="flex flex-col items-center p-6">
                {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
                {props.image && (
                  <img
                    alt={""}
                    src={props.image}
                    className="btn- mx-auto -mb-8 flex h-16 w-16 shrink-0 rounded-full object-cover object-center shadow-xl"
                  />
                )}
                {props.title && (
                  <h2 className="text-2xl font-semibold text-white">
                    {props.title}
                  </h2>
                )}
                {props.content && (
                  <p className="mt-3 text-center text-base leading-relaxed text-gray-200">
                    {props.content}
                  </p>
                )}
                <div className="mt-6 w-full">
                  {props.confirmText && (
                    <a
                      onClick={props.onConfirm}
                      className="flex w-full items-center justify-center rounded-xl bg-indigo-600 px-10 py-4 text-center text-base"
                    >
                      {props.confirmText}
                    </a>
                  )}
                  {props.cancelText && (
                    <a
                      onClick={props.onCancel}
                      className="mt-4 flex w-full items-center justify-center rounded-xl bg-gray-800 px-10 py-4 text-center text-base"
                    >
                      {props.cancelText}
                    </a>
                  )}
                  <hr />
                  {props.otherText && (
                    <a
                      onClick={props.onOther}
                      className="mt-4 flex w-full items-center justify-center rounded-xl bg-gray-800 px-10 py-4 text-center text-base"
                    >
                      {props.otherText}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
